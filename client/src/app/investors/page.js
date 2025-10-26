"use client";

import { useState } from "react";

export default function InvestorsPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const financialHighlights = [
    {
      metric: "Revenue Growth",
      value: "25%",
      period: "YoY 2023",
      trend: "up",
      description: "Consistent revenue growth driven by market expansion"
    },
    {
      metric: "Market Share",
      value: "15%",
      period: "India Industrial Indicators",
      trend: "up",
      description: "Leading position in the Indian industrial indicators market"
    },
    {
      metric: "Customer Retention",
      value: "98%",
      period: "Annual",
      trend: "stable",
      description: "Exceptional customer loyalty and satisfaction"
    },
    {
      metric: "Export Revenue",
      value: "40%",
      period: "of Total Revenue",
      trend: "up",
      description: "Strong international presence across 25+ countries"
    }
  ];

  const quarterlyResults = [
    {
      quarter: "Q4 2023",
      revenue: "₹12.5 Cr",
      growth: "+28%",
      ebitda: "₹3.2 Cr",
      margin: "25.6%",
      netProfit: "₹2.1 Cr",
      margin: "16.8%"
    },
    {
      quarter: "Q3 2023",
      revenue: "₹11.2 Cr",
      growth: "+22%",
      ebitda: "₹2.8 Cr",
      margin: "25.0%",
      netProfit: "₹1.8 Cr",
      margin: "16.1%"
    },
    {
      quarter: "Q2 2023",
      revenue: "₹10.5 Cr",
      growth: "+19%",
      ebitda: "₹2.6 Cr",
      margin: "24.8%",
      netProfit: "₹1.7 Cr",
      margin: "16.2%"
    },
    {
      quarter: "Q1 2023",
      revenue: "₹9.8 Cr",
      growth: "+15%",
      ebitda: "₹2.4 Cr",
      margin: "24.5%",
      netProfit: "₹1.6 Cr",
      margin: "16.3%"
    }
  ];

  const investorDocuments = [
    {
      title: "Annual Report 2023",
      type: "PDF",
      size: "8.5 MB",
      date: "2024-01-15",
      description: "Comprehensive annual report including financial statements and business overview"
    },
    {
      title: "Quarterly Results Q4 2023",
      type: "PDF",
      size: "2.1 MB",
      date: "2024-01-10",
      description: "Fourth quarter financial results and operational highlights"
    },
    {
      title: "Investor Presentation",
      type: "PDF",
      size: "5.2 MB",
      date: "2024-01-05",
      description: "Strategic overview and growth opportunities presentation"
    },
    {
      title: "Corporate Governance Report",
      type: "PDF",
      size: "3.8 MB",
      date: "2023-12-20",
      description: "Corporate governance practices and board composition"
    },
    {
      title: "Sustainability Report",
      type: "PDF",
      size: "4.5 MB",
      date: "2023-12-15",
      description: "Environmental, social, and governance initiatives"
    },
    {
      title: "Financial Statements",
      type: "Excel",
      size: "1.2 MB",
      date: "2024-01-12",
      description: "Detailed financial statements and supporting schedules"
    }
  ];

  const boardMembers = [
    {
      name: "Archana Gore",
      position: "Founder & CEO",
      experience: "15+ years in industrial manufacturing",
      qualifications: "Postgraduate in Physics, Industry Pioneer",
      image: "👩‍🔬"
    },
    {
      name: "Dr. Rajesh Kumar",
      position: "Independent Director",
      experience: "20+ years in chemical engineering",
      qualifications: "PhD Chemical Engineering, Former R&D Head at Tata Chemicals",
      image: "👨‍🔬"
    },
    {
      name: "Priya Sharma",
      position: "Independent Director",
      experience: "18+ years in quality management",
      qualifications: "MBA Operations, Former Quality Director at Sun Pharma",
      image: "👩‍💼"
    },
    {
      name: "Amit Patel",
      position: "CFO",
      experience: "12+ years in finance and operations",
      qualifications: "CA, Former Finance Controller at Johnson & Johnson",
      image: "👨‍💼"
    }
  ];

  const growthStrategies = [
    {
      title: "Market Expansion",
      description: "Expanding into new geographic markets and industry verticals",
      timeline: "2024-2026",
      investment: "₹15 Cr",
      expectedReturns: "30% revenue growth"
    },
    {
      title: "Product Innovation",
      description: "R&D investment in next-generation monitoring technologies",
      timeline: "2024-2027",
      investment: "₹8 Cr",
      expectedReturns: "Enhanced market competitiveness"
    },
    {
      title: "Manufacturing Capacity",
      description: "Expansion of production facilities and automation",
      timeline: "2024-2025",
      investment: "₹12 Cr",
      expectedReturns: "50% capacity increase"
    },
    {
      title: "Digital Transformation",
      description: "Implementation of IoT and smart monitoring solutions",
      timeline: "2024-2026",
      investment: "₹6 Cr",
      expectedReturns: "New revenue streams"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Investor <span className="bg-yellow-400 px-2">Relations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover IndieCaters' growth story, financial performance, and 
              investment opportunities in the industrial monitoring sector.
            </p>
          </div>
        </div>
      </section>

      {/* Investor Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'overview'
                  ? 'bg-yellow-400 text-gray-800'
                  : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Company Overview
            </button>
            <button
              onClick={() => setActiveTab('financials')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'financials'
                  ? 'bg-yellow-400 text-gray-800'
                  : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Financial Results
            </button>
            <button
              onClick={() => setActiveTab('governance')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'governance'
                  ? 'bg-yellow-400 text-gray-800'
                  : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Corporate Governance
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'documents'
                  ? 'bg-yellow-400 text-gray-800'
                  : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Documents
            </button>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      {activeTab === 'overview' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Company Overview</h2>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Business</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    IndieCaters Pvt Ltd is India's leading manufacturer of professional industrial 
                    indicators, specializing in sterilization, moisture, and temperature monitoring 
                    solutions. We serve diverse industries including healthcare, pharmaceutical, 
                    food & beverage, and laboratory sectors.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Market Leadership</h4>
                        <p className="text-gray-600">Only woman-led manufacturer in India in this specialized field</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Global Presence</h4>
                        <p className="text-gray-600">Exporting to 25+ countries with local distribution partners</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Quality Excellence</h4>
                        <p className="text-gray-600">ISO certified manufacturing with 99.9% quality success rate</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Financial Highlights</h3>
                  <div className="space-y-6">
                    {financialHighlights.map((highlight, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-800">{highlight.metric}</div>
                          <div className="text-sm text-gray-600">{highlight.period}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-800">{highlight.value}</div>
                          <div className={`text-sm ${highlight.trend === 'up' ? 'text-green-600' : 'text-gray-600'}`}>
                            {highlight.trend === 'up' ? '↗' : '→'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Growth Strategies</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {growthStrategies.map((strategy, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">{strategy.title}</h4>
                      <p className="text-gray-600 mb-4">{strategy.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-semibold text-gray-800">Timeline:</span>
                          <div className="text-gray-600">{strategy.timeline}</div>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">Investment:</span>
                          <div className="text-gray-600">{strategy.investment}</div>
                        </div>
                      </div>
                      <div className="mt-3 text-sm">
                        <span className="font-semibold text-gray-800">Expected Returns:</span>
                        <div className="text-gray-600">{strategy.expectedReturns}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Financial Results */}
      {activeTab === 'financials' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Financial Performance</h2>
              
              <div className="overflow-x-auto mb-12">
                <table className="w-full border-collapse bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-6 py-3 text-left font-semibold text-gray-800">Quarter</th>
                      <th className="border border-gray-200 px-6 py-3 text-left font-semibold text-gray-800">Revenue</th>
                      <th className="border border-gray-200 px-6 py-3 text-left font-semibold text-gray-800">Growth</th>
                      <th className="border border-gray-200 px-6 py-3 text-left font-semibold text-gray-800">EBITDA</th>
                      <th className="border border-gray-200 px-6 py-3 text-left font-semibold text-gray-800">Margin</th>
                      <th className="border border-gray-200 px-6 py-3 text-left font-semibold text-gray-800">Net Profit</th>
                      <th className="border border-gray-200 px-6 py-3 text-left font-semibold text-gray-800">Margin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quarterlyResults.map((result, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-6 py-3 font-medium text-gray-800">{result.quarter}</td>
                        <td className="border border-gray-200 px-6 py-3 text-gray-800">{result.revenue}</td>
                        <td className="border border-gray-200 px-6 py-3 text-green-600 font-medium">{result.growth}</td>
                        <td className="border border-gray-200 px-6 py-3 text-gray-800">{result.ebitda}</td>
                        <td className="border border-gray-200 px-6 py-3 text-gray-800">{result.margin}</td>
                        <td className="border border-gray-200 px-6 py-3 text-gray-800">{result.netProfit}</td>
                        <td className="border border-gray-200 px-6 py-3 text-gray-800">{result.margin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-2">₹44 Cr</div>
                  <div className="text-gray-600">Total Revenue FY2023</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-2">₹11 Cr</div>
                  <div className="text-gray-600">EBITDA FY2023</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-2">₹7.2 Cr</div>
                  <div className="text-gray-600">Net Profit FY2023</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Corporate Governance */}
      {activeTab === 'governance' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Corporate Governance</h2>
              
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Board of Directors</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {boardMembers.map((member, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start">
                        <div className="text-4xl mr-4">{member.image}</div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h4>
                          <p className="text-yellow-600 font-semibold mb-2">{member.position}</p>
                          <p className="text-gray-600 text-sm mb-2">{member.experience}</p>
                          <p className="text-gray-600 text-sm">{member.qualifications}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-4xl mb-4">🏛️</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Board Independence</h3>
                  <p className="text-gray-600 text-sm">50% independent directors ensuring balanced governance</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-4xl mb-4">⚖️</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Audit Committee</h3>
                  <p className="text-gray-600 text-sm">Independent audit committee with qualified professionals</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Compliance</h3>
                  <p className="text-gray-600 text-sm">Full compliance with corporate governance guidelines</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Documents */}
      {activeTab === 'documents' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Investor Documents</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {investorDocuments.map((document, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-2xl">📄</div>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                        {document.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{document.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{document.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{document.date}</span>
                      <span>{document.size}</span>
                    </div>
                    <button className="w-full bg-yellow-400 text-gray-800 py-2 px-4 rounded-lg font-semibold text-sm hover:bg-yellow-500 transition-colors">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Investor Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Investor Relations Contact</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            For investor inquiries, please contact our investor relations team.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-2xl mx-auto">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800">Investor Relations</h3>
                <p className="text-gray-600">Amit Patel, CFO</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">investors@indiecaterS.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+91 98220 39087</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">
                  IndieCaters Pvt. Ltd.<br />
                  G-30,31, Ashoka Center,<br />
                  Pune – Satara Road,<br />
                  Pune - 411009
                </p>
              </div>
            </div>
            <div className="mt-6 flex gap-4 justify-center">
              <a href="mailto:investors@indiecaterS.com" className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                Email Investor Relations
              </a>
              <a href="/contact" className="border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stock Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Stock Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              IndieCaters is a privately held company with plans for future public listing
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Future IPO Plans</h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              We are preparing for a potential initial public offering (IPO) in the next 2-3 years, 
              subject to market conditions and regulatory approvals.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-lg">
                <div className="font-semibold text-gray-800 mb-1">Target Timeline</div>
                <div className="text-gray-600">2026-2027</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="font-semibold text-gray-800 mb-1">Expected Valuation</div>
                <div className="text-gray-600">₹500-800 Cr</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="font-semibold text-gray-800 mb-1">Exchange</div>
                <div className="text-gray-600">BSE/NSE</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}





















