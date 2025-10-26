"use client";

import { useState } from "react";

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState('faq');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    { id: 'all', name: 'All Topics', icon: '📋' },
    { id: 'installation', name: 'Installation', icon: '🔧' },
    { id: 'usage', name: 'Usage & Operation', icon: '📖' },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: '🔍' },
    { id: 'maintenance', name: 'Maintenance', icon: '🛠️' },
    { id: 'specifications', name: 'Specifications', icon: '📊' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'installation',
      question: 'How do I properly install Class 5 steam indicators?',
      answer: 'Class 5 steam indicators should be placed in the most challenging location within the sterilization load. Ensure they are positioned where steam penetration is most difficult, typically at the center of dense loads or in areas with restricted airflow.',
      tags: ['Class 5', 'Installation', 'Steam', 'Sterilization']
    },
    {
      id: 2,
      category: 'usage',
      question: 'What is the shelf life of humidity indicator cards?',
      answer: 'Our humidity indicator cards have a shelf life of 2 years when stored in their original packaging at room temperature (15-25°C) and low humidity conditions. Always check the expiration date before use.',
      tags: ['Humidity', 'Shelf Life', 'Storage']
    },
    {
      id: 3,
      category: 'troubleshooting',
      question: 'Why is my temperature indicator not responding properly?',
      answer: 'Temperature indicators may fail to respond due to several reasons: expired shelf life, improper storage conditions, contamination, or exposure to extreme temperatures. Check the expiration date and ensure proper storage.',
      tags: ['Temperature', 'Troubleshooting', 'Response']
    },
    {
      id: 4,
      category: 'specifications',
      question: 'What are the temperature ranges for your indicators?',
      answer: 'Our temperature indicators cover various ranges: Steam indicators (121-134°C), General temperature strips (60-200°C), and Cold chain monitors (-20°C to +25°C). Specific ranges depend on the product model.',
      tags: ['Temperature', 'Ranges', 'Specifications']
    },
    {
      id: 5,
      category: 'maintenance',
      question: 'How often should I calibrate my monitoring equipment?',
      answer: 'Regular calibration is recommended every 6 months for critical applications and annually for general use. Follow your facility\'s quality assurance protocols and regulatory requirements.',
      tags: ['Calibration', 'Maintenance', 'Quality']
    },
    {
      id: 6,
      category: 'usage',
      question: 'Can I reuse moisture indicator packets?',
      answer: 'Moisture indicator packets are designed for single-use applications. Once they have absorbed moisture and changed color, they should be replaced. Reusing them may lead to inaccurate readings.',
      tags: ['Moisture', 'Reuse', 'Single-use']
    },
    {
      id: 7,
      category: 'installation',
      question: 'Where should I place Bowie Dick test strips?',
      answer: 'Bowie Dick test strips should be placed in an empty chamber or in the center of a standard test pack. They are specifically designed to test air removal efficiency in steam sterilizers.',
      tags: ['Bowie Dick', 'Placement', 'Air Removal']
    },
    {
      id: 8,
      category: 'troubleshooting',
      question: 'What should I do if sterilization indicators show inconsistent results?',
      answer: 'Inconsistent results may indicate equipment malfunction, improper loading, or indicator issues. Check sterilizer performance, verify proper loading procedures, and ensure indicators are within their shelf life.',
      tags: ['Inconsistent', 'Results', 'Sterilization']
    }
  ];

  const documentation = [
    {
      title: 'Product Installation Guide',
      description: 'Comprehensive guide for proper installation of all indicator types',
      type: 'PDF',
      size: '2.5 MB',
      category: 'installation',
      downloadUrl: '#'
    },
    {
      title: 'User Manual - Sterilization Indicators',
      description: 'Detailed user manual for Class 5 and Class 6 steam indicators',
      type: 'PDF',
      size: '3.2 MB',
      category: 'usage',
      downloadUrl: '#'
    },
    {
      title: 'Troubleshooting Guide',
      description: 'Common issues and solutions for all product categories',
      type: 'PDF',
      size: '1.8 MB',
      category: 'troubleshooting',
      downloadUrl: '#'
    },
    {
      title: 'Technical Specifications Sheet',
      description: 'Complete technical specifications for all products',
      type: 'PDF',
      size: '4.1 MB',
      category: 'specifications',
      downloadUrl: '#'
    },
    {
      title: 'Maintenance Schedule Template',
      description: 'Recommended maintenance schedules and checklists',
      type: 'Excel',
      size: '0.5 MB',
      category: 'maintenance',
      downloadUrl: '#'
    },
    {
      title: 'Quality Control Procedures',
      description: 'Standard operating procedures for quality control',
      type: 'PDF',
      size: '2.8 MB',
      category: 'specifications',
      downloadUrl: '#'
    }
  ];

  const supportChannels = [
    {
      title: 'Technical Support',
      description: 'Expert technical assistance for product installation and troubleshooting',
      icon: '🔧',
      contact: '+91 98220 39087',
      email: 'tech-support@indiecaterS.com',
      hours: 'Mon-Fri, 9:00 AM - 6:00 PM IST'
    },
    {
      title: 'Customer Service',
      description: 'General inquiries, orders, and customer support',
      icon: '💬',
      contact: '+91 98220 39087',
      email: 'support@indiecaterS.com',
      hours: 'Mon-Fri, 9:00 AM - 6:00 PM IST'
    },
    {
      title: 'Sales Support',
      description: 'Product information, quotes, and sales assistance',
      icon: '💰',
      contact: '+91 98220 39087',
      email: 'sales@indiecaterS.com',
      hours: 'Mon-Fri, 9:00 AM - 6:00 PM IST'
    },
    {
      title: 'Emergency Support',
      description: '24/7 emergency support for critical applications',
      icon: '🚨',
      contact: '+91 98220 39087',
      email: 'emergency@indiecaterS.com',
      hours: '24/7 Available'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredDocs = selectedCategory === 'all' 
    ? documentation 
    : documentation.filter(doc => doc.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Support <span className="bg-yellow-400 px-2">Center</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get help with your IndieCaters products. Find answers, download documentation, 
              and connect with our expert support team.
            </p>
          </div>
        </div>
      </section>

      {/* Support Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'faq'
                  ? 'bg-yellow-400 text-gray-800'
                  : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => setActiveTab('documentation')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'documentation'
                  ? 'bg-yellow-400 text-gray-800'
                  : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Documentation
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'contact'
                  ? 'bg-yellow-400 text-gray-800'
                  : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {activeTab === 'faq' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search FAQs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    {supportCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div key={faq.id} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                        {supportCategories.find(cat => cat.id === faq.category)?.name}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{faq.answer}</p>
                    <div className="flex flex-wrap gap-2">
                      {faq.tags.map((tag, index) => (
                        <span key={index} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">No FAQs found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Documentation Section */}
      {activeTab === 'documentation' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Documentation & Resources</h2>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  {supportCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDocs.map((doc, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-2xl">📄</div>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                        {doc.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{doc.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{doc.size}</span>
                      <button className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-yellow-500 transition-colors">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Support Section */}
      {activeTab === 'contact' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Our Support Team</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {supportChannels.map((channel, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="text-4xl mb-4">{channel.icon}</div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{channel.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{channel.description}</p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-semibold text-gray-800">Phone:</span>
                        <div className="text-gray-600">{channel.contact}</div>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Email:</span>
                        <div className="text-gray-600">{channel.email}</div>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Hours:</span>
                        <div className="text-gray-600">{channel.hours}</div>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <a 
                        href={`tel:${channel.contact.replace(/\s+/g, '')}`}
                        className="flex-1 bg-yellow-400 text-gray-800 py-2 px-3 rounded-lg font-semibold text-sm hover:bg-yellow-500 transition-colors text-center"
                      >
                        Call
                      </a>
                      <a 
                        href={`mailto:${channel.email}`}
                        className="flex-1 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors text-center"
                      >
                        Email
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Support Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Submit a Support Request</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Select a category</option>
                  <option value="technical">Technical Support</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="billing">Billing Question</option>
                  <option value="general">General Question</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Please describe your question or issue in detail..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-800 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors"
              >
                Submit Support Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Quick Links</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access additional resources and information
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/catalog" className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Product Catalog</h3>
              <p className="text-gray-600 text-sm">Browse our complete product range</p>
            </a>
            <a href="/quality" className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Quality Certificates</h3>
              <p className="text-gray-600 text-sm">Download quality certificates and documentation</p>
            </a>
            <a href="/training" className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Training Resources</h3>
              <p className="text-gray-600 text-sm">Access training materials and guides</p>
            </a>
            <a href="/contact" className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Contact Information</h3>
              <p className="text-gray-600 text-sm">Get in touch with our team</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


