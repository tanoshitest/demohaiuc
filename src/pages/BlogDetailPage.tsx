import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/siteData';

const BlogDetailPage = () => {
  const { blogId } = useParams();
  const post = blogPosts.find((p) => p.id === blogId);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="container-custom section-padding text-center">
            <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
              Bài viết không tồn tại
            </h1>
            <p className="text-muted-foreground mb-8">
              Xin lỗi, chúng tôi không tìm thấy bài viết bạn đang tìm kiếm.
            </p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Quay lại Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-AU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  // Get other posts for "Related Posts" section
  const relatedPosts = blogPosts.filter((p) => p.id !== blogId).slice(0, 2);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container-custom pb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 max-w-4xl">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                {/* Excerpt as lead paragraph */}
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  {post.excerpt}
                </p>

                {/* Main content */}
                <div className="text-foreground leading-relaxed space-y-6">
                  <p>{post.content}</p>
                  
                  <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">
                    Key Takeaways
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Understanding the latest trends in Australian construction</li>
                    <li>How to make informed decisions for your project</li>
                    <li>Tips from industry experts with decades of experience</li>
                    <li>Practical advice you can apply to your own home</li>
                  </ul>

                  <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">
                    Expert Insights
                  </h2>
                  <p className="text-muted-foreground">
                    At Triple J Home, we pride ourselves on staying ahead of industry trends 
                    and delivering exceptional results for our clients. Our team of experienced 
                    professionals brings decades of combined expertise to every project, 
                    ensuring that your home or renovation exceeds expectations.
                  </p>
                  <p className="text-muted-foreground">
                    Whether you're planning a complete home renovation, building a new dwelling, 
                    or simply updating your kitchen or bathroom, understanding the latest trends 
                    and best practices can help you make informed decisions that add value to 
                    your property.
                  </p>

                  <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-secondary rounded-r-lg">
                    <p className="text-foreground italic text-lg">
                      "Quality construction isn't just about materials and techniques—it's about 
                      understanding our clients' needs and delivering homes that families will 
                      cherish for generations."
                    </p>
                    <footer className="text-muted-foreground mt-2">
                      — {post.author}, Triple J Home
                    </footer>
                  </blockquote>

                  <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">
                    Looking Forward
                  </h2>
                  <p className="text-muted-foreground">
                    As the Australian construction industry continues to evolve, we remain 
                    committed to innovation, sustainability, and excellence. Stay tuned for 
                    more insights and updates from our team.
                  </p>
                </div>

                {/* Tags */}
                <div className="flex items-center gap-3 mt-12 pt-8 border-t border-border">
                  <Tag className="w-5 h-5 text-muted-foreground" />
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-secondary text-muted-foreground rounded-full text-sm">
                      {post.category}
                    </span>
                    <span className="px-3 py-1 bg-secondary text-muted-foreground rounded-full text-sm">
                      Construction
                    </span>
                    <span className="px-3 py-1 bg-secondary text-muted-foreground rounded-full text-sm">
                      Australia
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="section-padding bg-secondary">
            <div className="container-custom">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {relatedPosts.map((relatedPost) => (
                  <motion.article
                    key={relatedPost.id}
                    className="bg-card rounded-2xl overflow-hidden shadow-custom-md card-hover"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <Link to={`/blog/${relatedPost.id}`}>
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>
                    </Link>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(relatedPost.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                      <Link to={`/blog/${relatedPost.id}`}>
                        <h3 className="font-heading font-bold text-lg text-foreground mb-2 hover:text-accent transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                      </Link>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Contact our team today for a free consultation and quote.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
