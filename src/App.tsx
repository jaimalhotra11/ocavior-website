import React from 'react';
import ApplyNowPage from './pages/ApplyNowPage';
import Chatbot from './components/Chatbot';
import ChatbotPage from './pages/ChatbotPage';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import AdminPanel from './pages/AdminPanel';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import SitemapPage from './pages/SitemapPage';
import CareersPage from './pages/CareersPage';
import ServiceDetailPage from './pages/ServiceDetailPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/apply" element={<ApplyNowPage />} />
          
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/blog/:blogId" element={<BlogPage />} />
          <Route path="/case-studies/:caseId" element={<CaseStudiesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        </Routes>
      </div>
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
