import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, PenTool, FileCheck, Hammer, KeyRound, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const processSteps = [
  {
    icon: MessageSquare,
    step: 1,
    title: 'Consultation',
    description: 'Free initial meeting to discuss your vision and requirements.',
  },
  {
    icon: PenTool,
    step: 2,
    title: 'Design',
    description: 'Detailed designs and 3D visualisations tailored to you.',
  },
  {
    icon: FileCheck,
    step: 3,
    title: 'Approvals',
    description: 'We handle all council permits and documentation.',
  },
  {
    icon: Hammer,
    step: 4,
    title: 'Construction',
    description: 'Quality craftsmanship with regular progress updates.',
  },
  {
    icon: KeyRound,
    step: 5,
    title: 'Handover',
    description: 'Final inspections and keys to your completed project.',
  },
];

export default function HomeProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-muted-foreground text-lg">
            A simple 5-step journey from your initial idea to your dream home.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {processSteps.map((item, index) => (
            <motion.div
              key={item.step}
              className="relative bg-card rounded-2xl p-6 text-center shadow-custom-md hover:shadow-custom-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Step Number */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-sm font-bold px-3 py-1 rounded-full">
                {item.step}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-2">
                <item.icon className="w-8 h-8 text-accent" />
              </div>

              <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 group">
            <Link to="/about">
              Learn More About Us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
