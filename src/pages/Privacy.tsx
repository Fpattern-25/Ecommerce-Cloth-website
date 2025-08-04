import { SEO } from '@/components/SEO';

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn how FPattern collects, uses, and protects your personal information. Our comprehensive privacy policy explains your rights and our commitments."
        keywords="privacy policy, data protection, personal information, GDPR, CCPA"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              Your privacy matters to us. Learn how we protect and use your information.
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

              <h2>1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, 
                make a purchase, subscribe to our newsletter, or contact us for support.
              </p>
              
              <h3>Personal Information</h3>
              <ul>
                <li>Name and contact information (email, phone, address)</li>
                <li>Payment information (processed securely by third-party providers)</li>
                <li>Account credentials (username, password)</li>
                <li>Communication preferences</li>
                <li>Purchase history and preferences</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <ul>
                <li>Device information (browser, operating system)</li>
                <li>Usage data (pages visited, time spent)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>IP address and location information</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Process and fulfill your orders</li>
                <li>Provide customer service and support</li>
                <li>Send you important updates about your orders</li>
                <li>Personalize your shopping experience</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Prevent fraud and ensure security</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>3. Sharing Your Information</h2>
              <p>
                We do not sell or rent your personal information to third parties. We may share 
                your information in the following limited circumstances:
              </p>
              <ul>
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our business</li>
                <li><strong>Payment Processors:</strong> To process your transactions securely</li>
                <li><strong>Shipping Partners:</strong> To deliver your orders</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger or acquisition</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul>
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and employee training</li>
              </ul>

              <h2>5. Your Rights and Choices</h2>
              <p>You have several rights regarding your personal information:</p>
              
              <h3>Access and Updates</h3>
              <ul>
                <li>Access your personal information in your account</li>
                <li>Update or correct your information</li>
                <li>Request a copy of your data</li>
              </ul>

              <h3>Marketing Communications</h3>
              <ul>
                <li>Unsubscribe from marketing emails at any time</li>
                <li>Opt out of SMS notifications</li>
                <li>Manage your communication preferences</li>
              </ul>

              <h3>Data Deletion</h3>
              <ul>
                <li>Request deletion of your account and data</li>
                <li>Note: Some information may be retained for legal or business purposes</li>
              </ul>

              <h2>6. Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to enhance your browsing experience, 
                analyze site usage, and assist in marketing efforts.
              </p>
              
              <h3>Types of Cookies</h3>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how you use our site</li>
                <li><strong>Marketing Cookies:</strong> Enable personalized advertising</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>

              <h2>7. Third-Party Services</h2>
              <p>Our website may contain links to third-party websites or integrate with third-party services:</p>
              <ul>
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms for sharing</li>
                <li>Payment processors for transactions</li>
                <li>Customer service tools for support</li>
              </ul>
              <p>
                These third parties have their own privacy policies, and we are not responsible 
                for their practices.
              </p>

              <h2>8. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your information in accordance 
                with applicable data protection laws.
              </p>

              <h2>9. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13. We do not knowingly collect 
                personal information from children under 13. If we become aware that we have collected 
                such information, we will take steps to delete it.
              </p>

              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any 
                material changes by posting the new policy on this page and updating the "Last updated" 
                date. Your continued use of our services after such changes constitutes acceptance 
                of the new policy.
              </p>

              <h2>11. Contact Us</h2>
              <p>If you have questions about this privacy policy or our data practices, please contact us:</p>
              <ul>
                <li>Email: privacy@fpattern.com</li>
                <li>Phone: 1-800-FPATTERN</li>
                <li>Mail: FPattern Privacy Team, 123 Fashion Ave, New York, NY 10001</li>
              </ul>

              <div className="border-t pt-8 mt-12">
                <h2>Regional Privacy Rights</h2>
                
                <h3>California Residents (CCPA)</h3>
                <p>California residents have additional rights under the California Consumer Privacy Act:</p>
                <ul>
                  <li>Right to know what personal information is collected</li>
                  <li>Right to delete personal information</li>
                  <li>Right to opt-out of the sale of personal information</li>
                  <li>Right to non-discrimination for exercising privacy rights</li>
                </ul>

                <h3>European Residents (GDPR)</h3>
                <p>European residents have additional rights under the General Data Protection Regulation:</p>
                <ul>
                  <li>Right of access to your personal data</li>
                  <li>Right to rectification of inaccurate data</li>
                  <li>Right to erasure ("right to be forgotten")</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}