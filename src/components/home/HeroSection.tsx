import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const services = [
    'Technology Integrations',
    'Product Delivery',
    'SEO Optimization',
    'Business Development',
    'Web Design',
    'Cloud Solutions'
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(12,142,231,0.8),rgba(124,51,245,0.8))]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6TTYgNHY2aDZ2LTZINnptMCAzMHY2aDZ2LTZINnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="heading-xl text-white mb-6">
            Your Gateway to {' '}
              <span className="gradient-text">Digital Evolution</span>
            </h1>
            
            <div className="relative h-[30px] overflow-hidden mb-8">
              <div className="animate-text-slide">
                {services.map((service, index) => (
                  <div key={index} className="h-[30px] flex items-center justify-center lg:justify-start">
                    <span className="text-xl text-primary-400 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-dark-100 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
            We help businesses thrive through innovative strategies, data-driven campaigns, and creative solutions that deliver measurable results.
</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="btn btn-primary px-6 py-3 rounded-md text-base font-medium"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/case-studies"
                className="btn btn-outline text-white px-6 py-3 rounded-md text-base font-medium"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
          
          {/* Hero image/animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-30 animate-pulse"></div>
              <div className="relative bg-dark-800 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Digital marketing dashboard"
                  className="w-full h-auto rounded-2xl"
                />
                
                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-900/90 to-dark-900/0 p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-primary-400 text-2xl font-bold">+250%</p>
                      <p className="text-dark-100 text-sm">ROI</p>
                    </div>
                    <div>
                      <p className="text-primary-400 text-2xl font-bold">+180%</p>
                      <p className="text-dark-100 text-sm">Traffic</p>
                    </div>
                    <div>
                      <p className="text-primary-400 text-2xl font-bold">+320%</p>
                      <p className="text-dark-100 text-sm">Conversions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-white dark:bg-dark-700 rounded-lg shadow-lg p-3 animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">Campaign Active</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-dark-700 rounded-lg shadow-lg p-3 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                <span className="text-sm font-medium">Analytics Tracking</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;