'use client'

import { useState, useEffect, useRef } from 'react'

// Revolutionary Team Section
const AboutTeam = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) observer.observe(sectionRef.current)
    
    return () => observer.disconnect()
  }, [])

  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Founder & Director",
      specialization: "Mechanical Engineering",
      experience: "20+ Years",
      description: "Visionary leader with extensive industry experience in designing complex mechanical systems for Fortune 500 companies.",
      avatar: "👨‍🏫",
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Prof. Priya Sharma", 
      position: "Head of Academics",
      specialization: "Electrical Engineering",
      experience: "15+ Years",
      description: "Expert in electrical design and automation with a passion for innovative teaching methodologies.",
      avatar: "👩‍🏫",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      name: "Er. Amit Patel",
      position: "Industry Relations Head",
      specialization: "Structural Engineering",
      experience: "18+ Years",
      description: "Bridge between academia and industry, ensuring our curriculum meets current market demands.",
      avatar: "👨‍💼",
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      name: "Dr. Sneha Gupta",
      position: "Research & Development",
      specialization: "HVAC & MEP",
      experience: "12+ Years",
      description: "Leading researcher in sustainable engineering solutions and green building technologies.",
      avatar: "👩‍🔬",
      gradient: "from-orange-500 to-amber-500"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>
      </div>

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full blur-xl opacity-75 animate-pulse-slow"></div>
            <div className="relative bg-white/90 backdrop-blur-md border-4 border-orange-300/50 rounded-full px-12 py-6 shadow-2xl">
              <span className="text-orange-600 font-black uppercase tracking-widest text-xl flex items-center gap-3">
                <span className="text-2xl">👥</span>
                Meet Our Team
                <span className="text-2xl">🌟</span>
              </span>
            </div>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 leading-tight mb-8">
            Expert Faculty & Leadership
          </h2>
          
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Meet the passionate educators and industry experts who make our institution a center of excellence
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className={`relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-4xl transition-all duration-700 overflow-hidden border-2 border-orange-200/50 hover:border-orange-300 transform ${hoveredMember === index ? 'scale-105 z-10' : ''}`}>
                
                {/* Card Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Top Accent */}
                <div className={`h-3 bg-gradient-to-r ${member.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer"></div>
                </div>
                
                {/* Card Content */}
                <div className="relative p-8 text-center">
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className={`w-24 h-24 bg-gradient-to-r ${member.gradient} rounded-3xl flex items-center justify-center shadow-xl mx-auto group-hover:scale-110 transition-transform duration-500`}>
                      <span className="text-5xl">{member.avatar}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Name & Position */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <p className="text-orange-600 font-semibold mb-4">
                    {member.position}
                  </p>

                  {/* Specialization & Experience */}
                  <div className="space-y-2 mb-4">
                    <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      {member.specialization}
                    </div>
                    <div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                      {member.experience}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur-xl opacity-50 animate-pulse-slow"></div>
            <div className="relative bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl shadow-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Want to Learn from Industry Experts? 🎓
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Our experienced faculty is ready to guide you to success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-orange-600 font-bold rounded-2xl hover:bg-orange-50 transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Meet Our Faculty →
                </a>
                <a
                  href="/courses"
                  className="px-8 py-4 bg-orange-600 text-white font-bold rounded-2xl hover:bg-orange-700 transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 border-orange-400"
                >
                  Explore Courses 📚
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutTeam