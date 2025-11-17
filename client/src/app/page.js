"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import CalendlyWidget from "./components/CalendlyWidget";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);


  // Form handling functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
        alert('Thank you for your message! We will get back to you soon.');
      }, 2000);
    }
  };


  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-[#ce7c8a] rounded-full mb-6 shadow-lg animate-pulse">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-[#ce7c8a] rounded-full animate-spin"></div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">IndieCaters</h2>
          <p className="text-gray-600">Loading your industrial indicators...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section - Full Screen Coverage Including Header */}
      <section id="home" className="hero-industrial relative w-full h-[90vh]">
        {/* Enhanced overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60"></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 h-[90vh] flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
              <span className="text-white">Revolutionizing the first line of </span><span style={{ color: '#ce7c8a' }} className="bg-clip-text text-transparent px-2 drop-shadow-lg">quality control </span><span className="text-white"> with
              <br />Made-in-India indicator technology </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white mb-12 max-w-4xl mx-auto drop-shadow-lg font-medium">
              Ensuring every product stays safe from factory to consumer.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => window.location.href = '/products'}
                className="px-10 py-4 bg-[#ce7c8a] text-white rounded-lg font-semibold hover:bg-[#b85c6d] transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm transform hover:scale-105 text-xl"
              >
                Explore Products
              </button>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white pt-12 md:pt-16 pb-4 md:pb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">About IndieCaters</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            IndieCaters, founded in 2023 in Pune, is a Made-in-India startup that creates simple, printed, non-digital indicators to monitor sterilization, temperature, humidity. Designed for healthcare, pharma,food and agriculture industries, these solutions address key challenges such as improper sterilization, product spoilage, and moisture-related degradation. With a focus on simplifying quality assurance through cost-effective and reliable indicators, IndieCaters stands out for its asset-light, scalable model, zero major domestic competition, and strong potential for export and nationwide adoption.
            </p>
          </div>

        </div>
      </section>

      {/* Why IndieCaters Section */}
      <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 pt-6 md:pt-12 pb-12 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ce7c8a]/5 to-[#ce7c8a]/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
           <div className="text-center mb-4 md:mb-8">
             <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Why IndieCaters?</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Discover what sets us apart in the industrial monitoring industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-16">
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-sm border border-[#f0d4d9] hover:shadow-lg transition-all duration-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ce7c8a] rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">ISO Certified Quality</h3>
              <p className="text-sm md:text-base text-gray-600">
              IndieCaters ensures reliability through ISO-certified production standards, guaranteeing precision and consistency in every indicator manufactured.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-sm border border-[#f0d4d9] hover:shadow-lg transition-all duration-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ce7c8a] rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Made-in-India Innovation</h3>
              <p className="text-sm md:text-base text-gray-600">
               All products are proudly developed and produced in India, supporting local manufacturing while meeting global quality benchmarks.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-sm border border-[#f0d4d9] hover:shadow-lg transition-all duration-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ce7c8a] rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Simple Yet Smart Solutions</h3>
              <p className="text-sm md:text-base text-gray-600">
              Our printed, non-digital indicators offer easy-to-use, infrastructure-free monitoring—ideal for hospitals, pharma, and food industries.
              </p>
              <p className="text-sm md:text-base text-gray-600 mt-2">
              They remain inexpensive and easy to access, ensuring even smaller facilities can adopt reliable monitoring without heavy investments.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-sm border border-[#f0d4d9] hover:shadow-lg transition-all duration-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ce7c8a] rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Scalable & Sustainable</h3>
              <p className="text-sm md:text-base text-gray-600">
              Designed for seamless scalability, our solutions can be easily adopted across industries while promoting sustainability and efficiency
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-sm border border-[#f0d4d9] hover:shadow-lg transition-all duration-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ce7c8a] rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Diverse Applications</h3>
              <p className="text-sm md:text-base text-gray-600">
              Serving healthcare, pharmaceuticals, food, agriculture, and chemical sectors, our indicators enhance safety, reduce wastage, and prevent losses.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-sm border border-[#f0d4d9] hover:shadow-lg transition-all duration-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ce7c8a] rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Early Growth, Strong Future</h3>
              <p className="text-sm md:text-base text-gray-600">
              With an asset-light model, no major competition,IndieCaters is set to lead the quality indication revolution.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Sterilisation Indicators Section - Photo Right */}
      <section id="sterilisation-indicators" className="bg-gradient-to-br from-gray-50 to-blue-50 py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ce7c8a]/5 to-[#ce7c8a]/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#f0d4d9] to-[#e8c4cb] text-[#b85c6d] rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
                  <svg className="w-3 h-3 md:w-4 md:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                  Sterilization Solutions
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Sterilisation Indicators</h2>
                <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">Our most comprehensive sterilisation monitoring solution</h3>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-2">Professional steam sterilisation monitoring:</h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Our sterilisation indicators are equipped with advanced chemical technology to detect Steam Penetration, Temperature, 
                    Time Duration, and Pressure - ensuring complete sterilisation process validation.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-2">Empowers you to ensure patient safety:</h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Like having a quality assurance expert for your sterilisation process - providing real-time validation 
                    and compliance monitoring for healthcare and pharmaceutical industries.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-2">A team of experts on your side:</h4>
                  <p className="text-sm md:text-base text-gray-600">
                    IndieCaters, established in 2023, is led by experienced sterilisation scientists and engineers with 
                    over 15 years of expertise in industrial monitoring solutions.
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => window.location.href = '/products/sterilization'}
                className="bg-[#ce7c8a] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-[#b85c6d] transition-all duration-200 shadow-lg text-sm md:text-base"
              >
                Learn more
              </button>
            </div>
            
            <div className="relative">
              {/* Yellow border frame */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#ce7c8a] rounded-lg opacity-30"></div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg relative z-10 border-l-4 border-[#ce7c8a]">
                {/* Product representation */}
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="absolute top-4 left-8 w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="text-center">
                    <Image
                      src="/newimg/Sterilization%20Indicators.jpg"
                      alt="Sterilisation Indicators"
                      fill
                      className="object-cover rounded-lg mx-auto"
                    />
                    <div className="text-sm font-semibold text-gray-800 mt-2">Sterilisation</div>
                    <div className="text-xs text-gray-600">Indicators</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moisture/ Humidity Indicators Section - Photo Left */}
      <section id="moisture-indicators" className="bg-gradient-to-br from-white to-blue-50 py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ce7c8a]/5 to-[#ce7c8a]/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-1 order-2">
              {/* Yellow border frame */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-[#e8c4cb] to-[#ce7c8a] rounded-lg opacity-30"></div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg relative z-10 border-r-4 border-[#ce7c8a]">
                {/* Product representation */}
                <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-100 rounded-lg flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="absolute top-4 right-8 w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="text-center">
                    <Image
                      src="/newimg/Humidity%20Indicators.jpg"
                      alt="Moisture/ Humidity Indicators"
                      fill
                      className="object-cover rounded-lg mx-auto"
                    />
                    <div className="text-sm font-semibold text-gray-800 mt-2">Moisture/ Humidity</div>
                    <div className="text-xs text-gray-600">Indicators</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 lg:order-2 order-1">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 rounded-full text-sm font-medium mb-6">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                  Moisture/ Humidity Solutions
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Moisture/ Humidity Indicators</h2>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our most reliable moisture/ humidity detection solution</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Comprehensive moisture monitoring:</h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Our moisture/ humidity indicators detect Humidity Levels, Temperature Variations, Dew Point, and Relative Humidity - 
                    ensuring optimal storage conditions for pharmaceutical, food, and packaging industries.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Empowers you to protect your products:</h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Like having a quality control specialist for your storage environment - providing continuous monitoring 
                    and early warning alerts for moisture-sensitive products.
            </p>
          </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">A team of specialists on your side:</h4>
                  <p className="text-sm md:text-base text-gray-600">
                    IndieCaters' moisture monitoring experts bring decades of experience in environmental monitoring, 
                    helping you maintain perfect storage conditions year-round.
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => window.location.href = '/products/moisture'}
                className="bg-[#ce7c8a] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-[#b85c6d] transition-all duration-200 shadow-lg text-sm md:text-base"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Temperature Indicators Section - Photo Right */}
      <section id="temperature-indicators" className="bg-gradient-to-br from-gray-50 to-blue-50 py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ce7c8a]/5 to-[#ce7c8a]/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 rounded-full text-sm font-medium mb-6">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                  Temperature Solutions
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Temperature Indicators</h2>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our most precise temperature monitoring solution</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Advanced temperature monitoring:</h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Our temperature indicators monitor Heat Process Validation, Cold Chain Integrity, Freeze/Thaw Detection, 
                    and Thermal Exposure - ensuring critical process control and product safety.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Empowers you to maintain quality standards:</h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Like having a process engineer for your temperature-sensitive operations - providing real-time validation 
                    and compliance monitoring for critical processes.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">A team of process experts on your side:</h4>
                  <p className="text-sm md:text-base text-gray-600">
                    IndieCaters' temperature monitoring specialists combine scientific expertise with practical industry knowledge, 
                    ensuring your processes meet the highest quality standards.
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => window.location.href = '/products/temperature'}
                className="bg-[#ce7c8a] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-[#b85c6d] transition-all duration-200 shadow-lg text-sm md:text-base"
              >
                Learn more
              </button>
            </div>
            
            <div className="relative">
              {/* Yellow border frame */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#ce7c8a] rounded-lg opacity-30"></div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg relative z-10 border-l-4 border-[#ce7c8a]">
                {/* Product representation */}
                <div className="aspect-square bg-gradient-to-br from-red-50 to-[#f0d4d9] rounded-lg flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="absolute top-4 left-8 w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="text-center">
                    <Image
                      src="/newimgsofar/1.jpg"
                      alt="Temperature Indicators"
                      fill
                      className="object-cover rounded-lg mx-auto"
                    />
                    <div className="text-sm font-semibold text-gray-800 mt-2">Temperature</div>
                    <div className="text-xs text-gray-600">Indicators</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white to-blue-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ce7c8a]/5 to-[#ce7c8a]/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center px-3 md:px-4 py-2 bg-[#ce7c8a] text-white rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 shadow-lg">
              <svg className="w-3 h-3 md:w-4 md:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Trusted Partners
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Trusted by Industry Leaders</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Leading companies worldwide rely on IndieCaters for their critical monitoring needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-16">
            <div className="text-center bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#f0d4d9] hover:shadow-lg transition-all duration-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ce7c8a] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">50+</div>
              <div className="text-gray-600 text-xs md:text-sm">Happy Clients</div>
            </div>
            <div className="text-center bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#f0d4d9] hover:shadow-lg transition-all duration-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ce7c8a] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">15+</div>
              <div className="text-gray-600 text-xs md:text-sm">Cities Served</div>
            </div>
            <div className="text-center bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#f0d4d9] hover:shadow-lg transition-all duration-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ce7c8a] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">50K+</div>
              <div className="text-gray-600 text-xs md:text-sm">Indicators Delivered</div>
            </div>
            <div className="text-center bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#f0d4d9] hover:shadow-lg transition-all duration-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ce7c8a] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">99.9%</div>
              <div className="text-gray-600 text-xs md:text-sm">Quality Success Rate</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center mr-3">
                <span className="text-sm font-bold">🏆</span>
              </div>
              <span className="text-gray-700 font-medium">ISO Certified Quality</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center mr-3">
                <span className="text-sm font-bold">🌍</span>
              </div>
              <span className="text-gray-700 font-medium">Global Distribution Network</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center mr-3">
                <span className="text-sm font-bold">🔬</span>
              </div>
              <span className="text-gray-700 font-medium">Advanced R&D Capabilities</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center mr-3">
                <span className="text-sm font-bold">💬</span>
              </div>
              <span className="text-gray-700 font-medium">24/7 Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-white to-blue-50 py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ce7c8a]/5 to-[#ce7c8a]/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Title Section - 1/3 */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <div className="inline-flex items-center px-3 md:px-4 py-2 bg-[#ce7c8a] text-white rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 shadow-lg">
                <svg className="w-3 h-3 md:w-4 md:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                Customer Stories
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Testimonials</h2>
              <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed px-4 lg:px-0">
                Hear from our satisfied customers who trust IndieCaters for their critical monitoring needs
              </p>
              <div className="space-y-4">
                <div className="flex items-center bg-white/50 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-[#ce7c8a] rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">50+ Happy Clients</span>
                </div>
                <div className="flex items-center bg-white/50 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-[#ce7c8a] rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">4.8/5 Average Rating</span>
                </div>
                <div className="flex items-center bg-white/50 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-[#ce7c8a] rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">98% Satisfaction Rate</span>
                </div>
              </div>
            </div>

            {/* Testimonials Carousel - 2/3 */}
            <div className="lg:col-span-2 relative overflow-hidden">
              <div className="flex animate-scroll space-x-4 md:space-x-8">
                {/* First set of testimonials */}
                <div className="flex-shrink-0 w-80 md:w-96 h-72 md:h-80">
                  <div className="bg-gray-50 p-4 md:p-6 lg:p-8 rounded-lg shadow-sm h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">DJ</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Divya Jyoti Charitable Trust</h4>
                        <p className="text-sm md:text-base text-gray-600">Surat • Community Healthcare</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#ce7c8a]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic flex-1">
                      "IndieCaters' sterilisation indicators give our surgical camps instant assurance. The visual change is easy for our volunteers to interpret, so every instrument tray meets safety protocols even in remote outreach clinics."
                    </blockquote>
                  </div>
                </div>

                <div className="flex-shrink-0 w-80 md:w-96 h-72 md:h-80">
                  <div className="bg-gray-50 p-4 md:p-6 lg:p-8 rounded-lg shadow-sm h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">ZE</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Zamindar Eye Hospital</h4>
                        <p className="text-sm md:text-base text-gray-600">Bengaluru • Ophthalmic Care</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#ce7c8a]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic flex-1">
                      "Switching to IndieCaters helped us document every sterilisation cycle for NABH compliance. Their indicators perform reliably even during hectic OT schedules, so our infection-control team can focus on patient care."
                    </blockquote>
                  </div>
                </div>

                <div className="flex-shrink-0 w-80 md:w-96 h-72 md:h-80">
                  <div className="bg-gray-50 p-4 md:p-6 lg:p-8 rounded-lg shadow-sm h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">SE</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Shriram Eye Hospital</h4>
                        <p className="text-sm md:text-base text-gray-600">National Network • Ophthalmology</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#ce7c8a]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic flex-1">
                      "We run multi-location eye camps, and IndieCaters' sterilisation indicators travel with every kit. The Class 5/6 performance keeps our surgeons confident that delicate ophthalmic tools are safe to use anywhere."
                    </blockquote>
                  </div>
                </div>

                <div className="flex-shrink-0 w-80 md:w-96 h-72 md:h-80">
                  <div className="bg-gray-50 p-4 md:p-6 lg:p-8 rounded-lg shadow-sm h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#ce7c8a] rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">ME</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Magnewin Energy Pvt Ltd</h4>
                        <p className="text-sm md:text-base text-gray-600">Sangli • Battery Manufacturing</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#ce7c8a]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic flex-1">
                      "Temperature swings ruin entire battery batches. IndieCaters' temperature indicators log every heat exposure during curing and shipping, giving us traceability and saving hours of troubleshooting."
                    </blockquote>
                  </div>
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex-shrink-0 w-80 md:w-96 h-72 md:h-80">
                  <div className="bg-gray-50 p-4 md:p-6 lg:p-8 rounded-lg shadow-sm h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">DJ</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Divya Jyoti Charitable Trust</h4>
                        <p className="text-sm md:text-base text-gray-600">Surat • Community Healthcare</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#ce7c8a]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic flex-1">
                      "IndieCaters' sterilisation indicators give our surgical camps instant assurance. The visual change is easy for our volunteers to interpret, so every instrument tray meets safety protocols even in remote outreach clinics."
                    </blockquote>
                  </div>
                </div>

                <div className="flex-shrink-0 w-80 md:w-96 h-72 md:h-80">
                  <div className="bg-gray-50 p-4 md:p-6 lg:p-8 rounded-lg shadow-sm h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">ZE</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Zamindar Eye Hospital</h4>
                        <p className="text-sm md:text-base text-gray-600">Bengaluru • Ophthalmic Care</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#ce7c8a]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic flex-1">
                      "Switching to IndieCaters helped us document every sterilisation cycle for NABH compliance. Their indicators perform reliably even during hectic OT schedules, so our infection-control team can focus on patient care."
                    </blockquote>
                  </div>
                </div>

                <div className="flex-shrink-0 w-80 md:w-96 h-72 md:h-80">
                  <div className="bg-gray-50 p-4 md:p-6 lg:p-8 rounded-lg shadow-sm h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">SE</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Shriram Eye Hospital</h4>
                        <p className="text-sm md:text-base text-gray-600">National Network • Ophthalmology</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#ce7c8a]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic flex-1">
                      "We run multi-location eye camps, and IndieCaters' sterilisation indicators travel with every kit. The Class 5/6 performance keeps our surgeons confident that delicate ophthalmic tools are safe to use anywhere."
                    </blockquote>
                  </div>
                </div>

                <div className="flex-shrink-0 w-80 md:w-96 h-72 md:h-80">
                  <div className="bg-gray-50 p-4 md:p-6 lg:p-8 rounded-lg shadow-sm h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#ce7c8a] rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">ME</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Magnewin Energy Pvt Ltd</h4>
                        <p className="text-sm md:text-base text-gray-600">Sangli • Battery Manufacturing</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#ce7c8a]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic flex-1">
                      "Temperature swings ruin entire battery batches. IndieCaters' temperature indicators log every heat exposure during curing and shipping, giving us traceability and saving hours of troubleshooting."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Contact Us</h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce7c8a]"
                  placeholder="Your name"
                />
                {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce7c8a]"
                  placeholder="your.email@example.com"
                />
                {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce7c8a]"
                  placeholder="Your message"
                />
                {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#ce7c8a] text-white py-3 rounded-lg font-semibold hover:bg-[#b85c6d] transition-all duration-200 shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      )}

      <CalendlyWidget />
    </div>
  );
}
