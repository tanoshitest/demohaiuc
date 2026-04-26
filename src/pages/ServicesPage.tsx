import Header from '@/components/Header';
import PageBanner from '@/components/PageBanner';
import Services from '@/components/Services';
import { services } from '@/data/siteData';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  // Use a representative image for the services banner
  const servicesBannerImg = services[1].image; // home-reno.jpg

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title="Our Specialized Services" 
          description="From luxury renovations to complete new builds, we provide comprehensive construction solutions tailored to your unique vision."
          image={servicesBannerImg}
        />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
