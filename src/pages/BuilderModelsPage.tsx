import Header from '@/components/Header';
import BuilderTypes from '@/components/BuilderTypes';
import Footer from '@/components/Footer';

const BuilderModelsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <BuilderTypes />
      </main>
      <Footer />
    </div>
  );
};

export default BuilderModelsPage;
