import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, Megaphone } from 'lucide-react';

const MarketingServices = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Our Marketing Solutions
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 text-lg max-w-2xl mx-auto">
          Transform your digital presence with our cutting-edge marketing services
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <Link
            to="/social-marketing"
            className="group transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 h-full shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Share2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Social Media Marketing
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Boost your brand's presence across social media platforms with our expert strategies
                  and engaging content creation services. Drive meaningful engagement and grow your audience.
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  Explore Services
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </div>
          </Link>

          <Link
            to="/digital-marketing"
            className="group transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 h-full shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
              <div className="p-8">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Megaphone className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Digital Marketing
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Comprehensive digital marketing solutions to help your business grow online through
                  SEO, PPC, content marketing, and data-driven strategies that deliver results.
                </p>
                <div className="flex items-center text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300">
                  Explore Services
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MarketingServices;