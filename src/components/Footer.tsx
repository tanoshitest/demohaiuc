import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo, builderTypes } from '@/data/siteData';

const footerLinks = {
  services: [
    { name: 'Decking', href: '/services/decking' },
    { name: 'Home Renovations', href: '/services/home-renovations' },
    { name: 'Kitchen Renovations', href: '/services/kitchen-renovations' },
    { name: 'Bathroom Renovations', href: '/services/bathroom-renovations' },
    { name: 'Laundry Renovations', href: '/services/laundry-renovations' },
    { name: 'Pergola & Outdoor', href: '/services/pergola' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Completed Items', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Warranty Information', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: companyInfo.social.facebook, label: 'Facebook' },
  { icon: Instagram, href: companyInfo.social.instagram, label: 'Instagram' },
  { icon: Linkedin, href: companyInfo.social.linkedin, label: 'LinkedIn' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_1.5fr] gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-heading font-bold text-xl text-background">
                {companyInfo.name}
              </span>
            </Link>
            <p className="text-background/70 text-sm mb-6">
              Building quality homes and renovations across Australia for over 25 years. 
              Licensed, insured, and committed to excellence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-heading font-semibold text-background mb-6">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Builder Type Links */}
          <div>
            <h3 className="font-heading font-semibold text-background mb-6">Builder Type</h3>
            <ul className="space-y-3">
              {builderTypes.map((builder) => (
                <li key={builder.id}>
                  <Link
                    to={`/builder-models/${builder.id}`}
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {builder.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading font-semibold text-background mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-background mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-background/70">
              <li>{companyInfo.address}</li>
              <li>
                <a href={`tel:${companyInfo.phone.split(' - ')[0].replace(/\s/g, '')}`} className="hover:text-accent transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className="hover:text-accent transition-colors">
                  {companyInfo.email}
                </a>
              </li>
              <li>{companyInfo.hours}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-background/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved. 
            Built with ❤️ in Australia.
          </div>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-background/50 hover:text-accent transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-accent-foreground rounded-full shadow-custom-lg flex items-center justify-center hover:bg-accent/90 transition-colors z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
