"use client";

import { useState } from "react";

export default function QualityPage() {
  const [activeTab, setActiveTab] = useState('certifications');

  const certifications = [
    {
      name: "ISO 9001:2015",
      type: "Quality Management System",
      description: "International standard for quality management systems ensuring consistent quality in products and services.",
      validUntil: "2026-12-31",
      issuingBody: "International Organization for Standardization",
      logo: "🏆",
      benefits: [
        "Enhanced customer satisfaction",
        "Improved process efficiency",
        "Better risk management",
        "Continuous improvement culture"
      ]
    },
    {
      name: "ISO 13485:2016",
      type: "Medical Device Quality Management",
      description: "Specialized standard for medical device quality management systems ensuring safety and efficacy.",
      validUntil: "2026-12-31",
      issuingBody: "International Organization for Standardization",
      logo: "🏥",
      benefits: [
        "Medical device compliance",
        "Regulatory requirement fulfillment",
        "Enhanced patient safety",
        "Global market access"
      ]
    },
    {
      name: "FDA 21 CFR Part 820",
      type: "Quality System Regulation",
      description: "US FDA regulation for medical device quality systems ensuring safety and effectiveness.",
      validUntil: "Ongoing",
      issuingBody: "US Food and Drug Administration",
      logo: "🇺🇸",
      benefits: [
        "US market compliance",
        "Regulatory approval pathway",
        "Quality system requirements",
        "FDA inspection readiness"
      ]
    },
    {
      name: "CE Marking",
      type: "European Conformity",
      description: "European conformity marking indicating compliance with EU health, safety, and environmental standards.",
      validUntil: "2026-12-31",
      issuingBody: "European Commission",
      logo: "🇪🇺",
      benefits: [
        "European market access",
        "EU regulatory compliance",
        "Product safety assurance",
        "Free movement within EU"
      ]
    }
  ];

  const qualityStandards = [
    {
      standard: "ISO 11140",
      title: "Chemical Indicators",
      description: "International standard for chemical indicators used in sterilization processes.",
      scope: "Steam, ETO, and other sterilization indicators",
      compliance: "Full Compliance"
    },
    {
      standard: "AAMI ST79",
      title: "Sterilization Standards",
      description: "Comprehensive guide to steam sterilization and sterility assurance in healthcare facilities.",
      scope: "Healthcare sterilization processes",
      compliance: "Full Compliance"
    },
    {
      standard: "EN 285",
      title: "European Sterilization",
      description: "European standard for steam sterilizers and sterilization processes.",
      scope: "European sterilization requirements",
      compliance: "Full Compliance"
    },
    {
      standard: "ISO 14971",
      title: "Risk Management",
      description: "International standard for risk management of medical devices.",
      scope: "Medical device risk assessment",
      compliance: "Full Compliance"
    }
  ];

  const qualityProcesses = [
    {
      step: "01",
      title: "Raw Material Inspection",
      description: "Rigorous testing of all incoming materials against strict specifications.",
      details: [
        "Chemical composition verification",
        "Physical property testing",
        "Supplier quality audits",
        "Certificate of analysis review"
      ]
    },
    {
      step: "02",
      title: "In-Process Quality Control",
      description: "Continuous monitoring and testing during manufacturing processes.",
      details: [
        "Real-time process monitoring",
        "Statistical process control",
        "Intermediate product testing",
        "Environmental condition monitoring"
      ]
    },
    {
      step: "03",
      title: "Final Product Testing",
      description: "Comprehensive testing of finished products before release.",
      details: [
        "Performance verification",
        "Stability testing",
        "Batch release testing",
        "Documentation review"
      ]
    },
    {
      step: "04",
      title: "Quality Assurance Review",
      description: "Final quality assurance review and release authorization.",
      details: [
        "Quality system compliance check",
        "Regulatory requirement verification",
        "Customer specification confirmation",
        "Release authorization"
      ]
    }
  ];

  const testingCapabilities = [
    {
      category: "Chemical Testing",
      capabilities: [
        "Chemical composition analysis",
        "Indicator formulation verification",
        "Reaction kinetics testing",
        "Stability and shelf-life testing"
      ]
    },
    {
      category: "Physical Testing",
      capabilities: [
        "Temperature response testing",
        "Humidity sensitivity analysis",
        "Pressure resistance testing",
        "Dimensional accuracy verification"
      ]
    },
    {
      category: "Performance Testing",
      capabilities: [
        "Sterilization cycle validation",
        "Response time measurement",
        "Accuracy and precision testing",
        "Environmental condition testing"
      ]
    },
    {
      category: "Regulatory Testing",
      capabilities: [
        "ISO standard compliance testing",
        "FDA requirement verification",
        "CE marking validation",
        "International standard testing"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Quality & <span className="bg-yellow-400 px-2">Certifications</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to the highest standards of quality, safety, and regulatory compliance 
              in every product we manufacture.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Quality Commitment</h2>
              <p className="text-lg text-gray-600 mb-6">
                At IndieCaters, quality is not just a goal—it's a fundamental principle that 
                drives everything we do. Our comprehensive quality management system ensures 
                that every product meets the highest international standards.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We maintain state-of-the-art testing facilities and employ rigorous quality 
                control processes to guarantee the reliability and accuracy of our industrial 
                indicators.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-700">100% quality assurance on all shipments</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-700">International standard compliance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-700">Continuous improvement processes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-700">Customer satisfaction guarantee</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-800 mb-2">99.9%</div>
                  <div className="text-gray-600">Quality Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-800 mb-2">15+</div>
                  <div className="text-gray-600">Years Zero Defects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-800 mb-2">24/7</div>
                  <div className="text-gray-600">Quality Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-800 mb-2">100%</div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Internationally recognized certifications that validate our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <div className="flex items-start mb-4">
                  <div className="text-4xl mr-4">{cert.logo}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{cert.name}</h3>
                    <p className="text-yellow-600 font-semibold">{cert.type}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Valid Until:</span>
                    <span className="text-gray-800 font-medium">{cert.validUntil}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Issuing Body:</span>
                    <span className="text-gray-800 font-medium">{cert.issuingBody}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {cert.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Industry Standards Compliance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full compliance with international standards and regulations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{standard.standard}</h3>
                    <p className="text-gray-600 font-medium">{standard.title}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {standard.compliance}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{standard.description}</p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Scope:</span> {standard.scope}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Quality Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensuring excellence at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityProcesses.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-400 text-gray-800 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{process.title}</h3>
                <p className="text-gray-600 mb-4">{process.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {process.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Testing Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art testing facilities and comprehensive quality assurance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testingCapabilities.map((capability, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-4">{capability.category}</h3>
                <ul className="space-y-2">
                  {capability.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 mt-1.5"></div>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Quality Assurance Guarantee</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality extends beyond manufacturing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-yellow-50 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Product Warranty</h3>
              <p className="text-gray-600 mb-4">
                All products come with comprehensive warranty coverage and quality guarantee.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 5-year product warranty</li>
                <li>• Performance guarantee</li>
                <li>• Quality replacement policy</li>
                <li>• Technical support included</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Documentation</h3>
              <p className="text-gray-600 mb-4">
                Complete documentation for regulatory compliance and quality traceability.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Certificate of analysis</li>
                <li>• Quality test reports</li>
                <li>• Regulatory compliance docs</li>
                <li>• Batch traceability records</li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Continuous Improvement</h3>
              <p className="text-gray-600 mb-4">
                Ongoing quality improvement through feedback and process optimization.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Customer feedback integration</li>
                <li>• Process optimization</li>
                <li>• Technology upgrades</li>
                <li>• Regular quality audits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Quality Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Questions About Quality?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our quality team is here to answer any questions about our certifications, 
            processes, or quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-yellow-400 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors">
              Contact Quality Team →
            </a>
            <button className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 hover:text-white transition-colors">
              Download Quality Certificates →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


