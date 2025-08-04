import { SEO } from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const sustainabilityMetrics = [
  { label: 'Organic Materials Used', value: 85, target: 100 },
  { label: 'Carbon Footprint Reduction', value: 60, target: 75 },
  { label: 'Waste Reduction', value: 70, target: 90 },
  { label: 'Ethical Suppliers', value: 95, target: 100 }
];

const initiatives = [
  {
    title: 'Zero Waste Production',
    description: 'We\'ve implemented a closed-loop production system that eliminates textile waste by repurposing all material scraps.',
    impact: '90% reduction in production waste'
  },
  {
    title: 'Organic Material Sourcing',
    description: 'Our commitment to using only certified organic and sustainably-sourced materials ensures minimal environmental impact.',
    impact: '85% of materials are organic'
  },
  {
    title: 'Ethical Labor Practices',
    description: 'We work exclusively with suppliers who meet our strict standards for fair wages, safe working conditions, and worker rights.',
    impact: '100% ethical supplier certification'
  },
  {
    title: 'Carbon Neutral Shipping',
    description: 'All shipments are carbon neutral through our partnership with verified carbon offset programs.',
    impact: 'Net zero shipping emissions'
  }
];

export default function Sustainability() {
  return (
    <>
      <SEO
        title="Sustainability - Our Environmental Commitment"
        description="Learn about FPattern's comprehensive sustainability initiatives, environmental goals, and commitment to ethical fashion production."
        keywords="sustainable fashion, ethical clothing, environmental responsibility, organic materials, zero waste"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sustainability
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              Our commitment to creating beautiful fashion that doesn't compromise the planet's future
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Environmental Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At FPattern, we believe that fashion should enhance lives without harming the planet. 
                Our sustainability journey encompasses every aspect of our business, from the materials 
                we choose to the way we package and ship our products. We're committed to continuous 
                improvement and transparency in our environmental impact.
              </p>
            </div>
          </div>
        </section>

        {/* Progress Metrics */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sustainabilityMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{metric.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-2xl font-bold">{metric.value}%</span>
                      <span className="text-sm text-muted-foreground">Target: {metric.target}%</span>
                    </div>
                    <Progress value={metric.value} className="h-3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Initiatives */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Key Initiatives</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {initiatives.map((initiative, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{initiative.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{initiative.description}</p>
                    <div className="bg-brand-primary/10 text-brand-primary px-3 py-2 rounded-lg text-sm font-semibold">
                      Impact: {initiative.impact}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Materials & Certifications */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Materials & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Organic Cotton</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    GOTS certified organic cotton that uses 91% less water and no harmful pesticides.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recycled Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Post-consumer recycled polyester and other materials that give new life to waste.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Natural Dyes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Plant-based dyes and low-impact coloring processes that minimize water pollution.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Future Goals */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">2025 Goals</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-primary mb-2">100%</div>
                  <p className="text-muted-foreground">Organic and recycled materials</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-primary mb-2">Zero</div>
                  <p className="text-muted-foreground">Waste to landfill</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-primary mb-2">50%</div>
                  <p className="text-muted-foreground">Reduction in carbon footprint</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-primary mb-2">B-Corp</div>
                  <p className="text-muted-foreground">Certification achievement</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}