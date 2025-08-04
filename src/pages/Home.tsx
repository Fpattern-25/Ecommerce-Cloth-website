import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import { ProductGrid } from '@/components/ProductGrid';
import { Newsletter } from '@/components/Newsletter';
import { SEO } from '@/components/SEO';
import { products } from '@/data/products';
import heroImage from '@/assets/hero-main.jpg';
import collectionBanner from '@/assets/collection-banner.jpg';

export default function Home() {
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);

  return (
    <>
      <SEO
        title="Luxury Fashion for the Modern Woman"
        description="Discover FPattern's exclusive collection of elegant and contemporary fashion. Shop premium clothing, accessories, and more."
        keywords="luxury fashion, women's clothing, designer dresses, premium fashion"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="FPattern Fashion Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Elevate Your
              <span className="block text-brand-secondary">Style</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Discover our curated collection of timeless pieces crafted for the modern woman
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="hero">
                <Link to="/products">
                  Shop Collection
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="hero" className="border-white text-white hover:bg-white hover:text-brand-primary">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-brand-primary mb-4">
                Featured Collection
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Handpicked pieces that define contemporary elegance and sophistication
              </p>
            </motion.div>

            <ProductGrid products={featuredProducts} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mt-12"
            >
              <Button asChild variant="outline" size="lg">
                <Link to="/products">
                  View All Products
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-brand-primary mb-6">
                  Crafted with Purpose
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  At FPattern, we believe that fashion should be both beautiful and meaningful. 
                  Every piece in our collection is carefully designed and ethically made, 
                  ensuring that you look good while feeling good about your choices.
                </p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Our commitment to sustainability and quality craftsmanship sets us apart, 
                  creating timeless pieces that transcend seasonal trends.
                </p>
                <Button asChild variant="hero">
                  <Link to="/about">
                    Our Story
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
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

        {/* Stats Section */}
        <section className="py-20 bg-brand-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              {[
                { number: '10K+', label: 'Happy Customers' },
                { number: '500+', label: 'Premium Products' },
                { number: '50+', label: 'Countries Served' },
                { number: '15+', label: 'Years Experience' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-4xl font-bold mb-2 text-brand-secondary">
                      {stat.number}
                    </div>
                    <div className="text-gray-300">{stat.label}</div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter */}
        <Newsletter />
      </div>
    </>
  );
}