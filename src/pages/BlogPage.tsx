import Header from '@/components/Header';
import PageBanner from '@/components/PageBanner';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
