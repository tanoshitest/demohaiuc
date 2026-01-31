import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, Phone, TreeDeciduous, Home, ChefHat, Bath, WashingMachine, Fence } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { services } from '@/data/siteData';

// Import gallery images
import deckingImg from '@/assets/decking.jpg';
import homeRenoImg from '@/assets/home-reno.jpg';
import kitchenRenoImg from '@/assets/kitchen-reno.jpg';
import bathroomRenoImg from '@/assets/bathroom-reno.jpg';
import laundryRenoImg from '@/assets/laundry-reno.jpg';
import pergolaImg from '@/assets/pergola.jpg';
import projectBondiImg from '@/assets/project-bondi.jpg';
import projectMosmanImg from '@/assets/project-mosman.jpg';

const iconMap: { [key: string]: React.ElementType } = {
  TreeDeciduous,
  Home,
  ChefHat,
  Bath,
  WashingMachine,
  Fence,
};

const serviceDetails: { [key: string]: { 
  fullDescription: string; 
  process: string[]; 
  benefits: string[];
  timeline: string;
  priceRange: string;
  gallery: string[];
}} = {
  'decking': {
    fullDescription: 'Transform your outdoor living with our premium hardwood and composite decking solutions designed specifically for Australian climates. Our expert team specialises in creating stunning outdoor spaces that seamlessly extend your indoor living areas, perfect for entertaining or relaxing with family.',
    process: [
      'Initial consultation and site assessment',
      'Custom design and material selection',
      'Council approval assistance if required',
      'Site preparation and groundwork',
      'Professional installation with quality finishes',
      'Final inspection and handover'
    ],
    benefits: [
      'Premium Australian hardwoods like Merbau and Spotted Gum',
      'Low-maintenance composite options available',
      '10-year structural warranty on all installations',
      'Built to withstand harsh Australian weather conditions',
      'Custom designs to suit any outdoor space',
      'Expert advice on ongoing maintenance'
    ],
    timeline: '2-4 weeks',
    priceRange: 'From $350 per sqm',
    gallery: [deckingImg, pergolaImg, projectBondiImg, homeRenoImg]
  },
  'home-renovations': {
    fullDescription: 'Complete home transformations from design to completion. We breathe new life into established homes across Sydney and Melbourne, handling everything from initial concept through to final handover. Our experienced project managers ensure your renovation runs smoothly while minimising disruption to your daily life.',
    process: [
      'Comprehensive home assessment',
      'Architectural design and 3D visualisation',
      'Council DA/CDC application management',
      'Detailed quotation and timeline planning',
      'Demolition and construction phases',
      'Interior fit-out and finishing touches'
    ],
    benefits: [
      'Single point of contact throughout your project',
      'Transparent fixed-price contracts',
      'Licensed and fully insured builders',
      'Regular progress updates and site meetings',
      'Quality materials from trusted Australian suppliers',
      'Defects liability period for peace of mind'
    ],
    timeline: '12-24 weeks depending on scope',
    priceRange: 'From $150,000',
    gallery: [homeRenoImg, kitchenRenoImg, bathroomRenoImg, projectMosmanImg]
  },
  'kitchen-renovations': {
    fullDescription: 'Create the heart of your home with custom cabinetry, premium benchtops, and modern appliance integration. Our kitchen renovation specialists work with you to design functional, beautiful spaces that reflect your lifestyle and add significant value to your property.',
    process: [
      'Kitchen design consultation',
      'Custom cabinetry design and selection',
      'Appliance and fixture recommendations',
      'Demolition and electrical/plumbing rough-in',
      'Cabinetry and benchtop installation',
      'Splashback, lighting, and final finishes'
    ],
    benefits: [
      'Bespoke joinery made to measure',
      'Premium stone benchtops including Caesarstone and natural marble',
      'Smart storage solutions to maximise space',
      'Integration of top-brand appliances',
      'Waterfall edges, island benches, and butler\'s pantries',
      'Full electrical and plumbing upgrades included'
    ],
    timeline: '4-8 weeks',
    priceRange: 'From $35,000',
    gallery: [kitchenRenoImg, homeRenoImg, projectBondiImg, bathroomRenoImg]
  },
  'bathroom-renovations': {
    fullDescription: 'Luxury bathroom designs featuring floor-to-ceiling tiles, frameless showers, and statement fixtures. Whether you\'re looking for a spa-like retreat or a practical family bathroom, our team delivers stunning results that combine form and function perfectly.',
    process: [
      'Bathroom design and layout planning',
      'Tile, fixture, and fitting selection',
      'Strip-out and waterproofing',
      'Plumbing and electrical work',
      'Tiling and installation of fittings',
      'Final clean and handover'
    ],
    benefits: [
      'Certified waterproofing with warranty',
      'Underfloor heating options available',
      'Premium tapware from leading brands',
      'Custom vanity and storage solutions',
      'Frameless shower screens standard',
      'LED lighting and smart mirrors available'
    ],
    timeline: '3-6 weeks',
    priceRange: 'From $25,000',
    gallery: [bathroomRenoImg, kitchenRenoImg, laundryRenoImg, homeRenoImg]
  },
  'laundry-renovations': {
    fullDescription: 'Maximise functionality with clever storage solutions, quality cabinetry, and efficient layouts. A well-designed laundry makes daily tasks easier while adding value to your home. We create practical spaces that work hard without compromising on style.',
    process: [
      'Consultation and space assessment',
      'Layout and storage planning',
      'Material and fixture selection',
      'Installation of cabinetry and benchtops',
      'Plumbing connections and appliance fitting',
      'Final styling and handover'
    ],
    benefits: [
      'Clever storage for all your laundry needs',
      'Durable benchtops for folding and sorting',
      'Integrated appliance solutions',
      'Efficient layouts for any space',
      'Quality tapware and sink options',
      'Coordination with existing home design'
    ],
    timeline: '1-2 weeks',
    priceRange: 'From $12,000',
    gallery: [laundryRenoImg, bathroomRenoImg, kitchenRenoImg, homeRenoImg]
  },
  'pergola': {
    fullDescription: 'Extend your living space with stunning pergolas, patios, and alfresco entertainment areas built to last. Our outdoor structures are engineered to withstand Australian conditions while providing beautiful spaces for year-round enjoyment.',
    process: [
      'Site visit and design consultation',
      'Structural engineering and council approval',
      'Foundation and post installation',
      'Roof structure and covering installation',
      'Lighting, fans, and electrical work',
      'Landscaping integration and handover'
    ],
    benefits: [
      'Premium hardwood and steel construction',
      'Louvre, insulated, and flat roof options',
      'Integrated LED lighting systems',
      'Outdoor ceiling fans available',
      'Custom sizes and configurations',
      'Compliant with Australian building standards'
    ],
    timeline: '2-4 weeks',
    priceRange: 'From $15,000',
    gallery: [pergolaImg, deckingImg, projectMosmanImg, homeRenoImg]
  }
};

const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  const service = services.find(s => s.id === serviceId);
  const details = serviceId ? serviceDetails[serviceId] : null;
  
  if (!service || !details) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = iconMap[service.icon];

  // Find related services (excluding current)
  const relatedServices = services.filter(s => s.id !== serviceId).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20" />
          
          <div className="absolute inset-0 flex items-end">
            <div className="container-custom pb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Services
                </Link>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                    {IconComponent && <IconComponent className="w-8 h-8 text-accent-foreground" />}
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground">
                    {service.title}
                  </h1>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full text-primary-foreground text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    Overview
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {details.fullDescription}
                  </p>
                </motion.div>

                {/* Gallery Images - 4 in a row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {details.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="aspect-square rounded-xl overflow-hidden shadow-custom-md group"
                      >
                        <img
                          src={image}
                          alt={`${service.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Process */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                    Our Process
                  </h2>
                  <div className="space-y-4">
                    {details.process.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0 font-bold text-sm">
                          {index + 1}
                        </div>
                        <p className="text-muted-foreground pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                    Why Choose Us
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {details.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* Quick Info Card */}
                <motion.div
                  className="bg-card rounded-2xl p-6 shadow-custom-md sticky top-28"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                    Quick Info
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                      <span className="text-muted-foreground">Timeline</span>
                      <span className="font-semibold text-foreground">{details.timeline}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                      <span className="text-muted-foreground">Starting Price</span>
                      <span className="font-semibold text-accent">{details.priceRange}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Warranty</span>
                      <span className="font-semibold text-foreground">10+ Years</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link to="/contact">Get a Free Quote</Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="tel:1300TRIPLEJ">
                        <Phone className="w-4 h-4 mr-2" />
                        1300 TRIPLE J
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Related Services
              </h2>
              <p className="text-muted-foreground">
                Explore our other expert services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((relatedService, index) => {
                const RelatedIcon = iconMap[relatedService.icon];
                return (
                  <motion.div
                    key={relatedService.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={`/services/${relatedService.id}`}
                      className="group block bg-card rounded-xl overflow-hidden shadow-custom-md hover:shadow-custom-lg transition-shadow"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={relatedService.image}
                          alt={relatedService.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          {RelatedIcon && <RelatedIcon className="w-5 h-5 text-accent" />}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                          {relatedService.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-accent text-sm mt-2">
                          Learn More <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
