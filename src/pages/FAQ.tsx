import { SEO } from '@/components/SEO';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const faqData = [
  {
    category: 'Orders & Shipping',
    questions: [
      {
        question: 'How long does shipping take?',
        answer: 'Standard shipping takes 5-7 business days, express shipping takes 2-3 business days, and next-day delivery is available in major cities. International shipping varies by location but typically takes 7-14 business days.'
      },
      {
        question: 'Do you offer free shipping?',
        answer: 'Yes! We offer free standard shipping on all orders over $150. For orders under $150, standard shipping is $8.99.'
      },
      {
        question: 'Can I track my order?',
        answer: 'Absolutely! Once your order ships, you\'ll receive a tracking number via email. You can track your package on our website or directly through the carrier\'s website.'
      },
      {
        question: 'Can I change or cancel my order?',
        answer: 'Orders can be modified or cancelled within 2 hours of placement. After that, our fulfillment process begins and changes may not be possible. Contact customer service immediately if you need to make changes.'
      }
    ]
  },
  {
    category: 'Returns & Exchanges',
    questions: [
      {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day return policy for unworn, unwashed items with original tags. Returns are free for domestic orders, and we provide prepaid return labels.'
      },
      {
        question: 'How do I return an item?',
        answer: 'Start your return online through our returns portal or contact customer service. We\'ll provide a prepaid return label and instructions for packaging your items.'
      },
      {
        question: 'Can I exchange items for a different size?',
        answer: 'Yes! Exchanges for different sizes or colors are accepted within 30 days. If the new item costs more, you\'ll pay the difference. If it costs less, we\'ll refund the difference.'
      },
      {
        question: 'How long do refunds take?',
        answer: 'Refunds are processed within 3-5 business days of receiving your return and typically appear on your original payment method within 5-7 business days.'
      }
    ]
  },
  {
    category: 'Sizing & Fit',
    questions: [
      {
        question: 'How do I find my size?',
        answer: 'Use our detailed size guide with measurement charts for each category. If you\'re between sizes, we generally recommend sizing up for a comfortable fit.'
      },
      {
        question: 'Do your clothes run true to size?',
        answer: 'Our pieces are designed with a contemporary fit. Most customers find our sizing accurate, but we recommend checking the size guide for each item as fit can vary by style.'
      },
      {
        question: 'What if an item doesn\'t fit?',
        answer: 'If an item doesn\'t fit, you can return or exchange it within 30 days. We offer free exchanges for different sizes of the same item.'
      }
    ]
  },
  {
    category: 'Product Information',
    questions: [
      {
        question: 'Are your materials sustainable?',
        answer: 'Yes! We\'re committed to sustainability. 85% of our materials are organic or recycled, and we work only with suppliers who meet our ethical and environmental standards.'
      },
      {
        question: 'How should I care for my FPattern items?',
        answer: 'Care instructions are included with each item and on the product page. Most items can be machine washed in cold water and hung to dry. We recommend following care labels for best results.'
      },
      {
        question: 'Do you restock sold-out items?',
        answer: 'Popular items are often restocked, but availability varies. Sign up for restock notifications on product pages, or contact customer service for specific items.'
      }
    ]
  },
  {
    category: 'Account & Payment',
    questions: [
      {
        question: 'Do I need an account to place an order?',
        answer: 'No, you can checkout as a guest. However, creating an account allows you to track orders, save favorites, and speed up future purchases.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and buy-now-pay-later options like Affirm.'
      },
      {
        question: 'Is my payment information secure?',
        answer: 'Yes, we use industry-standard SSL encryption to protect your payment information. We never store your credit card details on our servers.'
      }
    ]
  }
];

export default function FAQ() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to common questions about FPattern orders, shipping, returns, sizing, and more. Get instant help with our comprehensive FAQ."
        keywords="FAQ, frequently asked questions, help, customer service, support"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              Quick answers to your most common questions
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {faqData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, questionIndex) => (
                      <AccordionItem
                        key={questionIndex}
                        value={`${categoryIndex}-${questionIndex}`}
                        className="border rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Still Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Can't find the answer you're looking for? Our customer service team is here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">
                      Contact Customer Service
                    </Button>
                    <Button variant="outline" size="lg">
                      Live Chat
                    </Button>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Email Support</h4>
                      <p className="text-muted-foreground">support@fpattern.com</p>
                      <p className="text-muted-foreground">Response within 24 hours</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Phone Support</h4>
                      <p className="text-muted-foreground">1-800-FPATTERN</p>
                      <p className="text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Live Chat</h4>
                      <p className="text-muted-foreground">Available on website</p>
                      <p className="text-muted-foreground">Mon-Fri 9AM-9PM EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}