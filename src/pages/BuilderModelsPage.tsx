import Header from '@/components/Header';
import PageBanner from '@/components/PageBanner';
import BuilderTypesGrid from '@/components/BuilderTypesGrid';
import Footer from '@/components/Footer';

const BuilderModelsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner />
        <BuilderTypesGrid />
      </main>
      <Footer />
    </div>
  );
};

export default BuilderModelsPage;
