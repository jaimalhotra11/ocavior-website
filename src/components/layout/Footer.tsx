import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black text-gray-600 dark:text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 text-gray-900 dark:text-white">
              <Zap className="h-8 w-8 text-blue-600 dark:text-blue-500" />
              <span className="text-2xl font-bold">Ocavior</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Transform your brand with digital excellence. We help businesses grow through innovative digital marketing strategies.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: '/', text: 'Home' },
                { to: '/about', text: 'About Us' },
                { to: '/services', text: 'Services' },
                { to: '/case-studies', text: 'Case Studies' },
                { to: '/careers', text: 'Careers' },
                { to: '/contact', text: 'Contact' }
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-sm hover:text-blue-600 dark:hover:text-blue-500 transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-500 mt-0.5" />
                <span className="text-sm">133/11/p-1, Transport Nagar,Kanpur, Uttar Pradesh 208023</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-500" />
                <span className="text-sm">+91 8960314841</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-500" />
                <span className="text-sm">contact@ocavior.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Newsletter</h3>
            <p className="text-sm mb-4">
              Get the latest digital marketing insights straight to your inbox.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-sm"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {currentYear} Ocavior Digital Marketing. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              {[
                { to: '/privacy-policy', text: 'Privacy Policy' },
                { to: '/terms-of-service', text: 'Terms of Service' },
                { to: '/sitemap', text: 'Sitemap' }
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;