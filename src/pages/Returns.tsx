import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RotateCcw, Package, CreditCard, Clock } from 'lucide-react';

export default function Returns() {
  return (
    <>
      <SEO
        title="Returns & Exchanges"
        description="Easy returns and exchanges at FPattern. Learn about our return policy, exchange process, and how to return items hassle-free."
        keywords="returns, exchanges, return policy, refunds, exchange process"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Returns & Exchanges
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              Love it or return it - we make returns and exchanges simple and hassle-free
            </p>
          </div>
        </section>

        {/* Return Process */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">How Returns Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <RotateCcw className="h-8 w-8 text-brand-primary mb-4" />
                  <CardTitle>1. Initiate Return</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Start your return online or contact customer service within 30 days of delivery.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Package className="h-8 w-8 text-brand-primary mb-4" />
                  <CardTitle>2. Pack & Ship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Use our prepaid return label to send items back in original packaging.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 text-brand-primary mb-4" />
                  <CardTitle>3. Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We inspect your return within 3-5 business days of receiving it.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CreditCard className="h-8 w-8 text-brand-primary mb-4" />
                  <CardTitle>4. Refund</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Refunds are processed to your original payment method within 5-7 business days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Return Policy */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Return Policy</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">30-Day Return Window</h3>
                    <p className="text-muted-foreground">
                      You have 30 days from the delivery date to return items for a full refund. 
                      Items must be unworn, unwashed, and in original condition with tags attached.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Free Return Shipping</h3>
                    <p className="text-muted-foreground">
                      We provide prepaid return labels for all domestic returns. Simply print 
                      the label and drop off at any authorized shipping location.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Original Packaging</h3>
                    <p className="text-muted-foreground">
                      Please return items in their original packaging when possible. This helps 
                      us process your return faster and ensure the item can be resold.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-8">Exchange Policy</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Size & Color Exchanges</h3>
                    <p className="text-muted-foreground">
                      Exchange items for a different size or color within 30 days. 
                      If the new item costs more, you'll pay the difference.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Exchange Process</h3>
                    <p className="text-muted-foreground">
                      Select "Exchange" when initiating your return. We'll send your new item 
                      as soon as we receive your return.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Store Credit Option</h3>
                    <p className="text-muted-foreground">
                      Choose store credit for faster processing and a 10% bonus. 
                      Store credit never expires and can be used on any future purchase.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Cases */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Special Return Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Sale & Clearance Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Sale and clearance items can be returned within 14 days for store credit only. 
                    No cash refunds on discounted items.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 14-day return window</li>
                    <li>• Store credit only</li>
                    <li>• Must be in original condition</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Final Sale Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Items marked as "Final Sale" cannot be returned or exchanged. 
                    This includes personalized items and deeply discounted pieces.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• No returns or exchanges</li>
                    <li>• Includes personalized items</li>
                    <li>• Clearly marked at checkout</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Damaged Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If your item arrives damaged or defective, contact us immediately 
                    for a full refund or replacement, even outside the normal return window.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Contact within 48 hours</li>
                    <li>• Include photos of damage</li>
                    <li>• Full refund or replacement</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>International Returns</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    International customers are responsible for return shipping costs. 
                    Contact our customer service for detailed return instructions.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Customer pays return shipping</li>
                    <li>• May be subject to customs fees</li>
                    <li>• Extended processing time</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Return FAQ</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do I track my return?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Use the tracking number from your return shipping label to monitor your 
                    package. We'll also email you when we receive and process your return.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What if I lost my return label?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Contact customer service with your order number and we'll email you 
                    a new return label within 24 hours.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I return items bought with a discount code?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, items purchased with discount codes can be returned for the amount 
                    you actually paid. The discount will not be refunded separately.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Need to Start a Return?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have your order number ready and we'll get your return started in just a few clicks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Start Return Online
              </Button>
              <Button variant="outline" size="lg">
                Contact Customer Service
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}