import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Bed, Bath as BathIcon, Car, X, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { builderTypes } from '@/data/siteData';

export default function BuilderTypes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedBuilder, setSelectedBuilder] = useState<typeof builderTypes[0] | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % builderTypes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + builderTypes.length) % builderTypes.length);
  };

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
            Builder Models
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
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-card rounded-full shadow-custom-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-card rounded-full shadow-custom-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {visibleBuilders().map((builder, index) => (
              <motion.div
                key={`${builder.id}-${currentIndex}`}
                className="bg-card rounded-2xl overflow-hidden shadow-custom-md card-hover cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedBuilder(builder)}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={builder.image}
                    alt={builder.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {builder.price}
                  </div>
                </div>

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
                    variant="outline"
                    className="w-full group"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedBuilder(builder);
                    }}
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
        </div>
      </div>

      {/* Detail Modal */}
      <Dialog open={!!selectedBuilder} onOpenChange={() => setSelectedBuilder(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-card">
          {selectedBuilder && (
            <div>
              {/* Video Section */}
              <div className="relative aspect-video bg-primary">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 ml-1" />
                    </div>
                    <p className="text-sm opacity-80">Watch Video Tour</p>
                  </div>
                </div>
                <img
                  src={selectedBuilder.image}
                  alt={selectedBuilder.name}
                  className="w-full h-full object-cover opacity-50"
                />
              </div>

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                      {selectedBuilder.name}
                    </h2>
                    <p className="text-accent font-semibold">{selectedBuilder.price}</p>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Bed className="w-5 h-5" />
                      <span>{selectedBuilder.specs.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BathIcon className="w-5 h-5" />
                      <span>{selectedBuilder.specs.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Car className="w-5 h-5" />
                      <span>{selectedBuilder.specs.cars} Cars</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">{selectedBuilder.description}</p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-foreground mb-4">Key Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedBuilder.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-secondary px-4 py-2 rounded-full text-sm text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Photo Gallery */}
                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-foreground mb-4">Photo Gallery</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedBuilder.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveGalleryIndex(idx)}
                        className={`rounded-lg overflow-hidden ${
                          idx === activeGalleryIndex ? 'ring-2 ring-accent' : ''
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${selectedBuilder.name} gallery ${idx + 1}`}
                          className="w-full h-24 md:h-32 object-cover hover:opacity-80 transition-opacity"
                        />
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 rounded-xl overflow-hidden">
                    <img
                      src={selectedBuilder.gallery[activeGalleryIndex]}
                      alt={`${selectedBuilder.name} featured`}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>
                </div>

                {/* Floor Plan */}
                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-foreground mb-4">Floor Plan</h3>
                  <div className="bg-secondary rounded-xl p-4">
                    <img
                      src={selectedBuilder.floorPlan}
                      alt={`${selectedBuilder.name} floor plan`}
                      className="w-full max-h-96 object-contain"
                    />
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">
                    Request a Quote
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Download Brochure
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
