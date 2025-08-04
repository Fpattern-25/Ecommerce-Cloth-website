import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarIcon, UserIcon, ClockIcon } from '@heroicons/react/24/outline';
import { SEO } from '@/components/SEO';
import { blogPosts } from '@/data/blog';

export default function Blog() {
  return (
    <>
      <SEO
        title="Fashion Blog"
        description="Stay updated with the latest fashion trends, styling tips, and insights from FPattern's fashion experts."
        keywords="fashion blog, style tips, fashion trends, clothing advice"
      />

      <div className="min-h-screen bg-background">
        <section className="bg-gradient-card py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">
                Fashion Insights
              </h1>
              <p className="text-muted-foreground text-lg">
                Discover the latest trends, styling tips, and fashion inspiration from our expert team.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-lg shadow-soft overflow-hidden hover:shadow-elegant transition-shadow duration-300"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <ClockIcon className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-brand-primary mb-3 hover:text-brand-accent transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <UserIcon className="h-4 w-4" />
                        {post.author}
                      </span>
                      <span className="text-xs bg-brand-secondary/20 text-brand-primary px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}