import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy } from 'lucide-react';

const awards = [
  {
    year: '2024',
    title: 'Best Residential Renovation',
    organization: 'HIA NSW Housing Awards',
  },
  {
    year: '2024',
    title: 'Excellence in Kitchen Design',
    organization: 'Master Builders Association',
  },
  {
    year: '2023',
    title: 'Custom Home Builder of the Year',
    organization: 'Building Designers Association',
  },
  {
    year: '2023',
    title: 'Sustainable Building Award',
    organization: 'Green Building Council Australia',
  },
  {
    year: '2022',
    title: 'Best Outdoor Living Space',
    organization: 'HIA Victorian Awards',
  },
  {
    year: '2022',
    title: 'Customer Service Excellence',
    organization: 'Australian Business Awards',
  },
];

export default function AboutAwards() {
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
            Recognition
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Awards
          </h2>
          <p className="text-muted-foreground text-lg">
            Our commitment to excellence has been recognised by leading industry organisations across Australia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={`${award.year}-${award.title}`}
              className="bg-card rounded-2xl p-6 shadow-custom-md hover:shadow-custom-lg transition-all group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                  <Trophy className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div>
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full mb-2">
                    {award.year}
                  </span>
                  <h3 className="font-heading font-bold text-foreground mb-1">
                    {award.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {award.organization}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
