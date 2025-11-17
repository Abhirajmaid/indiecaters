"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProductModal from "../components/ProductModal";

export default function CatalogPage() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    { 
      id: 'sterilization', 
      name: 'Sterilization Indicators', 
      icon: '🦠',
      description: 'Professional steam sterilization indicators for healthcare and pharmaceutical industries',
      color: 'blue'
    },
    { 
      id: 'humidity', 
      name: 'Humidity Indicators', 
      icon: '💧',
      description: 'Reliable moisture detection for pharmaceutical, food, and packaging industries',
      color: 'cyan'
    },
    { 
      id: 'temperature', 
      name: 'Temperature Indicators', 
      icon: '🌡️',
      description: 'Precise temperature monitoring solutions for critical processes',
      color: 'red'
    },
    { 
      id: 'moisture', 
      name: 'Moisture/ Humidity Indicators', 
      icon: '💧',
      description: 'Advanced moisture monitoring for industrial applications',
      color: 'green'
    }
  ];

  const products = [
    {
      id: 1,
      name: "Class 5 Steam Indicator",
      category: "sterilization",
      type: "Chemical Indicator",
      description: "Advanced chemical indicator that responds to all critical variables in steam sterilization processes. This Class 5 integrator provides comprehensive monitoring of steam sterilization cycles, ensuring complete process validation and quality assurance.",
      features: [
        "Steam penetration verification",
        "Temperature monitoring",
        "Time duration validation",
        "Pressure confirmation",
        "Multi-parameter response",
        "Color change indication",
        "Tamper-evident design"
      ],
      specifications: {
        "Response Time": "< 30 seconds",
        "Temperature Range": "121-134°C",
        "Shelf Life": "3 years",
        "Standards": "ISO 11140, AAMI ST79",
        "Storage Conditions": "15-25°C, <60% RH",
        "Package Size": "100 strips per box",
        "Material": "Non-toxic chemical composition"
      },
      applications: [
        "Medical Device Sterilization",
        "Laboratory Equipment",
        "Dental Instruments",
        "Surgical Tools",
        "Pharmaceutical Equipment"
      ],
      price: "Contact for pricing",
      image: "/newimg/Sterilization%20Indicators.jpg",
      inStock: true,
      popular: true
    },
    {
      id: 2,
      name: "Class 6 Steam Indicator",
      category: "sterilization",
      type: "Process Challenge Device",
      description: "Specific cycle indicators designed for particular sterilization processes with enhanced accuracy. These emulating indicators provide precise monitoring for specific sterilization cycles, offering superior process validation capabilities.",
      features: [
        "Cycle-specific validation",
        "Process optimization",
        "Quality assurance",
        "Compliance monitoring",
        "Enhanced accuracy",
        "Rapid response time",
        "Reliable indication"
      ],
      specifications: {
        "Response Time": "< 15 seconds",
        "Temperature Range": "121-134°C",
        "Shelf Life": "3 years",
        "Standards": "ISO 11140, EN 285",
        "Storage Conditions": "15-25°C, <60% RH",
        "Package Size": "50 strips per box",
        "Material": "Chemical-based indicator"
      },
      applications: [
        "Hospital Sterilization",
        "Laboratory Autoclaves",
        "Medical Device Processing",
        "Research Facilities",
        "Healthcare Equipment"
      ],
      price: "Contact for pricing",
      image: "/newimg/Sterilization%20Indicators.jpg",
      inStock: true,
      popular: false
    },
    {
      id: 3,
      name: "Bowie Dick Test Strips",
      category: "sterilization",
      type: "Air Removal Test",
      description: "Helix test strips for air removal verification in steam sterilizers. These specialized test strips ensure proper air removal from sterilization chambers, critical for effective steam sterilization processes.",
      features: [
        "Air removal verification",
        "Helix design for accuracy",
        "Easy to use",
        "Reliable results",
        "Visual confirmation",
        "Standardized testing",
        "Consistent performance"
      ],
      specifications: {
        "Test Duration": "3.5 minutes",
        "Temperature": "134°C",
        "Shelf Life": "2 years",
        "Standards": "ISO 11140-3",
        "Storage Conditions": "15-25°C, <60% RH",
        "Package Size": "25 strips per pack",
        "Material": "Paper-based with chemical indicator"
      },
      applications: [
        "Steam Sterilizer Testing",
        "Air Removal Validation",
        "Quality Control",
        "Equipment Maintenance",
        "Compliance Testing"
      ],
      price: "Contact for pricing",
      image: "/newimg/Sterilization%20Indicators.jpg",
      inStock: true,
      popular: true
    },
    {
      id: 4,
      name: "Humidity Indicator Cards",
      category: "humidity",
      type: "Relative Humidity Monitor",
      description: "Color-changing humidity indicator cards for monitoring relative humidity levels.",
      features: [
        "Visual humidity indication",
        "Multiple humidity levels",
        "Long shelf life",
        "Easy interpretation"
      ],
      specifications: {
        "Humidity Range": "10-90% RH",
        "Accuracy": "±5% RH",
        "Shelf Life": "2 years",
        "Standards": "ISO 11140"
      },
      price: "Contact for pricing",
      image: "/newimg/Humidity%20Indicators.jpg",
      inStock: true,
      popular: false
    },
    {
      id: 5,
      name: "Temperature Indicator Strips",
      category: "temperature",
      type: "Heat Process Monitor",
      description: "Self-adhesive temperature indicators for heat process monitoring and validation.",
      features: [
        "Self-adhesive design",
        "Multiple temperature points",
        "Tamper-evident",
        "Clear visual indication"
      ],
      specifications: {
        "Temperature Range": "60-200°C",
        "Accuracy": "±2°C",
        "Shelf Life": "2 years",
        "Standards": "ISO 11140"
      },
      price: "Contact for pricing",
      image: "/newimg/Autoclave%20Sterilization%20Tape.jpg",
      inStock: true,
      popular: true
    },
    {
      id: 6,
      name: "Moisture Indicator Packets",
      category: "moisture",
      type: "Desiccant Indicator",
      description: "Moisture indicator packets for packaging protection and moisture control.",
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
      price: "Contact for pricing",
      image: "/newimg/Sterilization%20Indicators.jpg",
      inStock: true,
      popular: false
    },
    {
      id: 7,
      name: "ETO Sterilization Tape",
      category: "sterilization",
      type: "Process Indicator",
      description: "Self-adhesive tape for Steam & ETO sterilization processes.",
      features: [
        "Self-adhesive",
        "Steam & ETO compatible",
        "Color change indication",
        "Easy application"
      ],
      specifications: {
        "Temperature Range": "121-134°C",
        "Width": "12mm, 18mm, 24mm",
        "Shelf Life": "3 years",
        "Standards": "ISO 11140"
      },
      price: "Contact for pricing",
      image: "/newimg/Sterilization%20Indicators.jpg",
      inStock: true,
      popular: false
    }
  ];

  // Get products for a specific category
  const getCategoryProducts = (categoryId) => {
    return products.filter(product => product.category === categoryId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Product <span className="bg-[#ce7c8a] px-2">Catalog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of professional industrial indicators for sterilization, 
              moisture, and temperature monitoring applications.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section with Dropdown */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Categories Dropdown - 1/3 */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Product Categories</h2>
              <p className="text-lg text-gray-600 mb-8">
                Select a category to explore our specialized industrial monitoring solutions
              </p>
              
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between px-6 py-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-gray-800 font-medium">Choose a Category</span>
                  <svg 
                    className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onMouseEnter={() => setHoveredCategory(category.id)}
                        onMouseLeave={() => setHoveredCategory(null)}
                        onClick={() => { router.push(`/products/${category.id}`); setIsDropdownOpen(false); }}
                        className="w-full flex items-center px-6 py-4 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        <span className="text-2xl mr-4">{category.icon}</span>
                        <div>
                          <div className="font-medium text-gray-800">{category.name}</div>
                          <div className="text-sm text-gray-600">{category.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Category Stats */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#ce7c8a] rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">50+ Products Available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#ce7c8a] rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">ISO Certified Quality</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#ce7c8a] rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">Expert Support</span>
                </div>
              </div>
            </div>

            {/* Products Display - 2/3 */}
            <div className="lg:col-span-2">
              {hoveredCategory ? (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {categories.find(c => c.id === hoveredCategory)?.name}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {getCategoryProducts(hoveredCategory).map((product) => (
                      <div 
                        key={product.id} 
                        className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => {
                          setSelectedProduct(product);
                          setIsModalOpen(true);
                        }}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            {product.image.startsWith('/') ? (
                              <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-16 h-16 object-contain rounded-lg bg-gray-50 p-2"
                              />
                            ) : (
                              <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center text-2xl">
                                {product.image}
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h4>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className={`w-2 h-2 rounded-full mr-2 ${product.inStock ? 'bg-green-400' : 'bg-red-400'}`}></div>
                                <span className="text-sm text-gray-600">
                                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                                </span>
                              </div>
                              <button className="text-[#ce7c8a] hover:text-[#b85c6d] text-sm font-medium">
                                View Details →
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">📦</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Select a Category</h3>
                  <p className="text-gray-600">
                    Choose a product category from the dropdown to view available products
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
      />
    </div>
  );
}
