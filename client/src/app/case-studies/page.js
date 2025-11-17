"use client";

import { useState } from "react";

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedCase, setSelectedCase] = useState(null);

  const industries = [
    { id: 'all', name: 'All Industries', icon: '🌍' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'pharmaceutical', name: 'Pharmaceutical', icon: '💊' },
    { id: 'food', name: 'Food & Beverage', icon: '🍕' },
    { id: 'laboratory', name: 'Laboratory', icon: '🔬' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Major Hospital Chain Achieves 99.9% Sterilization Success Rate",
      industry: "healthcare",
      client: "Apollo Hospitals Group",
      challenge: "Inconsistent sterilization validation across 50+ hospital locations leading to compliance issues and potential safety risks.",
      solution: "Implemented comprehensive Class 5 and Class 6 steam indicators with standardized protocols across all facilities.",
      results: [
        "99.9% sterilization success rate achieved",
        "50% reduction in sterilization failures",
        "100% regulatory compliance maintained",
        "Cost savings of ₹2.5 crores annually"
      ],
      metrics: {
        "Sterilization Success Rate": "99.9%",
        "Compliance Rate": "100%",
        "Cost Savings": "₹2.5 crores/year",
        "Implementation Time": "3 months"
      },
      testimonial: {
        text: "IndieCaters' sterilization indicators have revolutionized our sterilization processes. The reliability and accuracy have given us complete confidence in our patient safety protocols.",
        author: "Dr. Rajesh Kumar",
        position: "Chief Medical Officer, Apollo Hospitals",
        image: "👨‍⚕️"
      },
      image: "🏥",
      featured: true
    },
    {
      id: 2,
      title: "Pharmaceutical Giant Ensures Drug Safety with Advanced Moisture Control",
      industry: "pharmaceutical",
      client: "Sun Pharma",
      challenge: "Moisture-sensitive pharmaceutical products requiring precise humidity control during storage and transportation.",
      solution: "Deployed advanced humidity indicator cards and moisture monitoring systems across all storage facilities.",
      results: [
        "Zero moisture-related product failures",
        "25% improvement in product shelf life",
        "Complete traceability of storage conditions",
        "FDA audit compliance achieved"
      ],
      metrics: {
        "Product Failures": "0%",
        "Shelf Life Improvement": "25%",
        "FDA Compliance": "100%",
        "Storage Facilities": "15+ locations"
      },
      testimonial: {
        text: "The precision and reliability of IndieCaters' moisture/ humidity indicators have been instrumental in maintaining our product quality standards and regulatory compliance.",
        author: "Priya Sharma",
        position: "Quality Assurance Director, Sun Pharma",
        image: "👩‍🔬"
      },
      image: "💊",
      featured: false
    },
    {
      id: 3,
      title: "Food Processing Company Optimizes Cold Chain Management",
      industry: "food",
      client: "Nestlé India",
      challenge: "Maintaining consistent temperature control across the entire cold chain from production to retail.",
      solution: "Implemented temperature indicator strips and cold chain monitoring systems for comprehensive temperature tracking.",
      results: [
        "95% reduction in temperature excursions",
        "40% decrease in product wastage",
        "Real-time temperature monitoring",
        "Enhanced brand reputation"
      ],
      metrics: {
        "Temperature Excursions": "-95%",
        "Product Wastage": "-40%",
        "Monitoring Coverage": "100%",
        "Customer Satisfaction": "98%"
      },
      testimonial: {
        text: "IndieCaters' temperature monitoring solutions have transformed our cold chain operations, ensuring product quality and reducing wastage significantly.",
        author: "Amit Patel",
        position: "Supply Chain Manager, Nestlé India",
        image: "👨‍💼"
      },
      image: "🍕",
      featured: false
    },
    {
      id: 4,
      title: "Research Laboratory Achieves ISO Compliance with Precision Indicators",
      industry: "laboratory",
      client: "CSIR - National Chemical Laboratory",
      challenge: "Meeting stringent ISO requirements for sterilization validation in research equipment and samples.",
      solution: "Customized sterilization indicators and validation protocols designed for research applications.",
      results: [
        "Full ISO 13485:2016 compliance achieved",
        "Research equipment sterilization validated",
        "Zero contamination incidents",
        "International research collaboration enabled"
      ],
      metrics: {
        "ISO Compliance": "100%",
        "Contamination Incidents": "0",
        "Research Projects": "200+",
        "Collaboration Partners": "15+ cities"
      },
      testimonial: {
        text: "The precision and reliability of IndieCaters' indicators have been crucial in maintaining our research standards and enabling international collaborations.",
        author: "Dr. Sunita Reddy",
        position: "Principal Scientist, CSIR-NCL",
        image: "👩‍🔬"
      },
      image: "🔬",
      featured: false
    },
    {
      id: 5,
      title: "Medical Device Manufacturer Ensures Sterility Assurance",
      industry: "healthcare",
      client: "Johnson & Johnson Medical India",
      challenge: "Ensuring sterility of medical devices throughout the manufacturing and packaging process.",
      solution: "Comprehensive sterilization validation using Class 5 indicators and process challenge devices.",
      results: [
        "100% sterility assurance achieved",
        "Zero sterility failures in 3 years",
        "FDA audit passed with excellence",
        "Export market expansion enabled"
      ],
      metrics: {
        "Sterility Assurance": "100%",
        "Sterility Failures": "0 in 3 years",
        "FDA Audit Score": "Excellent",
        "Export Markets": "15+ cities"
      },
      testimonial: {
        text: "IndieCaters' sterilization validation solutions have been instrumental in maintaining our global quality standards and regulatory compliance.",
        author: "Vikram Singh",
        position: "Quality Director, J&J Medical India",
        image: "👨‍⚕️"
      },
      image: "🏥",
      featured: false
    },
    {
      id: 6,
      title: "Biotech Company Optimizes Sample Storage with Humidity Control",
      industry: "laboratory",
      client: "Biocon Limited",
      challenge: "Critical biological samples requiring precise humidity control for long-term storage stability.",
      solution: "Advanced humidity monitoring systems with real-time alerts and automated controls.",
      results: [
        "99.8% sample integrity maintained",
        "5-year storage stability achieved",
        "Automated monitoring system",
        "Regulatory approval for clinical trials"
      ],
      metrics: {
        "Sample Integrity": "99.8%",
        "Storage Duration": "5+ years",
        "Monitoring Accuracy": "±1% RH",
        "Clinical Trial Approvals": "12+"
      },
      testimonial: {
        text: "The precision of IndieCaters' humidity monitoring has been crucial in maintaining the integrity of our critical biological samples for clinical research.",
        author: "Dr. Archana Mehta",
        position: "Research Director, Biocon",
        image: "👩‍🔬"
      },
      image: "🧬",
      featured: false
    }
  ];

  const filteredCases = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(caseStudy => caseStudy.industry === selectedIndustry);

  const featuredCase = caseStudies.find(caseStudy => caseStudy.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Customer <span className="bg-yellow-400 px-2">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how leading companies across industries have transformed their 
              operations with IndieCaters' industrial monitoring solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredCase && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Success Story</h2>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center p-8">
                  <div className="text-8xl">{featuredCase.image}</div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {industries.find(ind => ind.id === featuredCase.industry)?.name}
                    </span>
                    <span className="mx-3 text-gray-400">•</span>
                    <span className="text-gray-600 font-medium">{featuredCase.client}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{featuredCase.title}</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{featuredCase.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm">{featuredCase.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(featuredCase.metrics).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-3 rounded text-center">
                        <div className="text-lg font-bold text-gray-800">{value}</div>
                        <div className="text-xs text-gray-600">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600 italic mb-3">"{featuredCase.testimonial.text}"</p>
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">{featuredCase.testimonial.image}</div>
                      <div>
                        <div className="font-semibold text-gray-800">{featuredCase.testimonial.author}</div>
                        <div className="text-sm text-gray-600">{featuredCase.testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Industry Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`flex items-center px-4 py-2 rounded-full border transition-colors ${
                  selectedIndustry === industry.id
                    ? 'bg-yellow-400 text-gray-800 border-yellow-400'
                    : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{industry.icon}</span>
                {industry.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real customers across diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.filter(caseStudy => !caseStudy.featured).map((caseStudy) => (
              <div key={caseStudy.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center">
                  <div className="text-4xl">{caseStudy.image}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      {industries.find(ind => ind.id === caseStudy.industry)?.name}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-600 text-sm">{caseStudy.client}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">{caseStudy.title}</h3>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Challenge:</h4>
                    <p className="text-gray-600 text-sm line-clamp-2">{caseStudy.challenge}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Key Results:</h4>
                    <ul className="space-y-1">
                      {caseStudy.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center mb-3">
                      <div className="text-xl mr-2">{caseStudy.testimonial.image}</div>
                      <div>
                        <div className="font-semibold text-gray-800 text-sm">{caseStudy.testimonial.author}</div>
                        <div className="text-xs text-gray-600">{caseStudy.testimonial.position}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs italic line-clamp-2">"{caseStudy.testimonial.text}"</p>
                  </div>

                  <button
                    onClick={() => setSelectedCase(selectedCase === caseStudy.id ? null : caseStudy.id)}
                    className="w-full mt-4 bg-yellow-400 text-gray-800 py-2 px-4 rounded-lg font-semibold text-sm hover:bg-yellow-500 transition-colors"
                  >
                    View Full Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Success Metrics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quantifiable results that demonstrate our impact across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">500+</div>
              <div className="text-gray-600">Successful Implementations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">99.9%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">₹10Cr+</div>
              <div className="text-gray-600">Client Cost Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied customers who have transformed their operations 
            with IndieCaters' industrial monitoring solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-yellow-400 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors">
              Start Your Project →
            </a>
            <a href="/catalog" className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 hover:text-white transition-colors">
              View Our Solutions →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
