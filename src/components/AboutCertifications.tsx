import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Shield, Leaf, Building2, Star } from 'lucide-react';

const certifications = [
  {
    icon: Award,
    title: 'HIA Member',
    description: 'Proud member of Housing Industry Association Australia',
  },
  {
    icon: Building2,
    title: 'Master Builders',
    description: 'Accredited by Master Builders Association',
  },
  {
    icon: Leaf,
    title: 'Green Building Council',
    description: 'Committed to sustainable building practices',
  },
  {
    icon: Shield,
    title: 'Licensed Builder',
    description: 'NSW & VIC licensed residential builder',
  },
  {
    icon: Star,
    title: 'ISO 9001 Certified',
    description: 'Quality management systems certification',
  },
];

export default function AboutCertifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Certifications
          </h2>
          <p className="text-muted-foreground text-lg">
            We maintain the highest industry standards with accreditations from leading Australian building organisations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="bg-card rounded-2xl p-6 text-center shadow-custom-md hover:shadow-custom-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <cert.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">
                {cert.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
