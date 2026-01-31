import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, Bed, Bath as BathIcon, Car, Home, ArrowRight, ChevronRight, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { builderTypes } from '@/data/siteData';
const BuilderDetailPage = () => {
  const { builderId } = useParams();
  const builder = builderTypes.find((b) => b.id === builderId);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [activeFloorPlanIndex, setActiveFloorPlanIndex] = useState(0);

  const nextFloorPlan = () => {
    if (builder) {
      setActiveFloorPlanIndex((prev) => (prev + 1) % builder.floorPlans.length);
    }
  };

  const prevFloorPlan = () => {
    if (builder) {
      setActiveFloorPlanIndex((prev) => (prev - 1 + builder.floorPlans.length) % builder.floorPlans.length);
    }
  };

  if (!builder) {
    return <Navigate to="/builder-models" replace />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img
            src={builder.image}
            alt={builder.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container-custom">
              <Link
                to="/builder-models"
                className="inline-flex items-center text-primary-foreground/80 hover:text-accent transition-colors mb-4"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Builder Type
              </Link>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
                  {builder.name}
                </h1>
                <div className="flex items-center gap-6 text-primary-foreground/80">
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5" />
                    <span>{builder.specs.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BathIcon className="w-5 h-5" />
                    <span>{builder.specs.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-5 h-5" />
                    <span>{builder.specs.cars} Cars</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    <span>{builder.size}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="container-custom py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  About This Model
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {builder.description}
                </p>
              </motion.section>

              {/* Features */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Key Features
                </h2>
                <div className="flex flex-wrap gap-3">
                  {builder.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-secondary px-4 py-2 rounded-full text-sm text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.section>

              {/* Floor Plan */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Floor Plan
                </h2>
                <div className="relative group">
                  {/* Main Image */}
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={builder.floorPlans[activeFloorPlanIndex]}
                      alt={`${builder.name} floor plan ${activeFloorPlanIndex + 1}`}
                      className="w-full h-[450px] object-cover"
                    />
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevFloorPlan}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                    aria-label="Previous floor plan"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  <button
                    onClick={nextFloorPlan}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                    aria-label="Next floor plan"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {builder.floorPlans.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveFloorPlanIndex(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          idx === activeFloorPlanIndex
                            ? 'bg-accent w-6'
                            : 'bg-background/60 hover:bg-background/80'
                        }`}
                        aria-label={`Go to floor plan ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Photo Gallery */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Photo Gallery
                </h2>
                <div className="space-y-4">
                  {/* Main Image */}
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={builder.gallery[activeGalleryIndex]}
                      alt={`${builder.name} gallery`}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                  {/* Thumbnails */}
                  <div className="grid grid-cols-4 gap-4">
                    {builder.gallery.slice(0, 4).map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveGalleryIndex(idx)}
                        className={`rounded-xl overflow-hidden transition-all ${
                          idx === activeGalleryIndex
                            ? 'ring-4 ring-accent'
                            : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${builder.name} gallery ${idx + 1}`}
                          className="w-full h-24 md:h-28 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Video */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Video Tour
                </h2>
                <div className="rounded-2xl overflow-hidden aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${builder.videoId}`}
                    title={`${builder.name} Video Tour`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-0"
                  />
                </div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-4">
              {/* CTA Buttons */}
              <motion.div
                className="flex gap-3 justify-end"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <a
                  href="https://wa.me/61411766848"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="font-medium">WhatsApp</span>
                </a>
                <a
                  href="tel:0411766848"
                  className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">Call</span>
                </a>
              </motion.div>

              <motion.div
                className="bg-card rounded-2xl p-6 shadow-custom-lg sticky top-28"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Interested in this model?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contact us today for a free consultation and quote. Our team is ready to help bring your dream home to life.
                </p>
                <div className="space-y-4">
                  <Button
                    asChild
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Link to="/contact">
                      Request a Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download Brochure
                  </Button>
                </div>

                {/* Quick Specs */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-heading font-semibold text-foreground mb-4">
                    Quick Specs
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Size</span>
                      <span className="font-semibold text-foreground">{builder.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bedrooms</span>
                      <span className="font-semibold text-foreground">{builder.specs.beds}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bathrooms</span>
                      <span className="font-semibold text-foreground">{builder.specs.baths}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Garage</span>
                      <span className="font-semibold text-foreground">{builder.specs.cars} Car</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BuilderDetailPage;
