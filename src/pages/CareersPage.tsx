import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Users, 
  Clock, 
  Heart, 
  Coffee, 
  Laptop, 
  Zap,
  Mail,
  ArrowRight
} from 'lucide-react';

const openPositions = [
  {
    id: 1,
    title: 'Senior SEO Specialist',
    department: 'Digital Marketing',
    location: 'Bangalore, India',
    salary: '₹12,00,000 - ₹18,00,000 per annum',
    requirements: [
      '4+ years in SEO',
      'Experience with Ahrefs, SEMrush',
      'Strong analytical skills',
      'Excellent communication'
    ]
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    department: 'Technology',
    location: 'Bangalore, India',
    salary: '₹14,00,000 - ₹22,00,000 per annum',
    requirements: [
      '3+ years in full stack development',
      'Proficiency in React, Node.js',
      'Experience with cloud services',
      'Problem-solving skills'
    ]
  }
];

const benefits = [
  { icon: DollarSign, title: 'Competitive Salary', desc: 'Industry-leading compensation.' },
  { icon: Heart, title: 'Health Insurance', desc: 'Comprehensive coverage for family.' },
  { icon: Clock, title: 'Flexible Hours', desc: 'Work-life balance support.' },
  { icon: Coffee, title: 'Remote Work', desc: 'Hybrid work model available.' },
  { icon: Laptop, title: 'Latest Equipment', desc: 'Best tools for your work.' },
  { icon: Zap, title: 'Professional Growth', desc: 'Learning & career advancement.' }
];

const CareersPage: React.FC = () => {
  return (
    <main className="bg-white dark:bg-dark-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(12,142,231,0.8),rgba(124,51,245,0.8))]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Join Our <span className="text-blue-500">Team</span></h1>
            <p className="text-xl text-gray-300 mb-8">
              Build your career with us and shape the future of digital innovation
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Join <span className="text-blue-500">Ocavior</span></h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We're building a team of passionate professionals who are excited about creating exceptional digital experiences. Here's why you should join us:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-gray-700 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Open <span className="text-blue-500">Positions</span></h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore our current job openings and find the perfect role for your skills and passion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span className="mr-4">{position.department}</span>
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{position.location}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <DollarSign className="w-5 h-5 text-blue-500 mr-2" />
                      <span className="font-semibold">Salary Range:</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 ml-7">{position.salary}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-blue-500 mr-2" />
                      <span className="font-semibold">Requirements:</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-7 space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Don't see a position that matches your skills?
            </p>
            <a 
              href="mailto:careers@ocavior.com" 
              className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md transition-colors font-medium"
            >
              Send Us Your Resume
              <Mail className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our <span className="text-blue-500">Culture</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                At Ocavior, we foster a culture of innovation, collaboration, and continuous learning. We believe in empowering our team members to take ownership of their work and make a meaningful impact.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Our values guide everything we do:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-gray-700 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Excellence</h3>
                    <p className="text-gray-600 dark:text-gray-300">We strive for excellence in everything we do, delivering exceptional results for our clients and creating opportunities for our team.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-gray-700 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Innovation</h3>
                    <p className="text-gray-600 dark:text-gray-300">We embrace creativity and forward-thinking, constantly exploring new ideas and approaches to solve complex challenges.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-gray-700 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Collaboration</h3>
                    <p className="text-gray-600 dark:text-gray-300">We believe in the power of teamwork, fostering an inclusive environment where diverse perspectives are valued and respected.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Ocavior team collaboration"
                className="relative rounded-2xl w-full h-auto shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Application <span className="text-blue-500">Process</span></h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our hiring process is designed to be transparent, efficient, and respectful of your time. Here's what you can expect:
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Process line */}
            <div className="absolute left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

            <div className="space-y-12">
              {[
                {
                  title: 'Application Review',
                  description: 'We carefully review your application and resume to assess your qualifications and experience.'
                },
                {
                  title: 'Initial Screening',
                  description: 'If your profile matches our requirements, our HR team will contact you for an initial phone or video screening.'
                },
                {
                  title: 'Technical Assessment',
                  description: 'Depending on the role, you may be asked to complete a technical assessment or case study to demonstrate your skills.'
                },
                {
                  title: 'Team Interviews',
                  description: 'You will meet with potential team members and managers to discuss your experience, skills, and fit with our culture.'
                },
                {
                  title: 'Final Decision',
                  description: 'We will make a decision and extend an offer to the selected candidate, followed by onboarding and integration into our team.'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 border-4 border-blue-500 z-10 flex items-center justify-center mr-8 flex-shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">{index + 1}</span>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md flex-grow">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6TTYgNHY2aDZ2LTZINnptMCAzMHY2aDZ2LTZINnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Explore our open positions and take the next step in your career journey with Ocavior.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="inline-flex items-center px-6 py-3 bg-white text-blue-700 hover:bg-gray-100 rounded-md transition-colors font-medium">
              View Open Positions
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="mailto:careers@ocavior.com" className="inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white/10 rounded-md transition-colors font-medium">
              Contact Recruiting Team
              <Mail className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;