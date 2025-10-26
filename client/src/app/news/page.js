"use client";

import { useState } from "react";

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const newsCategories = [
    { id: 'all', name: 'All News', icon: '📰' },
    { id: 'press', name: 'Press Releases', icon: '📢' },
    { id: 'industry', name: 'Industry Insights', icon: '🔍' },
    { id: 'company', name: 'Company News', icon: '🏢' },
    { id: 'technology', name: 'Technology Updates', icon: '🔬' }
  ];

  const newsArticles = [
    {
      id: 1,
      category: 'press',
      title: 'IndieCaters Launches Next-Generation Sterilization Indicators',
      excerpt: 'New Class 6 steam indicators offer enhanced accuracy and faster response times for critical sterilization processes.',
      content: 'IndieCaters Pvt Ltd announces the launch of its revolutionary Class 6 sterilization indicators, featuring advanced chemical formulations that provide faster response times and enhanced accuracy for critical sterilization processes. These new indicators meet the latest international standards and offer improved reliability for healthcare and pharmaceutical applications.',
      date: '2024-01-15',
      author: 'IndieCaters Press Team',
      image: '🧪',
      tags: ['Sterilization', 'Innovation', 'Healthcare'],
      readTime: '3 min read'
    },
    {
      id: 2,
      category: 'industry',
      title: 'The Future of Industrial Monitoring: Trends and Innovations',
      excerpt: 'Exploring emerging technologies and market trends shaping the industrial monitoring landscape.',
      content: 'The industrial monitoring sector is experiencing rapid transformation driven by digitalization, IoT integration, and advanced sensor technologies. Companies are increasingly adopting smart monitoring solutions that provide real-time insights and predictive analytics. This shift towards intelligent monitoring systems is revolutionizing quality control and process optimization across industries.',
      date: '2024-01-10',
      author: 'Dr. Rajesh Kumar',
      image: '📊',
      tags: ['Industry Trends', 'Technology', 'Innovation'],
      readTime: '5 min read'
    },
    {
      id: 3,
      category: 'company',
      title: 'IndieCaters Expands Manufacturing Capacity in Pune',
      excerpt: 'New production facility increases capacity by 40% to meet growing global demand.',
      content: 'IndieCaters has successfully completed the expansion of its manufacturing facility in Pune, increasing production capacity by 40%. This expansion includes state-of-the-art quality control laboratories and advanced automation systems. The new facility will help meet the growing global demand for high-quality industrial indicators while maintaining our commitment to excellence.',
      date: '2024-01-05',
      author: 'Archana Gore',
      image: '🏭',
      tags: ['Expansion', 'Manufacturing', 'Growth'],
      readTime: '4 min read'
    },
    {
      id: 4,
      category: 'technology',
      title: 'Advanced Moisture Detection Technology Breakthrough',
      excerpt: 'New moisture indicator technology provides 99.9% accuracy in humidity monitoring.',
      content: 'Our R&D team has achieved a significant breakthrough in moisture detection technology, developing new indicators that provide 99.9% accuracy in humidity monitoring. This technology utilizes advanced polymer chemistry and precision manufacturing techniques to deliver unprecedented reliability in critical applications such as pharmaceutical storage and food processing.',
      date: '2023-12-28',
      author: 'R&D Team',
      image: '💧',
      tags: ['Moisture Detection', 'R&D', 'Innovation'],
      readTime: '6 min read'
    },
    {
      id: 5,
      category: 'press',
      title: 'IndieCaters Receives ISO 13485:2016 Certification',
      excerpt: 'Medical device quality management certification validates our commitment to excellence.',
      content: 'IndieCaters has successfully achieved ISO 13485:2016 certification for medical device quality management systems. This internationally recognized certification demonstrates our commitment to maintaining the highest standards of quality and regulatory compliance in the manufacture of medical-grade indicators.',
      date: '2023-12-20',
      author: 'Quality Assurance Team',
      image: '🏆',
      tags: ['Certification', 'Quality', 'Medical Devices'],
      readTime: '3 min read'
    },
    {
      id: 6,
      category: 'industry',
      title: 'Regulatory Updates in Industrial Monitoring Standards',
      excerpt: 'Recent changes in international standards and their impact on manufacturers.',
      content: 'Recent updates to international standards for industrial monitoring are bringing significant changes to the industry. New requirements for chemical indicators, sterilization validation, and quality assurance protocols are reshaping manufacturing practices. Industry leaders are adapting to these changes while maintaining high standards of product quality and safety.',
      date: '2023-12-15',
      author: 'Regulatory Affairs Team',
      image: '📋',
      tags: ['Standards', 'Regulations', 'Compliance'],
      readTime: '4 min read'
    }
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory);

  const featuredArticle = newsArticles[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              News & <span className="bg-yellow-400 px-2">Media</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest news, insights, and developments 
              from IndieCaters and the industrial monitoring industry.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Article</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center p-8">
                <div className="text-8xl">{featuredArticle.image}</div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    {newsCategories.find(cat => cat.id === featuredArticle.category)?.name}
                  </span>
                  <span className="mx-3 text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">{featuredArticle.date}</span>
                  <span className="mx-3 text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">{featuredArticle.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{featuredArticle.title}</h3>
                <p className="text-gray-600 mb-6">{featuredArticle.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {featuredArticle.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">By {featuredArticle.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest News</h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {newsCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full border transition-colors ${
                  activeCategory === category.id
                    ? 'bg-yellow-400 text-gray-800 border-yellow-400'
                    : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.slice(1).map((article) => (
              <article key={article.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center">
                  <div className="text-4xl">{article.image}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      {newsCategories.find(cat => cat.id === article.category)?.name}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Industry Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert analysis and thought leadership on industrial monitoring trends
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Market Trends</h3>
              <p className="text-gray-600 mb-4">
                The global industrial monitoring market is projected to grow at a CAGR of 6.8% 
                through 2030, driven by increasing regulatory requirements and the need for 
                improved quality control processes.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Digital transformation accelerating adoption</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>IoT integration becoming standard</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Sustainability driving innovation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Technology Advances</h3>
              <p className="text-gray-600 mb-4">
                Recent breakthroughs in chemical indicator technology are enabling more 
                precise monitoring and faster response times in critical applications.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Enhanced accuracy in temperature sensing</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Improved moisture detection sensitivity</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Longer shelf life and stability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Media Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download press materials, logos, and company information
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Press Kit</h3>
              <p className="text-gray-600 mb-4">Company information, product details, and key statistics</p>
              <button className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                Download PDF
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Brand Assets</h3>
              <p className="text-gray-600 mb-4">Logos, images, and brand guidelines for media use</p>
              <button className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                Download Assets
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Media Contact</h3>
              <p className="text-gray-600 mb-4">Get in touch with our media relations team</p>
              <a href="/contact" className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors inline-block">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Stay Informed</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest news, insights, and industry updates.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


