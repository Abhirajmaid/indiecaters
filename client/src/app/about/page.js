"use client";

import { useState } from "react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-industrial relative w-full h-[90vh]">
        {/* Enhanced overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60"></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 h-[90vh] flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">About</span> <span className="text-white drop-shadow-lg">IndieCaters</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
              IndieCaters is a Made-in-India startup, founded in Pune in 2023, that simplifies quality assurance with simple, non-digital printed indicators.
              We offer cost-effective and reliable solutions for monitoring sterilization, temperature, and humidity across the healthcare, pharma, food, and agriculture sectors. IndieCaters directly tackles critical challenges like improper sterilization, product spoilage, and moisture damage. Our asset-light model, scalability, and lack of major domestic competition position us for rapid nationwide adoption and strong export growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-white to-blue-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 to-pink-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                Our Journey
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              IndieCaters, a Made-in-India startup founded in Pune in 2023, is disrupting quality assurance with simple, printed, non-digital indicators for monitoring sterilization, temperature, and humidity.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our solutions serve the critical needs of the healthcare, pharma, food, and agriculture industries, offering a cost-effective and reliable alternative to combat major challenges like improper sterilization and product degradation. The company's business model is a key advantage: it is asset-light, highly scalable, and faces zero major domestic competition. This positioning provides a strong runway for both nationwide adoption and immediate export potential.
              </p>
              <div className="space-y-4">
                <div className="flex items-center bg-white/50 p-3 rounded-lg">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">15+ years of industry expertise</span>
                </div>
                <div className="flex items-center bg-white/50 p-3 rounded-lg">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">Only woman manufacturer in India in this field</span>
                </div>
                <div className="flex items-center bg-white/50 p-3 rounded-lg">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">ISO certified manufacturing processes</span>
                </div>
                <div className="flex items-center bg-white/50 p-3 rounded-lg">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">1,000,000+ indicators delivered globally</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white to-pink-50 p-6 md:p-8 rounded-xl shadow-lg border border-pink-100">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="text-center bg-white p-4 md:p-6 rounded-lg shadow-sm border border-pink-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">15+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
                <div className="text-center bg-white p-4 md:p-6 rounded-lg shadow-sm border border-pink-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
                  <div className="text-gray-600 text-sm">Products Delivered</div>
                </div>
                <div className="text-center bg-white p-4 md:p-6 rounded-lg shadow-sm border border-pink-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
                  <div className="text-gray-600 text-sm">Happy Clients</div>
                </div>
                <div className="text-center bg-white p-4 md:p-6 rounded-lg shadow-sm border border-pink-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">100%</div>
                  <div className="text-gray-600 text-sm">Quality Assurance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 md:p-8 rounded-xl text-center border border-pink-100 hover:shadow-lg transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Origin and Launch</h3>
              <p className="text-gray-700 leading-relaxed">
              ●	Location: Pune, Maharashtra, India
              ●	Founding Year: 2023
              ●	Identity: Made-in-India startup

              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 md:p-8 rounded-xl text-center border border-pink-100 hover:shadow-lg transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Core Offering & Purpose</h3>
              <p className="text-gray-700 leading-relaxed">
              ●	Product: Simple, printed, non-digital indicators
              ●	Function: Monitor sterilization, temperature, and humidity
              ●	Objective: Simplify quality assurance through cost-effective and reliable indicators.

              </p>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 md:p-8 rounded-xl text-center border border-pink-100 hover:shadow-lg transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Target Industries & Impact</h3>
              <p className="text-gray-700 leading-relaxed">
              ●	Key Sectors: Healthcare, Pharma, Food, and Agriculture
              ●	Challenges Addressed: Improper sterilization, product spoilage, and moisture-related degradation.
              ●	Business Edge: Asset-light, scalable model, zero major domestic competition, and strong potential for export.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-pink-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 to-pink-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
              </svg>
              Our Values
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A workplace that fosters innovation, growth, and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white p-5 md:p-6 rounded-xl text-center shadow-sm border border-pink-100 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Innovation & Simplicity</h3>
              <p className="text-sm text-gray-600">●	Focus: Solving complex problems (sterilization, spoilage) with simple, non-digital technology.
●	Motto: Keep it simple, reliable, and effective.
●	Value: Prioritizing practical, low-barrier innovation over expensive complexity.
</p>
            </div>
            <div className="bg-white p-5 md:p-6 rounded-xl text-center shadow-sm border border-pink-100 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Quality & Reliability</h3>
              <p className="text-sm text-gray-600">●	Standard: Commitment to providing trustworthy indicators crucial for sensitive sectors (Healthcare, Pharma, Food).
●	Ethos: Zero tolerance for errors in monitoring, ensuring product safety.
●	Result: Building solutions that instill confidence in end-users.
</p>
            </div>
            <div className="bg-white p-5 md:p-6 rounded-xl text-center shadow-sm border border-pink-100 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Frugality & Scalability</h3>
              <p className="text-sm text-gray-600">●	Approach: Utilizing an asset-light model to ensure cost-effectiveness and profitability.
●	Goal: Designing for nationwide adoption and export through efficient resource use.
●	Principle: Delivering high value while keeping costs low.
</p>
            </div>
            <div className="bg-white p-5 md:p-6 rounded-xl text-center shadow-sm border border-pink-100 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Impact & Reach</h3>
              <p className="text-sm text-gray-600">●	Mission: Direct engagement with critical challenges in major industries.
●	Scope: Thinking globally (export potential) while serving domestic needs (Made-in-India).
●	Aspiration: Becoming a leading global name in simple quality monitoring.
</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* About the Founder */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-white to-blue-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 to-pink-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                </svg>
                Leadership
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About the Founder</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Founder of Prime Enterprises and IndieCaters Pvt Ltd holds a postgraduate degree in Physics. Before launching Prime Enterprises, she spent two years post-graduation teaching as a lecturer in an engineering college. She is recognized as the only woman manufacturer in India in this specific field.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Beyond her academic and entrepreneurial pursuits, she is a dedicated sports enthusiast who has successfully completed the government skiing training programme. Her move into entrepreneurship was driven by identifying critical gaps in the ecosystem while working at an electronics product company, particularly in the pre-press printing process, which led to the founding of Prime Enterprises.
              </p>
              <div className="space-y-3">
                <div className="flex items-center bg-white/50 p-3 rounded-lg">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">Founded Prime Enterprises as trading firm</span>
                </div>
                <div className="flex items-center bg-white/50 p-3 rounded-lg">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">Expanded to manufacturing with IndieCaters</span>
                </div>
                <div className="flex items-center bg-white/50 p-3 rounded-lg">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">Industry pioneer and thought leader</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full opacity-20"></div>
                <img src="/images/founder.avif" alt="Archana Gore - Founder" className="w-80 h-96 object-cover rounded-xl mx-auto shadow-xl relative z-10" />
              </div>
              <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-6 rounded-xl mt-6 border border-pink-100">
                <p className="text-gray-800 text-xl font-bold">Archana Gore</p>
                <p className="text-gray-600 text-lg mt-1">Founder & CEO</p>
                <div className="mt-3 flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">15+</div>
                    <div className="text-xs text-gray-600">Years Leading</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">1st</div>
                    <div className="text-xs text-gray-600">Woman Manufacturer</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">PG</div>
                    <div className="text-xs text-gray-600">Physics Graduate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-pink-100 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 to-pink-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
            </svg>
            Let's Work Together
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust IndieCaters for their 
            industrial monitoring needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-pink-500 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get in Touch →
            </a>
            <a href="/products" className="border-2 border-pink-400 text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-white transition-all duration-200">
              View Products →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

