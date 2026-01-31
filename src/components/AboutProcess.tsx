import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, PenTool, FileCheck, Hammer, KeyRound, ChevronRight } from 'lucide-react';

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    description: 'We meet to discuss your vision, requirements, budget, and timeline. This free consultation helps us understand exactly what you want to achieve.',
  },
  {
    icon: PenTool,
    title: 'Design & Planning',
    description: 'Our team creates detailed designs and 3D visualisations. We work with you to refine every detail until it\'s perfect.',
  },
  {
    icon: FileCheck,
    title: 'Approvals & Contracts',
    description: 'We handle all council approvals, permits, and documentation. You\'ll receive a transparent fixed-price contract with no hidden costs.',
  },
  {
    icon: Hammer,
    title: 'Construction',
    description: 'Our skilled tradespeople bring your project to life with regular progress updates. Quality craftsmanship is our priority at every stage.',
  },
  {
    icon: KeyRound,
    title: 'Handover',
    description: 'After final inspections and your approval, we hand over the keys to your completed project with full warranty documentation.',
  },
];

export default function AboutProcess() {
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
            From initial consultation to final handover, we follow a proven 5-step process to deliver exceptional results.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-start gap-4">
          {processSteps.map((item, index) => (
            <div key={item.title} className="flex items-start">
              <motion.div
                className="bg-card rounded-2xl p-6 text-center shadow-custom-md hover:shadow-custom-lg transition-shadow w-[200px] lg:w-[220px]"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>

                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>

              {/* Arrow between steps */}
              {index < processSteps.length - 1 && (
                <motion.div
                  className="hidden lg:flex items-center justify-center mx-2 mt-16"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  <ChevronRight className="w-8 h-8 text-accent" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
