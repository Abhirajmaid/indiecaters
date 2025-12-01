"use client";

export default function IndustriesPage() {
  const industries = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      description: 'Hospitals, Clinics, Laboratories',
      detailedDescription: 'Sterilization Monitoring for infection prevention and patient safety. Sterilization Process Indicators (Chemical Indicators) placed inside surgical packs and autoclaves to verify exposure to critical parameters (time, temperature, steam).',
      image: '/newimgsofar/healthcare.jpeg',
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
        detailedDescription: 'Product Integrity and Storage Compliance according to cGMP (current Good Manufacturing Practices). Temperature & Humidity and Moisture Indicators attached to sensitive APIs (Active Pharmaceutical Ingredients) or final products during transport and storage, preventing degradation.',
      image: '/newimgsofar/pharmaceuticals_img.jpeg',
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
        'Humidity and Moisture Indicators',
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
      image: '/newimgsofar/agriculture.jpeg',
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
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                <span className="bg-gradient-to-r from-[#ce7c8a] to-[#b85c6d] bg-clip-text text-transparent drop-shadow-lg">Industries We</span> <span className="text-white drop-shadow-lg">Serve</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
                Professional industrial indicators for diverse industry applications. 
                We provide specialized monitoring solutions tailored to meet the unique 
                requirements of each sector we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ce7c8a]/5 to-[#ce7c8a]/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#ce7c8a] text-white rounded-full text-sm font-medium mb-6 shadow-lg">
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
              <div key={industry.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 flex flex-col">
                {/* Header Section */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.name} 
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30"></div>
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center px-3 py-1 bg-white/90 text-gray-800 rounded-full text-sm font-medium">
                      {industry.name}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{industry.name}</h3>
                    <p className="text-white/90 text-sm">{industry.description}</p>
                  </div>
                </div>
                
                {/* Content Section - Extended heights without scrollbars */}
                <div className="p-6 grid grid-rows-[200px_280px_450px_220px] gap-8">
                  {/* Detailed Description - Row 1 */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Overview</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{industry.detailedDescription}</p>
                  </div>

                  {/* Key Points Section - Row 2 */}
                  {industry.keyPoints && (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                      <h4 className="text-base font-semibold text-gray-800 mb-4">Key Points</h4>
                      <div className="space-y-3">
                        {industry.keyPoints.map((point, index) => (
                          <div key={index} className="bg-white p-3 rounded border border-gray-100">
                            <p className="text-gray-700 text-sm">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Applications and Benefits Grid - Row 3 */}
                  <div>
                    <div className="grid grid-cols-1 gap-8 h-full">
                      <div>
                        <h4 className="text-base font-semibold text-gray-800 mb-4">Applications</h4>
                        <ul className="space-y-3 text-gray-600">
                          {industry.applications.map((item, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <span className="mt-1 mr-3 w-1.5 h-1.5 bg-[#ce7c8a] rounded-full flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-gray-800 mb-4">Benefits</h4>
                        <ul className="space-y-3 text-gray-600">
                          {industry.benefits.map((item, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <span className="mt-1 mr-3 w-1.5 h-1.5 bg-[#ce7c8a] rounded-full flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Key Products - Row 4 */}
                  <div className="bg-gray-50 rounded-lg p-5">
                    <h4 className="text-base font-semibold text-gray-800 mb-4">Key Products</h4>
                    <div className="flex flex-wrap gap-3">
                      {industry.products.map((p, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full bg-white text-gray-700 text-xs border border-gray-200">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistical Highlights */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-[#f0d4d9] to-[#e8c4cb] p-6 rounded-xl border border-[#e8c4cb] hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-[#ce7c8a] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">3+</div>
              <div className="text-gray-600">Major Industries Served</div>
            </div>
            <div className="text-center bg-gradient-to-br from-[#f0d4d9] to-[#e8c4cb] p-6 rounded-xl border border-[#e8c4cb] hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-[#ce7c8a] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center bg-gradient-to-br from-[#f0d4d9] to-[#e8c4cb] p-6 rounded-xl border border-[#e8c4cb] hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-[#ce7c8a] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">15+</div>
              <div className="text-gray-600">Years Industry Experience</div>
            </div>
            <div className="text-center bg-gradient-to-br from-[#f0d4d9] to-[#e8c4cb] p-6 rounded-xl border border-[#e8c4cb] hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-[#ce7c8a] rounded-full flex items-center justify-center mx-auto mb-4">
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#ce7c8a]/5 to-[#ce7c8a]/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#ce7c8a] text-white rounded-full text-sm font-medium mb-6 shadow-lg">
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
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#f0d4d9] hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-[#ce7c8a] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Industry Expertise</h3>
              <p className="text-gray-600">
                15+ years of experience across multiple industries with deep understanding of sector-specific requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#f0d4d9] hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-[#ce7c8a] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored products for specific industry requirements with flexible configurations and specialized features.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#f0d4d9] hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-[#ce7c8a] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                ISO certified manufacturing and rigorous testing ensuring consistent quality across all industry applications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#f0d4d9] hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-[#ce7c8a] rounded-lg flex items-center justify-center mb-6">
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
      <section className="py-20 bg-gradient-to-br from-[#f0d4d9] via-white to-[#e8c4cb] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ce7c8a]/5 to-[#ce7c8a]/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-[#ce7c8a] text-white rounded-full text-sm font-medium mb-6 shadow-lg">
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
            <a href="/contact" className="bg-gradient-to-r from-[#ce7c8a] to-[#b85c6d] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#b85c6d] hover:to-[#a54c5d] transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Industry Consultation →
            </a>
            <a href="/catalog" className="border-2 border-[#ce7c8a] text-[#ce7c8a] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#ce7c8a] hover:text-white transition-all duration-200">
              View Our Products →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

