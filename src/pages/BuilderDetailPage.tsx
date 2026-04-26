import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  ChevronLeft, Bed, Bath as BathIcon, Car, Home, 
  ArrowRight, Phone, CheckCircle2, Download, 
  FileText, Play, Maximize2, Ruler
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { builderTypes } from '@/data/siteData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const BuilderDetailPage = () => {
  const { builderId } = useParams();
  const builder = builderTypes.find((b) => b.id === builderId);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  if (!builder) {
    return <Navigate to="/builder-models" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section - Immersive */}
        <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src={builder.image}
            alt={builder.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-end pb-12">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to="/builder-models"
                  className="inline-flex items-center text-white/80 hover:text-accent transition-colors mb-6 group"
                >
                  <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                  Back to All Models
                </Link>
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  {builder.name}
                </h1>
                
                <div className="flex flex-wrap items-center gap-8 text-white/90">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl">
                    <Bed className="w-5 h-5 text-accent" />
                    <span className="font-medium">{builder.specs.beds} Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl">
                    <BathIcon className="w-5 h-5 text-accent" />
                    <span className="font-medium">{builder.specs.baths} Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl">
                    <Car className="w-5 h-5 text-accent" />
                    <span className="font-medium">{builder.specs.cars} Car Garage</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl">
                    <Ruler className="w-5 h-5 text-accent" />
                    <span className="font-medium">{builder.size}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="container-custom py-12">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 mb-8 overflow-x-auto">
                  <TabsTrigger 
                    value="overview" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent px-8 py-4 text-lg font-semibold transition-all"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger 
                    value="floorplans" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent px-8 py-4 text-lg font-semibold transition-all"
                  >
                    Floor Plans
                  </TabsTrigger>
                  <TabsTrigger 
                    value="gallery" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent px-8 py-4 text-lg font-semibold transition-all"
                  >
                    Gallery
                  </TabsTrigger>
                  <TabsTrigger 
                    value="specs" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent px-8 py-4 text-lg font-semibold transition-all"
                  >
                    Specifications
                  </TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {builder.overviewImage && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="rounded-3xl overflow-hidden shadow-2xl aspect-[21/9] relative group"
                    >
                      <img 
                        src={builder.overviewImage} 
                        alt={`${builder.name} overview`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </motion.div>
                  )}

                  <section>
                    <h2 className="text-3xl font-heading font-bold text-foreground mb-6">About This Design</h2>
                    <p className="text-muted-foreground text-xl leading-relaxed mb-8">
                      {builder.longDescription || builder.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {builder.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                          <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Process Section */}
                  {builder.process && (
                    <section className="pt-8">
                      <h2 className="text-3xl font-heading font-bold text-foreground mb-8">The Building Process</h2>
                      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                        {builder.process.map((step: any, idx: number) => (
                          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background group-[.is-active]:bg-accent group-[.is-active]:text-accent-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300">
                              <span className="font-bold">{idx + 1}</span>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent/50">
                              <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                              <p className="text-muted-foreground">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Video Section - Integrated into Overview */}
                  <section className="pt-8">
                    <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                      <Play className="w-8 h-8 text-accent" />
                      Virtual Video Tour
                    </h2>
                    <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video group relative">
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
                  </section>
                </TabsContent>

                {/* Floor Plans Tab */}
                <TabsContent value="floorplans" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-heading font-bold text-foreground">Layout & Floor Plans</h2>
                    <Button variant="outline" className="gap-2">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </Button>
                  </div>
                  <div className="grid gap-8">
                    {builder.floorPlans.map((plan, idx) => (
                      <Card key={idx} className="overflow-hidden border-none shadow-custom-lg bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-0">
                          <div className="relative group cursor-zoom-in">
                            <img
                              src={plan}
                              alt={`${builder.name} Floor Plan ${idx + 1}`}
                              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <div className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2">
                                <Maximize2 className="w-5 h-5" />
                                View Full Size
                              </div>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Ground Floor Layout</h3>
                            <p className="text-muted-foreground">Detailed view of the living, kitchen, and dining areas designed for maximum flow and utility.</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Gallery Tab */}
                <TabsContent value="gallery" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Interior & Exterior Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {builder.gallery.map((img, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="rounded-2xl overflow-hidden aspect-[4/3] relative group"
                        onClick={() => setActiveGalleryIndex(idx)}
                      >
                        <img
                          src={img}
                          alt={`${builder.name} gallery image ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <p className="text-white font-medium">View Detail</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                {/* Specs Tab */}
                <TabsContent value="specs" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Technical Specifications</h2>
                  <div className="grid gap-6">
                    {builder.detailedSpecs && Object.entries(builder.detailedSpecs).map(([category, value]) => (
                      <div key={category} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-card border border-border rounded-2xl shadow-sm">
                        <span className="text-xl font-bold text-foreground mb-2 md:mb-0">{category}</span>
                        <span className="text-muted-foreground text-lg">{value as string}</span>
                      </div>
                    ))}
                    {!builder.detailedSpecs && (
                      <p className="text-muted-foreground">Technical specifications are currently being updated for this model. Please contact us for a detailed brochure.</p>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                <Card className="border-none shadow-2xl bg-primary text-primary-foreground overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-heading font-bold mb-4">
                      Interested in this model?
                    </h3>
                    <p className="text-primary-foreground/80 mb-8 text-lg">
                      Our team of experts is ready to help you customize this design to perfectly fit your lifestyle and property.
                    </p>
                    
                    <div className="space-y-4">
                      <Button
                        asChild
                        size="lg"
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold py-8 rounded-2xl"
                      >
                        <Link to="/contact">
                          Request a Free Quote
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                      </Button>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 h-14 rounded-xl">
                          <Download className="mr-2 w-4 h-4" />
                          Brochure
                        </Button>
                        <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 h-14 rounded-xl">
                          <Phone className="mr-2 w-4 h-4" />
                          Call Us
                        </Button>
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10">
                      <h4 className="font-heading font-bold mb-6 text-xl">Quick Summary</h4>
                      <div className="space-y-4 text-primary-foreground/90">
                        <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                          <span className="font-medium">Total Area</span>
                          <span className="font-bold text-accent">{builder.size}</span>
                        </div>
                        <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                          <span className="font-medium">Configuration</span>
                          <span className="font-bold text-accent">{builder.specs.beds} Bed / {builder.specs.baths} Bath</span>
                        </div>
                        <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                          <span className="font-medium">Estimated Price</span>
                          <span className="font-bold text-accent">{builder.price}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary/50 p-4 rounded-2xl text-center">
                    <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-2" />
                    <span className="text-sm font-bold block">Licensed Builder</span>
                  </div>
                  <div className="bg-secondary/50 p-4 rounded-2xl text-center">
                    <FileText className="w-8 h-8 text-accent mx-auto mb-2" />
                    <span className="text-sm font-bold block">10 Year Warranty</span>
                  </div>
                </div>
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
