import Header from '@/components/Header';
import PageBanner from '@/components/PageBanner';
import Contact from '@/components/Contact';
import { projects } from '@/data/siteData';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title="Get In Touch" 
          description="Ready to start your project? Contact our expert team today for a free consultation and quote."
          image={projects[2].image}
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
