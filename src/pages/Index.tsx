import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import BuilderTypes from '@/components/BuilderTypes';
import Gallery from '@/components/Gallery';
import HomeProcess from '@/components/HomeProcess';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        
        {/* About Section - Fade Up */}
        <ScrollReveal variant="fadeUp">
          <About />
        </ScrollReveal>
        
        {/* Services Section - Scale */}
        <ScrollReveal variant="scale">
          <Services />
        </ScrollReveal>
        
        {/* Builder Types - Fade Right */}
        <ScrollReveal variant="fadeRight">
          <BuilderTypes />
        </ScrollReveal>
        
        {/* Gallery - Blur reveal */}
        <ScrollReveal variant="blur">
          <Gallery />
        </ScrollReveal>
        
        {/* Process - Rotate 3D */}
        <ScrollReveal variant="rotate">
          <HomeProcess />
        </ScrollReveal>
        
        {/* Blog - Fade Left */}
        <ScrollReveal variant="fadeLeft">
          <Blog />
        </ScrollReveal>
        
        {/* FAQ - Scale */}
        <ScrollReveal variant="scale">
          <FAQ />
        </ScrollReveal>
        
        {/* Contact - Fade Up */}
        <ScrollReveal variant="fadeUp">
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
