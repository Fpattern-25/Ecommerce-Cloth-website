import { SEO } from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Clock, MapPin, Shield } from 'lucide-react';

export default function Shipping() {
  return (
    <>
      <SEO
        title="Shipping Information"
        description="Learn about FPattern's shipping options, delivery times, and policies. Fast, secure delivery to your door."
        keywords="shipping, delivery, shipping policy, international shipping, express delivery"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Shipping Information
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              Fast, reliable delivery to bring FPattern to your doorstep
            </p>
          </div>
        </section>

        {/* Shipping Options */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Shipping Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <Truck className="h-8 w-8 text-brand-primary mb-4" />
                  <CardTitle>Standard Shipping</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">5-7 business days</p>
                  <p className="font-semibold">$8.99</p>
                  <p className="text-sm text-muted-foreground mt-2">Free on orders over $150</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 text-brand-primary mb-4" />
                  <CardTitle>Express Shipping</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">2-3 business days</p>
                  <p className="font-semibold">$15.99</p>
                  <p className="text-sm text-muted-foreground mt-2">Available nationwide</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <MapPin className="h-8 w-8 text-brand-primary mb-4" />
                  <CardTitle>Next Day</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">1 business day</p>
                  <p className="font-semibold">$25.99</p>
                  <p className="text-sm text-muted-foreground mt-2">Major cities only</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-brand-primary mb-4" />
                  <CardTitle>International</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">7-14 business days</p>
                  <p className="font-semibold">$24.99+</p>
                  <p className="text-sm text-muted-foreground mt-2">Varies by location</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Shipping Details */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Shipping Details</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Processing Time</h3>
                    <p className="text-muted-foreground">
                      Orders are typically processed within 1-2 business days. During peak seasons 
                      or promotional periods, processing may take 2-3 business days.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Tracking Information</h3>
                    <p className="text-muted-foreground">
                      You'll receive a tracking number via email once your order ships. 
                      Track your package in real-time through our website or the carrier's website.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Packaging</h3>
                    <p className="text-muted-foreground">
                      All items are carefully packaged in eco-friendly materials to ensure 
                      they arrive in perfect condition while minimizing environmental impact.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-8">Delivery Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Delivery Address</h3>
                    <p className="text-muted-foreground">
                      Please ensure your shipping address is correct and complete. 
                      We cannot be responsible for packages delivered to incorrect addresses.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Signature Required</h3>
                    <p className="text-muted-foreground">
                      Orders over $200 require an adult signature upon delivery for security. 
                      Someone must be available to sign for the package.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Failed Delivery</h3>
                    <p className="text-muted-foreground">
                      If delivery fails, the package will be held at the local facility. 
                      You'll receive instructions on how to arrange redelivery or pickup.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* International Shipping */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">International Shipping</h2>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Countries We Ship To</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    We ship to over 50 countries worldwide. International shipping rates 
                    and delivery times vary by destination.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-3">Customs & Duties</h4>
                      <p className="text-muted-foreground text-sm">
                        International customers are responsible for any customs duties, 
                        taxes, or fees imposed by their country. These are not included 
                        in our shipping costs.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Delivery Times</h4>
                      <p className="text-muted-foreground text-sm">
                        International delivery times vary from 7-21 business days 
                        depending on location and customs processing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Shipping FAQ</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I change my shipping address after placing an order?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Address changes are only possible if your order hasn't been processed yet. 
                    Contact customer service immediately if you need to make changes.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What if my package is lost or damaged?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We'll work with the carrier to locate lost packages. If your item arrives 
                    damaged, contact us within 48 hours with photos for a replacement.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you ship to PO Boxes?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We can ship to PO Boxes using USPS services only. Express and overnight 
                    shipping options are not available for PO Box addresses.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}