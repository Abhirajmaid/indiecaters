"use client";

import { useState } from "react";
import IndustryModal from "../components/IndustryModal";

export default function IndustriesPage() {
  const industries = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      description: 'Hospitals, Clinics, Laboratories',
      detailedDescription: 'Sterilization Monitoring for infection prevention and patient safety. Sterilization Process Indicators (Chemical Indicators) placed inside surgical packs and autoclaves to verify exposure to critical parameters (time, temperature, steam).',
      image: 'https://picsum.photos/seed/healthcare/1600/900',
      applications: [
        'Surgical pack sterilization validation',
        'Autoclave process monitoring',
        'Infection prevention protocols',
        'Medical device sterilization',
        'Laboratory equipment validation',
        'Patient safety compliance'
      ],
      products: [
        'Sterilization Process Indicators',
        'Chemical Indicators',
        'Steam Indicators',
        'Temperature Monitoring Strips',
        'Bowie Dick Test Strips'
      ],
      benefits: [
        'Maximizes Patient Safety',
        'Ensures surgical instruments are sterile',
        'Enables Audit Trail',
        'Provides permanent record for quality control',
        'Acts as final confirmation against equipment malfunction'
      ],
      keyPoints: [
        'Non-Digital: Provides immediate, unambiguous pass/fail result at the point of use',
        'Critical Checkpoint: Acts as a final confirmation against equipment malfunction or human error'
      ]
    },
    {
      id: 'pharmaceutical',
      name: 'Pharmaceuticals',
      description: 'Manufacturing, R&D, Supply Chain',
      detailedDescription: 'Product Integrity and Storage Compliance according to cGMP (current Good Manufacturing Practices). Temperature & Humidity Indicators attached to sensitive APIs (Active Pharmaceutical Ingredients) or final products during transport and storage, preventing degradation.',
      image: 'https://picsum.photos/seed/pharmaceutical/1600/900',
      applications: [
        'API storage monitoring',
        'Final product transport validation',
        'Cold chain compliance',
        'Ambient transport conditions',
        'Manufacturing facility monitoring',
        'Supply chain integrity'
      ],
      products: [
        'Temperature Indicators',
        'Humidity Indicators',
        'Cold Chain Monitoring',
        'Storage Compliance Indicators',
        'Transport Validation Strips'
      ],
      benefits: [
        'Reduces Product Loss and waste',
        'Prevents thermal or moisture excursions',
        'Ensures Regulatory Compliance',
        'Maintains drug safety and efficacy',
        'Supply Chain Robustness'
      ],
      keyPoints: [
        'Irreversible Proof: Indicators permanently change if safe storage conditions are breached',
        'Supply Chain Robustness: Monitors critical cold chain and ambient transport conditions'
      ]
    },
    {
      id: 'agriculture',
      name: 'Agriculture',
      description: 'Seed Storage, Post-Harvest, Chemicals',
      detailedDescription: 'Moisture and Environment Control for viability and quality preservation of seeds and chemicals. Humidity Indicator Cards placed inside packaging for high-value seeds, fertilizers, or post-harvest storage containers to confirm safe moisture levels are maintained.',
      image: 'https://picsum.photos/seed/agriculture/1600/900',
      applications: [
        'High-value seed packaging',
        'Fertilizer storage monitoring',
        'Post-harvest storage containers',
        'Long-term storage validation',
        'Remote area shipment monitoring',
        'Chemical storage compliance'
      ],
      products: [
        'Humidity Indicator Cards',
        'Moisture Monitoring Strips',
        'Seed Viability Indicators',
        'Chemical Storage Monitors',
        'Environmental Control Cards'
      ],
      benefits: [
        'Preserves Seed Viability',
        'High germination yields',
        'Directly impacts farmer productivity',
        'Prevents Chemical Degradation',
        'Ensures product effectiveness'
      ],
      keyPoints: [
        'Viability Protection: High humidity can rapidly ruin seed germination rates or cause chemicals to clump',
        'Simple Check: Easy to read during long-term storage or shipment to remote areas'
      ]
    }
  ];

  const [openIndustry, setOpenIndustry] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-pink-100 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 to-pink-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Industry Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Industries We <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent px-2">Serve</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional industrial indicators for diverse industry applications. 
              We provide specialized monitoring solutions tailored to meet the unique 
              requirements of each sector we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 to-pink-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              Industry Expertise
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Industry Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialized monitoring solutions tailored to meet the unique requirements of each sector we serve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.id} className="bg-white rounded-xl shadow-sm border border-pink-100 overflow-hidden hover:shadow-lg transition-all duration-200">
                <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                  <img 
                    src={industry.image} 
                    alt={industry.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 rounded-full text-sm font-medium">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                      </svg>
                      {industry.name}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{industry.name}</h3>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Applications</h4>
                    <ul className="space-y-2">
                      {industry.applications.slice(0, 3).map((app, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full mr-2"></div>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={() => setOpenIndustry(industry)}
                      className="inline-flex items-center bg-gradient-to-r from-pink-400 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-500 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Learn More About {industry.name}
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustryModal
        industry={openIndustry}
        isOpen={!!openIndustry}
        onClose={() => setOpenIndustry(null)}
      />

      {/* Statistical Highlights */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border border-pink-200 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">3+</div>
              <div className="text-gray-600">Major Industries Served</div>
            </div>
            <div className="text-center bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border border-pink-200 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">500+</div>
              <div className="text-gray-600">Industry Clients Worldwide</div>
            </div>
            <div className="text-center bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border border-pink-200 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">15+</div>
              <div className="text-gray-600">Years Industry Experience</div>
            </div>
            <div className="text-center bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border border-pink-200 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">100%</div>
              <div className="text-gray-600">Industry Compliance Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 to-pink-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              Our Advantages
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Industries Choose IndieCaters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide industry-specific solutions backed by expertise and quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-pink-100 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Industry Expertise</h3>
              <p className="text-gray-600">
                15+ years of experience across multiple industries with deep understanding of sector-specific requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-pink-100 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored products for specific industry requirements with flexible configurations and specialized features.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-pink-100 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                ISO certified manufacturing and rigorous testing ensuring consistent quality across all industry applications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-pink-100 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Global Support</h3>
              <p className="text-gray-600">
                Worldwide distribution and local support ensuring timely delivery and expert assistance for all industries.
              </p>
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
            Let us help you find the right monitoring solutions for your industry. 
            Contact our experts today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-pink-500 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Industry Consultation →
            </a>
            <a href="/catalog" className="border-2 border-pink-400 text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-white transition-all duration-200">
              View Our Products →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

