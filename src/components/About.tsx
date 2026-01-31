import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, Users, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { companyInfo, aboutTeamImage } from '@/data/siteData';

const features = [
  {
    icon: Award,
    title: 'Licensed & Insured',
    description: 'Fully licensed builders with comprehensive insurance coverage for your peace of mind.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled tradespeople with decades of combined experience in Australian construction.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect your time with realistic timelines and transparent progress updates.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-custom-xl">
              <img
                src={aboutTeamImage}
                alt="Triple J Home construction team"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
            
            {/* Experience Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-2xl p-6 shadow-custom-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-heading font-bold">25+</div>
              <div className="text-sm font-medium">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              About Triple J Home
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Crafting Quality Homes for Australian Families
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              {companyInfo.description}
            </p>
            <p className="text-muted-foreground mb-8">
              From stunning kitchen renovations in Sydney's Eastern Suburbs to custom builds 
              in Melbourne's leafy inner-east, our portfolio speaks to our commitment to 
              excellence. We don't just build structures—we create homes that families 
              love for generations.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['HIA Member', 'Master Builders', 'Green Building Council'].map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-custom-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">{cert}</span>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 group">
              <Link to="/about">
                View More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
