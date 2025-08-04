import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import teamPhoto from '@/assets/team-photo.jpg';
import collectionBanner from '@/assets/collection-banner.jpg';

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about FPattern's mission to create timeless, sustainable fashion for the modern woman. Discover our story, values, and commitment to quality."
        keywords="about FPattern, fashion brand story, sustainable fashion, ethical clothing"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-brand-primary mb-6">
                Crafting Timeless
                <span className="block text-brand-accent">Elegance</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At FPattern, we believe that true style transcends trends. Our mission is to create 
                beautiful, sustainable fashion that empowers women to express their authentic selves 
                with confidence and grace.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-brand-primary mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2010, FPattern began as a small atelier with a big dream: 
                    to revolutionize the fashion industry by creating clothes that are both 
                    beautiful and responsible.
                  </p>
                  <p>
                    Our founder, inspired by the intricate patterns found in nature, 
                    set out to design pieces that would stand the test of time—both in 
                    style and construction. Every garment tells a story of meticulous 
                    craftsmanship and sustainable practices.
                  </p>
                  <p>
                    Today, we continue to honor that vision, working with skilled artisans 
                    and using only the finest sustainable materials to create fashion that 
                    makes you look good and feel even better.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src={collectionBanner}
                  alt="FPattern Design Process"
                  className="w-full rounded-lg shadow-elegant"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-brand-primary mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Everything we do is guided by our core values and commitment to excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Sustainability',
                  description: 'We source eco-friendly materials and work with suppliers who share our commitment to environmental responsibility.',
                  icon: '🌱'
                },
                {
                  title: 'Quality',
                  description: 'Every piece is meticulously crafted using traditional techniques and modern innovation to ensure lasting beauty.',
                  icon: '✨'
                },
                {
                  title: 'Empowerment',
                  description: 'We believe fashion should empower women to feel confident, comfortable, and authentically themselves.',
                  icon: '💪'
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center p-6"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-brand-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={teamPhoto}
                  alt="FPattern Team"
                  className="w-full rounded-lg shadow-elegant"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold text-brand-primary mb-6">
                  Meet Our Team
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Behind every FPattern piece is a team of passionate designers, 
                  artisans, and visionaries who share a common goal: creating fashion 
                  that makes a positive impact on both people and the planet.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  From our creative directors to our sustainability experts, 
                  every team member brings unique skills and perspectives that 
                  contribute to our brand's success and values.
                </p>
                <Button asChild variant="hero">
                  <Link to="/team">
                    Meet the Team
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Discover Your Style?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Explore our latest collection and find pieces that speak to your unique style and values.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg">
                  <Link to="/products">Shop Collection</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-primary">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}