import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Target, Lightbulb, Users, Code, Globe, Cpu } from 'lucide-react';

const AboutPage: React.FC = () => {
  const {} = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(12,142,231,0.8),rgba(124,51,245,0.8))]"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">About <span className="gradient-text">Ocavior</span></h1>
            <p className="text-xl text-gray-300 mb-8">
              We're a team of digital solutions experts passionate about helping businesses grow through innovative strategies and data-driven solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section bg-white dark:bg-dark-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Who We Are</h2>
              <p className="text-dark-600 dark:text-dark-200 text-lg mb-6">
                Founded in 2015, Ocavior has grown from a small startup to a leading digital solutions agency serving clients worldwide. Our journey has been driven by a simple philosophy: deliver measurable results that help our clients succeed.
              </p>
              <p className="text-dark-600 dark:text-dark-200 text-lg mb-6">
                We combine technical expertise with creative thinking to develop marketing strategies that not only look good but perform exceptionally well. Our team of specialists across SEO, PPC, social media, content, and web development work collaboratively to deliver integrated solutions.
              </p>
              <p className="text-dark-600 dark:text-dark-200 text-lg">
                What sets us apart is our commitment to transparency, data-driven decision making, and a genuine passion for our clients' success. We don't just execute campaigns; we build partnerships.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Ocavior team collaboration"
                className="relative rounded-2xl w-full h-auto shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-gray-50 dark:bg-dark-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-dark-700 rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 rounded-lg bg-primary-50 dark:bg-dark-600 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-dark-600 dark:text-dark-300">
                To empower businesses with innovative digital solution strategies that drive growth, build brand authority, and deliver measurable ROI. We're committed to transparency, continuous learning, and exceeding client expectations.
              </p>
            </div>
            <div className="bg-white dark:bg-dark-700 rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 rounded-lg bg-primary-50 dark:bg-dark-600 flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-dark-600 dark:text-dark-300">
                To be the most trusted digital solution partner for businesses worldwide, known for our innovative approach, exceptional results, and commitment to client success. We aim to set new standards in the industry through continuous innovation and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Impact */}
      <section className="section bg-white dark:bg-dark-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Our Development <span className="gradient-text">Impact</span></h2>
            <p className="text-dark-600 dark:text-dark-200 text-lg">
              Numbers that reflect our commitment to excellence in digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-dark-700 dark:to-dark-600 rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-white dark:bg-dark-800 rounded-full flex items-center justify-center shadow-md">
                <Globe className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-primary-700 dark:text-primary-400">200+</h3>
              <p className="text-xl font-semibold mb-2">Websites Launched</p>
              <p className="text-dark-500 dark:text-dark-300">From simple landing pages to complex web applications</p>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-dark-700 dark:to-dark-600 rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-white dark:bg-dark-800 rounded-full flex items-center justify-center shadow-md">
                <Cpu className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-secondary-700 dark:text-secondary-400">50+</h3>
              <p className="text-xl font-semibold mb-2">Mobile Apps</p>
              <p className="text-dark-500 dark:text-dark-300">Cross-platform applications delivering unique experiences</p>
            </div>

            <div className="bg-gradient-to-br from-tertiary-50 to-tertiary-100 dark:from-dark-700 dark:to-dark-600 rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-white dark:bg-dark-800 rounded-full flex items-center justify-center shadow-md">
                <Code className="w-8 h-8 text-tertiary-600 dark:text-tertiary-400" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-tertiary-700 dark:text-tertiary-400">1M+</h3>
              <p className="text-xl font-semibold mb-2">Lines of Code</p>
              <p className="text-dark-500 dark:text-dark-300">Crafted with precision and best practices</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-dark-600 dark:text-dark-300">
              Every project is a testament to our commitment to quality and innovation. 
              Our solutions have helped businesses across 30+ countries achieve their digital goals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;