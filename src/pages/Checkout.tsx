import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { SEO } from '@/components/SEO';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      // Generate order ID and store order details
      const orderId = 'FP' + Math.random().toString(36).substr(2, 9).toUpperCase();
      const orderData = {
        orderId,
        items,
        total: total * 1.08,
        paymentMethod,
        estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()
      };
      
      // Store order in localStorage for demo
      localStorage.setItem('lastOrder', JSON.stringify(orderData));
      
      // Show success toast
      toast({
        title: "🎉 Your order has been placed successfully!",
        description: `Order ID: ${orderId}. Redirecting to confirmation page...`
      });
      
      clearCart();
      setIsProcessing(false);
      
      // Redirect to order confirmation
      setTimeout(() => {
        navigate('/order-confirmation');
      }, 1500);
    }, 2000);
  };

  return (
    <>
      <SEO
        title="Checkout"
        description="Complete your purchase securely with FPattern's checkout process."
      />

      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-brand-primary mb-8">Checkout</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Checkout Form */}
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" required />
                    <Input placeholder="Last Name" required />
                  </div>
                  <Input placeholder="Email Address" type="email" required />
                  <Input placeholder="Address" required />
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="City" required />
                    <Input placeholder="ZIP Code" required />
                  </div>
                  
                  <h3 className="text-lg font-semibold mt-8 mb-4">Payment Method</h3>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                    {/* Credit/Debit Card */}
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <div className="flex space-x-1">
                            <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                            <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                          </div>
                          <span className="font-medium">Credit/Debit Card</span>
                        </div>
                      </Label>
                    </div>

                    {/* UPI */}
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="upi" id="upi" />
                      <Label htmlFor="upi" className="flex-1 cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-5 bg-orange-600 rounded text-white text-xs flex items-center justify-center font-bold">UPI</div>
                          <span className="font-medium">UPI Payment</span>
                        </div>
                      </Label>
                    </div>

                    {/* PayPal */}
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-5 bg-blue-700 rounded text-white text-xs flex items-center justify-center font-bold">PP</div>
                          <span className="font-medium">PayPal</span>
                        </div>
                      </Label>
                    </div>

                    {/* Cash on Delivery */}
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex-1 cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-5 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">COD</div>
                          <span className="font-medium">Cash on Delivery</span>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {/* Payment Details Section - Show only for card payment */}
                  {paymentMethod === 'card' && (
                    <div className="mt-6 space-y-4">
                      <h4 className="font-semibold">Card Details</h4>
                      <Input placeholder="Card Number" required />
                      <div className="grid grid-cols-2 gap-4">
                        <Input placeholder="MM/YY" required />
                        <Input placeholder="CVV" required />
                      </div>
                    </div>
                  )}

                  {/* UPI Details */}
                  {paymentMethod === 'upi' && (
                    <div className="mt-6 space-y-4">
                      <h4 className="font-semibold">UPI Details</h4>
                      <Input placeholder="UPI ID (e.g., user@paytm)" required />
                    </div>
                  )}

                  {/* PayPal Info */}
                  {paymentMethod === 'paypal' && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-700">You will be redirected to PayPal to complete your payment.</p>
                    </div>
                  )}

                  {/* COD Info */}
                  {paymentMethod === 'cod' && (
                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-700">Pay cash when your order is delivered to your doorstep.</p>
                    </div>
                  )}
                  
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full mt-6"
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : `Complete Order - $${(total * 1.08).toFixed(2)}`}
                  </Button>
                </form>
              </div>

              {/* Order Summary */}
              <div className="bg-card p-6 rounded-lg shadow-soft h-fit">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1">
                        <p className="font-medium">{item.product.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-semibold">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4 mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${(total * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${(total * 1.08).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}