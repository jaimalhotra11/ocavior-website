import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(12,142,231,0.8),rgba(124,51,245,0.8))]"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Get In <span className="gradient-text">Touch</span></h1>
            <p className="text-xl text-gray-300 mb-8">
              Have a question or ready to start your next project? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-white dark:bg-dark-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-dark-800 rounded-xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-600 dark:text-dark-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-600 dark:text-dark-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-dark-600 dark:text-dark-300 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-dark-600 dark:text-dark-300 mb-1">
                    Service You're Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="tech-integration">Technology Integration</option>
                    <option value="product-delivery">Product Delivery</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="business-dev">Business Development</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="cloud">Cloud Solutions</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-600 dark:text-dark-300 mb-1">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Share your goals and challenges..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn btn-primary py-3 rounded-md font-medium flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-dark-800 rounded-xl shadow-xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-50 dark:bg-dark-700 flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-dark-500 dark:text-dark-400 mb-1">Email Us</p>
                      <a href="mailto:hello@ocavior.com" className="text-dark-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        contact@ocavior.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-50 dark:bg-dark-700 flex items-center justify-center mr-4">
                      <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-dark-500 dark:text-dark-400 mb-1">Call Us</p>
                      <a href="tel:+919876543210" className="text-dark-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        +91 8960314841
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-50 dark:bg-dark-700 flex items-center justify-center mr-4">
                      <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-dark-500 dark:text-dark-400 mb-1">Visit Us</p>
                      <p className="text-dark-800 dark:text-white">
                      133/11/p-1, Transport Nagar,Kanpur, Uttar Pradesh 208023 

                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-50 dark:bg-dark-700 flex items-center justify-center mr-4">
                      <Clock className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-dark-500 dark:text-dark-400 mb-1">Business Hours</p>
                      <p className="text-dark-800 dark:text-white">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-dark-800 rounded-xl shadow-xl p-8">
                <div className="border-t border-gray-200 dark:border-dark-700 pt-6">
                  <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-50 dark:bg-dark-700 flex items-center justify-center hover:bg-primary-100 dark:hover:bg-dark-600 transition-colors">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-50 dark:bg-dark-700 flex items-center justify-center hover:bg-primary-100 dark:hover:bg-dark-600 transition-colors">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-50 dark:bg-dark-700 flex items-center justify-center hover:bg-primary-100 dark:hover:bg-dark-600 transition-colors">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-50 dark:bg-dark-700 flex items-center justify-center hover:bg-primary-100 dark:hover:bg-dark-600 transition-colors">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50 dark:bg-dark-800">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Find Us</h2>
            <p className="text-dark-600 dark:text-dark-200 text-lg">
              Visit our office or schedule a meeting with our team.
            </p>
          </div>

          <div className="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-xl h-[400px] relative">
            {/* Placeholder for Google Maps */}
            <div className="absolute inset-0 bg-gray-200 dark:bg-dark-600 flex items-center justify-center">
              <p className="text-dark-500 dark:text-dark-300">Google Maps would be embedded here</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;