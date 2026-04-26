import Header from '@/components/Header';
import PageBanner from '@/components/PageBanner';
import Blog from '@/components/Blog';
import { blogPosts } from '@/data/siteData';
import Footer from '@/components/Footer';

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title="Building Insights & Trends" 
          description="Stay updated with the latest trends in Australian architecture, renovation tips, and building guides from our experts."
          image={blogPosts[2].image}
        />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
