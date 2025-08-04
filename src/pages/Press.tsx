import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const pressReleases = [
  {
    id: 1,
    date: '2024-01-15',
    title: 'FPattern Launches Revolutionary Sustainable Collection',
    excerpt: 'Our latest collection featuring 100% organic materials and zero-waste production methods sets new industry standards.',
    category: 'Product Launch'
  },
  {
    id: 2,
    date: '2023-12-01',
    title: 'FPattern Wins Sustainable Fashion Award 2023',
    excerpt: 'Recognized for outstanding commitment to environmental responsibility and ethical production practices.',
    category: 'Awards'
  },
  {
    id: 3,
    date: '2023-10-20',
    title: 'Partnership with Local Artisans Announced',
    excerpt: 'FPattern expands its ethical supply chain by partnering with skilled artisans from local communities.',
    category: 'Partnership'
  }
];

const mediaKit = [
  {
    title: 'Brand Guidelines',
    description: 'Logo usage, color palettes, and brand standards',
    fileType: 'PDF'
  },
  {
    title: 'High-Resolution Images',
    description: 'Product photos, lifestyle images, and brand assets',
    fileType: 'ZIP'
  },
  {
    title: 'Executive Bios',
    description: 'Leadership team biographies and headshots',
    fileType: 'PDF'
  }
];

export default function Press() {
  return (
    <>
      <SEO
        title="Press & Media"
        description="Access FPattern's latest press releases, media kit, and brand assets. Connect with our media team for interviews and collaborations."
        keywords="FPattern press, media kit, press releases, fashion news, brand assets"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Press & Media
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              Latest news, media resources, and brand information for journalists and media professionals
            </p>
          </div>
        </section>

        {/* Media Contact */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Media Contact</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Press Inquiries</h3>
                    <p className="text-muted-foreground">press@fpattern.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Partnership Opportunities</h3>
                    <p className="text-muted-foreground">partnerships@fpattern.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">General Media</h3>
                    <p className="text-muted-foreground">media@fpattern.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Quick Facts</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Founded</h3>
                    <p className="text-muted-foreground">2010</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Headquarters</h3>
                    <p className="text-muted-foreground">New York, NY</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">CEO</h3>
                    <p className="text-muted-foreground">Sarah Johnson</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Specialty</h3>
                    <p className="text-muted-foreground">Sustainable luxury fashion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Latest Press Releases</h2>
            <div className="space-y-6">
              {pressReleases.map((release) => (
                <Card key={release.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{release.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {new Date(release.date).toLocaleDateString()} • {release.category}
                        </p>
                      </div>
                      <Button variant="outline">Read More</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{release.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Media Kit</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mediaKit.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <Button className="w-full">
                      Download {item.fileType}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}