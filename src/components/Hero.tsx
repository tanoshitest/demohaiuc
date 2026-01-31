import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-home.jpg';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern Australian luxury home"
          className="w-full h-full object-cover"
        />
        <div className="gradient-overlay" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.span
            className="inline-block bg-accent/20 text-accent-foreground backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Registered Building Practitioner DB-U 101616
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="whitespace-nowrap">Building Your <span className="text-accent">Dream Home</span></span>
            <br />
            Across Australia
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expert craftsmanship in renovations, custom builds, and home extensions. 
            From concept to completion, we deliver exceptional quality that stands the test of time.
          </motion.p>


          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-primary-foreground/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { value: '500+', label: 'Projects' },
              { value: '25+', label: 'Years' },
              { value: '98%', label: 'Satisfaction' },
              { value: '50+', label: 'Awards' },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div
            className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
