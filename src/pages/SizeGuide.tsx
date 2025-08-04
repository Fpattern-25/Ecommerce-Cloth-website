import { SEO } from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const sizeCharts = {
  tops: [
    { size: 'XS', bust: '32-34', waist: '24-26', hips: '34-36' },
    { size: 'S', bust: '34-36', waist: '26-28', hips: '36-38' },
    { size: 'M', bust: '36-38', waist: '28-30', hips: '38-40' },
    { size: 'L', bust: '38-40', waist: '30-32', hips: '40-42' },
    { size: 'XL', bust: '40-42', waist: '32-34', hips: '42-44' }
  ],
  bottoms: [
    { size: 'XS', waist: '24-26', hips: '34-36', inseam: '30' },
    { size: 'S', waist: '26-28', hips: '36-38', inseam: '30' },
    { size: 'M', waist: '28-30', hips: '38-40', inseam: '30' },
    { size: 'L', waist: '30-32', hips: '40-42', inseam: '30' },
    { size: 'XL', waist: '32-34', hips: '42-44', inseam: '30' }
  ],
  dresses: [
    { size: 'XS', bust: '32-34', waist: '24-26', hips: '34-36', length: '35' },
    { size: 'S', bust: '34-36', waist: '26-28', hips: '36-38', length: '36' },
    { size: 'M', bust: '36-38', waist: '28-30', hips: '38-40', length: '37' },
    { size: 'L', bust: '38-40', waist: '30-32', hips: '40-42', length: '38' },
    { size: 'XL', bust: '40-42', waist: '32-34', hips: '42-44', length: '39' }
  ]
};

export default function SizeGuide() {
  return (
    <>
      <SEO
        title="Size Guide - Perfect Fit Every Time"
        description="Find your perfect size with FPattern's comprehensive size guide. Detailed measurements and fitting tips for all our clothing categories."
        keywords="size guide, clothing measurements, perfect fit, sizing chart, FPattern sizes"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Size Guide
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              Find your perfect fit with our detailed size charts and measuring tips
            </p>
          </div>
        </section>

        {/* How to Measure */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">How to Measure</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Bust</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Measure around the fullest part of your bust, keeping the tape parallel to the floor.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Waist</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Measure around your natural waistline, which is the narrowest part of your torso.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Hips</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Measure around the fullest part of your hips, about 7-9 inches below your waistline.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Size Charts */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Size Charts</h2>
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="tops" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="tops">Tops</TabsTrigger>
                  <TabsTrigger value="bottoms">Bottoms</TabsTrigger>
                  <TabsTrigger value="dresses">Dresses</TabsTrigger>
                </TabsList>
                
                <TabsContent value="tops">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tops Size Chart (inches)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Size</th>
                              <th className="text-left p-2">Bust</th>
                              <th className="text-left p-2">Waist</th>
                              <th className="text-left p-2">Hips</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sizeCharts.tops.map((row, index) => (
                              <tr key={index} className="border-b">
                                <td className="p-2 font-medium">{row.size}</td>
                                <td className="p-2">{row.bust}</td>
                                <td className="p-2">{row.waist}</td>
                                <td className="p-2">{row.hips}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="bottoms">
                  <Card>
                    <CardHeader>
                      <CardTitle>Bottoms Size Chart (inches)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Size</th>
                              <th className="text-left p-2">Waist</th>
                              <th className="text-left p-2">Hips</th>
                              <th className="text-left p-2">Inseam</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sizeCharts.bottoms.map((row, index) => (
                              <tr key={index} className="border-b">
                                <td className="p-2 font-medium">{row.size}</td>
                                <td className="p-2">{row.waist}</td>
                                <td className="p-2">{row.hips}</td>
                                <td className="p-2">{row.inseam}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="dresses">
                  <Card>
                    <CardHeader>
                      <CardTitle>Dresses Size Chart (inches)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Size</th>
                              <th className="text-left p-2">Bust</th>
                              <th className="text-left p-2">Waist</th>
                              <th className="text-left p-2">Hips</th>
                              <th className="text-left p-2">Length</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sizeCharts.dresses.map((row, index) => (
                              <tr key={index} className="border-b">
                                <td className="p-2 font-medium">{row.size}</td>
                                <td className="p-2">{row.bust}</td>
                                <td className="p-2">{row.waist}</td>
                                <td className="p-2">{row.hips}</td>
                                <td className="p-2">{row.length}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Fit Tips */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Fit Tips</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Between Sizes?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If you're between sizes, we recommend sizing up for a more comfortable fit. 
                    Our pieces are designed with a relaxed, contemporary silhouette.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Still Unsure?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Contact our customer service team for personalized sizing advice. 
                    We're here to help you find the perfect fit!
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