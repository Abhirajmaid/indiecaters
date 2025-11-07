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
      image: "/newimg/Sterilization%20Indicators.jpg",
      description: "Professional steam sterilization indicators for healthcare and pharmaceutical industries",
      color: "from-[#ce7c8a] to-[#b85c6d]",
      bgColor: "from-[#f0d4d9] to-[#e8c4cb]",
      borderColor: "border-[#e8c4cb]",
      textColor: "text-[#b85c6d]",
      hoverColor: "hover:from-[#f0d4d9] hover:to-[#e8c4cb]",
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
      image: "/newimg/Humidity%20Indicators.jpg",
      description: "Reliable moisture detection for pharmaceutical, food, and packaging industries",
      color: "from-[#ce7c8a] to-[#b85c6d]",
      bgColor: "from-[#f0d4d9] to-[#e8c4cb]",
      borderColor: "border-[#e8c4cb]",
      textColor: "text-[#b85c6d]",
      hoverColor: "hover:from-[#f0d4d9] hover:to-[#e8c4cb]",
      featuresDescription: "Our humidity indicators provide precise relative humidity measurement with long-term stability and pharmaceutical-grade accuracy. They feature visual color-changing technology, multiple humidity level detection, and easy interpretation. These indicators offer cost-effective moisture monitoring with reliable performance.",
      applicationsDescription: "Perfect for pharmaceutical storage environments, food packaging quality control, electronics protection during shipping, and document preservation. Our humidity indicators are essential for cleanroom monitoring, warehouse humidity control, museum artifact protection, and HVAC system validation.",
      products: [
        {
          id: 4,
          slug: "humidity-indicator-cards",
          name: "Humidity Indicator Cards",
          type: "Relative Humidity Monitor",
          description: "Color-changing humidity indicator cards for monitoring relative humidity levels in storage environments. Provides instant visual feedback on moisture conditions to prevent product degradation and ensure optimal storage conditions.",
          image: "/newimg/Humidity%20Indicators.jpg",
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
      image: "/newimg/Autoclave_Machine.jpg",
      description: "Precise temperature monitoring solutions for critical processes and cold chain management",
      color: "from-[#ce7c8a] to-[#b85c6d]",
      bgColor: "from-[#f0d4d9] to-[#e8c4cb]",
      borderColor: "border-[#e8c4cb]",
      textColor: "text-[#b85c6d]",
      hoverColor: "hover:from-[#f0d4d9] hover:to-[#e8c4cb]",
      featuresDescription: "Our temperature indicators offer industrial-grade precision with irreversible color change technology and high accuracy monitoring. They feature water-resistant design, easy application, and reliable performance across wide temperature ranges. These indicators provide permanent evidence of temperature exposure with excellent durability.",
      applicationsDescription: "Essential for industrial machinery monitoring, food processing validation, medical sterilization processes, and electronics manufacturing. Our temperature indicators are crucial for cold chain logistics, vaccine storage monitoring, liquid nitrogen transport, deep freeze monitoring, and heat treatment validation.",
      products: [
        {
          id: 7,
          slug: "temperature-indicator-strips",
          name: "Temperature Indicator Strips",
          type: "Heat Process Monitor",
          description: "Self-adhesive temperature indicators for heat process monitoring and validation. Essential for ensuring proper temperature exposure during sterilization and heat treatment processes in healthcare and manufacturing industries.",
          image: "/newimg/Autoclave%20Sterilization%20Tape.jpg",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#f0d4d9]">
      {/* Hero Section */}
      <section className="hero-industrial relative w-full h-[90vh]">
        {/* Enhanced overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60"></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 h-[90vh] flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                <span className="bg-gradient-to-r from-[#ce7c8a] to-[#b85c6d] bg-clip-text text-transparent drop-shadow-lg">
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-[#f0d4d9]">
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
                    ? 'border-[#ce7c8a] shadow-[#e8c4cb] shadow-xl'
                    : 'border-gray-200 hover:border-[#e8c4cb] hover:shadow-xl'
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
                      ? 'bg-gradient-to-r from-[#ce7c8a] to-[#b85c6d] text-white'
                      : 'bg-[#f0d4d9] text-[#b85c6d]'
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
                        ? 'bg-gradient-to-r from-[#ce7c8a] to-[#b85c6d] text-white shadow-lg'
                        : 'text-gray-600 hover:bg-[#f0d4d9] hover:text-[#ce7c8a]'
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
                <div className={`bg-gradient-to-r ${category.bgColor} ${category.borderColor} border-b p-6 sm:p-8`}> 
                  <div className="grid grid-cols-3 items-center gap-2 sm:gap-4">
                    {/* Image, 1/3 */}
                    <div className="flex justify-center">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-md flex items-center justify-center">
                        <Image
                          src={category.image}
                          alt={category.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Details, 2/3 */}
                    <div className="col-span-2 flex flex-col justify-center">
                      <h2 className="text-3xl font-bold text-gray-800 mb-1">{category.name}</h2>
                      <p className={`text-lg ${category.textColor} font-medium mb-2`}>{category.description}</p>
                      <div 
                        className={`inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold ${
                          selectedCategory === category.id
                            ? 'bg-gradient-to-r from-[#ce7c8a] to-[#b85c6d] text-white'
                            : 'bg-[#f0d4d9] text-[#b85c6d]'
                        }`}
                      >
                        {category.products.length} Products Available
                      </div>
                    </div>
                  </div>
                  {/* Button row - always centered for all screens */}
                  <div className="flex justify-center mt-4">
                    <Link
                      href={`/products/${category.id}`}
                      className={`bg-gradient-to-r ${category.color} text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center`}
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
                        <svg className="w-5 h-5 text-[#ce7c8a] mr-2" fill="currentColor" viewBox="0 0 20 20">
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
                        <svg className="w-5 h-5 text-[#ce7c8a] mr-2" fill="currentColor" viewBox="0 0 20 20">
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
                  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.products.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${category.id}`}
                        className={
                          "max-w-[160px] w-full mx-auto mb-4 p-2 rounded-2xl bg-white shadow cursor-pointer hover:shadow-lg transition-all duration-200 flex flex-col items-center justify-start " + category.hoverColor
                        }
                      >
                        {/* Product Image */}
                        <div className="w-full flex items-center justify-center">
                          {product.image.startsWith("/") ? (
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={110}
                              height={110}
                              className="w-full max-w-[110px] h-auto object-contain mx-auto block p-2"
                            />
                          ) : (
                            <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-xl">
                              {product.image}
                            </div>
                          )}
                          {product.popular && (
                            <div className={"absolute top-2 right-2 bg-gradient-to-r " + category.color + " text-white px-2 py-1 rounded-full text-xs font-bold"}>
                              ★ Popular
                            </div>
                          )}
                        </div>
                        {/* Product Info */}
                        <div className="pt-2 pb-1 px-2 text-center w-full flex flex-col items-center justify-center">
                          <h4 className="text-sm sm:text-base font-bold text-gray-800 text-center group-hover:text-[#ce7c8a] transition-colors truncate w-full">
                            {product.name}
                          </h4>
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
      <section className="py-20 bg-gradient-to-r from-[#f0d4d9] to-[#e8c4cb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-[#e8c4cb]">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Need Custom Solutions?</h3>
              <p className="text-gray-600 mb-8 text-lg max-w-3xl mx-auto">
                We offer customized industrial indicators tailored to your specific requirements. 
                Our expert team can develop solutions for unique applications and industry standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="bg-gradient-to-r from-[#ce7c8a] to-[#b85c6d] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#b85c6d] hover:to-[#a54c5d] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Contact Our Experts
                </button>
                <button 
                  onClick={() => window.location.href = '/catalog'}
                  className="bg-white text-[#ce7c8a] border-2 border-[#ce7c8a] px-8 py-4 rounded-xl font-semibold hover:bg-[#f0d4d9] transition-all duration-300 transform hover:scale-105"
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
