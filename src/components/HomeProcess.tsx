import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, PenTool, FileCheck, Hammer, KeyRound, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    description: 'Free initial meeting to discuss your vision and requirements.',
  },
  {
    icon: PenTool,
    title: 'Design',
    description: 'Detailed designs and 3D visualisations tailored to you.',
  },
  {
    icon: FileCheck,
    title: 'Approvals',
    description: 'We handle all council permits and documentation.',
  },
  {
    icon: Hammer,
    title: 'Construction',
    description: 'Quality craftsmanship with regular progress updates.',
  },
  {
    icon: KeyRound,
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

        <div className="flex flex-nowrap justify-center items-center gap-2 lg:gap-4 mb-12 overflow-x-auto pb-4">
          {processSteps.map((item, index) => (
            <div key={item.title} className="flex items-stretch flex-shrink-0">
              <motion.div
                className="bg-card rounded-2xl p-4 lg:p-6 text-center shadow-custom-md hover:shadow-custom-lg transition-shadow w-[160px] lg:w-[180px] h-[220px] lg:h-[240px] flex flex-col justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Icon */}
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <item.icon className="w-6 h-6 lg:w-8 lg:h-8 text-accent" />
                </div>

                <h3 className="font-heading font-bold text-base lg:text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>

              {/* Arrow between steps */}
              {index < processSteps.length - 1 && (
                <motion.div
                  className="hidden lg:flex items-center justify-center mx-2"
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
