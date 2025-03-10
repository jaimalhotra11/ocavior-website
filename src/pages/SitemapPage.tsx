import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Info, 
  Briefcase, 
  Phone, 
  FileText, 
  Shield, 
  Map, 
  Users, 
  Code, 
  Package, 
  Search, 
  Share2, 
  Cloud 
} from 'lucide-react';

const SitemapPage: React.FC = () => {
  const mainPages = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: Info },
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'Case Studies', path: '/case-studies', icon: FileText },
    { name: 'Blog', path: '/blog', icon: FileText },
    { name: 'Contact', path: '/contact', icon: Phone },
    { name: 'Careers', path: '/careers', icon: Users },
  ];

  const servicePages = [
    { name: 'Technology Integrations', path: '/services/technology-integrations', icon: Code },
    { name: 'Product Delivery', path: '/services/product-delivery', icon: Package },
    { name: 'SEO Optimization', path: '/services/seo', icon: Search },
    { name: 'Business Development', path: '/services/business-development', icon: Briefcase },
    { name: 'Social Media Marketing', path: '/services/social-media', icon: Share2 },
    { name: 'Cloud Solutions', path: '/services/cloud-solutions', icon: Cloud },
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy-policy', icon: Shield },
    { name: 'Terms of Service', path: '/terms-of-service', icon: FileText },
    { name: 'Sitemap', path: '/sitemap', icon: Map },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(12,142,231,0.8),rgba(124,51,245,0.8))]"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6"><span className="gradient-text">Sitemap</span></h1>
            <p className="text-xl text-gray-300 mb-8">
              Find your way around our website
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="section bg-white dark:bg-dark-900">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Main Pages */}
              <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-200 dark:border-dark-700">Main Pages</h2>
                <ul className="space-y-4">
                  {mainPages.map((page) => (
                    <li key={page.path}>
                      <Link to={page.path} className="flex items-center text-dark-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        <page.icon className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400" />
                        <span>{page.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Pages */}
              <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-200 dark:border-dark-700">Services</h2>
                <ul className="space-y-4">
                  {servicePages.map((page) => (
                    <li key={page.path}>
                      <Link to={page.path} className="flex items-center text-dark-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        <page.icon className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400" />
                        <span>{page.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Pages */}
              <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-200 dark:border-dark-700">Legal</h2>
                <ul className="space-y-4">
                  {legalPages.map((page) => (
                    <li key={page.path}>
                      <Link to={page.path} className="flex items-center text-dark-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        <page.icon className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400" />
                        <span>{page.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-dark-600 dark:text-dark-300 mb-6">
                Can't find what you're looking for? Feel free to contact us.
              </p>
              <Link to="/contact" className="btn btn-primary px-6 py-3 rounded-md inline-flex items-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SitemapPage;