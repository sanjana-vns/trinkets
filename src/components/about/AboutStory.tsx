'use client'

import { useState, useEffect, useRef } from 'react'

// Revolutionary About Story Section
const AboutStory = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) observer.observe(sectionRef.current)
    
    return () => observer.disconnect()
  }, [])

  const milestones = [
    {
      year: "2008",
      title: "Foundation",
      description: "Started with a vision to bridge the gap between academic learning and industry requirements",
      icon: "🌱",
      color: "from-blue-400 to-indigo-400"
    },
    {
      year: "2012",
      title: "First 1000 Students",
      description: "Achieved our first major milestone with 1000+ successful graduates",
      icon: "🎓",
      color: "from-indigo-400 to-blue-400"
    },
    {
      year: "2016",
      title: "Industry Recognition",
      description: "Received multiple awards for excellence in engineering education",
      icon: "🏆",
      color: "from-sky-400 to-indigo-400"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Embraced cutting-edge technology and online learning platforms",
      icon: "💻",
      color: "from-blue-400 to-indigo-400"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Extended our reach to serve students worldwide with quality education",
      icon: "🌍",
      color: "from-indigo-400 to-sky-400"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="story"
      className="relative py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-delayed"></div>
      </div>

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-xl opacity-75 animate-pulse-slow"></div>
            <div className="relative bg-white/90 backdrop-blur-md border-4 border-blue-300/50 rounded-full px-12 py-6 shadow-2xl">
              <span className="text-blue-600 font-black uppercase tracking-widest text-xl flex items-center gap-3">
                <span className="text-2xl">📖</span>
                Our Journey
                <span className="text-2xl">✨</span>
              </span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-500 leading-tight mb-8">
            Our Story of Excellence
          </h2>
          
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            From humble beginnings to becoming a leading institution in engineering education, 
            our journey has been driven by <span className="text-blue-600 font-bold">passion</span>, 
            <span className="text-indigo-600 font-bold"> dedication</span>, and an unwavering commitment to student success.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-indigo-400 to-sky-400 rounded-full"></div>
          
          {/* Timeline Items */}
          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                onMouseEnter={() => setHoveredMilestone(index)}
                onMouseLeave={() => setHoveredMilestone(null)}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${milestone.color} rounded-full border-4 border-white shadow-2xl flex items-center justify-center transform transition-all duration-500 ${hoveredMilestone === index ? 'scale-125 rotate-12' : ''}`}>
                    <span className="text-2xl">{milestone.icon}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                  <div className={`group relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-4xl transition-all duration-700 overflow-hidden border-2 border-blue-200/50 hover:border-blue-300 transform ${hoveredMilestone === index ? 'scale-105' : ''}`}>
                    
                    {/* Card Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${milestone.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>
                    
                    {/* Card Content */}
                    <div className="relative p-8">
                      {/* Year Badge */}
                      <div className={`inline-block bg-gradient-to-r ${milestone.color} text-white px-6 py-2 rounded-full font-bold text-lg mb-4 shadow-lg`}>
                        {milestone.year}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {milestone.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {milestone.description}
                      </p>

                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity duration-300">
                        <span className="text-6xl">{milestone.icon}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-50 animate-pulse-slow"></div>
            <div className="relative bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl shadow-2xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Be Part of Our Story? 🚀
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Join thousands of successful professionals who started their journey with us
              </p>
              <a
                href="/contact"
                className="inline-block px-10 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Start Your Journey Today →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutStory