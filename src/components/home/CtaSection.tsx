import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const CtaSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-secondary-900" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your <span className="text-primary-300">Digital Presence?</span></h2>
            <p className="text-lg mb-8 text-gray-200">
              Let's discuss how our digital marketing expertise can help your business grow. Schedule a free consultation with our team today.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-primary-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Email Us</p>
                  <a href="mailto:hello@ocavior.com" className="text-white hover:text-primary-300 transition-colors">
                    hello@ocavior.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-primary-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Call Us</p>
                  <a href="tel:+919876543210" className="text-white hover:text-primary-300 transition-colors">
                    +91 9876 543 210
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/80 backdrop-blur-sm rounded-xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Get a Free Consultation</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                  Service You're Interested In
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="tech-integration">Technology Integration</option>
                  <option value="product-delivery">Product Delivery</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="business-dev">Business Development</option>
                  <option value="social">Web and App development</option>
                  <option value="cloud">Cloud Solutions</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">
                  Monthly Budget
                </label>
                
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Share your goals and challenges..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-md font-medium flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                Let's Talk
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>

              <p className="text-xs text-gray-400 text-center">
                By submitting this form, you agree to our{' '}
                <Link to="/privacy-policy" className="text-primary-400 hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;