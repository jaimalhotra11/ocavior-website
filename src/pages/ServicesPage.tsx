import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code, 
  Package, 
  Search, 
  Briefcase, 
  Share2, 
  Cloud, 
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const services = [
  {
    id: 'tech-integration',
    title: 'Technology Integrations',
    description: 'Seamlessly integrate cutting-edge technologies into your existing infrastructure for enhanced performance.',
    icon: Code,
    color: 'from-blue-500 to-blue-600',
    link: '/services/technology-integrations',
    features: [
      'API Development & Integration',
      'Third-party Software Integration',
      'Legacy System Modernization',
      'Custom Software Solutions',
      'Automation & Workflow Integration',
      'Technology Stack Consultation'
    ]
  },
  {
    id: 'product-delivery',
    title: 'Product Delivery',
    description: 'Streamline your product development lifecycle with our efficient delivery and deployment solutions.',
    icon: Package,
    color: 'from-purple-500 to-purple-600',
    link: '/services/product-delivery',
    features: [
      'Agile Project Management',
      'Continuous Integration/Deployment',
      'Quality Assurance & Testing',
      'DevOps Implementation',
      'Product Roadmap Planning',
      'Post-launch Support & Maintenance'
    ]
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Boost your visibility and rank higher on search engines with our data-driven SEO strategies.',
    icon: Search,
    color: 'from-red-500 to-red-600',
    link: '/services/seo',
    features: [
      'Keyword Research & Strategy',
      'On-Page SEO Optimization',
      'Technical SEO Audits',
      'Link Building & Authority Building',
      'Local SEO for Businesses',
      'SEO Performance Tracking'
    ]
  },
  {
    id: 'business-dev',
    title: 'Business Development',
    description: 'Accelerate your business growth with strategic planning, market analysis, and expansion strategies.',
    icon: Briefcase,
    color: 'from-green-500 to-green-600',
    link: '/services/business-development',
    features: [
      'Market Research & Analysis',
      'Competitive Landscape Assessment',
      'Growth Strategy Development',
      'Partnership & Alliance Building',
      'Revenue Stream Diversification',
      'Business Model Optimization'
    ]
  },
  {
    id: 'web-app',
    title: 'Web and App Development',
    description: 'Create seamless and user-friendly web and mobile experiences that engage your audience and drive business growth.',
    icon: Share2,
    color: 'from-yellow-500 to-yellow-600',
    link: '/services/web-app-development',
    features: [
      'Custom Web Development',
      'Mobile App Development (iOS & Android)',
      'UI/UX Design',
      'E-commerce Solutions',
      'Responsive Design',
      'Web and Mobile App Maintenance'
    ]
  },  
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    description: 'Leverage the power of cloud computing for scalable, secure, and cost-effective business operations.',
    icon: Cloud,
    color: 'from-indigo-500 to-indigo-600',
    link: '/services/cloud-solutions',
    features: [
      'Cloud Migration Strategy',
      'AWS/Azure/GCP Implementation',
      'Cloud Infrastructure Management',
      'Serverless Architecture Design',
      'Cloud Security & Compliance',
      'Cost Optimization & Monitoring'
    ]
  }
];

const ServicesPage: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(12,142,231,0.8),rgba(124,51,245,0.8))]"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Our <span className="gradient-text">Services</span></h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive solutions to help your business thrive in the digital landscape
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white dark:bg-dark-900">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-dark-700 rounded-xl shadow-lg overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center gap-4">
                    <service.icon className="w-10 h-10 text-white" />
                    <h2 className="text-2xl font-semibold">{service.title}</h2>
                  </div>
                  <p className="mt-4">{service.description}</p>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-dark-800 dark:text-white">What We Offer</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-dark-600 dark:text-dark-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Solution CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary-900 to-secondary-900 rounded-xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6TTYgNHY2aDZ2LTZINnptMCAzMHY2aDZ2LTZINnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Need a Custom Solution?</h3>
                <p className="text-gray-200 max-w-2xl">
                  Our team of experts can design a tailored solution to meet your specific business needs. Let's discuss how we can help you achieve your goals.
                </p>
              </div>
              <Link
                to="/contact"
                className="btn bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-md inline-flex items-center whitespace-nowrap flex-shrink-0"
              >
                Get in Touch
                <Sparkles className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;