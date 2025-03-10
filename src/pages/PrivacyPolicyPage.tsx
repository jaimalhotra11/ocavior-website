import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(12,142,231,0.8),rgba(124,51,245,0.8))]"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Privacy <span className="gradient-text">Policy</span></h1>
            <p className="text-xl text-gray-300 mb-8">
              How we collect, use, and protect your information
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
                <Shield className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
                <div>
                  <h2 className="text-2xl font-bold">Our Commitment to Privacy</h2>
                  <div className="flex items-center text-sm text-dark-500 dark:text-dark-400 mt-1">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Last Updated: May 15, 2025</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  At Ocavior, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>

                <h3>Information We Collect</h3>
                <p>
                  We collect information that you provide directly to us. For example, we collect information when you:
                </p>
                <ul>
                  <li>Create an account or profile</li>
                  <li>Fill out a form or submit a request</li>
                  <li>Sign up for our newsletter</li>
                  <li>Participate in surveys or contests</li>
                  <li>Communicate with us via third-party social media sites</li>
                  <li>Request customer support</li>
                </ul>

                <p>
                  The types of information we may collect include your name, email address, postal address, phone number, company information, and any other information you choose to provide.
                </p>

                <h3>Automatically Collected Information</h3>
                <p>
                  When you access our website, we may automatically collect certain information about your device, including:
                </p>
                <ul>
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Time zone setting and location</li>
                  <li>Pages you view</li>
                  <li>How you interact with our website</li>
                </ul>

                <h3>How We Use Your Information</h3>
                <p>
                  We may use the information we collect from you for various purposes, including to:
                </p>
                <ul>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send administrative information, such as updates, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Communicate with you about products, services, offers, and events</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                  <li>Personalize and improve your experience</li>
                </ul>

                <h3>Sharing Your Information</h3>
                <p>
                  We may share information about you as follows:
                </p>
                <ul>
                  <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
                  <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process</li>
                  <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of Ocavior or others</li>
                  <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company</li>
                  <li>With your consent or at your direction</li>
                </ul>

                <h3>Your Choices</h3>
                <p>
                  You have several choices regarding the information we collect and how it's used:
                </p>
                <ul>
                  <li><strong>Account Information:</strong> You may update, correct, or delete your account information at any time by logging into your account or contacting us.</li>
                  <li><strong>Cookies:</strong> Most web browsers are set to accept cookies by default. You can usually choose to set your browser to remove or reject browser cookies.</li>
                  <li><strong>Promotional Communications:</strong> You may opt out of receiving promotional emails from us by following the instructions in those emails. If you opt out, we may still send you non-promotional emails, such as those about your account or our ongoing business relations.</li>
                </ul>

                <h3>Data Security</h3>
                <p>
                  We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee the security of our systems 100%.
                </p>

                <h3>Changes to This Privacy Policy</h3>
                <p>
                  We may change this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice (such as adding a statement to our website or sending you a notification).
                </p>

                <h3>Contact Us</h3>
                <p>
                  If you have any questions about this privacy policy, please contact us at:
                </p>
                <p>
                  Email: <a href="mailto:privacy@ocavior.com">privacy@ocavior.com</a><br />
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

export default PrivacyPolicyPage;