import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold font-display">Ocavior</span>
            </Link>
            <p className="text-dark-100 mb-4">
              Transform your brand with digital excellence. We help businesses grow through innovative digital marketing strategies.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-dark-100 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-dark-100 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-dark-100 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-dark-100 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-dark-100 hover:text-primary-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-dark-100 hover:text-primary-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-dark-100 hover:text-primary-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-dark-100 hover:text-primary-500 transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link to="/blog" className="text-dark-100 hover:text-primary-500 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/careers" className="text-dark-100 hover:text-primary-500 transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark-100 hover:text-primary-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/seo" className="text-dark-100 hover:text-primary-500 transition-colors">SEO & SEM</Link>
              </li>
              <li>
                <Link to="/services/social-media" className="text-dark-100 hover:text-primary-500 transition-colors">Social Media Marketing</Link>
              </li>
              <li>
                <Link to="/services/ppc" className="text-dark-100 hover:text-primary-500 transition-colors">PPC & Google Ads</Link>
              </li>
              <li>
                <Link to="/services/content" className="text-dark-100 hover:text-primary-500 transition-colors">Content Marketing</Link>
              </li>
              <li>
                <Link to="/services/branding" className="text-dark-100 hover:text-primary-500 transition-colors">Branding & Design</Link>
              </li>
              <li>
                <Link to="/services/email" className="text-dark-100 hover:text-primary-500 transition-colors">Email Marketing</Link>
              </li>
              <li>
                <Link to="/services/web-development" className="text-dark-100 hover:text-primary-500 transition-colors">Web Development</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-dark-100 mb-4">
              Get the latest digital marketing insights straight to your inbox.
            </p>
            <form className="flex flex-col space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-md bg-dark-800 border border-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary-500 hover:text-primary-400"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
              <p className="text-xs text-dark-300">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-dark-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-dark-300 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Ocavior Digital Marketing. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-dark-300 hover:text-primary-500 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-dark-300 hover:text-primary-500 text-sm">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-dark-300 hover:text-primary-500 text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;