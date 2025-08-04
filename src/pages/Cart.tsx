import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrashIcon, MinusIcon, PlusIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { useCart } from '@/contexts/CartContext';

export default function Cart() {
  const { items, total, itemCount, removeItem, updateQuantity, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <>
        <SEO
          title="Shopping Cart"
          description="Review your selected items and proceed to checkout."
        />
        
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <ShoppingBagIcon className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
            <h1 className="text-3xl font-bold text-brand-primary mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/products">Start Shopping</Link>
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Shopping Cart"
        description="Review your selected items and proceed to checkout."
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-brand-primary">
                Shopping Cart ({itemCount} items)
              </h1>
              <Button
                variant="outline"
                onClick={clearCart}
                className="text-destructive hover:text-destructive"
              >
                Clear Cart
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-soft"
                  >
                    <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                    </Link>

                    <div className="flex-1 min-w-0">
                      <Link 
                        to={`/product/${item.product.id}`}
                        className="text-lg font-medium text-brand-primary hover:text-brand-accent transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.product.category}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>Size: {item.size}</span>
                        <span>Color: {item.color}</span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <MinusIcon className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <PlusIcon className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-brand-primary">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            ${item.product.price} each
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </Button>
                  </motion.div>
                ))}
              </div>

              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-1"
              >
                <div className="bg-card p-6 rounded-lg shadow-soft sticky top-24">
                  <h2 className="text-xl font-bold text-brand-primary mb-6">
                    Order Summary
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${(total * 0.08).toFixed(2)}</span>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>${(total * 1.08).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <Button asChild variant="hero" size="lg" className="w-full mt-6">
                    <Link to="/checkout">Proceed to Checkout</Link>
                  </Button>

                  <Button asChild variant="outline" size="lg" className="w-full mt-3">
                    <Link to="/products">Continue Shopping</Link>
                  </Button>

                  <div className="mt-6 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <span>🔒</span>
                      Secure checkout guaranteed
                    </p>
                    <p className="mt-2">
                      Free shipping on orders over $150
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}