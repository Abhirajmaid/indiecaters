"use client";

import { useState } from "react";
import Link from "next/link";

export default function MoisturePage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const products = [
    {
      id: 1,
      slug: "moisture-indicator-packets",
      name: "Moisture Indicator Packets",
      category: "moisture",
      type: "Desiccant Indicator",
      description: "Moisture indicator packets with desiccant for packaging protection and moisture control in sealed environments.",
      features: [
        "Moisture absorption",
        "Visual indication",
        "Packaging protection",
        "Reusable design"
      ],
      specifications: {
        "Absorption Capacity": "40-50% RH",
        "Size": "Various sizes available",
        "Shelf Life": "3 years",
        "Standards": "MIL-D-3464"
      },
      applications: [
        "Packaging Protection",
        "Electronics Storage",
        "Pharmaceutical Packaging",
        "Industrial Applications"
      ],
      price: "Contact for pricing",
      image: "/images/sterl/Self Adhesive, for Steam & ETO  Sterilization.jpg",
      inStock: true,
      popular: false,
      tags: ["packets", "desiccant", "moisture"]
    },
    {
      id: 2,
      name: "Silica Gel Indicators",
      category: "moisture",
      type: "Crystal Indicator",
      description: "Silica gel desiccant with color-changing indicators for moisture level visualization in containers.",
      features: [
        "Color-changing granules",
        "High absorption capacity",
        "Reusable after regeneration",
        "Multiple humidity levels"
      ],
      specifications: {
        "Absorption Capacity": "25-40% of weight",
        "Regeneration Temp": "120-150°C",
        "Reusable": "Yes (up to 100 cycles)",
        "Standards": "USP, EU Standards"
      },
      applications: [
        "Container Desiccation",
        "Electronics Protection",
        "Document Preservation",
        "Storage Control"
      ],
      price: "Contact for pricing",
      image: "/images/silica_gel_indicators.jpg",
      inStock: true,
      popular: true,
      tags: ["silica gel", "crystal", "reusable"]
    },
    {
      id: 3,
      name: "Clay Desiccant Indicators",
      category: "moisture",
      type: "Industrial Desiccant",
      description: "Clay-based desiccant indicators for industrial moisture control with excellent absorption properties.",
      features: [
        "Clay-based absorption",
        "Environmentally friendly",
        "High capacity absorption",
        "Cost effective"
      ],
      specifications: {
        "Absorption Capacity": "30-35% of weight",
        "Operating Range": "10-90% RH",
        "Disposal": "Landfill safe",
        "Standards": "FDA, FCC"
      },
      applications: [
        "Industrial Packaging",
        "Large Container Control",
        "Transportation Protection",
        "Bulk Storage"
      ],
      price: "Contact for pricing",
      image: "/images/clay_desiccant.jpg",
      inStock: true,
      popular: true,
      tags: ["clay", "industrial", "bulk"]
    },
    {
      id: 4,
      name: "Molecular Sieve Indicators",
      category: "moisture",
      type: "Advanced Desiccant",
      description: "Advanced molecular sieve desiccants for ultra-low humidity control in critical applications.",
      features: [
        "Ultra-low humidity control",
        "High absorption rate",
        "Precise pore size",
        "Long-term stability"
      ],
      specifications: {
        "Absorption Range": "0.1-5% RH",
        "Pore Size": "3A, 4A, 5A",
        "Working Temperature": "-40 to +60°C",
        "Standards": "ISO, ASTM"
      },
      applications: [
        "Electronics Manufacturing",
        "Pharmaceutical Processing",
        "Optical Components",
        "Critical Storage"
      ],
      price: "Contact for pricing",
      image: "/images/molecular_sieve.jpg",
      inStock: true,
      popular: false,
      tags: ["molecular sieve", "advanced", "precision"]
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
              💧 Moisture Solutions
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                Moisture
              </span>{" "}
              <span className="text-gray-800">Indicators</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Advanced moisture monitoring for industrial applications. 
              Professional desiccant indicators for packaging protection and moisture control.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                High Absorption Capacity
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Reusable Options
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Industrial Grade
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
                { id: "desiccant", label: "Desiccants", count: products.filter(p => p.tags.includes("desiccant")).length },
                { id: "industrial", label: "Industrial", count: products.filter(p => p.tags.includes("industrial")).length },
                { id: "advanced", label: "Advanced", count: products.filter(p => p.tags.includes("advanced")).length }
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Custom Moisture Control?</h3>
              <p className="text-gray-600 mb-6">
                We provide specialized moisture control solutions tailored to your specific packaging and storage requirements.
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