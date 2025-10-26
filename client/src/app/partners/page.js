"use client";

import { useState } from "react";

export default function PartnersPage() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [partnerType, setPartnerType] = useState('all');

  const regions = [
    { id: 'all', name: 'All Regions', icon: '🌍' },
    { id: 'asia', name: 'Asia Pacific', icon: '🌏' },
    { id: 'europe', name: 'Europe', icon: '🇪🇺' },
    { id: 'americas', name: 'Americas', icon: '🌎' },
    { id: 'middle-east', name: 'Middle East & Africa', icon: '🌍' }
  ];

  const partnerTypes = [
    { id: 'all', name: 'All Partners', icon: '🤝' },
    { id: 'distributor', name: 'Distributors', icon: '📦' },
    { id: 'reseller', name: 'Resellers', icon: '🏪' },
    { id: 'agent', name: 'Sales Agents', icon: '💼' },
    { id: 'technology', name: 'Technology Partners', icon: '🔬' }
  ];

  const partners = [
    {
      id: 1,
      name: "MediTech Solutions",
      type: "distributor",
      region: "asia",
      country: "Singapore",
      description: "Leading medical equipment distributor serving Southeast Asian markets with comprehensive sterilization solutions.",
      specialties: ["Healthcare", "Medical Devices", "Sterilization"],
      established: "2018",
      coverage: "Southeast Asia",
      contact: "contact@meditech-sg.com",
      website: "www.meditech-sg.com",
      logo: "🏥",
      featured: true
    },
    {
      id: 2,
      name: "European Industrial Solutions",
      type: "distributor",
      region: "europe",
      country: "Germany",
      description: "Specialized distributor of industrial monitoring equipment across European markets with focus on pharmaceutical and food industries.",
      specialties: ["Pharmaceutical", "Food & Beverage", "Industrial"],
      established: "2019",
      coverage: "Europe",
      contact: "info@eis-europe.de",
      website: "www.eis-europe.de",
      logo: "🏭",
      featured: false
    },
    {
      id: 3,
      name: "Quality Assurance Partners",
      type: "reseller",
      region: "americas",
      country: "United States",
      description: "Authorized reseller specializing in quality control and regulatory compliance solutions for healthcare facilities.",
      specialties: ["Healthcare", "Quality Control", "Compliance"],
      established: "2020",
      coverage: "North America",
      contact: "sales@qap-usa.com",
      website: "www.qap-usa.com",
      logo: "✅",
      featured: false
    },
    {
      id: 4,
      name: "LabTech Middle East",
      type: "distributor",
      region: "middle-east",
      country: "UAE",
      description: "Comprehensive laboratory equipment distributor serving Middle Eastern and African markets with focus on research institutions.",
      specialties: ["Laboratory", "Research", "Academic"],
      established: "2017",
      coverage: "Middle East & Africa",
      contact: "info@labtech-me.ae",
      website: "www.labtech-me.ae",
      logo: "🔬",
      featured: false
    },
    {
      id: 5,
      name: "Industrial Monitoring Systems",
      type: "technology",
      region: "asia",
      country: "Japan",
      description: "Technology partner specializing in IoT integration and smart monitoring solutions for industrial applications.",
      specialties: ["IoT", "Smart Monitoring", "Automation"],
      established: "2021",
      coverage: "Asia Pacific",
      contact: "partnerships@ims-jp.com",
      website: "www.ims-jp.com",
      logo: "📱",
      featured: false
    },
    {
      id: 6,
      name: "Pharma Solutions Ltd",
      type: "agent",
      region: "europe",
      country: "United Kingdom",
      description: "Sales agent specializing in pharmaceutical industry solutions with deep expertise in regulatory requirements.",
      specialties: ["Pharmaceutical", "Regulatory", "GMP"],
      established: "2019",
      coverage: "UK & Ireland",
      contact: "sales@pharmasolutions-uk.co.uk",
      website: "www.pharmasolutions-uk.co.uk",
      logo: "💊",
      featured: false
    },
    {
      id: 7,
      name: "Food Safety Technologies",
      type: "distributor",
      region: "americas",
      country: "Canada",
      description: "Specialized distributor of food safety and quality monitoring solutions for the food processing industry.",
      specialties: ["Food Safety", "Quality Monitoring", "HACCP"],
      established: "2018",
      coverage: "Canada",
      contact: "info@fst-canada.ca",
      website: "www.fst-canada.ca",
      logo: "🍕",
      featured: false
    },
    {
      id: 8,
      name: "Medical Equipment Asia",
      type: "reseller",
      region: "asia",
      country: "South Korea",
      description: "Authorized reseller focusing on medical equipment and sterilization solutions for Korean healthcare market.",
      specialties: ["Medical Equipment", "Sterilization", "Healthcare"],
      established: "2020",
      coverage: "South Korea",
      contact: "sales@mea-korea.kr",
      website: "www.mea-korea.kr",
      logo: "🏥",
      featured: false
    }
  ];

  const filteredPartners = partners.filter(partner => {
    const matchesRegion = selectedRegion === 'all' || partner.region === selectedRegion;
    const matchesType = partnerType === 'all' || partner.type === partnerType;
    return matchesRegion && matchesType;
  });

  const featuredPartner = partners.find(partner => partner.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Partners & <span className="bg-yellow-400 px-2">Distributors</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our global network of trusted partners and distributors ensures that 
              IndieCaters' solutions reach customers worldwide with local expertise and support.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Partner */}
      {featuredPartner && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Partner</h2>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center p-8">
                  <div className="text-8xl">{featuredPartner.logo}</div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {partnerTypes.find(type => type.id === featuredPartner.type)?.name}
                    </span>
                    <span className="mx-3 text-gray-400">•</span>
                    <span className="text-gray-600 font-medium">{featuredPartner.country}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{featuredPartner.name}</h3>
                  <p className="text-gray-600 mb-6">{featuredPartner.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {featuredPartner.specialties.map((specialty, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Coverage:</h4>
                      <p className="text-gray-600">{featuredPartner.coverage}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded text-center">
                      <div className="text-lg font-bold text-gray-800">Est. {featuredPartner.established}</div>
                      <div className="text-xs text-gray-600">Partnership Since</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded text-center">
                      <div className="text-lg font-bold text-gray-800">{featuredPartner.coverage}</div>
                      <div className="text-xs text-gray-600">Market Coverage</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href={`mailto:${featuredPartner.contact}`}
                      className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                    >
                      Contact Partner
                    </a>
                    <a 
                      href={`https://${featuredPartner.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Region Filter */}
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`flex items-center px-4 py-2 rounded-full border transition-colors ${
                    selectedRegion === region.id
                      ? 'bg-yellow-400 text-gray-800 border-yellow-400'
                      : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <span className="mr-2">{region.icon}</span>
                  {region.name}
                </button>
              ))}
            </div>

            {/* Partner Type Filter */}
            <div className="flex flex-wrap gap-2">
              {partnerTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setPartnerType(type.id)}
                  className={`flex items-center px-4 py-2 rounded-full border transition-colors ${
                    partnerType === type.id
                      ? 'bg-blue-400 text-white border-blue-400'
                      : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <span className="mr-2">{type.icon}</span>
                  {type.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Global Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted partners delivering local expertise and global quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.filter(partner => !partner.featured).map((partner) => (
              <div key={partner.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center">
                  <div className="text-4xl">{partner.logo}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium mr-2">
                        {partnerTypes.find(type => type.id === partner.type)?.name}
                      </span>
                      <span className="text-gray-600 text-sm">{partner.country}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{partner.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{partner.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {partner.specialties.map((specialty, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-gray-600">Coverage:</span>
                      <span className="text-gray-800 font-medium">{partner.coverage}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-4">
                      <span className="text-gray-600">Since:</span>
                      <span className="text-gray-800 font-medium">{partner.established}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <a 
                        href={`mailto:${partner.contact}`}
                        className="flex-1 bg-yellow-400 text-gray-800 py-2 px-3 rounded-lg font-semibold text-sm hover:bg-yellow-500 transition-colors text-center"
                      >
                        Contact
                      </a>
                      <a 
                        href={`https://${partner.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                      >
                        Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPartners.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No partners found</h3>
              <p className="text-gray-600">Try adjusting your filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Partnership Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why leading companies choose to partner with IndieCaters
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Global Reach</h3>
              <p className="text-gray-600">Access to international markets with local expertise and support</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">ISO-certified products with comprehensive quality guarantees</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Training & Support</h3>
              <p className="text-gray-600">Comprehensive training programs and ongoing technical support</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">Attractive margins and volume discounts for partners</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Market Development</h3>
              <p className="text-gray-600">Joint marketing initiatives and market development support</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Technical Expertise</h3>
              <p className="text-gray-600">Access to R&D team and custom solution development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Become Our Partner</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our global network of partners and help us deliver world-class 
              industrial monitoring solutions to customers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                Apply to Become a Partner
              </button>
              <a href="/contact" className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors">
                Contact Partnership Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our partners help us serve customers across the globe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">25+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">50+</div>
              <div className="text-gray-600">Authorized Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">100%</div>
              <div className="text-gray-600">Partner Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


