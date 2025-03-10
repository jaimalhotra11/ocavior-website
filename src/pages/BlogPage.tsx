import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, User, Tag, ArrowRight, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'How Technology Integration Can Transform Your Business Operations',
    excerpt: 'Discover how seamless technology integration can streamline your business processes and drive efficiency across your organization.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Technology',
    author: 'Alex Johnson',
    date: 'May 15, 2025',
    readTime: '5 min read',
    slug: 'how-technology-integration-transforms-business'
  },
  {
    id: 2,
    title: 'The Ultimate Guide to SEO Optimization in 2025',
    excerpt: 'Stay ahead of the competition with our comprehensive guide to the latest SEO strategies and best practices for 2025.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'SEO',
    author: 'Sarah Williams',
    date: 'April 28, 2025',
    readTime: '8 min read',
    slug: 'ultimate-guide-seo-optimization-2025'
  },
  {
    id: 3,
    title: 'Leveraging Cloud Solutions for Scalable Business Growth',
    excerpt: 'Learn how cloud solutions can provide the flexibility and scalability your business needs to grow in today\'s competitive market.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Cloud',
    author: 'Michael Chen',
    date: 'April 15, 2025',
    readTime: '6 min read',
    slug: 'leveraging-cloud-solutions-scalable-growth'
  },
  {
    id: 4,
    title: 'Social Media Strategies That Drive Engagement and Conversions',
    excerpt: 'Discover proven social media tactics that not only increase engagement but also convert followers into loyal customers.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    category: 'Social Media',
    author: 'Emily Rodriguez',
    date: 'March 30, 2025',
    readTime: '7 min read',
    slug: 'social-media-strategies-engagement-conversions'
  },
  {
    id: 5,
    title: 'Agile Product Delivery: Accelerating Time to Market',
    excerpt: 'Explore how agile methodologies can help your team deliver products faster without compromising on quality.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Product Delivery',
    author: 'David Wilson',
    date: 'March 18, 2025',
    readTime: '5 min read',
    slug: 'agile-product-delivery-accelerating-time-to-market'
  },
  {
    id: 6,
    title: 'Business Development Strategies for the Digital Age',
    excerpt: 'Learn effective business development approaches that leverage digital tools and platforms for sustainable growth.',
    image: 'https://images.unsplash.com/photo-1460794418188-1bb7dba2720d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Business Development',
    author: 'Sophia Martinez',
    date: 'March 5, 2025',
    readTime: '9 min read',
    slug: 'business-development-strategies-digital-age'
  }
];

const categories = [
  'All',
  'Technology',
  'SEO',
  'Cloud',
  'Social Media',
  'Product Delivery',
  'Business Development'
];

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(12,142,231,0.8),rgba(124,51,245,0.8))]"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Our <span className="gradient-text">Blog</span></h1>
            <p className="text-xl text-gray-300 mb-8">
              Insights, strategies, and industry trends to help your business thrive
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section bg-white dark:bg-dark-900">
        <div className="container">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative w-full md:w-auto md:min-w-[300px]">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 rounded-md border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-800 dark:text-white"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400 dark:text-dark-400 w-4 h-4" />
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-dark-200 hover:bg-gray-200 dark:hover:bg-dark-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                    {filteredPosts[0].category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-dark-500 dark:text-dark-300 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{filteredPosts[0].date}</span>
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{filteredPosts[0].author}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{filteredPosts[0].readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{filteredPosts[0].title}</h2>
                  <p className="text-dark-600 dark:text-dark-200 mb-6">{filteredPosts[0].excerpt}</p>
                  <Link 
                    to={`/blog/${filteredPosts[0].slug}`}
                    className="btn btn-primary px-6 py-3 rounded-md inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-dark-500 dark:text-dark-300 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-dark-600 dark:text-dark-200 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                          <img 
                            src={`https://ui-avatars.com/api/?name=${post.author.replace(' ', '+')}&background=random`} 
                            alt={post.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium">{post.author}</span>
                      </div>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No articles found</h3>
              <p className="text-dark-600 dark:text-dark-200">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-primary-900 to-secondary-900 rounded-xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6TTYgNHY2aDZ2LTZINnptMCAzMHY2aDZ2LTZINnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
            <div className="relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-gray-200 mb-6">
                  Stay updated with the latest insights, trends, and news in digital marketing and technology.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-dark-800"
                    required
                  />
                  <button
                    type="submit"
                    className="btn bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;