import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Target, Lightbulb, Users, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      bio: 'With over 15 years of experience in digital marketing, Alex founded Ocavior with a vision to transform how businesses approach digital growth.'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      position: 'Head of SEO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      bio: 'Sarah is an SEO expert with a proven track record of helping businesses achieve top rankings and drive organic traffic growth.'
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      bio: 'Michael leads our creative team, bringing innovative design thinking and brand strategy to every client project.'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      position: 'Social Media Strategist',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      bio: 'Emily specializes in creating engaging social media campaigns that build community and drive meaningful engagement.'
    }
  ];

  const milestones = [
    {
      year: '2015',
      title: 'Founded',
      description: 'Ocavior was founded with a mission to deliver data-driven digital marketing solutions.'
    },
    {
      year: '2017',
      title: 'First Major Client',
      description: 'Partnered with a Fortune 500 company, delivering a 300% ROI on their digital campaigns.'
    },
    {
      year: '2019',
      title: 'Team Expansion',
      description: 'Grew to a team of 25 specialists across SEO, PPC, content, and design.'
    },
    {
      year: '2020',
      title: 'Industry Recognition',
      description: 'Won "Digital Agency of the Year" at the Marketing Excellence Awards.'
    },
    {
      year: '2022',
      title: 'Global Reach',
      description: 'Expanded operations to serve clients across North America, Europe, and Asia.'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Launched our digital marketing innovation lab focused on AI and automation.'
    }
  ];

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

      {/* Team Section */}
      <section className="section bg-white dark:bg-dark-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Meet Our <span className="gradient-text">Team</span></h2>
            <p className="text-dark-600 dark:text-dark-200 text-lg">
              Our diverse team of experts brings together years of experience and a passion for digital excellence.
            </p>
          </div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-md group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">{member.position}</p>
                  <p className="text-dark-600 dark:text-dark-300 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <a href="/careers" className="btn btn-primary px-6 py-3 rounded-md inline-flex items-center">
              Join Our Team
              <Users className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section bg-gray-50 dark:bg-dark-800">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Our <span className="gradient-text">Journey</span></h2>
            <p className="text-dark-600 dark:text-dark-200 text-lg">
              Key milestones that have shaped our growth and success over the years.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>

            <div className="relative z-10">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className={`bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md ${
                      index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                    }`}>
                      <span className="text-sm font-bold text-primary-600 dark:text-primary-400 block mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-dark-600 dark:text-dark-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-dark-700 border-4 border-primary-500 z-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section bg-white dark:bg-dark-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Awards & <span className="gradient-text">Recognition</span></h2>
            <p className="text-dark-600 dark:text-dark-200 text-lg">
              Our work has been recognized by leading industry organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <Award className="w-full h-full text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Agency of the Year</h3>
              <p className="text-dark-500 dark:text-dark-400 mb-2">Marketing Excellence Awards</p>
              <p className="text-dark-600 dark:text-dark-300">2022</p>
            </div>
            <div className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <Award className="w-full h-full text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Best SEO Campaign</h3>
              <p className="text-dark-500 dark:text-dark-400 mb-2">Search Marketing Awards</p>
              <p className="text-dark-600 dark:text-dark-300">2021</p>
            </div>
            <div className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <Award className="w-full h-full text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation in Social Media</h3>
              <p className="text-dark-500 dark:text-dark-400 mb-2">Digital Innovation Awards</p>
              <p className="text-dark-600 dark:text-dark-300">2020</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;