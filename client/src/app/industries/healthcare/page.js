"use client";

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Healthcare <span className="bg-yellow-400 px-2">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Ensuring patient safety through reliable sterilization validation and 
                temperature monitoring in healthcare environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-yellow-400 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors">
                  Get Healthcare Consultation →
                </a>
                <a href="/catalog" className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 hover:text-white transition-colors">
                  View Products →
                </a>
              </div>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
              <img src="/images/industries/healthcare.jpg" alt="Healthcare" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Healthcare Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive monitoring solutions for healthcare facilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Hospital Sterilization</h3>
              <p className="text-gray-600 mb-6">
                Ensure complete sterilization of surgical instruments, medical devices, 
                and equipment with our Class 5 and Class 6 steam indicators.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Operating room sterilization</li>
                <li>• Medical device processing</li>
                <li>• Surgical instrument validation</li>
                <li>• Equipment sterilization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Patient Safety</h3>
              <p className="text-gray-600 mb-6">
                Maintain the highest standards of patient safety with reliable 
                temperature monitoring and sterilization validation.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Temperature monitoring</li>
                <li>• Sterilization validation</li>
                <li>• Quality assurance</li>
                <li>• Compliance tracking</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Regulatory Compliance</h3>
              <p className="text-gray-600 mb-6">
                Meet healthcare regulations and standards with our certified 
                monitoring solutions and documentation support.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• FDA compliance</li>
                <li>• ISO standards</li>
                <li>• Healthcare regulations</li>
                <li>• Documentation support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Key Healthcare Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized indicators designed for healthcare environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Class 5 Steam Indicators</h3>
              <p className="text-sm text-gray-600">Advanced chemical indicators for comprehensive sterilization validation</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌡️</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Temperature Indicators</h3>
              <p className="text-sm text-gray-600">Precise temperature monitoring for sterilization processes</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Bowie Dick Test Strips</h3>
              <p className="text-sm text-gray-600">Air removal verification for steam sterilizers</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Medical Device Indicators</h3>
              <p className="text-sm text-gray-600">Specialized indicators for medical device sterilization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Healthcare Solutions Consultation</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let our healthcare experts help you choose the right monitoring solutions 
            for your facility. Contact us for a personalized consultation.
          </p>
          <a href="/contact" className="bg-yellow-400 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors">
            Contact Healthcare Experts →
          </a>
        </div>
      </section>
    </div>
  );
}




















