"use client";

import { useState } from "react";
import Link from "next/link";

export default function SterilizationPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const products = [
    {
      id: 1,
      slug: "class-5-steam-indicator",
      name: "Class 5 Steam Indicator",
      category: "sterilization",
      type: "Chemical Indicator",
      description: "Advanced chemical indicator that responds to all critical variables in steam sterilization processes.",
      features: [
        "Steam penetration verification",
        "Temperature monitoring",
        "Time duration validation",
        "Pressure confirmation"
      ],
      specifications: {
        "Response Time": "< 30 seconds",
        "Temperature Range": "121-134°C",
        "Shelf Life": "3 years",
        "Standards": "ISO 11140, AAMI ST79"
      },
      applications: [
        "Medical Device Sterilization",
        "Laboratory Equipment",
        "Dental Instruments",
        "Surgical Tools"
      ],
      price: "Contact for pricing",
      image: "/newimg/Sterilization%20Indicators.jpg",
      inStock: true,
      popular: true,
      tags: ["class 5", "steam", "advanced"]
    },
    {
      id: 2,
      slug: "class-6-steam-indicator",
      name: "Class 6 Steam Indicator",
      category: "sterilization",
      type: "Process Challenge Device",
      description: "Specific cycle indicators designed for particular sterilization processes with enhanced accuracy.",
      features: [
        "Cycle-specific validation",
        "Process optimization",
        "Quality assurance",
        "Compliance monitoring"
      ],
      specifications: {
        "Response Time": "< 15 seconds",
        "Temperature Range": "121-134°C",
        "Shelf Life": "3 years",
        "Standards": "ISO 11140, EN 285"
      },
      applications: [
        "Hospital Sterilization",
        "Laboratory Autoclaves",
        "Medical Device Processing",
        "Research Facilities"
      ],
      price: "Contact for pricing",
      image: "/newimg/Sterilization%20Indicators.jpg",
      inStock: true,
      popular: false,
      tags: ["class 6", "steam", "process"]
    },
    {
      id: 3,
      name: "Bowie Dick Test Strip",
      category: "sterilization",
      type: "Air Removal Test",
      description: "Professional test strips for verifying air removal and steam penetration in pre-vacuum autoclaves.",
      features: [
        "Air removal verification",
        "Steam penetration test",
        "Pre-vacuum validation",
        "Easy interpretation"
      ],
      specifications: {
        "Response Time": "< 10 seconds",
        "Temperature Range": "121-134°C",
        "Shelf Life": "3 years",
        "Standards": "ISO 11140, AAMI ST79"
      },
      applications: [
        "Hospital Autoclaves",
        "Dental Offices",
        "Laboratory Sterilization",
        "Medical Device Facilities"
      ],
      price: "Contact for pricing",
      image: "/newimg/Sterilization%20Indicators.jpg",
      inStock: true,
      popular: true,
      tags: ["bowie dick", "air removal", "steam"]
    },
    {
      id: 4,
      name: "ETO Sterilization Tape",
      category: "sterilization",
      type: "Self-Adhesive Indicator",
      description: "Self-adhesive indicator tapes for ethylene oxide sterilization monitoring and validation.",
      features: [
        "ETO process validation",
        "Self-adhesive design",
        "Color change indicator",
        "Tamper-evident seal"
      ],
      specifications: {
        "Response Time": "< 5 minutes",
        "Temperature Range": "20-60°C",
        "Shelf Life": "3 years",
        "Standards": "ISO 11140"
      },
      applications: [
        "ETO Sterilization",
        "Pharmaceutical",
        "Medical Devices",
        "Laboratory Equipment"
      ],
      price: "Contact for pricing",
      image: "/newimg/Sterilization%20Indicators.jpg",
      inStock: true,
      popular: false,
      tags: ["ETO", "tape", "self-adhesive"]
    }
  ];

  const filteredProducts = selectedFilter === "all" 
    ? products 
    : products.filter(product => 
        product.tags.some(tag => tag.includes(selectedFilter.toLowerCase()))
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#f0d4d9]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#f0d4d9] via-[#e8c4cb] to-[#f0d4d9] py-20 border-b border-[#e8c4cb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#f0d4d9] to-[#e8c4cb] text-[#b85c6d] rounded-full text-sm font-medium mb-6">
              🦠 Sterilization Solutions
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-[#b85c6d] to-[#a54c5d] bg-clip-text text-transparent">
                Sterilization
              </span>{" "}
              <span className="text-gray-800">Indicators</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Professional steam sterilization indicators for healthcare and pharmaceutical industries. 
              Advanced chemical indicators that respond to all critical variables in sterilization processes.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-[#ce7c8a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                ISO 11140 Certified
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-[#ce7c8a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 32 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Healthcare Grade
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-[#ce7c8a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Medical Device Compatible
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-200">
              {[
                { id: "all", label: "All Products", count: products.length },
                { id: "steam", label: "Steam Indicators", count: products.filter(p => p.tags.includes("steam")).length },
                { id: "advanced", label: "Advanced", count: products.filter(p => p.tags.includes("advanced")).length },
                { id: "ETO", label: "ETO Indicators", count: products.filter(p => p.tags.includes("ETO")).length }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedFilter === filter.id
                      ? 'bg-gradient-to-r from-[#ce7c8a] to-[#b85c6d] text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Product Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain rounded-lg"
                  />
                  {product.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#ce7c8a] to-[#b85c6d] text-white px-3 py-1 rounded-full text-sm font-bold">
                      ★ Popular
                    </div>
                  )}
                  <div className={`absolute bottom-4 right-4 w-4 h-4 rounded-full ${product.inStock ? 'bg-[#ce7c8a]' : 'bg-[#e8c4cb]'}`}></div>
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#ce7c8a] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-lg text-gray-500 font-medium">{product.type}</p>
                  </div>

                  {/* Product Description */}
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-[#ce7c8a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <svg className="w-3 h-3 text-[#ce7c8a] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-[#ce7c8a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
                      </svg>
                      Applications
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {product.applications.map((application, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <svg className="w-3 h-3 text-[#ce7c8a] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          {application}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-[#ce7c8a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Specifications
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(product.specifications).map(([key, value], index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{key}</div>
                          <div className="text-sm text-gray-800 font-medium">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center">
                      <span className="text-lg font-semibold text-gray-800">{product.price}</span>
                    </div>
                    <button 
                      onClick={() => window.location.href = '/contact'}
                      className="bg-gradient-to-r from-[#ce7c8a] to-[#b85c6d] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#b85c6d] hover:to-[#a54c5d] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center"
                    >
                      Contact Us
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#f0d4d9] to-[#e8c4cb] rounded-2xl p-8 border border-[#e8c4cb]">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Custom Specifications?</h3>
              <p className="text-gray-600 mb-6">
                We offer custom sterilization indicators tailored to your specific requirements and industry standards.
              </p>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-gradient-to-r from-[#ce7c8a] to-[#b85c6d] text-white px-8 py-3 rounded-xl font-semibold hover:from-[#b85c6d] hover:to-[#a54c5d] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}