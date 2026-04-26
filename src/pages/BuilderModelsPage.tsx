import Header from '@/components/Header';
import PageBanner from '@/components/PageBanner';
import BuilderTypesGrid from '@/components/BuilderTypesGrid';
import { builderTypes } from '@/data/siteData';
import Footer from '@/components/Footer';

const BuilderModelsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title="Explore Our Builder Models" 
          description="Discover our range of architecturally designed home models, from compact granny flats to expansive custom residences."
          image={builderTypes[0].image}
        />
        <BuilderTypesGrid />
      </main>
      <Footer />
    </div>
  );
};

export default BuilderModelsPage;
