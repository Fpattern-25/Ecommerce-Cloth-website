import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior Fashion Designer',
    department: 'Design',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Lead our design team in creating innovative and sustainable fashion pieces that define the FPattern aesthetic.',
    requirements: [
      '5+ years of fashion design experience',
      'Proficiency in design software',
      'Strong understanding of sustainable fashion',
      'Bachelor\'s degree in Fashion Design or related field'
    ]
  },
  {
    id: 2,
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    description: 'Drive brand awareness and customer engagement through innovative marketing strategies and campaigns.',
    requirements: [
      '3+ years of marketing experience',
      'Experience with digital marketing',
      'Strong analytical skills',
      'Bachelor\'s degree in Marketing or related field'
    ]
  },
  {
    id: 3,
    title: 'Sustainability Coordinator',
    department: 'Operations',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    description: 'Help FPattern achieve its sustainability goals through innovative practices and supplier relationships.',
    requirements: [
      '2+ years of sustainability experience',
      'Knowledge of textile industry',
      'Project management skills',
      'Environmental science background preferred'
    ]
  }
];

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers - Join Our Team"
        description="Join the FPattern team and help us create sustainable, beautiful fashion. Explore career opportunities in design, marketing, and operations."
        keywords="FPattern careers, fashion jobs, sustainable fashion careers, join our team"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              Be part of a mission-driven team creating sustainable fashion for the future
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why FPattern?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Innovation First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Work with cutting-edge sustainable materials and innovative design processes
                    that are shaping the future of fashion.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Growth & Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Continuous learning opportunities, mentorship programs, and career development
                    paths to help you reach your potential.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Impact & Purpose</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Make a real difference in sustainable fashion while working for a brand
                    that values ethics and environmental responsibility.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <Card key={job.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <CardDescription className="text-base mt-2">
                          {job.department} • {job.location} • {job.type}
                        </CardDescription>
                      </div>
                      <Button>Apply Now</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{job.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Don't See the Right Role?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for sustainable fashion.
              Send us your resume and let us know how you'd like to contribute.
            </p>
            <Button size="lg">
              Send General Application
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}