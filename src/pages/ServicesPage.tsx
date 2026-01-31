import Header from '@/components/Header';
import PageBanner from '@/components/PageBanner';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
