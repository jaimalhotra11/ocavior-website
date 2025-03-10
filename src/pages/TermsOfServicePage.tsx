import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Clock } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(12,142,231,0.8),rgba(124,51,245,0.8))]"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Terms of <span className="gradient-text">Service</span></h1>
            <p className="text-xl text-gray-300 mb-8">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-white dark:bg-dark-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
                <div>
                  <h2 className="text-2xl font-bold">Terms and Conditions</h2>
                  <div className="flex items-center text-sm text-dark-500 dark:text-dark-400 mt-1">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Last Updated: May 15, 2025</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Welcome to Ocavior. These Terms of Service ("Terms") govern your access to and use of our website, products, and services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
                </p>

                <h3>1. Use of Services</h3>
                <p>
                  You may use our services only as permitted by these Terms and any applicable laws. You may not use our services:
                </p>
                <ul>
                  <li>In any way that violates any applicable national, federal, state, local, or international law or regulation</li>
                  <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation</li>
                  <li>To impersonate or attempt to impersonate Ocavior, an Ocavior employee, another user, or any other person or entity</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the services, or which may harm Ocavior or users of the services</li>
                </ul>

                <h3>2. Account Registration</h3>
                <p>
                  To access certain features of our services, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>
                <p>
                  You are responsible for safeguarding your account credentials and for any activities or actions under your account. You agree to notify us immediately of any unauthorized access to or use of your account.
                </p>

                <h3>3. Intellectual Property Rights</h3>
                <p>
                  The services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Ocavior, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
                <p>
                  These Terms permit you to use the services for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our services.
                </p>

                <h3>4. User Content</h3>
                <p>
                  Our services may allow you to post, submit, publish, display, or transmit content. By providing any content on our services, you grant us and our affiliates and service providers, and each of their and our respective licensees, successors, and assigns the right to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any such material.
                </p>
                <p>
                  You represent and warrant that all of your content complies with these Terms and that you own or have the necessary rights to use and authorize us to use your content.
                </p>

                <h3>5. Payment Terms</h3>
                <p>
                  For services that require payment, you agree to pay all fees or charges to your account based on our fees, charges, and billing terms in effect at the time a fee or charge is due and payable. You are responsible for providing a valid payment method. Prices for our services may change at any time, and we do not provide price protection or refunds in the event of a price reduction or promotional offering.
                </p>

                <h3>6. Termination</h3>
                <p>
                  We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
                </p>
                <p>
                  Upon termination, your right to use the services will immediately cease. If you wish to terminate your account, you may simply discontinue using the services or contact us to request account deletion.
                </p>

                <h3>7. Disclaimer of Warranties</h3>
                <p>
                  Our services are provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>

                <h3>8. Limitation of Liability</h3>
                <p>
                  In no event will Ocavior, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, including but not limited to direct, indirect, special, incidental, consequential, or punitive damages, arising out of or in connection with your use of our services.
                </p>

                <h3>9. Governing Law</h3>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>

                <h3>10. Changes to Terms</h3>
                <p>
                  We may revise and update these Terms from time to time at our sole discretion. All changes are effective immediately when we post them. Your continued use of the services following the posting of revised Terms means that you accept and agree to the changes.
                </p>

                <h3>11. Contact Us</h3>
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p>
                  Email: <a href="mailto:legal@ocavior.com">legal@ocavior.com</a><br />
                  Phone: +91 9876 543 210<br />
                  Address: 123 Tech Park, Whitefield, Bangalore, Karnataka 560066, India
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="btn btn-primary px-6 py-3 rounded-md inline-flex items-center">
                Have Questions? Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfServicePage;