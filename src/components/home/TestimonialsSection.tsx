import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    position: 'CEO, TechVision India',
    quote: 'Ocavior\'s innovative strategies helped us reach new heights in the Indian market. Our brand visibility increased significantly, leading to a 200% growth in customer engagement.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Sharma',
    position: 'Marketing Director, Fashion House Mumbai',
    quote: 'The creative campaigns designed by Ocavior perfectly captured our brand\'s essence. We\'ve seen remarkable growth in our social media presence and customer base.',
    rating: 5
  },
  {
    id: 3,
    name: 'Amit Patel',
    position: 'Founder, GreenTech Solutions',
    quote: 'Working with Ocavior transformed our business reach. Their strategic approach helped us connect with our target audience effectively, resulting in 150% revenue growth.',
    rating: 5
  },
  {
    id: 4,
    name: 'Neha Gupta',
    position: 'CMO, Wellness India',
    quote: 'Ocavior\'s team understood our vision perfectly. Their innovative campaigns helped us establish a strong presence in the wellness sector across major Indian cities.',
    rating: 4
  },
  {
    id: 5,
    name: 'Vikram Singh',
    position: 'Director, RetailTech India',
    quote: 'The results we\'ve achieved with Ocavior have been outstanding. Our brand recognition has grown exponentially, and we\'ve seen a 90% increase in customer engagement.',
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Get visible testimonials (current and next two)
  const visibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Clients Say</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with Ocavior.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Testimonial cards */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {visibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex-1 border border-gray-100 dark:border-gray-700 ${
                  index === 0 ? 'border-l-4 border-blue-600 dark:border-blue-500' : ''
                }`}
              >
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                
                {/* Client info */}
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;