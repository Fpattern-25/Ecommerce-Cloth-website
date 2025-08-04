import { SEO } from '@/components/SEO';

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Read FPattern's terms of service including user responsibilities, account terms, and our policies for using our website and services."
        keywords="terms of service, terms and conditions, user agreement, legal terms"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              The terms and conditions governing your use of FPattern's services
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-muted-foreground text-sm mb-8">
                Last updated: January 1, 2024
              </p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the FPattern website and services, you accept and agree to be 
                bound by the terms and provision of this agreement. If you do not agree to abide by 
                the above, please do not use this service.
              </p>

              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on FPattern's 
                website for personal, non-commercial transitory viewing only. This is the grant of a 
                license, not a transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>

              <h2>3. Account Terms</h2>
              <h3>Account Creation</h3>
              <ul>
                <li>You must be 18 years or older to create an account</li>
                <li>You must provide accurate and complete information</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You are responsible for all activities that occur under your account</li>
              </ul>

              <h3>Account Security</h3>
              <ul>
                <li>Choose a strong, unique password</li>
                <li>Do not share your account credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>We reserve the right to terminate accounts that violate these terms</li>
              </ul>

              <h2>4. Product Information and Availability</h2>
              <h3>Product Descriptions</h3>
              <ul>
                <li>We strive to provide accurate product descriptions and images</li>
                <li>Colors may vary due to monitor settings</li>
                <li>We reserve the right to correct errors in product information</li>
                <li>Product availability is subject to change without notice</li>
              </ul>

              <h3>Pricing</h3>
              <ul>
                <li>All prices are in USD unless otherwise specified</li>
                <li>Prices are subject to change without notice</li>
                <li>We reserve the right to correct pricing errors</li>
                <li>Sales tax will be added where applicable</li>
              </ul>

              <h2>5. Orders and Payment</h2>
              <h3>Order Acceptance</h3>
              <ul>
                <li>All orders are subject to acceptance and availability</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Confirmation emails do not constitute acceptance of an order</li>
                <li>We may require additional verification for certain orders</li>
              </ul>

              <h3>Payment Terms</h3>
              <ul>
                <li>Payment is due in full at the time of purchase</li>
                <li>We accept major credit cards, PayPal, and other specified payment methods</li>
                <li>You authorize us to charge your payment method for all fees and taxes</li>
                <li>Failed payments may result in order cancellation</li>
              </ul>

              <h2>6. Shipping and Delivery</h2>
              <ul>
                <li>Shipping costs and delivery times are estimates</li>
                <li>Risk of loss transfers to you upon delivery to the carrier</li>
                <li>We are not liable for shipping delays beyond our control</li>
                <li>You must provide accurate shipping information</li>
              </ul>

              <h2>7. Returns and Refunds</h2>
              <p>
                Our return policy is detailed on our Returns page. By making a purchase, 
                you agree to our return and refund policies as stated there.
              </p>

              <h2>8. Prohibited Uses</h2>
              <p>You may not use our service:</p>
              <ul>
                <li>For any unlawful purpose or to solicit others to unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations or laws</li>
                <li>To infringe upon or violate our intellectual property rights or the rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
                <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                <li>For any obscene or immoral purpose</li>
              </ul>

              <h2>9. Intellectual Property</h2>
              <h3>Our Content</h3>
              <ul>
                <li>All content on this website is owned by FPattern or our licensors</li>
                <li>Content includes text, graphics, logos, images, and software</li>
                <li>You may not reproduce, distribute, or create derivative works</li>
                <li>Limited use is permitted for personal, non-commercial purposes</li>
              </ul>

              <h3>User Content</h3>
              <ul>
                <li>You retain ownership of content you submit (reviews, comments, etc.)</li>
                <li>You grant us a license to use, display, and distribute your content</li>
                <li>You represent that you have the right to submit such content</li>
                <li>We may remove content that violates these terms</li>
              </ul>

              <h2>10. Disclaimers</h2>
              <p>
                The information on this website is provided on an 'as is' basis. To the fullest 
                extent permitted by law, this Company:
              </p>
              <ul>
                <li>Excludes all representations and warranties relating to this website and its contents</li>
                <li>Does not warrant that the website will be constantly available or available at all</li>
                <li>Makes no representations about the accuracy or completeness of the content</li>
              </ul>

              <h2>11. Limitations of Liability</h2>
              <p>
                In no event shall FPattern nor its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use the materials on this website, even if 
                FPattern or its authorized representative has been notified orally or in writing of 
                the possibility of such damage.
              </p>

              <h2>12. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless FPattern, its officers, directors, 
                employees, agents, and third parties, for any losses, costs, liabilities, and expenses 
                relating to or arising out of your use of or inability to use the website or services, 
                any user postings made by you, your violation of any terms of this Agreement, or your 
                violation of any rights of a third party.
              </p>

              <h2>13. Termination</h2>
              <ul>
                <li>We may terminate your access to our services at any time</li>
                <li>You may terminate your account by contacting customer service</li>
                <li>Upon termination, your right to use the service will cease immediately</li>
                <li>We may retain certain information as required by law or for legitimate business purposes</li>
              </ul>

              <h2>14. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws 
                of New York and you irrevocably submit to the exclusive jurisdiction of the courts 
                in that state or location.
              </p>

              <h2>15. Changes to Terms</h2>
              <p>
                We reserve the right to revise these terms of service at any time without notice. 
                By using this website, you are agreeing to be bound by the then current version 
                of these terms of service.
              </p>

              <h2>16. Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <ul>
                <li>Email: legal@fpattern.com</li>
                <li>Phone: 1-800-FPATTERN</li>
                <li>Mail: FPattern Legal Department, 123 Fashion Ave, New York, NY 10001</li>
              </ul>

              <div className="border-t pt-8 mt-12">
                <h2>Additional Terms for Specific Services</h2>
                
                <h3>Newsletter Subscription</h3>
                <ul>
                  <li>You may unsubscribe at any time by clicking the unsubscribe link</li>
                  <li>We may send occasional important updates even if you've unsubscribed from marketing</li>
                </ul>

                <h3>Product Reviews</h3>
                <ul>
                  <li>Reviews must be honest and based on personal experience</li>
                  <li>We reserve the right to remove inappropriate reviews</li>
                  <li>You may not post reviews for products you haven't purchased</li>
                </ul>

                <h3>Promotional Codes and Discounts</h3>
                <ul>
                  <li>Promotional codes have expiration dates and usage limits</li>
                  <li>Codes cannot be combined unless specifically stated</li>
                  <li>We reserve the right to modify or cancel promotions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}