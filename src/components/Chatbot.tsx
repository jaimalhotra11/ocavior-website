import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, ArrowRight } from 'lucide-react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface UserInfo {
  email: string;
  phone: string;
  name: string;
}

const predefinedResponses = {
  services: "Let me outline our comprehensive digital marketing services:\n\n• SEO Optimization\n  - Boost your search rankings\n  - Local SEO optimization\n  - Technical SEO audits\n  - Keyword research & strategy\n\n• Social Media Marketing\n  - Platform-specific strategies\n  - Community management\n  - Paid social campaigns\n  - Influencer partnerships\n\n• Content Marketing\n  - Blog strategy & creation\n  - Video content production\n  - Infographic design\n  - Email newsletters\n\n• PPC Advertising\n  - Google Ads management\n  - Display advertising\n  - Retargeting campaigns\n  - Ad copy optimization\n\n• Analytics & Reporting\n  - Real-time dashboards\n  - ROI tracking\n  - Competitor analysis\n  - Monthly performance reports\n\nWould you like to learn more about any specific service?",
  
  pricing: "I'll break down our pricing packages for you:\n\n• Starter Package: $750/month\n  - Social media management (2 platforms)\n  - Basic SEO optimization\n  - Monthly content creation (2 blog posts)\n  - Monthly performance reports\n  - Email support\n\n• Growth Package: $1,500/month\n  - Everything in Starter, plus:\n  - Social media management (4 platforms)\n  - Advanced SEO strategy\n  - Weekly content creation\n  - PPC campaign management\n  - Priority support\n\n• Enterprise Package: Custom pricing\n  - Full-service digital marketing\n  - Dedicated account manager\n  - Custom strategy development\n  - Daily optimization\n  - 24/7 support\n\nWould you like to schedule a consultation to discuss which package best fits your needs?",
  
  contact: "Here's how you can reach our team:\n\n• Customer Support\n  - Email: support@digitalmarketing.com\n  - Phone: (555) 123-4567\n  - Live Chat: Available 24/7\n\n• Business Hours\n  - Monday-Friday: 9AM-6PM EST\n  - Saturday: 10AM-4PM EST\n  - Sunday: Closed\n\n• Emergency Support\n  - Priority Line: (555) 999-8888\n  - Response time: Within 1 hour\n\n• Office Location\n  - 123 Marketing Ave\n  - Digital City, DC 10001\n\nHow would you prefer to connect with us?",
  
  consultation: "I'd be happy to help schedule your consultation. To ensure we make the most of our time together, please provide:\n\n1. Business Information\n   • Company name\n   • Industry\n   • Website (if applicable)\n   • Current marketing challenges\n\n2. Goals & Objectives\n   • Primary marketing goals\n   • Target audience\n   • Timeline for implementation\n\n3. Preferred Meeting Details\n   • Best date/time\n   • Meeting format (video/phone)\n   • Time zone\n\nYou can also call us directly at (555) 123-4567 for immediate scheduling.\n\nWould you like me to guide you through the scheduling process?",
  
  seo: "Our comprehensive SEO services include:\n\n1. Technical SEO\n   • Site architecture optimization\n   • Mobile optimization\n   • Page speed enhancement\n   • Schema markup implementation\n\n2. On-Page SEO\n   • Keyword optimization\n   • Content optimization\n   • Meta tag optimization\n   • URL structure improvement\n\n3. Off-Page SEO\n   • Link building\n   • Brand mentions\n   • Social signals\n   • Local citations\n\n4. Content Strategy\n   • Keyword research\n   • Content gap analysis\n   • Content calendar\n   • Performance tracking\n\nWould you like to learn more about any specific SEO service?",
  
  social: "Our social media marketing services include:\n\n1. Platform Management\n   • Strategy development\n   • Content creation\n   • Community engagement\n   • Performance tracking\n\n2. Paid Social\n   • Ad campaign management\n   • Audience targeting\n   • A/B testing\n   • ROI optimization\n\n3. Content Creation\n   • Custom graphics\n   • Video content\n   • Stories & Reels\n   • Trending content\n\n4. Analytics & Reporting\n   • Engagement metrics\n   • Audience insights\n   • Competitor analysis\n   • Monthly reports\n\nWhich aspects of social media marketing interest you most?",
  
  content: "Our content marketing services cover:\n\n1. Written Content\n   • Blog posts & articles\n   • Website copy\n   • Email newsletters\n   • Whitepapers\n\n2. Visual Content\n   • Infographics\n   • Videos\n   • Social media graphics\n   • Presentations\n\n3. Strategy\n   • Content calendar\n   • SEO optimization\n   • Distribution plan\n   • Performance tracking\n\n4. Analytics\n   • Engagement metrics\n   • Conversion tracking\n   • ROI analysis\n   • Monthly reporting\n\nWould you like to discuss your content needs in detail?",
  
  analytics: "Our analytics services provide:\n\n1. Performance Tracking\n   • Traffic analysis\n   • Conversion rates\n   • User behavior\n   • Goal completion\n\n2. Campaign Analysis\n   • ROI measurement\n   • A/B test results\n   • Campaign effectiveness\n   • Budget optimization\n\n3. Custom Reporting\n   • Weekly summaries\n   • Monthly deep dives\n   • Custom dashboards\n   • Competitive analysis\n\n4. Insights & Recommendations\n   • Data-driven insights\n   • Strategic recommendations\n   • Growth opportunities\n   • Trend analysis\n\nWhat specific metrics would you like to track?",
  
  faq: "Here are answers to our most common questions:\n\n1. Results Timeline\n   • Initial results: 2-3 months\n   • Significant impact: 4-6 months\n   • Long-term growth: 6+ months\n\n2. Contracts & Pricing\n   • Flexible monthly contracts\n   • No hidden fees\n   • 30-day cancellation notice\n   • Custom pricing available\n\n3. Reporting & Communication\n   • Weekly progress updates\n   • Monthly detailed reports\n   • 24/7 dashboard access\n   • Regular strategy calls\n\n4. Support & Service\n   • Dedicated account manager\n   • Priority support\n   • Regular optimization\n   • Strategy adjustments\n\nDo you have any other questions I can help with?"
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [currentStep, setCurrentStep] = useState<'email' | 'phone' | 'name' | 'chat'>('email');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const validateEmail = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const validatePhone = (phone: string) => {
    return phone.match(/^\+?[\d\s-]{10,}$/);
  };

  const handleUserInfoInput = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    switch (currentStep) {
      case 'email':
        if (!validateEmail(inputText)) {
          const botMessage: Message = {
            text: "I need a valid email address to continue. Please enter an email in the format: example@domain.com",
            sender: 'bot',
            timestamp: new Date()
          };
          setMessages(prev => [...prev, botMessage]);
          return;
        }
        setUserInfo(prev => ({ ...prev, email: inputText } as UserInfo));
        setCurrentStep('phone');
        setMessages(prev => [
          ...prev,
          { text: "Thanks for providing your email! Now, please enter your phone number so we can reach you if needed.", sender: 'bot', timestamp: new Date() }
        ]);
        break;

      case 'phone':
        if (!validatePhone(inputText)) {
          const botMessage: Message = {
            text: "Please enter a valid phone number (minimum 10 digits). You can include spaces or hyphens if you'd like.",
            sender: 'bot',
            timestamp: new Date()
          };
          setMessages(prev => [...prev, botMessage]);
          return;
        }
        setUserInfo(prev => ({ ...prev, phone: inputText } as UserInfo));
        setCurrentStep('name');
        setMessages(prev => [
          ...prev,
          { text: "Great! Finally, what's your name? This helps me personalize our conversation.", sender: 'bot', timestamp: new Date() }
        ]);
        break;

      case 'name':
        setUserInfo(prev => ({ ...prev, name: inputText } as UserInfo));
        setCurrentStep('chat');
        setShowOptions(true);
        setMessages(prev => [
          ...prev,
          { 
            text: `Welcome, ${inputText}! I'm here to help you with your digital marketing needs. Feel free to ask about our services, pricing, or select from the options below. What would you like to know more about?`,
            sender: 'bot',
            timestamp: new Date()
          }
        ]);
        break;

      case 'chat':
        handleChatInput();
        break;
    }

    setInputText('');
  };

  const handleChatInput = () => {
    const userMessage: Message = {
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setShowOptions(false);

    setTimeout(() => {
      let botResponse = "I'll help you with that. ";
      let showOptionsAfter = false;
      
      const lowercaseInput = inputText.toLowerCase();
      
      if (lowercaseInput.includes('service')) {
        botResponse = predefinedResponses.services;
      } else if (lowercaseInput.includes('price') || lowercaseInput.includes('cost') || lowercaseInput.includes('package')) {
        botResponse = predefinedResponses.pricing;
      } else if (lowercaseInput.includes('contact') || lowercaseInput.includes('reach') || lowercaseInput.includes('support')) {
        botResponse = predefinedResponses.contact;
      } else if (lowercaseInput.includes('consultation') || lowercaseInput.includes('meet') || lowercaseInput.includes('appointment')) {
        botResponse = predefinedResponses.consultation;
      } else if (lowercaseInput.includes('seo') || lowercaseInput.includes('search engine')) {
        botResponse = predefinedResponses.seo;
      } else if (lowercaseInput.includes('social') || lowercaseInput.includes('facebook') || lowercaseInput.includes('instagram')) {
        botResponse = predefinedResponses.social;
      } else if (lowercaseInput.includes('content') || lowercaseInput.includes('blog') || lowercaseInput.includes('article')) {
        botResponse = predefinedResponses.content;
      } else if (lowercaseInput.includes('analytics') || lowercaseInput.includes('report') || lowercaseInput.includes('tracking')) {
        botResponse = predefinedResponses.analytics;
      } else if (lowercaseInput.includes('faq') || lowercaseInput.includes('question')) {
        botResponse = predefinedResponses.faq;
      } else {
        botResponse = "I understand you're interested in learning more. To better assist you, would you like to know about our services, pricing, or schedule a consultation? You can also ask about specific topics like SEO, social media, content marketing, or analytics.";
        showOptionsAfter = true;
      }

      const botMessage: Message = {
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      if (showOptionsAfter) {
        setShowOptions(true);
      }
    }, 800);
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setMessages([{
        text: "👋 Hi! I'm your digital marketing assistant. To get started, please enter your email address so I can send you helpful resources.",
        sender: 'bot',
        timestamp: new Date()
      }]);
      setCurrentStep('email');
      setUserInfo(null);
      setShowOptions(false);
    }
  };

  const handleQuickOption = (option: string) => {
    const optionResponses: { [key: string]: string } = {
      'Services': predefinedResponses.services,
      'Pricing': predefinedResponses.pricing,
      'Contact': predefinedResponses.contact,
      'Schedule Consultation': predefinedResponses.consultation,
      'SEO Services': predefinedResponses.seo,
      'Social Media': predefinedResponses.social,
      'Content Marketing': predefinedResponses.content,
      'Analytics': predefinedResponses.analytics
    };

    setMessages(prev => [
      ...prev,
      { text: option, sender: 'user', timestamp: new Date() },
      { text: optionResponses[option], sender: 'bot', timestamp: new Date() }
    ]);
    setShowOptions(false);
  };

  const getInputPlaceholder = () => {
    switch (currentStep) {
      case 'email':
        return 'Enter your email address...';
      case 'phone':
        return 'Enter your phone number...';
      case 'name':
        return 'Enter your name...';
      default:
        return 'Type your message...';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-8 sm:right-8">
      <button
        onClick={toggleChatbot}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
      >
        {isOpen ? <X size={18} /> : <MessageCircle size={18} />}
        {!isOpen && <span className="hidden sm:inline">Chat with us</span>}
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[calc(100vw-2rem)] sm:w-96 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden max-h-[80vh] sm:max-h-[600px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 sm:p-4 text-white">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <div>
                <h2 className="font-bold text-base sm:text-lg">Marketing Assistant</h2>
                <p className="text-xs sm:text-sm opacity-90">Online & Ready to Help</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[50vh] sm:h-96 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 sm:p-4 rounded-lg shadow-md ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}
                >
                  <p className="whitespace-pre-line text-sm leading-relaxed">
                    {message.text}
                  </p>
                  <p className={`text-xs mt-2 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Options */}
          {showOptions && currentStep === 'chat' && (
            <div className="p-3 sm:p-4 bg-white border-t border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Services',
                  'Pricing',
                  'Contact',
                  'Schedule Consultation',
                  'SEO Services',
                  'Social Media',
                  'Content Marketing',
                  'Analytics'
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleQuickOption(option)}
                    className="bg-gray-50 p-3 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors flex items-center justify-between text-sm font-medium text-gray-700"
                  >
                    <span>{option}</span>
                    <ArrowRight size={14} className="text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 sm:p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleUserInfoInput()}
                placeholder={getInputPlaceholder()}
                className="flex-1 p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 text-sm sm:text-base"
              />
              <button
                onClick={handleUserInfoInput}
                className="bg-blue-600 text-white p-2 sm:p-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;