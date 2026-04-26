import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-home.jpg';

interface PageBannerProps {
  title: string;
  description?: string;
  image?: string;
}

export default function PageBanner({ title, description, image }: PageBannerProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        src={image || heroImage}
        alt={title}
        className="w-full h-full absolute inset-0 object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
        >
          {title}
        </motion.h1>
        
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
