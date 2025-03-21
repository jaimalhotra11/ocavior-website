import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  TrendingUp, 
  Users, 
  Award, 
  Clock, 
  BarChart, 
  Shield 
} from 'lucide-react';

const reasons = [
  {
    id: 'results',
    title: 'Data-Driven Results',
    description: 'We focus on measurable outcomes and ROI for every campaign we run.',
    icon: TrendingUp,
    stat: '250%',
    statText: 'Average ROI'
  },
  {
    id: 'expertise',
    title: 'Expert Team',
    description: 'Our specialists have years of experience across all digital marketing channels.',
    icon: Users,
    stat: '15+',
    statText: 'Years Experience'
  },
  {
    id: 'quality',
    title: 'Award-Winning Work',
    description: 'Our campaigns have been recognized for their creativity and effectiveness.',
    icon: Award,
    stat: '20+',
    statText: 'Industry Awards'
  },
  {
    id: 'support',
    title: '24/7 Support',
    description: 'We are always available to address your concerns and answer your questions.',
    icon: Clock,
    stat: '99%',
    statText: 'Client Satisfaction'
  },
  {
    id: 'reporting',
    title: 'Transparent Reporting',
    description: 'Get detailed insights into your campaign performance with our custom dashboards.',
    icon: BarChart,
    stat: '100M+',
    statText: 'Ad Spend Managed'
  },
  {
    id: 'security',
    title: 'Data Security',
    description: 'Your data is safe with us. We follow strict security protocols and compliance standards.',
    icon: Shield,
    stat: '100%',
    statText: 'Secure Process'
  }
];

const WhyChooseUs: React.FC = () => {
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
    <section className="section bg-gray-50 dark:bg-dark-800">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Why Choose <span className="gradient-text">Ocavior</span></h2>
          <p className="text-dark-600 dark:text-dark-200 text-lg">
            We're not just another digital marketing agency. Here's what sets us apart and why businesses trust us with their growth.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              variants={itemVariants}
              className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-6 relative overflow-hidden group"
            >
              {/* Background gradient that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 dark:bg-dark-600 flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-bold text-primary-600 dark:text-primary-400">{reason.stat}</span>
                    <span className="text-sm text-dark-500 dark:text-dark-300">{reason.statText}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-dark-600 dark:text-dark-300">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
       
      </div>
    </section>
  );
};

export default WhyChooseUs;