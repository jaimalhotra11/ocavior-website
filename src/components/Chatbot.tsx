import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, ArrowRight, Code, Smartphone, Globe, Cloud, Building2, Search } from 'lucide-react';

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

// Enhanced predefined responses with more detailed information
const predefinedResponses = {
  services: `Our comprehensive technology services include:

🚀 App Development
• Native Mobile Apps
  - iOS Development (Swift, SwiftUI)
  - Android Development (Kotlin, Java)
  - Performance optimization
  - Push notifications
  - Offline capabilities
  - Analytics integration
  - In-app purchases
  - Social media integration

• Cross-Platform Solutions
  - React Native development
  - Flutter applications
  - Code reusability
  - Native performance
  - Platform-specific features

• Progressive Web Apps (PWA)
  - Offline functionality
  - Push notifications
  - App-like experience
  - Cross-platform compatibility

🌐 Website Development
• Frontend Development
  - React.js applications
  - Vue.js solutions
  - Angular platforms
  - Responsive design
  - Modern UI/UX
  - Performance optimization

• Backend Development
  - Node.js/Express
  - Python/Django
  - PHP/Laravel
  - Database design
  - API development
  - Security implementation

• E-commerce Solutions
  - Custom e-commerce platforms
  - Shopping cart systems
  - Payment gateway integration
  - Inventory management
  - Order processing
  - Customer management

☁️ Cloud Solutions
• Infrastructure Setup
  - AWS architecture
  - Google Cloud Platform
  - Microsoft Azure
  - Hybrid cloud solutions
  - Serverless architecture

• Cloud Services
  - Database management
  - Storage solutions
  - Computing resources
  - Security implementation
  - Scalability planning

🔄 Technology Integration
• System Integration
  - API development
  - Legacy system modernization
  - Third-party integrations
  - Data migration
  - Process automation

• Enterprise Solutions
  - ERP systems
  - CRM platforms
  - Business intelligence
  - Workflow automation
  - Custom software

Would you like to explore any of these services in detail?`,

  pricing: `Our flexible pricing structure is designed to accommodate various project needs:

💡 Starter Package: $5,000 - $15,000
• Ideal for: Small businesses & startups
• Features:
  - Basic website/app development
  - Essential features implementation
  - Standard cloud setup
  - Basic SEO optimization
  - 3 months support
  - Monthly performance reports
• Timeline: 4-8 weeks
• Payment: 50% upfront, 50% on completion

🚀 Professional Package: $15,000 - $50,000
• Ideal for: Growing businesses
• Features:
  - Advanced website/app development
  - Full feature implementation
  - Comprehensive cloud infrastructure
  - Advanced SEO strategy
  - 6 months support
  - Weekly progress updates
  - Performance optimization
  - Security implementation
• Timeline: 2-4 months
• Payment: 40% upfront, 30% midway, 30% on completion

🌟 Enterprise Package: $50,000+
• Ideal for: Large organizations
• Features:
  - Full-scale digital transformation
  - Custom development solutions
  - Advanced cloud architecture
  - Dedicated development team
  - Priority 24/7 support
  - Continuous optimization
  - Regular security audits
  - Comprehensive documentation
• Timeline: Custom
• Payment: Customized schedule

📋 All packages include:
• Project management
• Quality assurance
• Code documentation
• Security implementation
• Performance optimization
• Post-launch support

Would you like to schedule a consultation for a detailed quote based on your specific requirements?`,

  app: `Our comprehensive App Development services cover:

📱 Native App Development

1. iOS Development
   • Technologies
     - Swift & SwiftUI
     - iOS SDK expertise
     - CoreData & CloudKit
     - ARKit & CoreML
   • Features
     - Native UI components
     - Hardware integration
     - Push notifications
     - In-app purchases
   • Best Practices
     - Apple guidelines compliance
     - Performance optimization
     - Security implementation
     - App Store optimization

2. Android Development
   • Technologies
     - Kotlin & Java
     - Android SDK
     - Jetpack Compose
     - Material Design 3
   • Features
     - Native functionality
     - Background services
     - Custom widgets
     - Deep linking
   • Best Practices
     - Google guidelines
     - Battery optimization
     - Security measures
     - Play Store optimization

🔄 Cross-Platform Development

1. Technologies
   • React Native
     - Native performance
     - Code reusability
     - Hot reloading
     - Native modules
   • Flutter
     - Beautiful UIs
     - Native compilation
     - Custom widgets
     - Platform integration

2. Features & Capabilities
   • Core Features
     - User authentication
     - Push notifications
     - Offline support
     - Analytics integration
     - Social integration
     - Location services
   • Advanced Features
     - Real-time sync
     - File handling
     - Media processing
     - Payment processing
     - Chat functionality
     - Maps integration

3. Development Process
   • Planning Phase
     - Requirements analysis
     - Architecture design
     - UI/UX planning
     - Technology selection
   • Development Phase
     - Agile methodology
     - Sprint planning
     - Regular updates
     - Code reviews
   • Testing Phase
     - Unit testing
     - Integration testing
     - UI/UX testing
     - Performance testing
   • Deployment
     - Store submission
     - Version management
     - Release planning
     - Marketing support

4. Ongoing Support
   • Maintenance
     - Bug fixes
     - Performance updates
     - Security patches
     - Feature updates
   • Monitoring
     - Usage analytics
     - Crash reporting
     - Performance metrics
     - User feedback

Would you like to discuss your specific app development needs?`,

  website: `Our Website Development services include:

🎨 Frontend Development

1. Modern Technologies
   • React.js
     - Component-based architecture
     - Virtual DOM
     - State management (Redux/Context)
     - Custom hooks
   • Vue.js
     - Reactive components
     - Vue Router
     - Vuex state management
     - Composition API
   • Next.js/Nuxt.js
     - Server-side rendering
     - Static site generation
     - API routes
     - Image optimization

2. UI/UX Design
   • Responsive Design
     - Mobile-first approach
     - Fluid layouts
     - Breakpoint optimization
   • Performance
     - Code splitting
     - Lazy loading
     - Asset optimization
     - Caching strategies
   • Accessibility
     - WCAG compliance
     - Screen reader support
     - Keyboard navigation
     - Color contrast

🔧 Backend Development

1. Technologies
   • Node.js
     - Express.js
     - REST APIs
     - GraphQL
     - WebSocket
   • Python
     - Django
     - FastAPI
     - Data processing
     - Machine learning
   • Databases
     - PostgreSQL
     - MongoDB
     - Redis
     - Elasticsearch

2. Features
   • Authentication
     - JWT
     - OAuth
     - Social login
     - Role-based access
   • Security
     - HTTPS
     - XSS protection
     - CSRF protection
     - Rate limiting
   • Performance
     - Caching
     - Load balancing
     - Database optimization
     - API optimization

🛍️ E-commerce Solutions

1. Features
   • Product Management
     - Catalog system
     - Inventory tracking
     - Product variants
     - Digital products
   • Shopping Experience
     - Cart management
     - Wishlist
     - Product search
     - Recommendations
   • Payment Processing
     - Multiple gateways
     - Subscription billing
     - Refund handling
     - Tax calculation
   • Order Management
     - Order tracking
     - Shipping integration
     - Return handling
     - Invoice generation

2. Additional Features
   • Analytics
     - Sales tracking
     - User behavior
     - Conversion rates
     - ROI analysis
   • Marketing Tools
     - SEO optimization
     - Email marketing
     - Social media
     - Discount system

Would you like to discuss your website project requirements?`,

  contact: `Here's how you can reach our expert team:

👥 Development Team
• Primary Contact
  - Email: dev@techsolutions.com
  - Phone: (555) 123-4567
  - Response time: Within 2 hours
• Technical Support
  - Email: support@techsolutions.com
  - Phone: (555) 234-5678
  - Live Chat: 24/7 availability

📅 Business Hours
• Regular Hours
  - Monday-Friday: 9AM-6PM EST
  - Saturday: 10AM-4PM EST
• Emergency Support
  - 24/7 availability for critical issues
  - Response time: Within 30 minutes
  - Priority line: (555) 999-8888

📍 Office Locations
• Headquarters
  - 123 Tech Avenue
  - Innovation City, IC 10001
  - Reception: (555) 345-6789
• Development Center
  - 456 Code Street
  - Tech Valley, TV 20002
  - Office: (555) 456-7890

🤝 Partnership Inquiries
• Business Development
  - Email: partnerships@techsolutions.com
  - Phone: (555) 567-8901
  - Schedule: Monday-Friday, 9AM-5PM EST

🔧 Technical Support Levels
• Standard Support
  - Business hours assistance
  - Email & phone support
  - 24-hour response time
• Premium Support
  - 24/7 availability
  - Priority response
  - Dedicated support team
  - Monthly review calls

How would you like to connect with our team?`,

  consultation: `Let's schedule your consultation. Here's what we'll discuss:

📋 Project Overview
1. Business Information
   • Company background
   • Industry sector
   • Target audience
   • Current challenges
   • Business goals

2. Project Requirements
   • Project type
     - Web development
     - Mobile app
     - Cloud solutions
     - System integration
   • Technical specifications
     - Platform preferences
     - Feature requirements
     - Integration needs
     - Security requirements
   • Design preferences
     - Brand guidelines
     - UI/UX requirements
     - User flow
     - Accessibility needs

3. Timeline & Budget
   • Project timeline
     - Start date
     - Milestones
     - Launch date
   • Budget considerations
     - Available budget
     - Payment schedule
     - ROI expectations

4. Technical Discussion
   • Architecture planning
   • Technology stack
   • Scalability needs
   • Security requirements
   • Performance goals

📅 Meeting Details
• Available Slots
  - Morning: 9AM-12PM EST
  - Afternoon: 2PM-5PM EST
  - Custom timing available
• Meeting Format
  - Video conference
  - Phone call
  - In-person (if local)
• Duration: 60-90 minutes

Would you like to schedule your consultation now? Please provide your preferred date and time, and I'll help you book it.`,

  tech: `Our Technology Integration services provide comprehensive solutions:

🔄 System Integration

1. API Development & Integration
   • RESTful APIs
     - Custom API development
     - API documentation
     - Security implementation
     - Version control
   • GraphQL
     - Schema design
     - Query optimization
     - Real-time subscriptions
     - Type safety
   • Microservices
     - Service architecture
     - Container orchestration
     - Service discovery
     - Load balancing

2. Legacy System Modernization
   • Analysis
     - System assessment
     - Risk evaluation
     - Migration planning
     - Cost analysis
   • Implementation
     - Gradual migration
     - Data preservation
     - System testing
     - Performance optimization
   • Maintenance
     - System monitoring
     - Performance tuning
     - Security updates
     - Documentation

🔧 Enterprise Solutions

1. ERP Integration
   • Features
     - Module integration
     - Workflow automation
     - Data synchronization
     - Custom reporting
   • Implementation
     - Requirements analysis
     - System configuration
     - User training
     - Support setup

2. CRM Integration
   • Capabilities
     - Customer management
     - Sales automation
     - Marketing integration
     - Analytics
   • Features
     - Data migration
     - Custom workflows
     - API integration
     - Mobile access

3. Payment Systems
   • Gateway Integration
     - Multiple providers
     - Security compliance
     - Transaction monitoring
     - Reconciliation
   • Features
     - Automated processing
     - Fraud detection
     - Reporting tools
     - Multi-currency support

🔒 Security & Compliance

1. Security Implementation
   • Authentication
     - Multi-factor auth
     - SSO integration
     - Access control
     - Session management
   • Data Protection
     - Encryption
     - Secure storage
     - Data masking
     - Audit logging

2. Compliance
   • Standards
     - GDPR
     - HIPAA
     - PCI DSS
     - SOC 2
   • Implementation
     - Policy development
     - Control implementation
     - Audit support
     - Training

What specific integration needs would you like to discuss?`,

  cloud: `Our Cloud Solutions provide comprehensive services:

☁️ Cloud Infrastructure

1. Platform Options
   • Amazon Web Services (AWS)
     - EC2 instances
     - S3 storage
     - RDS databases
     - Lambda functions
     - CloudFront CDN
   • Google Cloud Platform (GCP)
     - Compute Engine
     - Cloud Storage
     - Cloud SQL
     - Cloud Functions
     - Cloud CDN
   • Microsoft Azure
     - Virtual Machines
     - Blob Storage
     - Azure SQL
     - Functions
     - CDN

2. Architecture Design
   • Infrastructure Planning
     - Resource allocation
     - Network design
     - Security architecture
     - Disaster recovery
   • Scalability
     - Auto-scaling
     - Load balancing
     - Performance optimization
     - Cost management

🔄 Migration Services

1. Assessment
   • Current Infrastructure
     - System analysis
     - Dependency mapping
     - Performance baseline
     - Cost analysis
   • Migration Planning
     - Strategy development
     - Risk assessment
     - Timeline planning
     - Resource allocation

2. Implementation
   • Data Migration
     - Data transfer
     - Database migration
     - Storage optimization
     - Data validation
   • Application Migration
     - Code adaptation
     - Testing
     - Performance tuning
     - Documentation

🔒 Security & Compliance

1. Security Implementation
   • Access Control
     - IAM policies
     - Network security
     - Encryption
     - Key management
   • Monitoring
     - Security alerts
     - Audit logging
     - Threat detection
     - Incident response

2. Compliance Management
   • Standards
     - ISO 27001
     - SOC 2
     - HIPAA
     - GDPR
   • Implementation
     - Policy development
     - Control implementation
     - Audit support
     - Regular reviews

⚡ Performance Optimization

1. Monitoring & Analysis
   • Performance Metrics
     - Resource utilization
     - Response times
     - Error rates
     - Cost analysis
   • Optimization
     - Resource allocation
     - Caching strategies
     - CDN implementation
     - Database tuning

2. Cost Management
   • Analysis
     - Usage patterns
     - Cost breakdown
     - Resource optimization
     - ROI assessment
   • Implementation
     - Resource scheduling
     - Reserved instances
     - Auto-scaling
     - Waste elimination

What specific cloud solutions are you interested in exploring?`,

  faq: `Frequently Asked Questions about our services:

⏱️ Development Timelines

1. Web Development
   • Simple website: 4-6 weeks
     - Basic pages
     - Contact forms
     - Basic SEO
     - Mobile responsive
   • Complex web app: 3-6 months
     - Custom features
     - User authentication
     - Database integration
     - Advanced security
   • E-commerce site: 2-4 months
     - Product catalog
     - Payment integration
     - Order management
     - Inventory system

2. Mobile Development
   • Simple app: 2-3 months
     - Basic features
     - Single platform
     - Standard UI
     - Basic API
   • Complex app: 4-6 months
     - Advanced features
     - Multiple platforms
     - Custom UI/UX
     - Complex backend
   • Enterprise app: 6+ months
     - Full feature set
     - Multiple integrations
     - Advanced security
     - Scalable architecture

🔧 Technology Stack

1. Frontend
   • Web Technologies
     - React.js
     - Vue.js
     - Next.js
     - TypeScript
   • Mobile Technologies
     - React Native
     - Flutter
     - Swift
     - Kotlin

2. Backend
   • Languages
     - Node.js
     - Python
     - Java
     - Go
   • Databases
     - PostgreSQL
     - MongoDB
     - Redis
     - Elasticsearch

📋 Project Process

1. Planning Phase
   • Requirements gathering
   • Architecture design
   • Technology selection
   • Timeline planning

2. Development Phase
   • Sprint planning
   • Regular updates
   • Code reviews
   • Quality assurance

3. Testing Phase
   • Unit testing
   • Integration testing
   • User acceptance
   • Performance testing

4. Deployment
   • Server setup
   • Application deployment
   • Monitoring setup
   • Documentation

🛠️ Support & Maintenance

1. Standard Support
   • Bug fixes
   • Security updates
   • Performance monitoring
   • Regular backups

2. Premium Support
   • 24/7 availability
   • Priority response
   • Dedicated team
   • Monthly reviews

What other questions can I answer for you?`
};

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [currentStep, setCurrentStep] = useState<'email' | 'phone' | 'name' | 'chat'>('email');
  const [showOptions, setShowOptions] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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

  const handleSend = () => {
    if (!inputValue.trim()) return;

    if (currentStep === 'email') {
      handleEmailStep();
    } else if (currentStep === 'phone') {
      handlePhoneStep();
    } else if (currentStep === 'name') {
      handleNameStep();
    } else {
      handleChatStep();
    }

    setInputValue('');
  };

  const handleEmailStep = () => {
    const userMessage: Message = {
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    if (!validateEmail(inputValue)) {
      setMessages(prev => [...prev, userMessage, {
        text: "Please enter a valid email address so I can send you helpful resources and documentation.",
        sender: 'bot',
        timestamp: new Date()
      }]);
      return;
    }

    setUserInfo(prev => ({ ...prev, email: inputValue } as UserInfo));
    setCurrentStep('phone');
    setMessages(prev => [...prev, userMessage, {
      text: "Thanks! Now, please enter your phone number so we can reach you for project discussions.",
      sender: 'bot',
      timestamp: new Date()
    }]);
  };

  const handlePhoneStep = () => {
    const userMessage: Message = {
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    if (!validatePhone(inputValue)) {
      setMessages(prev => [...prev, userMessage, {
        text: "Please enter a valid phone number (minimum 10 digits). This helps us provide better support for your project.",
        sender: 'bot',
        timestamp: new Date()
      }]);
      return;
    }

    setUserInfo(prev => ({ ...prev, phone: inputValue } as UserInfo));
    setCurrentStep('name');
    setMessages(prev => [...prev, userMessage, {
      text: "Perfect! Finally, what's your name? This helps me personalize our conversation about your project needs.",
      sender: 'bot',
      timestamp: new Date()
    }]);
  };

  const handleNameStep = () => {
    const userMessage: Message = {
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setUserInfo(prev => ({ ...prev, name: inputValue } as UserInfo));
    setCurrentStep('chat');
    setShowOptions(true);
    setMessages(prev => [...prev, userMessage, {
      text: `Welcome, ${inputValue}! I'm here to help you with your technology needs. Whether you're looking to develop an app, website, or need cloud solutions, I'm here to guide you. What would you like to know more about?`,
      sender: 'bot',
      timestamp: new Date()
    }]);
  };

  const handleChatStep = () => {
    const userMessage: Message = {
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setShowOptions(false);

    setTimeout(() => {
      let botResponse = getBotResponse(inputValue.toLowerCase());
      const botMessage: Message = {
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setShowOptions(botResponse.includes("Would you like to know more about"));
    }, 1000);
  };

  const getBotResponse = (input: string): string => {
    if (input.includes('app') || input.includes('mobile') || input.includes('ios') || input.includes('android')) {
      return predefinedResponses.app;
    } else if (input.includes('website') || input.includes('web') || input.includes('site')) {
      return predefinedResponses.website;
    } else if (input.includes('tech') || input.includes('integration')) {
      return predefinedResponses.tech;
    } else if (input.includes('cloud') || input.includes('aws') || input.includes('azure')) {
      return predefinedResponses.cloud;
    } else if (input.includes('price') || input.includes('cost') || input.includes('budget')) {
      return predefinedResponses.pricing;
    } else if (input.includes('contact') || input.includes('support') || input.includes('help')) {
      return predefinedResponses.contact;
    } else if (input.includes('consult') || input.includes('meet') || input.includes('discuss')) {
      return predefinedResponses.consultation;
    } else if (input.includes('faq') || input.includes('question')) {
      return predefinedResponses.faq;
    } else if (input.includes('service')) {
      return predefinedResponses.services;
    }
    
    return "I can help you with app development, website creation, cloud solutions, and more. What specific service are you interested in? You can ask about our services, pricing, or schedule a consultation.";
  };

  const handleQuickOption = (option: string) => {
    const optionResponses: { [key: string]: string } = {
      'App Development': predefinedResponses.app,
      'Website Development': predefinedResponses.website,
      'Cloud Solutions': predefinedResponses.cloud,
      'Technology Integration': predefinedResponses.tech,
      'View Services': predefinedResponses.services,
      'Get Pricing': predefinedResponses.pricing,
      'Schedule Consultation': predefinedResponses.consultation,
      'Contact Support': predefinedResponses.contact
    };

    setMessages(prev => [
      ...prev,
      { text: option, sender: 'user', timestamp: new Date() },
      { text: optionResponses[option], sender: 'bot', timestamp: new Date() }
    ]);
    setShowOptions(false);
  };

  const toggleChat = () => {
    if (!isOpen) {
      setMessages([{
        text: "👋 Hi! I'm your technology solutions assistant. To get started, please enter your email address so I can send you helpful resources and documentation.",
        sender: 'bot',
        timestamp: new Date()
      }]);
      setCurrentStep('email');
      setUserInfo(null);
      setShowOptions(false);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 z-50"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="hidden sm:inline">Chat with us</span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4 w-[320px] md:w-96 h-[600px] bg-white rounded-lg shadow-xl flex flex-col z-50">
          <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Code className="w-6 h-6" />
              <div>
                <h2 className="font-bold text-lg">Tech Solutions</h2>
                <p className="text-sm opacity-90">Development Expert</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg shadow-md ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-800'
                  }`}
                >
                  <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.text}</p>
                  <p
                    className={`text-xs mt-2 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {showOptions && currentStep === 'chat' && (
            <div className="p-3 border-t border-gray-200 bg-white">
              <div className="grid grid-cols-2 gap-2">
                {[
                  ['App Development', <Smartphone key="app" className="w-4 h-4" />],
                  ['Website Development', <Globe key="web" className="w-4 h-4" />],
                  ['Cloud Solutions', <Cloud key="cloud" className="w-4 h-4" />],
                  ['Technology Integration', <Code key="tech" className="w-4 h-4" />],
                  ['View Services', <Building2 key="services" className="w-4 h-4" />],
                  ['Get Pricing', <Search key="pricing" className="w-4 h-4" />],
                  ['Schedule Consultation', <MessageCircle key="consult" className="w-4 h-4" />],
                  ['Contact Support', <Bot key="support" className="w-4 h-4" />]
                ].map(([option, icon]) => (
                  <button
                    key={option as string}
                    onClick={() => handleQuickOption(option as string)}
                    className="bg-gray-50 p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors flex items-center gap-2 text-xs font-medium text-gray-700"
                  >
                    {icon}
                    <span className="truncate">{option}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-3 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={
                  currentStep === 'email'
                    ? 'Enter your email...'
                    : currentStep === 'phone'
                    ? 'Enter your phone number...'
                    : currentStep === 'name'
                    ? 'Enter your name...'
                    : 'Type your message...'
                }
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 text-sm"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;