import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Package, 
  Search, 
  Briefcase, 
  Share2, 
  Cloud, 
  Sparkles,
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    id: 'tech-integration',
    title: 'Technology Integrations',
    description: 'Seamlessly integrate cutting-edge technologies into your existing infrastructure for enhanced performance.',
    icon: Code,
    color: 'from-blue-500 to-blue-600',
    link: '/services/technology-integrations'
  },
  {
    id: 'product-delivery',
    title: 'Product Delivery',
    description: 'Streamline your product development lifecycle with our efficient delivery and deployment solutions.',
    icon: Package,
    color: 'from-purple-500 to-purple-600',
    link: '/services/product-delivery'
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Boost your visibility and rank higher on search engines with our data-driven SEO strategies.',
    icon: Search,
    color: 'from-red-500 to-red-600',
    link: '/services/seo'
  },
  {
    id: 'business-dev',
    title: 'Business Development',
    description: 'Accelerate your business growth with strategic planning, market analysis, and expansion strategies.',
    icon: Briefcase,
    color: 'from-green-500 to-green-600',
    link: '/services/business-development'
  },
  {
    id: 'social',
    title: 'Web and App Development',
    description: 'Engage your audience and build brand loyalty with website and application development.',
    icon: Share2,
    color: 'from-yellow-500 to-yellow-600',
    link: '/services/social-media'
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    description: 'Leverage the power of cloud computing for scalable, secure, and cost-effective business operations.',
    icon: Cloud,
    color: 'from-indigo-500 to-indigo-600',
    link: '/services/cloud-solutions'
  }
];

const ServicesSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section bg-white dark:bg-dark-900" id="services">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Our Growth Solutions <span className="gradient-text">Services</span></h2>
          <p className="text-dark-600 dark:text-dark-200 text-lg">
          We offer a comprehensive suite of services to help your business grow and succeed online.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="card p-6 group hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-dark-600 dark:text-dark-300 mb-4">{service.description}</p>
              
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12 space-y-4">
          <Link 
            to="/services" 
            className="btn btn-primary px-6 py-3 rounded-md inline-flex items-center"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          
          <div className="mt-8">
            <Link 
              to="/contact" 
              className="btn btn-outline border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-dark-700 px-6 py-3 rounded-md inline-flex items-center"
            >
              Need a Custom Solution?
              <Sparkles className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;