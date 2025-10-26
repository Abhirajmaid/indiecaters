"use client";

import { useState } from "react";

export default function LeadershipPage() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  const leadership = [
    {
      id: 1,
      name: "Archana Gore",
      title: "Founder & CEO",
      image: "/images/founder.avif",
      bio: "A postgraduate in Physics with extensive industry experience, Archana founded Prime Enterprises and later IndieCaters Pvt Ltd. She is the only woman manufacturer in India specializing in industrial indicators.",
      achievements: [
        "Only woman manufacturer in India in this field",
        "Postgraduate in Physics with 15+ years experience",
        "Completed government skiing training programme",
        "Industry pioneer and thought leader"
      ],
      expertise: ["Physics", "Manufacturing", "Quality Control", "Business Strategy"],
      education: "Postgraduate in Physics",
      experience: "15+ years in industrial manufacturing"
    }
  ];

  const managementTeam = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Chief Technology Officer",
      department: "Research & Development",
      bio: "Leading our R&D initiatives with 12+ years in chemical engineering and process optimization.",
      image: "👨‍🔬"
    },
    {
      name: "Priya Sharma",
      title: "Head of Quality Assurance",
      department: "Quality Management",
      bio: "Ensuring world-class quality standards with expertise in ISO certifications and regulatory compliance.",
      image: "👩‍💼"
    },
    {
      name: "Amit Patel",
      title: "Director of Operations",
      department: "Manufacturing",
      bio: "Overseeing production excellence and supply chain optimization across our manufacturing facilities.",
      image: "👨‍💼"
    },
    {
      name: "Sunita Reddy",
      title: "Head of Sales & Marketing",
      department: "Business Development",
      bio: "Driving global market expansion and customer relationships across multiple continents.",
      image: "👩‍💼"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Our <span className="bg-yellow-400 px-2">Leadership</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries and experts driving IndieCaters' success 
              in industrial monitoring solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Founder & CEO</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The visionary leader who started it all
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <img 
                src={leadership[0].image} 
                alt={leadership[0].name}
                className="w-80 h-80 object-cover rounded-lg mx-auto shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{leadership[0].name}</h3>
              <p className="text-xl text-yellow-600 font-semibold mb-6">{leadership[0].title}</p>
              <p className="text-lg text-gray-600 mb-6">{leadership[0].bio}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {leadership[0].achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {leadership[0].expertise.map((skill, index) => (
                    <span key={index} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm font-semibold text-gray-600 mb-1">Education</div>
                  <div className="text-gray-800">{leadership[0].education}</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm font-semibold text-gray-600 mb-1">Experience</div>
                  <div className="text-gray-800">{leadership[0].experience}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Management Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals leading our key departments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementTeam.map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-yellow-600 font-semibold mb-2">{member.title}</p>
                <p className="text-sm text-gray-600 mb-3">{member.department}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Leadership Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our leadership approach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg text-center shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Visionary Leadership</h3>
              <p className="text-gray-600">
                Setting clear direction and inspiring teams to achieve 
                ambitious goals while maintaining focus on long-term success.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center shadow-sm">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Collaborative Approach</h3>
              <p className="text-gray-600">
                Fostering teamwork and open communication across all 
                departments to drive innovation and operational excellence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center shadow-sm">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Continuous Growth</h3>
              <p className="text-gray-600">
                Committed to personal and professional development, 
                embracing change and learning to stay ahead of industry trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building an environment where excellence thrives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What Drives Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Innovation First</h4>
                    <p className="text-gray-600">Continuously pushing boundaries in industrial monitoring technology</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Quality Excellence</h4>
                    <p className="text-gray-600">Maintaining the highest standards in every product we deliver</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Customer Success</h4>
                    <p className="text-gray-600">Partnering with clients to achieve their operational goals</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Sustainable Growth</h4>
                    <p className="text-gray-600">Building a business that creates long-term value for all stakeholders</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Commitment</h3>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Employee Development</h4>
                  <p className="text-gray-600">Investing in continuous learning and career advancement opportunities</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Diversity & Inclusion</h4>
                  <p className="text-gray-600">Creating an inclusive environment where everyone can thrive</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Community Impact</h4>
                  <p className="text-gray-600">Contributing to the communities where we operate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Join Our Leadership Journey</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Interested in becoming part of our leadership team? 
            Explore career opportunities with IndieCaters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/careers" className="bg-yellow-400 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors">
              View Careers →
            </a>
            <a href="/contact" className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 hover:text-white transition-colors">
              Contact Us →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


