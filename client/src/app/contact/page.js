"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) {
      next.name = "Name is required";
    }
    if (!formData.email.trim()) {
      next.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      next.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      next.message = "Message is required";
    }
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) {
      return;
    }
    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-pink-100 py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 to-pink-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
              Get in <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent px-2">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Questions about our sterilisation, moisture, or temperature indicators? We're here to help with expert guidance and support.
            </p>
          </div>
        </div>
      </section>

      {/* Statistical Highlights */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 pt-6 sm:pt-8 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border border-pink-200 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
            <div className="text-center bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border border-pink-200 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">2-5</div>
              <div className="text-gray-600">Days Response Time</div>
            </div>
            <div className="text-center bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border border-pink-200 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="text-center bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border border-pink-200 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-white to-blue-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 to-pink-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              Contact Information
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch with Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your industrial monitoring needs? Our experts are here to help you find the perfect solution.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 md:gap-8">
            {/* Contact Details */}
            <aside className="md:col-span-2">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 md:p-8 space-y-6 md:space-y-8 border border-pink-100 shadow-sm">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Contact Person</div>
                      <p className="text-gray-800 font-medium text-lg">Archana Gore</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Call</div>
                      <a href="tel:+919822039087" className="text-gray-800 font-medium text-lg hover:text-pink-600 transition-colors">+91 9822039087</a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Email</div>
                      <a href="mailto:archana@indiecaters.com" className="text-gray-800 font-medium text-lg hover:text-pink-600 transition-colors">archana@indiecaters.com</a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Address</div>
                      <p className="text-gray-700 leading-relaxed">
                        Indiecaters Pvt. Ltd.<br />
                        G-30,31, Ashoka Centre,<br />
                        Near bhapkar petrol pump<br />
                        Pune - Satara Road
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-pink-200">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Business Hours</div>
                      <p className="text-gray-700 font-medium">Mon–Fri, 10:00 AM – 6:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="bg-white border border-pink-100 rounded-xl shadow-sm p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
                {submitted && (
                  <div className="mb-6 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 p-4 text-green-800 border border-green-200">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Thanks! Your message has been received.
                    </div>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200" 
                      placeholder="Your name" 
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200" 
                      placeholder="you@example.com" 
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200" 
                      placeholder="How can we help?" 
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  <button 
                    type="submit" 
                    disabled={submitting} 
                    className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white py-4 rounded-lg font-semibold hover:from-pink-500 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              Find Us
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Pune, our office is easily accessible and ready to welcome you.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="h-96 w-full">
              <iframe
                src="https://maps.google.com/maps?q=G-30,31,Ashoka+Centre,Near+bhapkar+petrol+pump,Pune+Satara+Road&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Indiecaters Office Location"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-r from-pink-50 to-pink-100 border-t border-pink-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Indiecaters Pvt. Ltd.</h3>
                    <p className="text-gray-600">
                      G-30,31, Ashoka Centre, Near bhapkar petrol pump, Pune - Satara Road
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <a 
                    href="https://maps.google.com/?q=G-30,31,Ashoka+Centre,Near+bhapkar+petrol+pump,Pune+Satara+Road"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:from-pink-500 hover:to-pink-600 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Get Directions
                  </a>
                  <a 
                    href="tel:+919822039087"
                    className="border-2 border-pink-400 text-pink-600 px-4 py-2 rounded-lg font-medium hover:bg-pink-400 hover:text-white transition-all duration-200"
                  >
                    Call Now
                  </a>
                </div>
              </div>
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
            Ready to Get Started?
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Let's Discuss Your Monitoring Needs</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our team of experts is ready to help you find the perfect industrial monitoring solution. 
            Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919822039087" className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-pink-500 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl">
              Call Us Now →
            </a>
            <a href="mailto:archana@indiecaters.com" className="border-2 border-pink-400 text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-white transition-all duration-200">
              Send Email →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


