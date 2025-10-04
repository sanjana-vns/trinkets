'use client'

import { useState, useEffect, useRef } from 'react'

// Ultra-Creative Values Section
const AboutValues = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) observer.observe(sectionRef.current)
    
    return () => observer.disconnect()
  }, [])

  const values = [
    {
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, continuously improving our methods and outcomes.",
      icon: "⭐",
      gradient: "from-orange-500 to-red-500",
      bgPattern: "dots"
    },
    {
      title: "Innovation", 
      description: "We embrace new technologies and methodologies to stay ahead in the rapidly evolving engineering landscape.",
      icon: "💡",
      gradient: "from-amber-500 to-orange-500",
      bgPattern: "waves"
    },
    {
      title: "Integrity",
      description: "We maintain honesty and transparency in all our interactions, building trust with students and industry partners.",
      icon: "🤝",
      gradient: "from-yellow-500 to-amber-500",
      bgPattern: "grid"
    },
    {
      title: "Student-Centric",
      description: "Every decision we make is guided by what's best for our students' learning and career development.",
      icon: "🎓",
      gradient: "from-orange-500 to-amber-500",
      bgPattern: "circuit"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50 overflow-hidden"
    >
      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 leading-tight mb-8">
            Our Core Values
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The principles that guide our every action and decision
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredValue(index)}
              onMouseLeave={() => setHoveredValue(null)}
            >
              <div className={`relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-4xl transition-all duration-700 overflow-hidden border-2 border-orange-200/50 hover:border-orange-300 transform ${hoveredValue === index ? 'scale-105 z-10' : ''}`}>
                
                {/* Card Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Top Accent */}
                <div className={`h-2 bg-gradient-to-r ${value.gradient}`}></div>
                
                {/* Card Content */}
                <div className="relative p-8 text-center">
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center shadow-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <span className="text-4xl">{value.icon}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutValues