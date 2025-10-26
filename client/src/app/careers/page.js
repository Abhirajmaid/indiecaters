"use client";

import { useState } from "react";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: '',
    coverLetter: ''
  });

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Quality Engineer",
      department: "Quality Assurance",
      location: "Pune, India",
      type: "Full-time",
      experience: "5-8 years",
      description: "Lead quality assurance initiatives and ensure compliance with international standards.",
      requirements: [
        "Bachelor's degree in Engineering or related field",
        "5+ years experience in quality management",
        "ISO certification knowledge",
        "Strong analytical and problem-solving skills"
      ],
      responsibilities: [
        "Develop and implement quality control procedures",
        "Conduct quality audits and inspections",
        "Ensure regulatory compliance",
        "Lead quality improvement initiatives"
      ]
    },
    {
      id: 2,
      title: "Production Manager",
      department: "Manufacturing",
      location: "Pune, India",
      type: "Full-time",
      experience: "8-12 years",
      description: "Oversee production operations and ensure efficient manufacturing processes.",
      requirements: [
        "Bachelor's degree in Industrial Engineering or related field",
        "8+ years experience in manufacturing management",
        "Lean manufacturing knowledge",
        "Strong leadership and communication skills"
      ],
      responsibilities: [
        "Manage production schedules and workflows",
        "Optimize manufacturing processes",
        "Lead production teams",
        "Ensure quality and efficiency standards"
      ]
    },
    {
      id: 3,
      title: "Research & Development Scientist",
      department: "R&D",
      location: "Pune, India",
      type: "Full-time",
      experience: "3-6 years",
      description: "Develop innovative industrial indicator solutions and improve existing products.",
      requirements: [
        "Master's degree in Chemistry or Chemical Engineering",
        "3+ years experience in product development",
        "Knowledge of chemical indicators",
        "Strong research and analytical skills"
      ],
      responsibilities: [
        "Research and develop new products",
        "Improve existing indicator formulations",
        "Conduct laboratory testing",
        "Collaborate with cross-functional teams"
      ]
    },
    {
      id: 4,
      title: "Sales Manager - International",
      department: "Sales & Marketing",
      location: "Pune, India",
      type: "Full-time",
      experience: "6-10 years",
      description: "Drive international sales growth and manage global distributor relationships.",
      requirements: [
        "Bachelor's degree in Business or related field",
        "6+ years experience in international sales",
        "Experience in industrial products",
        "Excellent communication and negotiation skills"
      ],
      responsibilities: [
        "Develop international market strategies",
        "Manage distributor relationships",
        "Achieve sales targets",
        "Conduct market research and analysis"
      ]
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Compensation",
      description: "Attractive salary packages with performance bonuses"
    },
    {
      icon: "🏥",
      title: "Health Insurance",
      description: "Comprehensive medical coverage for employees and families"
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Continuous training and professional development opportunities"
    },
    {
      icon: "🏖️",
      title: "Work-Life Balance",
      description: "Flexible working hours and generous leave policies"
    },
    {
      icon: "🚀",
      title: "Career Growth",
      description: "Clear career progression paths and advancement opportunities"
    },
    {
      icon: "🎉",
      title: "Team Building",
      description: "Regular team events and company outings"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Application submitted successfully! We will get back to you soon.');
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      resume: '',
      coverLetter: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Join Our <span className="bg-yellow-400 px-2">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build your career with India's leading industrial indicators manufacturer. 
              Be part of our mission to revolutionize industrial monitoring solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose IndieCaters?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes us a great place to work and grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Culture</h2>
              <p className="text-lg text-gray-600 mb-6">
                At IndieCaters, we believe in creating an environment where innovation thrives, 
                collaboration flourishes, and every team member can reach their full potential.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Innovation First</h4>
                    <p className="text-gray-600">We encourage creative thinking and embrace new ideas</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Collaborative Environment</h4>
                    <p className="text-gray-600">Teamwork and open communication are at our core</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Growth Mindset</h4>
                    <p className="text-gray-600">Continuous learning and development opportunities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Work-Life Balance</h4>
                    <p className="text-gray-600">Supporting our employees' personal and professional well-being</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Employee Testimonials</h3>
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-gray-600 mb-3">"Working at IndieCaters has been a transformative experience. The company truly values innovation and provides excellent growth opportunities."</p>
                  <p className="text-sm font-semibold text-gray-800">- Priya Sharma, Quality Manager</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-gray-600 mb-3">"The collaborative culture and commitment to excellence make IndieCaters an amazing place to build a career."</p>
                  <p className="text-sm font-semibold text-gray-800">- Amit Patel, Production Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities with IndieCaters
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>📍 {job.location}</span>
                      <span>🏢 {job.department}</span>
                      <span>⏰ {job.type}</span>
                      <span>💼 {job.experience}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                    className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                  >
                    {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                  </button>
                </div>
                
                <p className="text-gray-600 mb-4">{job.description}</p>
                
                {selectedJob === job.id && (
                  <div className="border-t border-gray-200 pt-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 mt-2"></div>
                              <span className="text-gray-600 text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 mt-2"></div>
                              <span className="text-gray-600 text-sm">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <button
                        onClick={() => setApplicationForm(prev => ({ ...prev, position: job.title }))}
                        className="bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Apply Now</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to join our team? Submit your application below.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={applicationForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={applicationForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={applicationForm.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    Position Applied For *
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={applicationForm.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Select a position</option>
                    {jobOpenings.map((job) => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={applicationForm.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                  Resume/CV *
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  rows={4}
                  value={applicationForm.coverLetter}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Tell us why you're interested in joining IndieCaters..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-800 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Questions About Careers?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get in touch with our HR team for more information about career opportunities.
          </p>
          <a href="/contact" className="bg-yellow-400 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors">
            Contact HR Team →
          </a>
        </div>
      </section>
    </div>
  );
}


