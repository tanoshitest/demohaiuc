import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Clock, Shield, Users, Wrench, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We commit to realistic timelines and consistently deliver on schedule. Your time matters to us.',
  },
  {
    icon: Shield,
    title: 'Fixed-Price Contracts',
    description: 'No surprises or hidden costs. Our transparent pricing means you know exactly what you\'re paying.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled tradespeople with decades of combined experience in Australian construction.',
  },
  {
    icon: Wrench,
    title: 'Quality Materials',
    description: 'We use only premium materials from trusted Australian suppliers for lasting results.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Focus',
    description: 'Your satisfaction is our priority. We work closely with you at every stage of the project.',
  },
  {
    icon: CheckCircle,
    title: '10+ Year Warranty',
    description: 'We stand behind our work with comprehensive warranties for your peace of mind.',
  },
];

export default function AboutWhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-primary" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Difference
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            We're committed to excellence in every aspect of our work. Here's what sets Triple J Home apart.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-4">
                <reason.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/80">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
