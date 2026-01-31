import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, Bed, Bath as BathIcon, Car, Home, ArrowRight, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { builderTypes } from '@/data/siteData';
const BuilderDetailPage = () => {
  const { builderId } = useParams();
  const builder = builderTypes.find((b) => b.id === builderId);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

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

              {/* Gallery & Video - swap order on mobile */}
              <div className="flex flex-col-reverse lg:flex-col gap-12">
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
                            className="w-full aspect-square md:aspect-auto md:h-28 object-cover"
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
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
                <motion.div
                  className="bg-card rounded-2xl p-6 shadow-custom-lg"
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BuilderDetailPage;
