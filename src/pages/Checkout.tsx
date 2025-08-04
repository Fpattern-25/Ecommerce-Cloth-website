import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SEO } from '@/components/SEO';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Order Successful!",
        description: "Thank you for your purchase. You'll receive a confirmation email shortly."
      });
      clearCart();
      setIsProcessing(false);
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
                  
                  <h3 className="text-lg font-semibold mt-8 mb-4">Payment Information</h3>
                  <Input placeholder="Card Number" required />
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="MM/YY" required />
                    <Input placeholder="CVV" required />
                  </div>
                  
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