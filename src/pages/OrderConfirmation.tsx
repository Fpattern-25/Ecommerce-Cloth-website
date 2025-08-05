import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { CheckCircle, Package, Truck, Clock } from 'lucide-react';

interface OrderData {
  orderId: string;
  items: any[];
  total: number;
  paymentMethod: string;
  estimatedDelivery: string;
}

export default function OrderConfirmation() {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    // Get order data from localStorage
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) {
      setOrderData(JSON.parse(savedOrder));
    } else {
      // Redirect to home if no order data found
      navigate('/');
    }
  }, [navigate]);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading order details...</h2>
        </div>
      </div>
    );
  }

  const getPaymentMethodDisplay = (method: string) => {
    switch (method) {
      case 'card': return 'Credit/Debit Card';
      case 'upi': return 'UPI Payment';
      case 'paypal': return 'PayPal';
      case 'cod': return 'Cash on Delivery';
      default: return method;
    }
  };

  return (
    <>
      <SEO
        title="Order Confirmation"
        description="Your order has been confirmed. Thank you for shopping with FPattern."
      />

      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-brand-primary mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground text-lg">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-6 rounded-lg shadow-soft"
            >
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <Package className="w-5 h-5 mr-2" />
                Order Details
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="font-medium">Order ID:</span>
                  <span className="font-mono text-brand-primary">{orderData.orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Payment Method:</span>
                  <span>{getPaymentMethodDisplay(orderData.paymentMethod)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Total Amount:</span>
                  <span className="font-bold text-lg">${orderData.total.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold mb-3 flex items-center">
                  <Truck className="w-4 h-4 mr-2" />
                  Delivery Information
                </h3>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>Estimated delivery: <strong>{orderData.estimatedDelivery}</strong></span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  You will receive tracking information via email once your order is shipped.
                </p>
              </div>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card p-6 rounded-lg shadow-soft"
            >
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4">
                {orderData.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="w-16 h-16 object-cover rounded" 
                    />
                    <div className="flex-1">
                      <p className="font-medium">{item.product.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 bg-gray-50 p-6 rounded-lg"
          >
            <h3 className="text-lg font-semibold mb-4">What happens next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                <span>Order Processing (1-2 business days)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                <span>Shipping & Tracking Info Sent</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                <span>Delivery to Your Address</span>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-8 space-x-4"
          >
            <Button
              onClick={() => navigate('/products')}
              variant="hero"
              size="lg"
            >
              Continue Shopping
            </Button>
            <Button
              onClick={() => navigate('/profile')}
              variant="outline"
              size="lg"
            >
              View Orders
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
}