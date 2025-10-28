"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const productCategories = [
    {
      id: "sterilization",
      name: "Sterilization Indicators",
      image: "/images/sterl/STEAM  INDICATOR(TYPE 5).jpg",
      description: "Professional steam sterilization indicators for healthcare and pharmaceutical industries",
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
      textColor: "text-pink-800",
      hoverColor: "hover:from-pink-100 hover:to-pink-200",
      featuresDescription: "Our sterilization indicators are ISO 11140 certified and designed for medical device compatibility. They provide healthcare-grade process validation with precise temperature and time monitoring. These indicators ensure complete steam penetration verification and offer tamper-evident seals for quality assurance.",
      applicationsDescription: "Ideal for medical device sterilization in hospitals and clinics, laboratory equipment processing, dental instrument sterilization, and surgical tool validation. Our indicators are essential for pharmaceutical manufacturing, research facilities, and any environment requiring reliable sterilization monitoring.",
      products: [
        {
          id: 1,
          slug: "class-5-steam-indicator",
          name: "Class 5 Steam Indicator",
          type: "Chemical Indicator",
          description: "Advanced chemical indicator that responds to all critical variables in steam sterilization processes. Provides comprehensive validation of steam penetration, temperature, time, and pressure parameters ensuring complete sterilization effectiveness.",
          image: "/images/sterl/STEAM  INDICATOR(TYPE 5).jpg",
          popular: true,
          inStock: true,
          price: "Contact for pricing",
          features: [
            "Responds to all critical variables",
            "Steam penetration verification",
            "Temperature monitoring",
            "Time duration validation"
          ],
          applications: [
            "Medical Device Sterilization",
            "Laboratory Equipment",
            "Dental Instruments"
          ]
        },
        {
          id: 2,
          slug: "class-6-steam-indicator",
          name: "Class 6 Steam Indicator",
          type: "Process Challenge Device",
          description: "Specific cycle indicators designed for particular sterilization processes with enhanced accuracy. Tailored for specific sterilization cycles providing precise validation and compliance monitoring for healthcare facilities.",
          image: "/images/sterl/STEAM  INDIACTOR(TYPE 6).jpg",
          popular: false,
          inStock: true,
          price: "Contact for pricing",
          features: [
            "Cycle-specific validation",
            "Process optimization",
            "Quality assurance",
            "Compliance monitoring"
          ],
          applications: [
            "Hospital Sterilization",
            "Laboratory Autoclaves",
            "Medical Device Processing"
          ]
        },
        {
          id: 3,
          slug: "bowie-dick-test-strip",
          name: "Bowie Dick Test Strip",
          type: "Air Removal Test",
          description: "Professional test strips for verifying air removal and steam penetration in pre-vacuum autoclaves. Essential for ensuring proper air removal and steam distribution in complex sterilization equipment.",
          image: "/images/sterl/BOWIE DICK HELIX TEST STRIPES(TYPE 2).png",
          popular: true,
          inStock: true,
          price: "Contact for pricing",
          features: [
            "Air removal verification",
            "Steam penetration testing",
            "Pre-vacuum validation",
            "Visual result indication"
          ],
          applications: [
            "Pre-vacuum Autoclaves",
            "Hospital Sterilization",
            "Research Facilities"
          ]
        }
      ],
      features: [
        "ISO 11140 Certified",
        "Healthcare Grade",
        "Medical Device Compatible",
        "Process Validation"
      ],
      applications: [
        "Medical Device Sterilization",
        "Laboratory Equipment",
        "Dental Instruments",
        "Surgical Tools"
      ]
    },
    {
      id: "humidity",
      name: "Humidity Indicators",
      image: "/images/sterl/BOWIE DICK HELIX TEST STRIPES(TYPE 2).png",
      description: "Reliable moisture detection for pharmaceutical, food, and packaging industries",
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
      textColor: "text-pink-800",
      hoverColor: "hover:from-pink-100 hover:to-pink-200",
      featuresDescription: "Our humidity indicators provide precise relative humidity measurement with long-term stability and pharmaceutical-grade accuracy. They feature visual color-changing technology, multiple humidity level detection, and easy interpretation. These indicators offer cost-effective moisture monitoring with reliable performance.",
      applicationsDescription: "Perfect for pharmaceutical storage environments, food packaging quality control, electronics protection during shipping, and document preservation. Our humidity indicators are essential for cleanroom monitoring, warehouse humidity control, museum artifact protection, and HVAC system validation.",
      products: [
        {
          id: 4,
          slug: "humidity-indicator-cards",
          name: "Humidity Indicator Cards",
          type: "Relative Humidity Monitor",
          description: "Color-changing humidity indicator cards for monitoring relative humidity levels in storage environments. Provides instant visual feedback on moisture conditions to prevent product degradation and ensure optimal storage conditions.",
          image: "/images/humidity_indicators/humidity_card_1.jpg",
          popular: false,
          inStock: true,
          price: "Contact for pricing",
          features: [
            "Visual humidity indication",
            "Multiple humidity levels",
            "Long shelf life",
            "Easy interpretation"
          ],
          applications: [
            "Pharmaceutical Storage",
            "Food Packaging",
            "Electronics Protection"
          ]
        },
        {
          id: 5,
          slug: "electronic-humidity-monitor",
          name: "Electronic Humidity Monitor",
          type: "Digital RH Sensor",
          description: "Advanced electronic humidity monitoring device with digital display and data logging capabilities. Offers precise real-time humidity measurement with continuous monitoring and alert systems for critical storage environments.",
          image: "/images/humidity_indicators/electronic_monitor_1.jpg",
          popular: true,
          inStock: true,
          price: "Contact for pricing",
          features: [
            "Digital display",
            "Data logging",
            "Real-time monitoring",
            "Alert systems"
          ],
          applications: [
            "Laboratory Storage",
            "Clean Room Monitoring",
            "Quality Control"
          ]
        },
        {
          id: 6,
          slug: "hygrometer-strips",
          name: "Hygrometer Strips",
          type: "Self-Adhesive Indicator",
          description: "Self-adhesive hygrometer strips for continuous humidity monitoring in sealed environments. Perfect for packaging applications where continuous moisture monitoring is essential for product integrity and shelf life.",
          image: "/images/humidity_indicators/strip_indicator_1.jpg",
          popular: false,
          inStock: true,
          price: "Contact for pricing",
          features: [
            "Self-adhesive design",
            "Continuous monitoring",
            "Sealed environment compatible",
            "Cost-effective solution"
          ],
          applications: [
            "Packaging Applications",
            "Sealed Containers",
            "Document Preservation"
          ]
        }
      ],
      features: [
        "Precise RH Measurement",
        "Long-term Stability",
        "Pharmaceutical Grade",
        "Visual Indication"
      ],
      applications: [
        "Pharmaceutical Storage",
        "Food Packaging",
        "Electronics Protection",
        "Document Preservation"
      ]
    },
    {
      id: "temperature",
      name: "Temperature Indicators",
      image: "/images/sterl/HELIX PCD TEST STRIPES(TYPE 2).png",
      description: "Precise temperature monitoring solutions for critical processes and cold chain management",
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
      textColor: "text-pink-800",
      hoverColor: "hover:from-pink-100 hover:to-pink-200",
      featuresDescription: "Our temperature indicators offer industrial-grade precision with irreversible color change technology and high accuracy monitoring. They feature water-resistant design, easy application, and reliable performance across wide temperature ranges. These indicators provide permanent evidence of temperature exposure with excellent durability.",
      applicationsDescription: "Essential for industrial machinery monitoring, food processing validation, medical sterilization processes, and electronics manufacturing. Our temperature indicators are crucial for cold chain logistics, vaccine storage monitoring, liquid nitrogen transport, deep freeze monitoring, and heat treatment validation.",
      products: [
        {
          id: 7,
          slug: "temperature-indicator-strips",
          name: "Temperature Indicator Strips",
          type: "Heat Process Monitor",
          description: "Self-adhesive temperature indicators for heat process monitoring and validation. Essential for ensuring proper temperature exposure during sterilization and heat treatment processes in healthcare and manufacturing industries.",
          image: "/images/sterl/Self Adhesive Autoclave Tape for Steam Sterilization.jpg",
          popular: true,
          inStock: true,
          price: "Contact for pricing",
          features: [
            "Self-adhesive design",
            "Heat process validation",
            "Temperature monitoring",
            "Process compliance"
          ],
          applications: [
            "Autoclave Sterilization",
            "Heat Treatment",
            "Manufacturing Processes"
          ]
        },
        {
          id: 8,
          slug: "freeze-thaw-indicators",
          name: "Freeze/Thaw Indicators",
          type: "Cold Chain Monitor",
          description: "Indicators that provide permanent evidence of freeze or thaw events in cold chain logistics. Critical for pharmaceutical, food, and biological product transportation ensuring temperature integrity throughout the supply chain.",
          image: "/window.svg",
          popular: false,
          inStock: true,
          price: "Contact for pricing",
          features: [
            "Permanent evidence",
            "Freeze/thaw detection",
            "Cold chain validation",
            "Supply chain integrity"
          ],
          applications: [
            "Pharmaceutical Transport",
            "Food Logistics",
            "Biological Products"
          ]
        },
        {
          id: 9,
          slug: "thermal-exposure-dots",
          name: "Thermal Exposure Dots",
          type: "Thermal Indicator",
          description: "Small-format thermal dots that permanently indicate exposure above a set temperature. Ideal for compact applications where space is limited but temperature monitoring is critical for product safety and quality assurance.",
          image: "/next.svg",
          popular: false,
          inStock: true,
          price: "Contact for pricing",
          features: [
            "Compact design",
            "Permanent indication",
            "Set temperature monitoring",
            "Space-efficient"
          ],
          applications: [
            "Small Package Monitoring",
            "Electronics Protection",
            "Precision Instruments"
          ]
        }
      ],
      features: [
        "ISO 11140 Compliant",
        "Cold Chain Ready",
        "Industrial Grade",
        "Multiple Temperature Points"
      ],
      applications: [
        "Heat Process Validation",
        "Cold Chain Monitoring",
        "Equipment Maintenance",
        "Quality Control"
      ]
    }
  ];

  const filteredCategories = selectedCategory === "all" 
    ? productCategories 
    : productCategories.filter(category => category.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="hero-industrial relative w-full h-[90vh]">
        {/* Enhanced overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60"></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 h-[90vh] flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
                  Our Product
                </span>{" "}
                <span className="text-white">Range</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
                Comprehensive industrial indicators for sterilization, humidity, and temperature monitoring. 
                Professional solutions trusted by healthcare, pharmaceutical, and manufacturing industries worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Variety Description & Enhanced Category Selection */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Comprehensive Industrial Monitoring Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              IndieCaters offers a diverse range of professional industrial indicators designed to meet the unique challenges 
              of modern manufacturing, healthcare, and pharmaceutical industries. Our comprehensive product portfolio spans 
              three critical monitoring domains, each engineered with precision and reliability to ensure optimal process 
              control and quality assurance across diverse applications.
            </p>
          </div>
          
          {/* Enhanced Category Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {productCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`bg-white rounded-2xl p-6 shadow-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'border-pink-500 shadow-pink-200 shadow-xl'
                    : 'border-gray-200 hover:border-pink-300 hover:shadow-xl'
                }`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden bg-white shadow-md">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white'
                      : 'bg-pink-100 text-pink-700'
                  }`}>
                    {category.products.length} Products Available
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Filter Tabs */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-3 shadow-lg border border-gray-200">
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { id: "all", label: "All Categories", count: productCategories.length },
                  ...productCategories.map(category => ({
                    id: category.id,
                    label: category.name,
                    count: category.products.length
                  }))
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedCategory(filter.id)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === filter.id
                        ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-pink-50 hover:text-pink-600'
                    }`}
                  >
                    {filter.label} ({filter.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {filteredCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.bgColor} ${category.borderColor} border-b p-8`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-md">
                        <Image
                          src={category.image}
                          alt={category.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">{category.name}</h2>
                        <p className={`text-lg ${category.textColor} font-medium`}>{category.description}</p>
                      </div>
                    </div>
                    <Link
                      href={`/products/${category.id}`}
                      className={`bg-gradient-to-r ${category.color} text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      View All Products
                    </Link>
                  </div>
                </div>

                {/* Category Features */}
                <div className="p-8 border-b border-gray-200">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        Key Features
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {category.featuresDescription}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
                        </svg>
                        Applications
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {category.applicationsDescription}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Featured Products */}
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Featured Products</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.products.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${category.id}`}
                        className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer block ${category.hoverColor}`}
                      >
                        {/* Product Image */}
                        <div className="relative h-40 bg-gradient-to-br from-gray-50 to-gray-100 p-4 flex items-center justify-center">
                          {product.image.startsWith("/") ? (
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={150}
                              height={150}
                              className="max-h-full max-w-full object-contain rounded-lg"
                            />
                          ) : (
                            <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-xl">
                              {product.image}
                            </div>
                          )}
                          {product.popular && (
                            <div className={`absolute top-2 right-2 bg-gradient-to-r ${category.color} text-white px-2 py-1 rounded-full text-xs font-bold`}>
                              ★ Popular
                            </div>
                          )}
                          <div className={`absolute bottom-2 right-2 w-3 h-3 rounded-full ${product.inStock ? 'bg-pink-400' : 'bg-pink-300'}`}></div>
                        </div>

                        {/* Product Info */}
                        <div className="p-4">
                          <div className="mb-2">
                            <h4 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-pink-600 transition-colors">
                              {product.name}
                            </h4>
                            <p className="text-sm text-gray-500 font-medium">{product.type}</p>
                          </div>

                          <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                            {product.description.split('.')[0]}.
                          </p>

                          {/* Bottom Section */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <span className="text-sm font-semibold text-gray-800">{product.price}</span>
                            </div>
                            <div className="text-pink-600 hover:text-pink-700 text-sm font-medium flex items-center group">
                              View Details
                              <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-pink-200">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Need Custom Solutions?</h3>
              <p className="text-gray-600 mb-8 text-lg max-w-3xl mx-auto">
                We offer customized industrial indicators tailored to your specific requirements. 
                Our expert team can develop solutions for unique applications and industry standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Contact Our Experts
                </button>
                <button 
                  onClick={() => window.location.href = '/catalog'}
                  className="bg-white text-pink-600 border-2 border-pink-600 px-8 py-4 rounded-xl font-semibold hover:bg-pink-50 transition-all duration-300 transform hover:scale-105"
                >
                  Download Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
