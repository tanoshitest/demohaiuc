import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'parallax' | 'blur' | 'rotate';
  delay?: number;
  className?: string;
}

export default function ScrollReveal({ 
  children, 
  variant = 'fadeUp', 
  delay = 0,
  className = '' 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Different animation variants
  const variants = {
    fadeUp: {
      opacity: useTransform(smoothProgress, [0, 0.3], [0, 1]),
      y: useTransform(smoothProgress, [0, 0.3], [80, 0]),
    },
    fadeLeft: {
      opacity: useTransform(smoothProgress, [0, 0.3], [0, 1]),
      x: useTransform(smoothProgress, [0, 0.3], [-100, 0]),
    },
    fadeRight: {
      opacity: useTransform(smoothProgress, [0, 0.3], [0, 1]),
      x: useTransform(smoothProgress, [0, 0.3], [100, 0]),
    },
    scale: {
      opacity: useTransform(smoothProgress, [0, 0.3], [0, 1]),
      scale: useTransform(smoothProgress, [0, 0.3], [0.8, 1]),
    },
    parallax: {
      y: useTransform(smoothProgress, [0, 1], [100, -100]),
    },
    blur: {
      opacity: useTransform(smoothProgress, [0, 0.3], [0, 1]),
      filter: useTransform(smoothProgress, [0, 0.3], ['blur(10px)', 'blur(0px)']),
    },
    rotate: {
      opacity: useTransform(smoothProgress, [0, 0.3], [0, 1]),
      rotateX: useTransform(smoothProgress, [0, 0.3], [15, 0]),
      y: useTransform(smoothProgress, [0, 0.3], [50, 0]),
    },
  };

  const selectedVariant = variants[variant];

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        ...selectedVariant,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </motion.div>
  );
}

// Section wrapper with storytelling reveal
interface StorySectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function StorySection({ children, className = '', title, subtitle }: StorySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <motion.section
      ref={ref}
      className={className}
      style={{ opacity, y, scale }}
    >
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {subtitle && (
            <motion.span 
              className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {subtitle}
            </motion.span>
          )}
          {title && (
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {title}
            </motion.h2>
          )}
        </div>
      )}
      {children}
    </motion.section>
  );
}

// Staggered children reveal
interface StaggerRevealProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
}

export function StaggerReveal({ children, className = '', staggerDelay = 0.1 }: StaggerRevealProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.5, 
            delay: index * staggerDelay,
            ease: "easeOut"
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

// Horizontal scroll reveal for cards
interface HorizontalRevealProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  className?: string;
}

export function HorizontalReveal({ children, direction = 'left', className = '' }: HorizontalRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    direction === 'left' ? [-100, 0, 100] : [100, 0, -100]
  );

  return (
    <motion.div ref={ref} className={className} style={{ x }}>
      {children}
    </motion.div>
  );
}
