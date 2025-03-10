import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Clock, 
  BarChart,
  Code,
  Package,
  Search,
  Briefcase,
  Share2,
  Cloud,
  Mail,
  Sparkles
} from 'lucide-react';

// Service data
const services = {
  'seo': {
    title: 'SEO & SEM',
    description: 'Boost your visibility and rank higher on search engines with our data-driven SEO strategies.',
    icon: Search,
    color: 'from-red-500 to-red-600',
    heroImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    overview: 'Our SEO & SEM services are designed to increase your online visibility, drive targeted traffic to your website, and improve your search engine rankings. We use data-driven strategies and the latest techniques to ensure your business stands out in search results.',
    benefits: [
      'Increased organic traffic and visibility',
      'Higher search engine rankings for targeted keywords',
      'Improved website authority and credibility',
      'Better user experience and engagement',
      'Increased conversion rates and ROI',
      'Comprehensive analytics and reporting'
    ],
    features: [
      {
        title: 'Keyword Research & Strategy',
        description: 'We identify high-value keywords that your target audience is searching for, analyzing search volume, competition, and relevance to create a comprehensive keyword strategy.'
      },
      {
        title: 'On-Page SEO Optimization',
        description: 'We optimize your websites content, meta tags, headings, and internal linking structure to improve relevance and authority for targeted keywords.'
      },
      {
        title: 'Technical SEO Audits',
        description: 'Our team conducts thorough technical audits to identify and fix issues that may be affecting your websites performance in search results, including site speed, mobile-friendliness, and crawlability.'
      },
      {
        title: 'Link Building & Authority Building',
        description: 'We develop strategies to earn high-quality backlinks from reputable websites, increasing your domain authority and improving your search rankings.'
      },
      {
        title: 'Local SEO for Businesses',
        description: 'For businesses serving specific geographic areas, we optimize your online presence to attract local customers through Google My Business, local citations, and location-specific content.'
      },
      {
        title: 'SEO Performance Tracking',
        description: 'We provide detailed reports and analytics to track your SEO performance, including rankings, traffic, conversions, and ROI, allowing for continuous optimization.'
      }
    ],
    process: [
      {
        title: 'Discovery & Audit',
        description: 'We analyze your current SEO performance, identify opportunities and challenges, and develop a customized strategy.'
      },
      {
        title: 'Keyword Research & Competitive Analysis',
        description: 'We identify high-value keywords and analyze your competitors to develop a winning strategy.'
      },
      {
        title: 'On-Page & Technical Optimization',
        description: 'We optimize your websites content, structure, and technical elements to improve search engine visibility.'
      },
      {
        title: 'Content Development & Optimization',
        description: 'We create and optimize high-quality, relevant content that resonates with your audience and search engines.'
      },
      {
        title: 'Link Building & Authority Development',
        description: 'We implement strategies to earn high-quality backlinks and build your websites authority.'
      },
      {
        title: 'Monitoring & Continuous Improvement',
        description: 'We track your SEO performance and make data-driven adjustments to maximize results.'
      }
    ],
    caseStudies: [
      {
        title: 'E-commerce SEO Success Story',
        description: 'How we helped an online retailer increase organic traffic by 180% and boost conversions by 75% through comprehensive SEO optimization.',
        results: ['180% increase in organic traffic', '75% growth in conversions', 'Top 3 rankings for 45 target keywords']
      },
      {
        title: 'Local Business SEO Transformation',
        description: 'How our local SEO strategies helped a regional service provider dominate local search results and increase leads by 120%.',
        results: ['120% increase in local leads', '200% increase in Google My Business views', '45% increase in website traffic']
      }
    ],
    faq: [
      {
        question: 'How long does it take to see results from SEO?',
        answer: 'SEO is a long-term strategy, and results typically take 3-6 months to become significant. However, some improvements can be seen within the first month of implementation. The timeline depends on factors such as your websites current state, competition in your industry, and the aggressiveness of your SEO strategy.'
      },
      {
        question: 'How do you measure SEO success?',
        answer: 'We measure SEO success through various metrics, including organic traffic growth, keyword rankings, conversion rates, bounce rates, time on site, and return on investment (ROI). We provide regular reports that track these metrics and show the impact of our SEO efforts on your business goals.'
      },
      {
        question: 'Do you follow white-hat SEO practices?',
        answer: 'Yes, we exclusively use white-hat SEO techniques that comply with search engine guidelines. We focus on creating high-quality content, earning legitimate backlinks, and providing an excellent user experience. We never use black-hat tactics that could result in penalties or harm your websites reputation.'
      },
      {
        question: 'How often will I receive SEO reports?',
        answer: 'We provide detailed monthly reports that show your SEO progress, including keyword rankings, traffic growth, and conversion metrics. We also schedule regular meetings to discuss these reports, answer your questions, and adjust our strategy as needed.'
      }
    ]
  },
  'social-media': {
    title: 'Social Media Marketing',
    description: 'Engage your audience and build brand loyalty with strategic social media marketing campaigns.',
    icon: Share2,
    color: 'from-yellow-500 to-yellow-600',
    heroImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    overview: 'Our Social Media Marketing services help businesses build meaningful connections with their audience, increase brand awareness, and drive engagement across all major social platforms. We develop tailored strategies that align with your business goals and resonate with your target audience.',
    benefits: [
      'Increased brand awareness and recognition',
      'Stronger customer relationships and loyalty',
      'Higher website traffic and lead generation',
      'Improved customer insights and market intelligence',
      'Enhanced customer service and support',
      'Competitive advantage in your industry'
    ],
    features: [
      {
        title: 'Social Media Strategy Development',
        description: 'We create comprehensive social media strategies tailored to your business goals, target audience, and industry, ensuring all activities align with your overall marketing objectives.'
      },
      {
        title: 'Content Creation & Curation',
        description: 'Our creative team develops engaging, high-quality content that resonates with your audience, including graphics, videos, blog posts, and interactive elements.'
      },
      {
        title: 'Community Management',
        description: 'We actively manage your social media communities, responding to comments, messages, and reviews to build relationships and foster engagement.'
      },
      {
        title: 'Paid Social Advertising',
        description: 'We develop and manage targeted social media advertising campaigns to reach specific audiences, drive traffic, and generate leads or sales.'
      },
      {
        title: 'Influencer Marketing',
        description: 'We identify and collaborate with relevant influencers in your industry to expand your reach and build credibility with new audiences.'
      },
      {
        title: 'Social Media Analytics',
        description: 'We provide detailed analytics and reporting to track performance, measure ROI, and continuously optimize your social media strategy.'
      }
    ],
    process: [
      {
        title: 'Social Media Audit & Strategy Development',
        description: 'We analyze your current social media presence, identify opportunities, and develop a customized strategy aligned with your business goals.'
      },
      {
        title: 'Content Planning & Calendar Creation',
        description: 'We create a comprehensive content calendar that ensures consistent, strategic posting across all platforms.'
      },
      {
        title: 'Content Creation & Curation',
        description: 'Our team develops engaging, platform-specific content that resonates with your audience and reflects your brand voice.'
      },
      {
        title: 'Community Management & Engagement',
        description: 'We actively manage your social communities, responding to comments and messages to build relationships.'
      },
      {
        title: 'Paid Social Campaign Management',
        description: 'We develop and optimize paid social campaigns to reach specific audience segments and achieve your goals.'
      },
      {
        title: 'Analysis, Reporting & Optimization',
        description: 'We continuously monitor performance, provide detailed reports, and optimize your strategy based on data-driven insights.'
      }
    ],
    caseStudies: [
      {
        title: 'Consumer Brand Social Media Revitalization',
        description: 'How we transformed a traditional consumer brands social media presence, increasing engagement by 300% and driving a 25% increase in sales from social channels.',
        results: ['300% increase in social engagement', '210% growth in follower base', '25% increase in sales from social channels']
      },
      {
        title: 'B2B Social Media Lead Generation',
        description: 'How our strategic approach to B2B social media marketing helped a technology company generate 150% more qualified leads through LinkedIn and Twitter.',
        results: ['150% increase in qualified leads', '200% increase in LinkedIn engagement', '45% reduction in cost per lead']
      }
    ],
    faq: [
      {
        question: 'Which social media platforms should my business be on?',
        answer: 'The right platforms for your business depend on your target audience, industry, and goals. We conduct thorough research to identify where your audience is most active and engaged. Rather than spreading resources thin across all platforms, we recommend focusing on 2-4 platforms where you can make the most impact.'
      },
      {
        question: 'How often should we post on social media?',
        answer: 'Posting frequency varies by platform and audience. Generally, we recommend 1-2 times per day on platforms like Twitter and Instagram, 3-5 times per week on Facebook and LinkedIn, and 2-3 times per week on YouTube. However, we will develop a custom posting schedule based on your specific audience engagement patterns.'
      },
      {
        question: 'How do you measure social media ROI?',
        answer: 'We measure social media ROI through various metrics aligned with your business goals. These may include engagement rates, follower growth, website traffic, lead generation, conversion rates, and direct sales from social channels. We provide comprehensive reports that demonstrate the value of your social media investment.'
      },
      {
        question: 'Do you handle social media crisis management?',
        answer: 'Yes, we provide social media crisis management as part of our services. We develop crisis response plans, monitor for potential issues, and provide rapid response when needed. Our team is experienced in handling various types of social media crises and can help protect your brand reputation.'
      }
    ]
  },
  'ppc': {
    title: 'PPC & Google Ads',
    description: 'Drive targeted traffic and maximize ROI with our expertly managed pay-per-click advertising campaigns.',
    icon: BarChart,
    color: 'from-blue-500 to-blue-600',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    overview: 'Our PPC & Google Ads services help businesses drive targeted traffic, generate leads, and increase conversions through expertly managed pay-per-click advertising campaigns. We develop data-driven strategies that maximize your ROI and achieve your specific business goals.',
    benefits: [
      'Immediate visibility and traffic to your website',
      'Highly targeted advertising to your ideal customers',
      'Flexible budgeting and cost control',
      'Measurable results and clear ROI',
      'Valuable market and customer insights',
      'Ability to quickly test and optimize messaging'
    ],
    features: [
      {
        title: 'PPC Strategy Development',
        description: 'We create comprehensive PPC strategies tailored to your business goals, target audience, and budget, ensuring maximum ROI from your advertising spend.'
      },
      {
        title: 'Google Ads Management',
        description: 'Our certified Google Ads specialists develop and manage campaigns across Search, Display, Shopping, and YouTube to reach your target audience at every stage of the buyers journey.'
      },
      {
        title: 'Keyword Research & Selection',
        description: 'We conduct thorough keyword research to identify high-value, relevant keywords that your target audience is searching for, optimizing for both traffic and conversion potential.'
      },
      {
        title: 'Ad Creation & Optimization',
        description: 'Our team creates compelling ad copy and creative assets that drive clicks and conversions, continuously testing and optimizing for improved performance.'
      },
      {
        title: 'Landing Page Optimization',
        description: 'We optimize your landing pages to ensure they align with your ad messaging and are designed to convert visitors into leads or customers.'
      },
      {
        title: 'Performance Tracking & Reporting',
        description: 'We provide detailed reports on campaign performance, including impressions, clicks, conversions, and ROI, with actionable insights for continuous improvement.'
      }
    ],
    process: [
      {
        title: 'Account & Competitive Analysis',
        description: 'We analyze your current PPC performance and your competitors strategies to identify opportunities and develop a winning approach.'
      },
      {
        title: 'Campaign Strategy & Structure',
        description: 'We develop a comprehensive campaign structure and targeting strategy aligned with your business goals and target audience.'
      },
      {
        title: 'Keyword Research & Ad Creation',
        description: 'We identify high-value keywords and create compelling ads that drive clicks and conversions.'
      },
      {
        title: 'Landing Page Optimization',
        description: 'We ensure your landing pages are optimized for conversion and aligned with your ad messaging.'
      },
      {
        title: 'Campaign Launch & Monitoring',
        description: 'We launch your campaigns and closely monitor performance, making real-time adjustments to maximize results.'
      },
      {
        title: 'Ongoing Optimization & Reporting',
        description: 'We continuously optimize your campaigns based on performance data and provide detailed reports on results and ROI.'
      }
    ],
    caseStudies: [
      {
        title: 'E-commerce PPC Revenue Growth',
        description: 'How our Google Ads strategy helped an e-commerce retailer achieve a 350% ROI and increase online sales by 200% while reducing cost per acquisition by 30%.',
        results: ['350% return on ad spend (ROAS)', '200% increase in online sales', '30% reduction in cost per acquisition']
      },
      {
        title: 'B2B Lead Generation Campaign',
        description: 'How our targeted PPC campaign generated 120% more qualified leads for a B2B software company while reducing cost per lead by 45%.',
        results: ['120% increase in qualified leads', '45% reduction in cost per lead', '35% increase in conversion rate']
      }
    ],
    faq: [
      {
        question: 'How much should I budget for PPC advertising?',
        answer: 'Your PPC budget depends on your industry, competition, goals, and target audience. We typically recommend starting with a test budget of ₹50,000-₹1,00,000 per month for most businesses, which allows us to gather data and optimize before scaling up. We will work with you to determine the right budget based on your specific situation and objectives.'
      },
      {
        question: 'How long does it take to see results from PPC campaigns?',
        answer: 'Unlike SEO, PPC can drive immediate traffic to your website. However, optimization for maximum ROI typically takes 2-3 months. During this period, we gather data, test different approaches, and refine your campaigns. Most clients see significant improvements in performance within the first month and continued optimization thereafter.'
      },
      {
        question: 'Which PPC platforms do you manage?',
        answer: 'We manage campaigns across all major PPC platforms, including Google Ads, Microsoft Ads (Bing), Facebook Ads, Instagram Ads, LinkedIn Ads, Twitter Ads, and Amazon Advertising. We will recommend the best platforms for your business based on your target audience and goals.'
      },
      {
        question: 'How do you measure PPC success?',
        answer: 'We measure PPC success through various metrics aligned with your business goals, including click-through rate (CTR), conversion rate, cost per click (CPC), cost per acquisition (CPA), return on ad spend (ROAS), and overall ROI. We provide detailed reports that show the impact of your PPC investment on your business objectives.'
      }
    ]
  },
  'content': {
    title: 'Content Marketing',
    description: 'Build authority, engage your audience, and drive conversions with strategic, high-quality content.',
    icon: FileText,
    color: 'from-green-500 to-green-600',
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    overview: 'Our Content Marketing services help businesses attract, engage, and convert their target audience through strategic, high-quality content. We develop comprehensive content strategies that establish your brand as an authority, build trust with your audience, and drive measurable business results.',
    benefits: [
      'Increased brand awareness and authority',
      'Higher search engine rankings and organic traffic',
      'Stronger customer engagement and loyalty',
      'More qualified leads and conversions',
      'Valuable insights into customer interests and needs',
      'Long-term asset development for your business'
    ],
    features: [
      {
        title: 'Content Strategy Development',
        description: 'We create comprehensive content strategies aligned with your business goals, target audience, and buyers journey, ensuring all content serves a strategic purpose.'
      },
      {
        title: 'Content Creation & Production',
        description: 'Our team of experienced writers, designers, and multimedia specialists creates high-quality, engaging content across various formats, including blog posts, articles, whitepapers, ebooks, infographics, videos, and podcasts.'
      },
      {
        title: 'SEO Content Optimization',
        description: 'We optimize all content for search engines, ensuring it ranks well for relevant keywords while maintaining readability and engagement for human readers.'
      },
      {
        title: 'Content Distribution & Promotion',
        description: 'We develop strategies to distribute and promote your content across multiple channels, including your website, email, social media, and third-party platforms.'
      },
      {
        title: 'Content Performance Analysis',
        description: 'We track and analyze content performance using various metrics, providing insights for continuous optimization and improved results.'
      },
      {
        title: 'Content Repurposing & Updating',
        description: 'We maximize the value of your content by repurposing it across different formats and channels, and by updating existing content to maintain relevance and performance.'
      }
    ],
    process: [
      {
        title: 'Content Audit & Strategy Development',
        description: 'We analyze your existing content, identify gaps and opportunities, and develop a comprehensive content strategy aligned with your business goals.'
      },
      {
        title: 'Audience & Keyword Research',
        description: 'We research your target audiences interests, pain points, and search behavior to inform our content topics and SEO strategy.'
      },
      {
        title: 'Content Planning & Calendar Creation',
        description: 'We create a detailed content calendar that ensures consistent publication and strategic alignment across all content pieces.'
      },
      {
        title: 'Content Creation & Optimization',
        description: 'Our team creates high-quality, engaging content optimized for both search engines and human readers.'
      },
      {
        title: 'Content Distribution & Promotion',
        description: 'We implement strategies to distribute and promote your content across multiple channels to maximize reach and engagement.'
      },
      {
        title: 'Performance Analysis & Optimization',
        description: 'We continuously monitor content performance, provide detailed reports, and optimize our approach based on data-driven insights.'
      }
    ],
    caseStudies: [
      {
        title: 'B2B Content Marketing Success',
        description: 'How our strategic content marketing approach helped a B2B technology company establish thought leadership, increase organic traffic by 200%, and generate 150% more qualified leads.',
        results: ['200% increase in organic traffic', '150% increase in qualified leads', '45% improvement in conversion rates']
      },
      {
        title: 'E-commerce Content Strategy',
        description: 'How our content marketing strategy helped an e-commerce brand build customer loyalty, increase repeat purchases by 75%, and boost average order value by 35%.',
        results: ['75% increase in repeat purchases', '35% increase in average order value', '120% growth in email list subscribers']
      }
    ],
    faq: [
      {
        question: 'How often should we publish new content?',
        answer: 'The ideal publishing frequency depends on your resources, goals, and audience. Quality always trumps quantity. For most businesses, we recommend 1-4 high-quality blog posts per month, 1-2 premium content pieces (like ebooks or whitepapers) per quarter, and regular social media updates. We will develop a custom publishing schedule based on your specific situation and objectives.'
      },
      {
        question: 'How long does it take to see results from content marketing?',
        answer: 'Content marketing is a long-term strategy, with significant results typically appearing after 6-9 months of consistent effort. However, you may see some improvements in engagement and traffic within the first 3 months. The timeline depends on factors such as your industry, competition, content quality, and promotion strategies.'
      },
      {
        question: 'How do you measure content marketing success?',
        answer: 'We measure content marketing success through various metrics aligned with your business goals, including website traffic, engagement metrics (time on page, bounce rate), social shares, backlinks, lead generation, conversion rates, and ROI. We provide comprehensive reports that demonstrate the impact of your content marketing investment.'
      },
      {
        question: 'Do you handle all aspects of content creation?',
        answer: 'Yes, our team includes experienced writers, editors, designers, and multimedia specialists who can create all types of content. We can handle everything from research and writing to design and production. We also work collaboratively with your team if you prefer to be involved in certain aspects of the content creation process.'
      }
    ]
  },
  'branding': {
    title: 'Branding & Design',
    description: 'Create a powerful brand identity that resonates with your audience and sets you apart from competitors.',
    icon: Sparkles,
    color: 'from-purple-500 to-purple-600',
    heroImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    overview: 'Our Branding & Design services help businesses create powerful, cohesive brand identities that resonate with their target audience and differentiate them from competitors. We develop comprehensive branding strategies and visual systems that communicate your unique value proposition and build lasting connections with your customers.',
    benefits: [
      'Strong brand recognition and recall',
      'Increased customer trust and loyalty',
      'Consistent brand experience across all touchpoints',
      'Differentiation from competitors',
      'Higher perceived value for your products or services',
      'Stronger emotional connection with your audience'
    ],
    features: [
      {
        title: 'Brand Strategy Development',
        description: 'We create comprehensive brand strategies that define your brand positioning, personality, voice, and messaging, ensuring alignment with your business goals and target audience.'
      },
      {
        title: 'Logo & Visual Identity Design',
        description: 'Our design team creates distinctive logos and visual identity systems that capture your brand essence and create recognition across all touchpoints.'
      },
      {
        title: 'Brand Guidelines Creation',
        description: 'We develop detailed brand guidelines that ensure consistency in how your brand is presented across all channels and materials.'
      },
      {
        title: 'Website & Digital Design',
        description: 'We design websites and digital experiences that reflect your brand identity while providing intuitive, engaging user experiences.'
      },
      {
        title: 'Marketing Collateral Design',
        description: 'Our team creates cohesive, on-brand marketing materials, including business cards, brochures, presentations, social media graphics, and more.'
      },
      {
        title: 'Brand Messaging & Copywriting',
        description: 'We develop clear, compelling brand messaging and copy that communicates your value proposition and resonates with your target audience.'
      }
    ],
    process: [
      {
        title: 'Brand Discovery & Research',
        description: 'We conduct thorough research to understand your business, audience, competitors, and industry, laying the foundation for an effective brand strategy.'
      },
      {
        title: 'Brand Strategy Development',
        description: 'We define your brand positioning, personality, values, and messaging framework to guide all branding and design decisions.'
      },
      {
        title: 'Visual Identity Design',
        description: 'Our design team creates your logo, color palette, typography, and visual elements that capture your brand essence.'
      },
      {
        title: 'Brand Guidelines Creation',
        description: 'We develop comprehensive guidelines that ensure consistent application of your brand across all touchpoints.'
      },
      {
        title: 'Brand Asset Development',
        description: 'We create the various brand applications and materials needed for your business, from digital to print.'
      },
      {
        title: 'Brand Launch & Management',
        description: 'We support the launch of your new brand and provide guidance for ongoing brand management and evolution.'
      }
    ],
    caseStudies: [
      {
        title: 'Startup Brand Development',
        description: 'How we created a distinctive brand identity for a technology startup, helping them secure funding, attract top talent, and establish market presence.',
        results: ['Successful Series A funding secured', '200% increase in job applications', '150% growth in brand awareness metrics']
      },
      {
        title: 'Established Business Rebranding',
        description: 'How our rebranding strategy helped a 20-year-old company modernize their image, reach new audience segments, and increase market share.',
        results: ['35% increase in market share', '45% improvement in brand perception metrics', '60% growth in engagement with younger demographics']
      }
    ],
    faq: [
      {
        question: 'How long does the branding process take?',
        answer: 'A comprehensive branding project typically takes 8-12 weeks, depending on the scope and complexity. This includes research, strategy development, visual identity design, and creation of brand guidelines and assets. Rebranding projects may take longer, especially for established companies with extensive brand applications. We will provide a detailed timeline based on your specific needs.'
      },
      {
        question: 'How much input will I have in the branding process?',
        answer: 'Our branding process is highly collaborative. We value your insights and feedback throughout the project. We begin with in-depth discovery sessions to understand your vision and preferences, present concepts for your feedback, and refine based on your input. The final brand will reflect both our expertise and your vision for your business.'
      },
      {
        question: 'Do you provide brand guidelines?',
        answer: 'Yes, comprehensive brand guidelines are a core deliverable in our branding projects. These guidelines document all aspects of your brand, including logo usage, color palette, typography, imagery style, voice and tone, and application examples. This ensures consistency in how your brand is presented across all channels and materials.'
      },
      {
        question: 'Can you help implement our new brand across all touchpoints?',
        answer: 'Yes, we offer brand implementation services to help you roll out your new brand across all touchpoints, including website, social media, marketing materials, signage, packaging, and more. We can also provide training for your team on how to maintain brand consistency in their day-to-day work.'
      }
    ]
  },
  'email': {
    title: 'Email Marketing',
    description: 'Drive engagement, nurture leads, and increase conversions with targeted email marketing campaigns.',
    icon: Mail,
    color: 'from-orange-500 to-orange-600',
    heroImage: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    overview: 'Our Email Marketing services help businesses build meaningful relationships with their audience, nurture leads, and drive conversions through targeted, personalized email campaigns. We develop comprehensive email strategies that deliver the right message to the right person at the right time, maximizing engagement and ROI.',
    benefits: [
      'Direct communication with your audience',
      'Higher conversion rates and ROI',
      'Increased customer retention and loyalty',
      'Personalized messaging and experiences',
      'Valuable customer insights and data',
      'Cost-effective marketing channel'
    ],
    features: [
      {
        title: 'Email Strategy Development',
        description: 'We create comprehensive email marketing strategies aligned with your business goals, target audience, and customer journey, ensuring every email serves a strategic purpose.'
      },
      {
        title: 'Email Campaign Creation',
        description: 'Our team designs and develops engaging email campaigns, including newsletters, promotional emails, automated sequences, and transactional emails.'
      },
      {
        title: 'List Building & Management',
        description: 'We implement effective strategies to grow your email list with qualified subscribers and maintain list health through proper segmentation and management.'
      },
      {
        title: 'Email Automation & Workflows',
        description: 'We set up automated email sequences and workflows that deliver personalized messages based on subscriber behavior, preferences, and stage in the customer journey.'
      },
      {
        title: 'A/B Testing & Optimization',
        description: 'We continuously test and optimize various elements of your emails, including subject lines, content, design, and calls-to-action, to improve performance.'
      },
      {
        title: 'Performance Tracking & Reporting',
        description: 'We provide detailed reports on email performance, including open rates, click-through rates, conversions, and ROI, with actionable insights for improvement.'
      }
    ],
    process: [
      {
        title: 'Email Marketing Audit & Strategy',
        description: 'We analyze your current email marketing efforts and develop a comprehensive strategy aligned with your business goals.'
      },
      {
        title: 'List Segmentation & Management',
        description: 'We segment your email list based on various criteria to enable targeted, relevant messaging to different audience groups.'
      },
      {
        title: 'Email Design & Content Creation',
        description: 'Our team creates engaging, on-brand email designs and compelling content that drives action.'
      },
      {
        title: 'Automation Setup & Implementation',
        description: 'We set up automated email sequences and workflows that deliver the right message at the right time.'
      },
      {
        title: 'Campaign Deployment & Testing',
        description: 'We deploy your email campaigns and conduct A/B tests to optimize performance.'
      },
      {
        title: 'Analysis, Reporting & Optimization',
        description: 'We continuously monitor performance, provide detailed reports, and optimize your email strategy based on data-driven insights.'
      }
    ],
    caseStudies: [
      {
        title: 'E-commerce Email Marketing Success',
        description: 'How our strategic email marketing approach helped an e-commerce retailer increase revenue by 45% and improve customer retention by 60%.',
        results: ['45% increase in email-generated revenue', '60% improvement in customer retention', '35% higher average order value']
      },
      {
        title: 'B2B Lead Nurturing Campaign',
        description: 'How our automated email nurturing sequences helped a B2B software company convert 40% more leads into customers and shorten the sales cycle by 30%.',
        results: ['40% increase in lead-to-customer conversion rate', '30% reduction in sales cycle length', '25% improvement in sales team efficiency']
      }
    ],
    faq: [
      {
        question: 'How often should we send emails to our list?',
        answer: 'The ideal email frequency depends on your industry, audience, and content quality. For most businesses, we recommend 1-4 emails per month for newsletters and regular updates, plus targeted automated sequences based on subscriber behavior. We will develop a custom sending schedule based on your specific situation and audience preferences to maximize engagement while minimizing unsubscribes.'
      },
      {
        question: 'What email marketing platform do you recommend?',
        answer: 'We work with various email marketing platforms, including Mailchimp, HubSpot, ActiveCampaign, Klaviyo, and more. Our recommendation depends on your specific needs, budget, and integration requirements. We can either work with your existing platform or help you select and set up a new one that best suits your business.'
      },
      {
        question: 'How do you measure email marketing success?',
        answer: 'We measure email marketing success through various metrics aligned with your business goals, including open rates, click-through rates, conversion rates, revenue generated, list growth rate, and ROI. We provide comprehensive reports that demonstrate the impact of your email marketing investment on your business objectives.'
      },
      {
        question: 'How do you ensure email deliverability?',
        answer: 'We implement best practices to ensure high deliverability rates, including maintaining list hygiene, following anti-spam regulations, optimizing email content and code, authenticating your domain with SPF and DKIM, monitoring engagement metrics, and regularly cleaning your list of inactive subscribers. We also stay updated on email provider algorithms and adjust our strategies accordingly.'
      }
    ]
  },
  'web-development': {
    title: 'Web Development',
    description: 'Create stunning, high-performance websites that drive results and provide exceptional user experiences.',
    icon: Code,
    color: 'from-blue-500 to-blue-600',
    heroImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    overview: 'Our Web Development services help businesses create stunning, high-performance websites that drive results and provide exceptional user experiences. We develop custom websites and web applications that align with your business goals, reflect your brand identity, and engage your target audience.',
    benefits: [
      'Professional online presence that builds credibility',
      'Improved user experience and engagement',
      'Higher conversion rates and lead generation',
      'Mobile-responsive design for all devices',
      'Search engine friendly architecture',
      'Scalable solutions that grow with your business'
    ],
    features: [
      {
        title: 'Custom Website Design & Development',
        description: 'We create custom, visually stunning websites tailored to your brand, goals, and target audience, with intuitive navigation and compelling user experiences.'
      },
      {
        title: 'E-commerce Development',
        description: 'We build powerful, user-friendly e-commerce websites that drive sales, with features like product catalogs, secure payment processing, inventory management, and more.'
      },
      {
        title: 'Web Application Development',
        description: 'Our team develops custom web applications and software solutions that streamline your business processes, enhance customer experiences, and solve specific business challenges.'
      },
      {
        title: 'Responsive & Mobile-First Design',
        description: 'We ensure your website performs flawlessly across all devices and screen sizes, providing an optimal experience for all users.'
      },
      {
        title: 'Website Maintenance & Support',
        description: 'We provide ongoing maintenance and support services to keep your website secure, up-to-date, and performing at its best.'
      },
      {
        title: 'Performance Optimization',
        description: 'We optimize your website for speed, performance, and user experience, ensuring fast load times and smooth functionality.'
      }
    ],
    process: [
      {
        title: 'Discovery & Planning',
        description: 'We gather requirements, understand your goals and audience, and develop a comprehensive project plan.'
      },
      {
        title: 'UX/UI Design',
        description: 'Our design team creates wireframes and visual designs that provide intuitive user experiences and reflect your brand identity.'
      },
      {
        title: 'Development & Programming',
        description: 'Our developers build your website or application using the most appropriate technologies and best practices.'
      },
      {
        title: 'Content Integration & SEO',
        description: 'We integrate your content and implement SEO best practices to ensure visibility in search engines.'
      },
      {
        title: 'Testing & Quality Assurance',
        description: 'We thoroughly test your website across devices, browsers, and use cases to ensure flawless functionality.'
      },
      {
        title: 'Launch & Post-Launch Support',
        description: 'We manage the launch process and provide ongoing support and maintenance to ensure continued success.'
      }
    ],
    caseStudies: [
      {
        title: 'E-commerce Website Transformation',
        description: 'How our custom e-commerce development helped a retailer increase online sales by 200% and improve conversion rates by 45%.',
        results: ['200% increase in online sales', '45% improvement in conversion rates', '60% reduction in cart abandonment']
      },
      {
        title: 'Corporate Website Redesign',
        description: 'How our website redesign helped a B2B company generate 120% more qualified leads and reduce bounce rates by 35%.',
        results: ['120% increase in lead generation', '35% reduction in bounce rates', '75% improvement in page load speed']
      }
    ],
    faq: [
      {
        question: 'How long does it take to build a website?',
        answer: 'The timeline for website development depends on the complexity and scope of your project. A basic informational website typically takes 4-8 weeks, while more complex websites with custom functionality or e-commerce capabilities can take 8-16 weeks or more. We will provide a detailed timeline based on your specific requirements and goals.'
      },
      {
        question: 'What content management system (CMS) do you use?',
        answer: 'We work with various content management systems, including WordPress, Shopify, Webflow, and custom solutions. Our recommendation depends on your specific needs, technical requirements, and how you plan to manage your website. We will help you select the most appropriate CMS based on your business goals and team capabilities.'
      },
      {
        question: 'Do you provide website hosting and maintenance?',
        answer: 'Yes, we offer website hosting and maintenance services to ensure your website remains secure, up-to-date, and performing optimally. Our maintenance packages include regular updates, security monitoring, performance optimization, backup management, and technical support. We can also provide training for your team on how to manage and update your website.'
      },
      {
        question: 'Will my website be optimized for search engines?',
        answer: 'Yes, we implement SEO best practices throughout the development process, including clean code structure, proper heading hierarchy, optimized images, mobile responsiveness, fast loading times, and SEO-friendly URLs. We also ensure your website is set up with the necessary tools for ongoing SEO efforts, such as Google Analytics and Search Console integration.'
      }
    ]
  }
};

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? services[serviceId as keyof typeof services] : null;

  if (!service) {
    return (
      <main className="pt-32 pb-20">
        <div className="container">
          <div className="text-center">
            <h1 className="heading-lg mb-6">Service Not Found</h1>
            <p className="text-xl mb-8">The service you're looking for doesn't exist or has been moved.</p>
            <a href="/services" className="btn btn-primary px-6 py-3 rounded-md">View All Services</a>
          </div>
        </div>
      </main>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(12,142,231,0.8),rgba(124,51,245,0.8))]"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mr-4`}>
                  <ServiceIcon className="w-6 h-6 text-white" />
                </div>
                <h1 className="heading-xl text-white">{service.title}</h1>
              </div>
              <p className="text-xl text-gray-300 mb-8">
                {service.description}
              </p>
              <a href="#contact" className="btn btn-primary px-6 py-3 rounded-md inline-flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-30"></div>
              <img
                src={service.heroImage}
                alt={service.title}
                className="relative rounded-2xl w-full h-auto shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section bg-white dark:bg-dark-900">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-6">Service <span className="gradient-text">Overview</span></h2>
            <p className="text-lg text-dark-600 dark:text-dark-200">
              {service.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary-500 mr-3" />
                  <h3 className="text-lg font-bold">{benefit}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gray-50 dark:bg-dark-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">What We <span className="gradient-text">Offer</span></h2>
            <p className="text-lg text-dark-600 dark:text-dark-200 max-w-3xl mx-auto">
              Our comprehensive {service.title} services are designed to help your business achieve its goals and stand out in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-dark-600 dark:text-dark-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white dark:bg-dark-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our <span className="gradient-text">Process</span></h2>
            <p className="text-lg text-dark-600 dark:text-dark-200 max-w-3xl mx-auto">
              We follow a proven methodology to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="relative">
            {/* Process line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-secondary-500 hidden md:block"></div>

            <div className="relative z-10 space-y-12">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md">
                      <div className="flex items-center mb-2 justify-start md:justify-end">
                        <span className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </span>
                       <h3 className="text-xl font-bold ml-3 md:ml-0 md:mr-3">{step.title}</h3>
                      </div>
                      <p className="text-dark-600 dark:text-dark-300">{step.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-10 h-10 rounded-full bg-white dark:bg-dark-700 border-4 border-primary-500 z-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                  </div>
                  <div className="w-full md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section bg-gray-50 dark:bg-dark-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Case <span className="gradient-text">Studies</span></h2>
            <p className="text-lg text-dark-600 dark:text-dark-200 max-w-3xl mx-auto">
              See how we've helped our clients achieve exceptional results with our {service.title} services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.caseStudies.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-md"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
                  <p>{caseStudy.description}</p>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-dark-600 dark:text-dark-200">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/case-studies" className="btn btn-primary px-6 py-3 rounded-md inline-flex items-center">
              View All Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white dark:bg-dark-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p className="text-lg text-dark-600 dark:text-dark-200 max-w-3xl mx-auto">
              Get answers to common questions about our {service.title} services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {service.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                <div className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-3">{item.question}</h3>
                  <p className="text-dark-600 dark:text-dark-300">{item.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-gradient-to-br from-primary-900 to-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6TTYgNHY2aDZ2LTZINnptMCAzMHY2aDZ2LTZINnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="heading-lg mb-6">Ready to Transform Your <span className="text-primary-300">Digital Presence?</span></h2>
              <p className="text-lg mb-8 text-gray-200">
                Let's discuss how our {service.title} expertise can help your business grow. Schedule a free consultation with our team today.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-primary-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Email Us</p>
                    <a href="mailto:hello@ocavior.com" className="text-white hover:text-primary-300 transition-colors">
                      hello@ocavior.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-primary-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Call Us</p>
                    <a href="tel:+919876543210" className="text-white hover:text-primary-300 transition-colors">
                      +91 9876 543 210
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get a Free Consultation</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-600 dark:text-dark-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-600 dark:text-dark-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-dark-600 dark:text-dark-300 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-600 dark:text-dark-300 mb-1">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Share your goals and challenges..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn btn-primary py-3 rounded-md font-medium flex items-center justify-center"
                >
                  Let's Talk
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetailPage;