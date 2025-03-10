import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Clock, 
  BarChart,
  Code,
  Package,
  Search,
  Briefcase,
  Share2,
  Cloud
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'Enterprise Technology Integration for Global Manufacturer',
    description: 'How we helped a manufacturing giant streamline operations by integrating legacy systems with modern cloud solutions.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Technology Integration',
    client: 'TechManufacture Inc.',
    results: [
      '35% reduction in operational costs',
      '60% faster data processing',
      '99.9% system uptime',
      'Seamless integration of 12 legacy systems'
    ],
    icon: Code,
    color: 'from-blue-500 to-blue-600',
    slug: 'enterprise-technology-integration'
  },
  {
    id: 2,
    title: 'Agile Product Delivery Transformation for FinTech Startup',
    description: 'Implementing agile methodologies to accelerate product development and market entry for a disruptive fintech solution.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Product Delivery',
    client: 'PayFast Solutions',
    results: [
      '40% faster time-to-market',
      '75% reduction in development bugs',
      'Successful launch in 3 new markets',
      'Increased team productivity by 50%'
    ],
    icon: Package,
    color: 'from-purple-500 to-purple-600',
    slug: 'agile-product-delivery-transformation'
  },
  {
    id: 3,
    title: 'SEO Optimization Campaign for E-commerce Platform',
    description: 'Comprehensive SEO strategy that dramatically increased organic traffic and conversions for a growing e-commerce business.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'SEO Optimization',
    client: 'ShopEasy',
    results: [
      '180% increase in organic traffic',
      '156% growth in organic conversions',
      'Top 3 rankings for 45 target keywords',
      '65% reduction in bounce rate'
    ],
    icon: Search,
    color: 'from-red-500 to-red-600',
    slug: 'seo-optimization-campaign'
  },
  {
    id: 4,
    title: 'Business Development Strategy for Healthcare Provider',
    description: 'Strategic market expansion and service diversification plan that enabled significant growth for a regional healthcare provider.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Business Development',
    client: 'MediCare Plus',
    results: [
      '120% revenue growth in 18 months',
      'Successful expansion to 5 new locations',
      '3 new service lines implemented',
      '45% increase in patient satisfaction'
    ],
    icon: Briefcase,
    color: 'from-green-500 to-green-600',
    slug: 'business-development-strategy'
  },
  {
    id: 5,
    title: 'Social Media Marketing Campaign for Consumer Brand',
    description: 'Innovative social media strategy that revitalized brand image and engaged a younger demographic for an established consumer goods company.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    category: 'Social Media Marketing',
    client: 'HomeGoods Co.',
    results: [
      '300% increase in social engagement',
      '210% growth in follower base',
      '25% increase in sales from social channels',
      '15M+ impressions across platforms'
    ],
    icon: Share2,
    color: 'from-yellow-500 to-yellow-600',
    slug: 'social-media-marketing-campaign'
  },
  {
    id: 6,
    title: 'Cloud Migration for Enterprise Financial Services',
    description: 'Secure and efficient migration of critical financial systems to cloud infrastructure, improving scalability and reducing operational costs.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Cloud Solutions',
    client: 'Global Finance Corp',
    results: [
      '40% reduction in IT infrastructure costs',
      '99.99% uptime achievement',
      '70% faster disaster recovery',
      'Enhanced security compliance'
    ],
    icon: Cloud,
    color: 'from-indigo-500 to-indigo-600',
    slug: 'cloud-migration-financial-services'
  }
];

const categories = [
  'All',
  'Technology Integration',
  'Product Delivery',
  'SEO Optimization',
  'Business Development',
  'Social Media Marketing',
  'Cloud Solutions'
];

const CaseStudiesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCaseStudies = activeCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(12,142,231,0.8),rgba(124,51,245,0.8))]"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Our <span className="gradient-text">Case Studies</span></h1>
            <p className="text-xl text-gray-300 mb-8">
              Real results for real businesses. Explore how we've helped our clients achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Content */}
      <section className="section bg-white dark:bg-dark-900">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-dark-200 hover:bg-gray-200 dark:hover:bg-dark-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Case Study */}
          {filteredCaseStudies.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={filteredCaseStudies[0].image} 
                    alt={filteredCaseStudies[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                    {filteredCaseStudies[0].category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${filteredCaseStudies[0].color} flex items-center justify-center mr-3`}>
                      {React.createElement(filteredCaseStudies[0].icon, { className: "w-5 h-5 text-white" })}
                    </div>
                    <h3 className="text-sm font-medium text-dark-500 dark:text-dark-300">
                      Client: {filteredCaseStudies[0].client}
                    </h3>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{filteredCaseStudies[0].title}</h2>
                  <p className="text-dark-600 dark:text-dark-200 mb-6">{filteredCaseStudies[0].description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {filteredCaseStudies[0].results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <TrendingUp className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-dark-600 dark:text-dark-200">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={`/case-studies/${filteredCaseStudies[0].slug}`}
                    className="btn btn-primary px-6 py-3 rounded-md inline-flex items-center"
                  >
                    View Full Case Study
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Case Studies Grid */}
          {filteredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.slice(1).map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                      {study.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${study.color} flex items-center justify-center mr-2`}>
                        {React.createElement(study.icon, { className: "w-4 h-4 text-white" })}
                      </div>
                      <h3 className="text-sm font-medium text-dark-500 dark:text-dark-300">
                        {study.client}
                      </h3>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                    <p className="text-dark-600 dark:text-dark-200 mb-4 line-clamp-3">{study.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <TrendingUp className="w-4 h-4 text-primary-500 mr-1 flex-shrink-0 mt-0.5" />
                            <span className="text-dark-600 dark:text-dark-200">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      to={`/case-studies/${study.slug}`}
                      className="text-primary-600 dark:text-primary-400 font-medium hover:underline inline-flex items-center"
                    >
                      View Case Study
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No case studies found</h3>
              <p className="text-dark-600 dark:text-dark-200">
                Try selecting a different category to see more case studies.
              </p>
            </div>
          )}

          {/* Stats Section */}
          <div className="mt-20">
  <div className="text-center max-w-3xl mx-auto mb-12">
    <h2 className="heading-lg mb-4">
      Our Impact <span className="gradient-text">By Numbers</span>
    </h2>
    <p className="text-dark-600 dark:text-dark-200 text-lg">
      We measure our success by the results we deliver for our clients.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    
    <div className="bg-white dark:bg-dark-700 rounded-xl p-6 text-center shadow-md">
      <div className="w-16 h-16 rounded-full bg-primary-50 dark:bg-dark-600 flex items-center justify-center mx-auto mb-4">
        <TrendingUp className="w-8 h-8 text-primary-600 dark:text-primary-400" />
      </div>
      <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">250%</h3>
      <p className="text-dark-600 dark:text-dark-300">Average ROI</p>
    </div>

    <div className="bg-white dark:bg-dark-700 rounded-xl p-6 text-center shadow-md">
      <div className="w-16 h-16 rounded-full bg-primary-50 dark:bg-dark-600 flex items-center justify-center mx-auto mb-4">
        <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
      </div>
      <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">100+</h3>
      <p className="text-dark-600 dark:text-dark-300">Satisfied Clients</p>
    </div>

    <div className="bg-white dark:bg-dark-700 rounded-xl p-6 text-center shadow-md">
      <div className="w-16 h-16 rounded-full bg-primary-50 dark:bg-dark-600 flex items-center justify-center mx-auto mb-4">
        <Clock className="w-8 h-8 text-primary-600 dark:text-primary-400" />
      </div>
      <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">15+</h3>
      <p className="text-dark-600 dark:text-dark-300">Years Experience</p>
    </div>

    <div className="bg-white dark:bg-dark-700 rounded-xl p-6 text-center shadow-md">
      <div className="w-16 h-16 rounded-full bg-primary-50 dark:bg-dark-600 flex items-center justify-center mx-auto mb-4">
        <BarChart className="w-8 h-8 text-primary-600 dark:text-primary-400" />
      </div>
      <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">180%</h3>
      <p className="text-dark-600 dark:text-dark-300">Avg. Traffic Growth</p>
    </div>
    
  </div>
</div>


          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-primary-900 to-secondary-900 rounded-xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6TTYgNHY2aDZ2LTZINnptMCAzMHY2aDZ2LTZINnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to Achieve Similar Results?</h3>
                <p className="text-gray-200 max-w-2xl">
                  Let's discuss how our expertise can help your business grow. Schedule a free consultation with our team today.
                </p>
              </div>
              <Link
                to="/contact"
                className="btn bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-md inline-flex items-center whitespace-nowrap flex-shrink-0"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudiesPage;