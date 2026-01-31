import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, PenTool, FileCheck, Hammer, KeyRound } from 'lucide-react';

const processSteps = [
  {
    icon: MessageSquare,
    step: 1,
    title: 'Consultation',
    description: 'We meet to discuss your vision, requirements, budget, and timeline. This free consultation helps us understand exactly what you want to achieve.',
  },
  {
    icon: PenTool,
    step: 2,
    title: 'Design & Planning',
    description: 'Our team creates detailed designs and 3D visualisations. We work with you to refine every detail until it\'s perfect.',
  },
  {
    icon: FileCheck,
    step: 3,
    title: 'Approvals & Contracts',
    description: 'We handle all council approvals, permits, and documentation. You\'ll receive a transparent fixed-price contract with no hidden costs.',
  },
  {
    icon: Hammer,
    step: 4,
    title: 'Construction',
    description: 'Our skilled tradespeople bring your project to life with regular progress updates. Quality craftsmanship is our priority at every stage.',
  },
  {
    icon: KeyRound,
    step: 5,
    title: 'Handover',
    description: 'After final inspections and your approval, we hand over the keys to your completed project with full warranty documentation.',
  },
];

export default function AboutProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-background" ref={ref}>
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-muted-foreground text-lg">
            From initial consultation to final handover, we follow a proven 5-step process to deliver exceptional results.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                className="relative text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Step Number Circle */}
                <div className="relative z-10 w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-custom-lg">
                  <item.icon className="w-8 h-8 text-accent-foreground" />
                </div>

                {/* Step Badge */}
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                  Step {item.step}
                </div>

                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
