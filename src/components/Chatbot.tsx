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
  services: "We offer comprehensive digital marketing services including:\n• SEO Optimization - Improve your search rankings\n• Social Media Marketing - Engage with your audience\n• Content Marketing - Create valuable content\n• PPC Advertising - Drive targeted traffic\n• Email Marketing - Nurture leads\n• Analytics & Reporting - Track your success\n• Brand Strategy - Build your identity\n• Conversion Rate Optimization\n• Marketing Automation\n• Video Marketing",
  
  pricing: "Our flexible pricing options are designed to fit your needs:\n\n• Basic Package: $500/month\n  - Social Media Management\n  - Basic SEO\n  - Monthly Reports\n\n• Professional: $1000/month\n  - Everything in Basic\n  - Content Creation\n  - PPC Management\n  - Weekly Reports\n\n• Enterprise: Custom pricing\n  - Full-Service Marketing\n  - Dedicated Team\n  - Custom Strategy\n  - Daily Updates\n\nWould you like to schedule a consultation?",
  
  contact: "We're here to help! Reach our team through:\n\n• Email: contact@digitalmarketing.com\n• Phone: (555) 123-4567\n• Hours: Mon-Fri 9AM-6PM EST\n• Address: 123 Marketing Ave, Digital City\n\nFor urgent matters, use our priority support:\n• Emergency: (555) 999-8888\n• Live Chat: Available 24/7",
  
  consultation: "Let's schedule your consultation! Please provide:\n\n• Your name\n• Email address\n• Business size\n• Current marketing challenges\n• Goals and objectives\n• Preferred meeting time\n\nOr call us directly at (555) 123-4567 for immediate assistance.",
  
  seo: "Our SEO services include:\n• Keyword Research\n• On-page Optimization\n• Technical SEO\n• Link Building\n• Content Strategy\n• Local SEO\n• Mobile Optimization\n• Performance Tracking",
  
  social: "Our social media services cover:\n• Strategy Development\n• Content Creation\n• Community Management\n• Paid Advertising\n• Analytics & Reporting\n• Influencer Partnerships\n• Platform-specific campaigns",
  
  content: "Content marketing services include:\n• Blog Posts\n• Whitepapers\n• Case Studies\n• Infographics\n• Video Content\n• Email Newsletters\n• Social Media Content\n• SEO-optimized Articles",
  
  analytics: "We provide detailed analytics including:\n• Traffic Analysis\n• Conversion Tracking\n• ROI Measurement\n• Customer Journey Mapping\n• Competitor Analysis\n• Performance Reports\n• Custom Dashboards",
  
  faq: "Common questions:\n• How long until I see results? - Typically 3-6 months\n• Do you offer guarantees? - We focus on measurable goals\n• Can I cancel anytime? - Yes, with 30-day notice\n• How often do you report? - Monthly, with real-time dashboards\n• Do you work with small businesses? - Yes, we have packages for all sizes"
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
            text: "Please enter a valid email address.",
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
          { text: "Great! Now, please enter your phone number.", sender: 'bot', timestamp: new Date() }
        ]);
        break;

      case 'phone':
        if (!validatePhone(inputText)) {
          const botMessage: Message = {
            text: "Please enter a valid phone number.",
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
          { text: "Perfect! Finally, what's your name?", sender: 'bot', timestamp: new Date() }
        ]);
        break;

      case 'name':
        setUserInfo(prev => ({ ...prev, name: inputText } as UserInfo));
        setCurrentStep('chat');
        setShowOptions(true);
        setMessages(prev => [
          ...prev,
          { 
            text: `Thanks ${inputText}! How can I help you today? Feel free to ask about our services, pricing, or choose from the options below.`,
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
        botResponse = "I understand you're interested in digital marketing. Would you like to know about our services, pricing, or schedule a consultation? You can also ask about specific topics like SEO, social media, content marketing, or analytics.";
        setShowOptions(true);
      }

      const botMessage: Message = {
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setMessages([{
        text: "Hi! I'm MarketingPro, your digital marketing assistant. To get started, please enter your email address.",
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
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleChatbot}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
        {!isOpen && <span>Chat with MarketingPro</span>}
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-white">
            <div className="flex items-center gap-2">
              <Bot size={24} />
              <div>
                <h2 className="font-bold text-lg">MarketingPro</h2>
                <p className="text-sm opacity-90">Digital Marketing Assistant</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-lg shadow-md ${
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
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Options */}
          {showOptions && currentStep === 'chat' && (
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="grid grid-cols-2 gap-2">
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
                    <ArrowRight size={16} className="text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleUserInfoInput()}
                placeholder={getInputPlaceholder()}
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
              />
              <button
                onClick={handleUserInfoInput}
                className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;