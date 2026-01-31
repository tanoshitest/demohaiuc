// Services Data
import deckingImg from '@/assets/decking.jpg';
import homeRenoImg from '@/assets/home-reno.jpg';
import kitchenRenoImg from '@/assets/kitchen-reno.jpg';
import bathroomRenoImg from '@/assets/bathroom-reno.jpg';
import laundryRenoImg from '@/assets/laundry-reno.jpg';
import pergolaImg from '@/assets/pergola.jpg';

// Builder Types
import builderHouseImg from '@/assets/builder-house.jpg';
import builderCustomImg from '@/assets/builder-custom.jpg';
import builderTownhouseImg from '@/assets/builder-townhouse.jpg';
import builderBungalowImg from '@/assets/builder-bungalow.jpg';
import builderSecondImg from '@/assets/builder-second.jpg';
import builderGrannyImg from '@/assets/builder-granny.jpg';
import floorPlanImg from '@/assets/floor-plan.jpg';

// Projects
import projectBondiImg from '@/assets/project-bondi.jpg';
import projectMosmanImg from '@/assets/project-mosman.jpg';
import projectMelbourneImg from '@/assets/project-melbourne.jpg';

// Blog
import blogKitchenImg from '@/assets/blog-kitchen.jpg';
import blogPermitsImg from '@/assets/blog-permits.jpg';
import blogSustainableImg from '@/assets/blog-sustainable.jpg';

// About
import aboutTeamImg from '@/assets/about-team.jpg';

export const services = [
  {
    id: 'decking',
    title: 'Decking',
    description: 'Transform your outdoor living with premium hardwood and composite decking solutions designed for Australian climates.',
    image: deckingImg,
    icon: 'TreeDeciduous',
    features: ['Merbau & Spotted Gum', 'Composite Options', '10 Year Warranty'],
  },
  {
    id: 'home-renovations',
    title: 'Home Renovations',
    description: 'Complete home transformations from design to completion. We breathe new life into established homes across Sydney and Melbourne.',
    image: homeRenoImg,
    icon: 'Home',
    features: ['Full Project Management', 'Design Consultation', 'Council Approvals'],
  },
  {
    id: 'kitchen-renovations',
    title: 'Kitchen Renovations',
    description: 'Create the heart of your home with custom cabinetry, premium benchtops, and modern appliance integration.',
    image: kitchenRenoImg,
    icon: 'ChefHat',
    features: ['Custom Joinery', 'Stone Benchtops', 'Smart Appliances'],
  },
  {
    id: 'bathroom-renovations',
    title: 'Bathroom Renovations',
    description: 'Luxury bathroom designs featuring floor-to-ceiling tiles, frameless showers, and statement fixtures.',
    image: bathroomRenoImg,
    icon: 'Bath',
    features: ['Waterproofing Certified', 'Underfloor Heating', 'Premium Tapware'],
  },
  {
    id: 'laundry-renovations',
    title: 'Laundry Renovations',
    description: 'Maximise functionality with clever storage solutions, quality cabinetry, and efficient layouts.',
    image: laundryRenoImg,
    icon: 'WashingMachine',
    features: ['Custom Storage', 'Quality Benchtops', 'Efficient Design'],
  },
  {
    id: 'pergola',
    title: 'Pergola & Outdoor',
    description: 'Extend your living space with stunning pergolas, patios, and alfresco entertainment areas built to last.',
    image: pergolaImg,
    icon: 'Fence',
    features: ['Hardwood & Steel', 'Louvre Options', 'Integrated Lighting'],
  },
];

export const builderTypes = [
  {
    id: 'house',
    name: 'House',
    description: 'Our signature family homes are designed for modern Australian living. Featuring open-plan layouts, seamless indoor-outdoor flow, and premium finishes throughout. Perfect for growing families seeking quality and comfort in established suburbs.',
    image: builderHouseImg,
    specs: { beds: 4, baths: 2, cars: 2 },
    size: '220-280 sqm',
    price: 'From $650,000',
    gallery: [builderHouseImg, homeRenoImg, kitchenRenoImg, bathroomRenoImg],
    floorPlans: [floorPlanImg, floorPlanImg, floorPlanImg],
    videoId: 'dQw4w9WgXcQ',
    features: ['Open Plan Living', 'Alfresco Area', 'Walk-in Pantry', 'Master Ensuite', 'Double Garage'],
  },
  {
    id: 'custom-house',
    name: 'Custom House',
    description: 'Your vision, our expertise. Our custom home service delivers architect-designed residences tailored to your exact requirements. From contemporary masterpieces to coastal retreats, we bring your dream home to life.',
    image: builderCustomImg,
    specs: { beds: 5, baths: 3, cars: 3 },
    size: '300-450 sqm',
    price: 'From $950,000',
    gallery: [builderCustomImg, projectMosmanImg, projectBondiImg, kitchenRenoImg],
    floorPlans: [floorPlanImg, floorPlanImg, floorPlanImg],
    videoId: 'dQw4w9WgXcQ',
    features: ['Architect Designed', 'Premium Finishes', 'Home Automation', 'Pool Integration', 'Wine Cellar'],
  },
  {
    id: 'townhouse',
    name: 'Town House',
    description: 'Smart urban living with our contemporary townhouse designs. Three-storey layouts maximise space on compact blocks, perfect for inner-city locations where lifestyle meets convenience.',
    image: builderTownhouseImg,
    specs: { beds: 3, baths: 2, cars: 1 },
    size: '150-200 sqm',
    price: 'From $450,000',
    gallery: [builderTownhouseImg, bathroomRenoImg, kitchenRenoImg, homeRenoImg],
    floorPlans: [floorPlanImg, floorPlanImg, floorPlanImg],
    videoId: 'dQw4w9WgXcQ',
    features: ['Multi-Level Living', 'Rooftop Terrace', 'Study Nook', 'Private Courtyard', 'Secure Parking'],
  },
  {
    id: 'bungalow',
    name: 'Bungalow',
    description: 'Classic Australian character meets modern convenience. Our bungalow designs honour traditional aesthetics while incorporating contemporary layouts and energy-efficient features.',
    image: builderBungalowImg,
    specs: { beds: 3, baths: 1, cars: 1 },
    size: '120-180 sqm',
    price: 'From $380,000',
    gallery: [builderBungalowImg, homeRenoImg, laundryRenoImg, kitchenRenoImg],
    floorPlans: [floorPlanImg, floorPlanImg, floorPlanImg],
    videoId: 'dQw4w9WgXcQ',
    features: ['Wide Verandah', 'High Ceilings', 'Timber Features', 'Period Detailing', 'Energy Efficient'],
  },
  {
    id: 'second-home',
    name: 'Second Homes',
    description: 'Maximise your property\'s potential with a detached second dwelling. Ideal for rental income, multigenerational living, or a private home office. Fully self-contained with premium finishes.',
    image: builderSecondImg,
    specs: { beds: 2, baths: 1, cars: 1 },
    size: '80-120 sqm',
    price: 'From $280,000',
    gallery: [builderSecondImg, bathroomRenoImg, kitchenRenoImg, homeRenoImg],
    floorPlans: [floorPlanImg, floorPlanImg, floorPlanImg],
    videoId: 'dQw4w9WgXcQ',
    features: ['Dual Occupancy', 'Rental Ready', 'Private Entry', 'Full Kitchen', 'NBN Connected'],
  },
  {
    id: 'granny-flat',
    name: 'Granny Flat',
    description: 'Compliant secondary dwellings designed for comfort and independence. Our granny flats provide complete living solutions with quality finishes, perfect for extended family or rental income.',
    image: builderGrannyImg,
    specs: { beds: 1, baths: 1, cars: 0 },
    size: '40-60 sqm',
    price: 'From $120,000',
    gallery: [builderGrannyImg, laundryRenoImg, bathroomRenoImg, kitchenRenoImg],
    floorPlans: [floorPlanImg, floorPlanImg, floorPlanImg],
    videoId: 'dQw4w9WgXcQ',
    features: ['CDC Approved', 'Compact Living', 'Quality Finishes', 'Separate Metering', 'Quick Build'],
  },
];

export const projects = [
  {
    id: 'bondi-beach-renovation',
    title: 'Bondi Beach Renovation',
    location: 'Bondi Beach, NSW',
    category: 'Full Home Renovation',
    description: 'A complete transformation of a 1950s beach cottage into a stunning contemporary coastal home with ocean views from every level. This project involved a full demolition of the existing interior, structural modifications to create open-plan living, and the addition of a rooftop terrace with panoramic ocean views.',
    image: projectBondiImg,
    gallery: [projectBondiImg, kitchenRenoImg, bathroomRenoImg, homeRenoImg, deckingImg, laundryRenoImg],
    year: 2024,
    duration: '8 months',
    scope: ['Full interior demolition', 'Structural modifications', 'New kitchen and bathrooms', 'Rooftop terrace addition', 'Landscaping'],
    client: 'Private Residence',
  },
  {
    id: 'mosman-luxury-extension',
    title: 'Mosman Luxury Extension',
    location: 'Mosman, NSW',
    category: 'Extension & Renovation',
    description: 'Heritage-sensitive extension to a Federation home, adding modern living spaces while preserving original character features. The project seamlessly blends period details with contemporary design, featuring a stunning kitchen pavilion and alfresco entertaining area.',
    image: projectMosmanImg,
    gallery: [projectMosmanImg, homeRenoImg, kitchenRenoImg, bathroomRenoImg, pergolaImg, laundryRenoImg],
    year: 2024,
    duration: '12 months',
    scope: ['Heritage restoration', 'Rear extension', 'Kitchen pavilion', 'Alfresco area', 'Pool and landscaping'],
    client: 'Private Residence',
  },
  {
    id: 'melbourne-modern-build',
    title: 'Toorak Contemporary Build',
    location: 'Toorak, VIC',
    category: 'New Build',
    description: 'Award-winning contemporary home featuring innovative indoor-outdoor living spaces, timber cladding, and sustainable design principles. This architecturally designed residence showcases the best of modern Australian living with premium finishes throughout.',
    image: projectMelbourneImg,
    gallery: [projectMelbourneImg, bathroomRenoImg, deckingImg, kitchenRenoImg, homeRenoImg, pergolaImg],
    year: 2023,
    duration: '14 months',
    scope: ['New home construction', 'Custom joinery', 'Pool and landscaping', 'Home automation', 'Sustainable features'],
    client: 'Private Residence',
  },
  {
    id: 'surry-hills-terrace',
    title: 'Surry Hills Terrace',
    location: 'Surry Hills, NSW',
    category: 'Full Home Renovation',
    description: 'Complete renovation of a heritage terrace house, blending original Victorian features with modern living. The project included a rear glass extension and rooftop garden.',
    image: kitchenRenoImg,
    gallery: [kitchenRenoImg, bathroomRenoImg, homeRenoImg, laundryRenoImg, deckingImg, pergolaImg],
    year: 2024,
    duration: '10 months',
    scope: ['Heritage restoration', 'Rear extension', 'New kitchen and bathrooms', 'Rooftop garden'],
    client: 'Private Residence',
  },
  {
    id: 'brighton-coastal-home',
    title: 'Brighton Coastal Home',
    location: 'Brighton, VIC',
    category: 'New Build',
    description: 'A stunning beachside residence designed to capture bay views from every room. Features include floor-to-ceiling windows, a infinity pool, and sustainable building materials.',
    image: builderHouseImg,
    gallery: [builderHouseImg, kitchenRenoImg, bathroomRenoImg, deckingImg, homeRenoImg, pergolaImg],
    year: 2024,
    duration: '16 months',
    scope: ['New home construction', 'Pool installation', 'Landscaping', 'Smart home integration'],
    client: 'Private Residence',
  },
  {
    id: 'manly-beach-apartment',
    title: 'Manly Beach Apartment',
    location: 'Manly, NSW',
    category: 'Apartment Renovation',
    description: 'Luxury apartment renovation with panoramic ocean views. Complete transformation of an outdated unit into a modern coastal retreat with high-end finishes.',
    image: bathroomRenoImg,
    gallery: [bathroomRenoImg, kitchenRenoImg, laundryRenoImg, homeRenoImg, deckingImg, pergolaImg],
    year: 2023,
    duration: '4 months',
    scope: ['Full interior renovation', 'New kitchen and bathroom', 'Custom joinery', 'Balcony upgrade'],
    client: 'Private Residence',
  },
  {
    id: 'hawthorn-family-home',
    title: 'Hawthorn Family Home',
    location: 'Hawthorn, VIC',
    category: 'Extension & Renovation',
    description: 'Major extension and renovation of a period home, adding a contemporary living wing while respecting the original architecture. Features an open-plan kitchen, living, and dining area.',
    image: homeRenoImg,
    gallery: [homeRenoImg, kitchenRenoImg, bathroomRenoImg, laundryRenoImg, deckingImg, pergolaImg],
    year: 2023,
    duration: '11 months',
    scope: ['Rear extension', 'Kitchen renovation', 'Bathroom upgrades', 'Outdoor living area'],
    client: 'Private Residence',
  },
  {
    id: 'paddington-townhouse',
    title: 'Paddington Townhouse',
    location: 'Paddington, NSW',
    category: 'Full Home Renovation',
    description: 'Complete gut renovation of a three-storey townhouse, creating a modern family home with seamless indoor-outdoor living and a private courtyard.',
    image: builderTownhouseImg,
    gallery: [builderTownhouseImg, kitchenRenoImg, bathroomRenoImg, homeRenoImg, laundryRenoImg, deckingImg],
    year: 2024,
    duration: '9 months',
    scope: ['Full interior demolition', 'Structural changes', 'New kitchen and bathrooms', 'Courtyard design'],
    client: 'Private Residence',
  },
  {
    id: 'south-yarra-apartment',
    title: 'South Yarra Penthouse',
    location: 'South Yarra, VIC',
    category: 'Apartment Renovation',
    description: 'High-end penthouse renovation featuring bespoke joinery, premium finishes, and stunning city views. A sophisticated urban retreat with attention to every detail.',
    image: builderCustomImg,
    gallery: [builderCustomImg, kitchenRenoImg, bathroomRenoImg, laundryRenoImg, homeRenoImg, deckingImg],
    year: 2023,
    duration: '6 months',
    scope: ['Full interior fit-out', 'Custom joinery', 'Premium finishes', 'Smart home automation'],
    client: 'Private Residence',
  },
  {
    id: 'coogee-beach-house',
    title: 'Coogee Beach House',
    location: 'Coogee, NSW',
    category: 'New Build',
    description: 'Contemporary beach house with sustainable design features, including solar panels, rainwater harvesting, and passive cooling. A perfect blend of eco-conscious living and luxury.',
    image: deckingImg,
    gallery: [deckingImg, kitchenRenoImg, bathroomRenoImg, homeRenoImg, pergolaImg, laundryRenoImg],
    year: 2024,
    duration: '15 months',
    scope: ['New home construction', 'Sustainable features', 'Pool and landscaping', 'Outdoor entertaining'],
    client: 'Private Residence',
  },
  {
    id: 'malvern-renovation',
    title: 'Malvern Heritage Restoration',
    location: 'Malvern, VIC',
    category: 'Heritage Restoration',
    description: 'Meticulous restoration of a grand Victorian mansion, preserving original features while updating services and creating modern living spaces in a sympathetic extension.',
    image: pergolaImg,
    gallery: [pergolaImg, homeRenoImg, kitchenRenoImg, bathroomRenoImg, deckingImg, laundryRenoImg],
    year: 2023,
    duration: '18 months',
    scope: ['Heritage restoration', 'Services upgrade', 'Period feature repair', 'Modern extension'],
    client: 'Private Residence',
  },
  {
    id: 'rose-bay-waterfront',
    title: 'Rose Bay Waterfront',
    location: 'Rose Bay, NSW',
    category: 'Extension & Renovation',
    description: 'Stunning waterfront property transformation with a new pool pavilion, boat house, and complete interior renovation. Maximized harbour views throughout.',
    image: laundryRenoImg,
    gallery: [laundryRenoImg, kitchenRenoImg, bathroomRenoImg, homeRenoImg, deckingImg, pergolaImg],
    year: 2024,
    duration: '13 months',
    scope: ['Major renovation', 'Pool pavilion', 'Boat house', 'Landscaping', 'Interior design'],
    client: 'Private Residence',
  },
];

export const blogPosts = [
  {
    id: 'top-5-kitchen-trends-2024',
    title: 'Top 5 Kitchen Trends Dominating Australian Homes in 2024',
    excerpt: 'From integrated appliances to bold colour palettes, discover the kitchen design trends that are defining modern Australian homes this year.',
    content: 'The Australian kitchen has evolved beyond functionality into the true heart of the home. This year, we\'re seeing a shift towards warmer tones, smart storage solutions, and sustainable materials...',
    image: blogKitchenImg,
    author: 'Sarah Mitchell',
    date: '2024-01-15',
    category: 'Design Trends',
    readTime: '5 min read',
  },
  {
    id: 'granny-flat-permits-nsw',
    title: 'Everything You Need to Know About Granny Flat Permits in NSW',
    excerpt: 'Navigating council approvals can be daunting. Our comprehensive guide breaks down the CDC and DA pathways for building a granny flat in New South Wales.',
    content: 'Building a granny flat in NSW has become increasingly popular, with the state government introducing the Affordable Rental Housing SEPP to streamline approvals...',
    image: blogPermitsImg,
    author: 'James Chen',
    date: '2024-01-08',
    category: 'Building Guides',
    readTime: '8 min read',
  },
  {
    id: 'sustainable-building-australia',
    title: 'Building Sustainable: Eco-Friendly Construction in Australia',
    excerpt: 'Learn how Triple J Home incorporates sustainable building practices and materials to create energy-efficient homes that reduce environmental impact.',
    content: 'Sustainability in construction is no longer optional—it\'s essential. From solar integration to recycled materials, Australian builders are leading the way...',
    image: blogSustainableImg,
    author: 'Michael Torres',
    date: '2024-01-02',
    category: 'Sustainability',
    readTime: '6 min read',
  },
];

export const faqItems = [
  {
    question: 'Do you handle council approvals and permits?',
    answer: 'Yes, Triple J Home manages all aspects of the approval process. Whether you need a Complying Development Certificate (CDC) or a full Development Application (DA), our experienced team handles all documentation, submissions, and council liaisons on your behalf.',
  },
  {
    question: 'What is the typical timeline for a kitchen renovation?',
    answer: 'A standard kitchen renovation takes 4-6 weeks from demolition to completion. This includes custom cabinetry fabrication, electrical and plumbing work, tiling, and installation of benchtops and appliances. Complex designs or supply delays may extend this timeline.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. Triple J Home holds a NSW Building Licence (Class 1-3), Victorian Building Practitioner Registration, and comprehensive insurance including $20M public liability, Home Warranty Insurance, and workers compensation for all staff.',
  },
  {
    question: 'Can you work with my architect or designer?',
    answer: 'We regularly collaborate with external architects, designers, and building designers. We can also provide our own in-house design services if required. We\'re flexible and committed to bringing your vision to life.',
  },
  {
    question: 'What areas do you service?',
    answer: 'We operate across Greater Sydney, including the Eastern Suburbs, North Shore, Inner West, and Hills District. We also service Melbourne\'s inner and eastern suburbs. For projects outside these areas, please contact us to discuss.',
  },
  {
    question: 'How do progress payments work?',
    answer: 'We follow a standard progress payment schedule as per NSW Fair Trading guidelines: 10% deposit, then payments at base stage, frame stage, lock-up, fixing, and final completion. All terms are clearly outlined in our fixed-price contract.',
  },
];

export const companyInfo = {
  name: 'Triple J Homes',
  tagline: 'Building Your Dream Home Across Australia',
  description: 'With over 25 years of experience in the Australian construction industry, Triple J Homes has built a reputation for quality craftsmanship, transparent communication, and exceptional results.',
  phone: '0411 766 848 - JN (VAN)',
  email: 'triplejhomes2000@gmail.com',
  address: 'Neale Street, Springvale, Victoria 3171',
  hours: 'Monday - Friday: 7:00 AM - 5:00 PM',
  social: {
    facebook: 'https://facebook.com/triplejhome',
    instagram: 'https://instagram.com/triplejhome',
    linkedin: 'https://linkedin.com/company/triplejhome',
  },
  stats: [
    { value: '500+', label: 'Projects Completed' },
    { value: '25+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Industry Awards' },
  ],
};

export const aboutTeamImage = aboutTeamImg;
