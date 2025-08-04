import { SEO } from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Cookies() {
  return (
    <>
      <SEO
        title="Cookie Policy"
        description="Learn about how FPattern uses cookies and similar technologies to enhance your browsing experience and improve our services."
        keywords="cookie policy, cookies, tracking, web technologies, privacy"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              Understanding how we use cookies to improve your experience
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-muted-foreground text-sm mb-8">
                Last updated: January 1, 2024
              </p>

              <div className="prose prose-lg max-w-none mb-12">
                <h2>What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>
              </div>

              {/* Cookie Types */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Essential Cookies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      These cookies are necessary for the website to function properly. They enable basic 
                      functions like page navigation and access to secure areas.
                    </p>
                    <p className="text-sm font-semibold text-brand-primary">Always Active</p>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Shopping cart functionality</li>
                      <li>• User authentication</li>
                      <li>• Security features</li>
                      <li>• Website performance</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Analytics Cookies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      These cookies help us understand how visitors interact with our website by collecting 
                      and reporting information anonymously.
                    </p>
                    <p className="text-sm font-semibold text-green-600 mb-2">Opt-in Required</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Page views and traffic sources</li>
                      <li>• User behavior patterns</li>
                      <li>• Website performance metrics</li>
                      <li>• Error tracking</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Marketing Cookies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      These cookies track your online activity to help advertisers deliver more relevant 
                      advertising or to limit how many times you see an ad.
                    </p>
                    <p className="text-sm font-semibold text-green-600 mb-2">Opt-in Required</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Personalized advertisements</li>
                      <li>• Social media integration</li>
                      <li>• Cross-site tracking</li>
                      <li>• Retargeting campaigns</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Preference Cookies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      These cookies remember your preferences and settings to provide you with a 
                      personalized experience on subsequent visits.
                    </p>
                    <p className="text-sm font-semibold text-green-600 mb-2">Opt-in Required</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Language preferences</li>
                      <li>• Theme settings</li>
                      <li>• Layout preferences</li>
                      <li>• Saved searches</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>Third-Party Cookies</h2>
                <p>
                  We also use third-party services that may set their own cookies. These include:
                </p>

                <h3>Google Analytics</h3>
                <p>
                  We use Google Analytics to understand how visitors use our website. Google Analytics 
                  uses cookies to track user interactions and provide insights about website usage. 
                  The information collected is anonymous and helps us improve our website.
                </p>

                <h3>Social Media Platforms</h3>
                <p>
                  Our website includes social media buttons and widgets from platforms like Facebook, 
                  Instagram, and Twitter. These platforms may set their own cookies when you interact 
                  with their content.
                </p>

                <h3>Payment Processors</h3>
                <p>
                  When you make a purchase, our payment processors may set cookies to facilitate 
                  secure transactions and prevent fraud.
                </p>

                <h3>Customer Support Tools</h3>
                <p>
                  We use third-party customer support tools that may set cookies to provide you with 
                  personalized assistance and remember your support preferences.
                </p>

                <h2>Managing Your Cookie Preferences</h2>
                <p>
                  You have several options for managing cookies:
                </p>

                <h3>Browser Settings</h3>
                <p>
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul>
                  <li>View which cookies are stored on your device</li>
                  <li>Delete existing cookies</li>
                  <li>Block some or all cookies</li>
                  <li>Set preferences for specific websites</li>
                </ul>

                <h3>Cookie Consent Manager</h3>
                <p>
                  When you first visit our website, you'll see a cookie consent banner that allows you to:
                </p>
                <ul>
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your cookie preferences</li>
                  <li>Learn more about each cookie type</li>
                </ul>

                <h3>Opt-Out Tools</h3>
                <p>
                  You can also use these tools to opt out of certain tracking:
                </p>
                <ul>
                  <li>Google Analytics Opt-out Browser Add-on</li>
                  <li>Network Advertising Initiative opt-out page</li>
                  <li>Digital Advertising Alliance opt-out page</li>
                  <li>Your Online Choices (for EU residents)</li>
                </ul>

                <h2>Impact of Disabling Cookies</h2>
                <p>
                  If you choose to disable cookies, some features of our website may not function properly:
                </p>
                <ul>
                  <li>Your shopping cart may not work correctly</li>
                  <li>You may need to log in repeatedly</li>
                  <li>Your preferences won't be saved</li>
                  <li>Some personalization features won't work</li>
                </ul>

                <h2>Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in technology, 
                  law, or our business practices. We will post any updates on this page and update 
                  the "Last updated" date at the top.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have questions about our use of cookies or this policy, please contact us:
                </p>
                <ul>
                  <li>Email: privacy@fpattern.com</li>
                  <li>Phone: 1-800-FPATTERN</li>
                  <li>Mail: FPattern Privacy Team, 123 Fashion Ave, New York, NY 10001</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Settings */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Manage Your Cookie Preferences</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    You can update your cookie preferences at any time by clicking the button below. 
                    This will open our cookie consent manager where you can customize your settings.
                  </p>
                  <Button size="lg">
                    Update Cookie Preferences
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}