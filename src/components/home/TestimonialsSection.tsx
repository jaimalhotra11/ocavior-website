import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Michael Roberts',
    position: 'CEO, Innovate Tech',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    quote: 'Ocavior\'s SEO strategies increased our organic traffic by 180% in just 6 months. Their team is responsive, knowledgeable, and truly invested in our success.',
    rating: 5
  },
  {
    id: 2,
    name: 'Emily Chen',
    position: 'Marketing Director, StyleHouse',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    quote: 'The social media campaign Ocavior created for our brand launch exceeded all expectations. We saw a 300% increase in engagement and a significant boost in sales.',
    rating: 5
  },
  {
    id: 3,
    name: 'David Wilson',
    position: 'Founder, EcoSolutions',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    quote: 'Working with Ocavior has been transformative for our business. Their PPC campaigns delivered a 250% ROI, and their strategic guidance has been invaluable.',
    rating: 5
  },
  {
    id: 4,
    name: 'Sophia Martinez',
    position: 'CMO, HealthPlus',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    quote: 'Ocavior\'s content marketing strategy helped us establish authority in a competitive industry. Their team consistently delivers high-quality work that resonates with our audience.',
    rating: 4
  },
  {
    id: 5,
    name: 'James Thompson',
    position: 'Director, Global Retail',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    quote: 'The website redesign and SEO work by Ocavior increased our conversion rate by 75%. Their holistic approach to digital marketing has been a game-changer for our business.',
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
    <section className="section bg-white dark:bg-dark-900 overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">What Our <span className="gradient-text">Clients Say</span></h2>
          <p className="text-dark-600 dark:text-dark-200 text-lg">
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
                className={`card p-6 flex-1 ${index === 0 ? 'border-l-4 border-primary-500' : ''}`}
              >
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-dark-600 dark:text-dark-200 mb-6 italic">"{testimonial.quote}"</p>
                
                {/* Client info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-dark-500 dark:text-dark-300 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-dark-100 dark:bg-dark-700 hover:bg-primary-50 dark:hover:bg-dark-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-dark-600 dark:text-dark-200" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-dark-100 dark:bg-dark-700 hover:bg-primary-50 dark:hover:bg-dark-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-dark-600 dark:text-dark-200" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;