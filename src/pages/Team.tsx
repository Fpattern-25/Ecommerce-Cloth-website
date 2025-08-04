import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { teamMembers } from '@/data/team';

export default function Team() {
  return (
    <>
      <SEO
        title="Our Team"
        description="Meet the talented individuals behind FPattern's success. Learn about our designers, creators, and fashion experts."
        keywords="FPattern team, fashion designers, company team, fashion experts"
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
                Meet Our Team
              </h1>
              <p className="text-muted-foreground text-lg">
                The passionate individuals who bring FPattern's vision to life through creativity, dedication, and expertise.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-lg shadow-soft overflow-hidden"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-brand-accent font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="flex gap-3">
                      {member.social.instagram && (
                        <a
                          href={`https://instagram.com/${member.social.instagram.replace('@', '')}`}
                          className="text-muted-foreground hover:text-brand-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Instagram
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={`https://linkedin.com/in/${member.social.linkedin}`}
                          className="text-muted-foreground hover:text-brand-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}