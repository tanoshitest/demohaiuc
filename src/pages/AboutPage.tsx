import Header from '@/components/Header';
import PageBanner from '@/components/PageBanner';
import About from '@/components/About';
import AboutCertifications from '@/components/AboutCertifications';
import AboutProcess from '@/components/AboutProcess';
import AboutWhyChooseUs from '@/components/AboutWhyChooseUs';
import AboutAwards from '@/components/AboutAwards';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner />
        <About />
        <AboutCertifications />
        <AboutProcess />
        <AboutWhyChooseUs />
        <AboutAwards />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
