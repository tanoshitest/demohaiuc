import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { companyInfo } from '@/data/siteData';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Builder Type', href: '/builder-models' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-card/95 backdrop-blur-md shadow-custom-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="flex items-center"
            >
              <span
                className={`font-heading font-bold text-2xl transition-colors ${
                  isScrolled || !isHomePage ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {companyInfo.name}
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium text-sm transition-colors link-underline ${
                  isActiveLink(link.href)
                    ? 'text-accent'
                    : isScrolled || !isHomePage
                    ? 'text-foreground hover:text-accent'
                    : 'text-primary-foreground/90 hover:text-primary-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="hidden lg:flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href={`tel:${companyInfo.phone}`}>
                <Phone className="w-4 h-4 mr-2" />
                Call
              </a>
            </Button>
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/contact">Contact</Link>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled || !isHomePage ? 'text-foreground' : 'text-primary-foreground'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled || !isHomePage ? 'text-foreground' : 'text-primary-foreground'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card rounded-lg shadow-custom-xl mt-2 overflow-hidden"
            >
              <div className="p-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`block font-medium py-2 transition-colors ${
                      isActiveLink(link.href)
                        ? 'text-accent'
                        : 'text-foreground hover:text-accent'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border space-y-3">
                  <Button
                    asChild
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <a href={`tel:${companyInfo.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Link to="/contact">Contact</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
