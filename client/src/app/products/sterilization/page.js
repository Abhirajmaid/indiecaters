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
      image: "/images/sterl/STEAM  INDICATOR(TYPE 5).jpg",
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
      image: "/images/sterl/STEAM  INDIACTOR(TYPE 6).jpg",
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
      image: "/images/sterl/BOWIE DICK HELIX TEST STRIPES(TYPE 2).png",
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
      image: "/images/sterl/Self Adhesive, for Steam & ETO  Sterilization.jpg",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50 py-20 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 rounded-full text-sm font-medium mb-6">
              🦠 Sterilization Solutions
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
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
                <svg className="w-4 h-4 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                ISO 11140 Certified
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 32 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Healthcare Grade
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer block"
              >
                {/* Product Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain rounded-lg"
                  />
                  {product.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      ★ Popular
                    </div>
                  )}
                  <div className={`absolute bottom-4 right-4 w-3 h-3 rounded-full ${product.inStock ? 'bg-green-400' : 'bg-red-400'}`}></div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-pink-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium">{product.type}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 mb-4">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600">
                        <svg className="w-3 h-3 text-pink-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm font-semibold text-gray-800">{product.price}</span>
                    </div>
                    <button className="text-pink-600 hover:text-pink-700 text-sm font-medium flex items-center group">
                      View Details
                      <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl p-8 border border-pink-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Custom Specifications?</h3>
              <p className="text-gray-600 mb-6">
                We offer custom sterilization indicators tailored to your specific requirements and industry standards.
              </p>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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