import Header from '@/components/Header';
import BuilderTypesGrid from '@/components/BuilderTypesGrid';
import Footer from '@/components/Footer';

const BuilderModelsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <BuilderTypesGrid />
      </main>
      <Footer />
    </div>
  );
};

export default BuilderModelsPage;
