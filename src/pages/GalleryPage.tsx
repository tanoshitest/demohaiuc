import Header from '@/components/Header';
import PageBanner from '@/components/PageBanner';
import Gallery from '@/components/Gallery';
import { projects } from '@/data/siteData';
import Footer from '@/components/Footer';

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title="Our Project Gallery" 
          description="A showcase of our finest work. Explore our portfolio of completed renovations and new builds across Sydney and Melbourne."
          image={projects[0].image}
        />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
