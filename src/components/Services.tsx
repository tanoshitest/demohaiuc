import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TreeDeciduous, Home, ChefHat, Bath, WashingMachine, Fence } from 'lucide-react';
import { services } from '@/data/siteData';

const iconMap: { [key: string]: React.ElementType } = {
  TreeDeciduous,
  Home,
  ChefHat,
  Bath,
  WashingMachine,
  Fence,
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Our Expert Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From complete home renovations to stunning outdoor living spaces, 
            we deliver exceptional craftsmanship across every project.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-custom-md card-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-custom-md">
                    {IconComponent && <IconComponent className="w-6 h-6 text-accent" />}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-secondary px-3 py-1 rounded-full text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-accent font-semibold text-sm group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
