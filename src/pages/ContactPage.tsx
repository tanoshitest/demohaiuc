import Header from '@/components/Header';
import PageBanner from '@/components/PageBanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
