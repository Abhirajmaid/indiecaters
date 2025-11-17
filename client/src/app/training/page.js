"use client";

import { useState } from "react";

export default function TrainingPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const categories = [
    { id: 'all', name: 'All Training', icon: '📚' },
    { id: 'sterilization', name: 'Sterilization', icon: '🧪' },
    { id: 'quality', name: 'Quality Control', icon: '🏆' },
    { id: 'regulatory', name: 'Regulatory', icon: '📋' },
    { id: 'technical', name: 'Technical', icon: '🔧' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Fundamentals of Sterilization Indicators',
      category: 'sterilization',
      duration: '2 hours',
      level: 'Beginner',
      format: 'Online',
      description: 'Comprehensive introduction to sterilization indicators, their types, and applications in healthcare settings.',
      objectives: [
        'Understand different types of sterilization indicators',
        'Learn proper placement and usage techniques',
        'Recognize indicator responses and interpretation',
        'Apply best practices for sterilization validation'
      ],
      topics: [
        'Introduction to sterilization indicators',
        'Class 5 and Class 6 indicators',
        'Chemical vs biological indicators',
        'Proper placement techniques',
        'Response interpretation',
        'Quality assurance protocols'
      ],
      prerequisites: 'Basic knowledge of sterilization processes',
      certification: 'Certificate of Completion',
      instructor: 'Dr. Rajesh Kumar',
      image: '🧪',
      featured: true
    },
    {
      id: 2,
      title: 'ISO 11140 Standards Compliance',
      category: 'regulatory',
      duration: '4 hours',
      level: 'Intermediate',
      format: 'Online',
      description: 'Deep dive into ISO 11140 standards for chemical indicators and their implementation in quality systems.',
      objectives: [
        'Master ISO 11140 requirements',
        'Implement compliance protocols',
        'Understand audit preparation',
        'Develop quality documentation'
      ],
      topics: [
        'ISO 11140 overview and structure',
        'Classification of indicators',
        'Performance requirements',
        'Testing and validation methods',
        'Documentation requirements',
        'Audit preparation and compliance'
      ],
      prerequisites: 'Quality management experience',
      certification: 'ISO Compliance Certificate',
      instructor: 'Priya Sharma',
      image: '📋',
      featured: false
    },
    {
      id: 3,
      title: 'Advanced Temperature Monitoring',
      category: 'technical',
      duration: '3 hours',
      level: 'Advanced',
      format: 'On-site',
      description: 'Advanced techniques for temperature monitoring in critical applications including cold chain management.',
      objectives: [
        'Master advanced temperature monitoring',
        'Implement cold chain protocols',
        'Troubleshoot monitoring issues',
        'Optimize monitoring systems'
      ],
      topics: [
        'Temperature monitoring principles',
        'Cold chain management',
        'Advanced indicator technologies',
        'System optimization',
        'Troubleshooting techniques',
        'Performance validation'
      ],
      prerequisites: 'Basic temperature monitoring knowledge',
      certification: 'Advanced Monitoring Certificate',
      instructor: 'Amit Patel',
      image: '🌡️',
      featured: false
    },
    {
      id: 4,
      title: 'Quality Control Best Practices',
      category: 'quality',
      duration: '2.5 hours',
      level: 'Intermediate',
      format: 'Online',
      description: 'Comprehensive training on quality control procedures and best practices for industrial monitoring.',
      objectives: [
        'Implement quality control procedures',
        'Establish monitoring protocols',
        'Develop corrective action plans',
        'Maintain quality documentation'
      ],
      topics: [
        'Quality control principles',
        'Monitoring protocol development',
        'Data analysis and interpretation',
        'Corrective action procedures',
        'Documentation and record keeping',
        'Continuous improvement processes'
      ],
      prerequisites: 'Quality assurance background',
      certification: 'Quality Control Certificate',
      instructor: 'Sunita Reddy',
      image: '🏆',
      featured: false
    },
    {
      id: 5,
      title: 'Humidity Control in Industrial Applications',
      category: 'technical',
      duration: '2 hours',
      level: 'Intermediate',
      format: 'Online',
      description: 'Specialized training on humidity monitoring and control in pharmaceutical and food industry applications.',
      objectives: [
        'Understand humidity control principles',
        'Implement monitoring systems',
        'Interpret humidity data',
        'Maintain optimal conditions'
      ],
      topics: [
        'Humidity measurement principles',
        'Industrial applications',
        'Monitoring system setup',
        'Data interpretation',
        'Control system maintenance',
        'Regulatory compliance'
      ],
      prerequisites: 'Basic industrial experience',
      certification: 'Humidity Control Certificate',
      instructor: 'Dr. Archana Mehta',
      image: '💧',
      featured: false
    },
    {
      id: 6,
      title: 'Regulatory Compliance for Medical Devices',
      category: 'regulatory',
      duration: '5 hours',
      level: 'Advanced',
      format: 'On-site',
      description: 'Comprehensive training on regulatory requirements for medical device manufacturing and quality systems.',
      objectives: [
        'Master regulatory requirements',
        'Implement compliance systems',
        'Prepare for regulatory audits',
        'Maintain ongoing compliance'
      ],
      topics: [
        'FDA 21 CFR Part 820',
        'ISO 13485:2016 requirements',
        'CE marking and EU regulations',
        'Quality system documentation',
        'Risk management processes',
        'Audit preparation and response'
      ],
      prerequisites: 'Medical device experience',
      certification: 'Regulatory Compliance Certificate',
      instructor: 'Vikram Singh',
      image: '🏥',
      featured: false
    }
  ];

  const webinars = [
    {
      id: 1,
      title: 'Industry Trends in Sterilization Technology',
      date: '2024-02-15',
      time: '2:00 PM IST',
      duration: '1 hour',
      speaker: 'Dr. Rajesh Kumar',
      description: 'Explore the latest trends and innovations in sterilization technology and their impact on industrial applications.',
      image: '📊'
    },
    {
      id: 2,
      title: 'Quality Assurance in Pharmaceutical Manufacturing',
      date: '2024-02-22',
      time: '3:00 PM IST',
      duration: '1.5 hours',
      speaker: 'Priya Sharma',
      description: 'Best practices for implementing quality assurance systems in pharmaceutical manufacturing environments.',
      image: '💊'
    },
    {
      id: 3,
      title: 'Cold Chain Management Best Practices',
      date: '2024-03-01',
      time: '2:30 PM IST',
      duration: '1 hour',
      speaker: 'Amit Patel',
      description: 'Essential strategies for maintaining product integrity through effective cold chain management.',
      image: '❄️'
    }
  ];

  const resources = [
    {
      title: 'Training Manual - Sterilization Indicators',
      type: 'PDF',
      size: '5.2 MB',
      description: 'Comprehensive manual covering all aspects of sterilization indicator usage and maintenance.',
      downloadUrl: '#'
    },
    {
      title: 'Video Tutorials - Installation Guide',
      type: 'Video Series',
      size: '2.1 GB',
      description: 'Step-by-step video tutorials for proper installation of all indicator types.',
      downloadUrl: '#'
    },
    {
      title: 'Quick Reference Cards',
      type: 'PDF',
      size: '1.8 MB',
      description: 'Handy reference cards for quick lookup of specifications and procedures.',
      downloadUrl: '#'
    },
    {
      title: 'Assessment Quizzes',
      type: 'Interactive',
      size: 'Online',
      description: 'Self-assessment quizzes to test your knowledge and track progress.',
      downloadUrl: '#'
    }
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  const featuredCourse = courses.find(course => course.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Training & <span className="bg-yellow-400 px-2">Education</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your expertise with comprehensive training programs designed 
              for professionals in industrial monitoring and quality assurance.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Course */}
      {featuredCourse && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Course</h2>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center p-8">
                  <div className="text-8xl">{featuredCourse.image}</div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === featuredCourse.category)?.name}
                    </span>
                    <span className="mx-3 text-gray-400">•</span>
                    <span className="text-gray-600 font-medium">{featuredCourse.level}</span>
                    <span className="mx-3 text-gray-400">•</span>
                    <span className="text-gray-600 font-medium">{featuredCourse.format}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{featuredCourse.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredCourse.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Duration:</h4>
                      <p className="text-gray-600">{featuredCourse.duration}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Instructor:</h4>
                      <p className="text-gray-600">{featuredCourse.instructor}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Learning Objectives:</h4>
                    <ul className="space-y-1">
                      {featuredCourse.objectives.map((objective, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <button className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                      Enroll Now
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Course Categories */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full border transition-colors ${
                  activeCategory === category.id
                    ? 'bg-yellow-400 text-gray-800 border-yellow-400'
                    : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Training Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Training Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional development programs for industrial monitoring expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.filter(course => !course.featured).map((course) => (
              <div key={course.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center">
                  <div className="text-4xl">{course.image}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      {categories.find(cat => cat.id === course.category)?.name}
                    </span>
                    <span className="text-gray-600 text-sm">{course.level}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{course.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="text-gray-800 font-medium">{course.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Format:</span>
                      <span className="text-gray-800 font-medium">{course.format}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Instructor:</span>
                      <span className="text-gray-800 font-medium">{course.instructor}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Topics:</h4>
                    <div className="flex flex-wrap gap-1">
                      {course.topics.slice(0, 3).map((topic, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {topic}
                        </span>
                      ))}
                      {course.topics.length > 3 && (
                        <span className="text-gray-500 text-xs">+{course.topics.length - 3} more</span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-yellow-400 text-gray-800 py-2 px-4 rounded-lg font-semibold text-sm hover:bg-yellow-500 transition-colors">
                      Enroll
                    </button>
                    <button 
                      onClick={() => setSelectedCourse(selectedCourse === course.id ? null : course.id)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Upcoming Webinars</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our expert-led webinars on the latest industry topics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {webinars.map((webinar) => (
              <div key={webinar.id} className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">{webinar.image}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{webinar.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{webinar.description}</p>
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="text-gray-800 font-medium">{webinar.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="text-gray-800 font-medium">{webinar.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="text-gray-800 font-medium">{webinar.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Speaker:</span>
                    <span className="text-gray-800 font-medium">{webinar.speaker}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:bg-blue-600 transition-colors">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Training Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download comprehensive training materials and resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-2xl">📄</div>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{resource.size}</span>
                  <button className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-yellow-500 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Program */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Professional Certification Program</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Earn industry-recognized certifications that validate your expertise 
              in industrial monitoring and quality assurance.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Basic Certification</h3>
                <p className="text-sm text-gray-600">Fundamental knowledge and skills</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Advanced Certification</h3>
                <p className="text-sm text-gray-600">Specialized expertise and applications</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Expert Certification</h3>
                <p className="text-sm text-gray-600">Master-level knowledge and leadership</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                View Certification Program
              </button>
              <a href="/contact" className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors">
                Contact Training Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Training Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Training Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering professionals worldwide with industry expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">2,500+</div>
              <div className="text-gray-600">Professionals Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">50+</div>
              <div className="text-gray-600">Training Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">15+</div>
              <div className="text-gray-600">Cities Served</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


