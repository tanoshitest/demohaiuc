import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bed, Bath as BathIcon, Car, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { builderTypes } from '@/data/siteData';

export default function BuilderTypes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % builderTypes.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const visibleBuilders = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % builderTypes.length;
      items.push({ ...builderTypes[index], originalIndex: index });
    }
    return items;
  };

  return (
    <section id="builders" className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Builder Type
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Choose Your Dream Home
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our range of home designs, from compact granny flats to luxury custom builds. 
            Each model can be tailored to your unique requirements.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">

          {/* Cards Container */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {visibleBuilders().map((builder, index) => (
              <motion.div
                key={`${builder.id}-${currentIndex}`}
                className="bg-card rounded-2xl overflow-hidden shadow-custom-md card-hover"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Image */}
                <Link to={`/builder-models/${builder.id}`}>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={builder.image}
                      alt={builder.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    {builder.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {builder.description}
                  </p>

                  {/* Specs */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{builder.specs.beds}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BathIcon className="w-4 h-4" />
                      <span>{builder.specs.baths}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Car className="w-4 h-4" />
                      <span>{builder.specs.cars}</span>
                    </div>
                    <span className="ml-auto text-accent font-medium">{builder.size}</span>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full group"
                  >
                    <Link to={`/builder-models/${builder.id}`}>
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {builderTypes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-accent'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-10">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 group">
              <Link to="/builder-models">
                View All
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
