'use client'

import { useState, useEffect, useRef } from 'react'

// Ultra-Creative Achievements Section
const AboutAchievements = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) observer.observe(sectionRef.current)
    
    return () => observer.disconnect()
  }, [])

  const achievements = [
    {
      title: "15+ Years of Excellence",
      description: "Consistently delivering quality education and producing industry-ready professionals",
      icon: "🏆",
      number: "15+",
      label: "Years",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "5000+ Successful Graduates",
      description: "Alumni working in top companies across the globe",
      icon: "🎓",
      number: "5000+",
      label: "Graduates",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "95% Placement Rate",
      description: "Outstanding track record in student placement and career success",
      icon: "📈",
      number: "95%",
      label: "Placement",
      gradient: "from-sky-500 to-indigo-500"
    },
    {
      title: "50+ Industry Partners",
      description: "Strong network with leading companies for internships and placements",
      icon: "🤝",
      number: "50+",
      label: "Partners",
      gradient: "from-blue-500 to-sky-500"
    },
    {
      title: "25+ Awards Won",
      description: "Recognition for excellence in technical education and innovation",
      icon: "🏅",
      number: "25+",
      label: "Awards",
      gradient: "from-indigo-500 to-sky-500"
    },
    {
      title: "100+ Expert Faculty",
      description: "Experienced professionals and academics guiding student success",
      icon: "👨‍🏫",
      number: "100+",
      label: "Faculty",
      gradient: "from-sky-500 to-blue-500"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>
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
                <span className="text-2xl">🎯</span>
                Our Achievements
                <span className="text-2xl">🏆</span>
              </span>
            </div>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 leading-tight mb-8">
            Milestones & Recognition
          </h2>
          
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A testament to our commitment to excellence and the success of our students
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredAchievement(index)}
              onMouseLeave={() => setHoveredAchievement(null)}
            >
              <div className={`relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-4xl transition-all duration-700 overflow-hidden border-2 border-orange-200/50 hover:border-orange-300 transform ${hoveredAchievement === index ? 'scale-105 z-10' : ''}`}>
                
                {/* Card Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Top Accent */}
                <div className={`h-3 bg-gradient-to-r ${achievement.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-shimmer"></div>
                </div>
                
                {/* Card Content */}
                <div className="relative p-8 text-center">
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${achievement.gradient} rounded-3xl flex items-center justify-center shadow-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <span className="text-4xl">{achievement.icon}</span>
                  </div>
                  
                  {/* Number Display */}
                  <div className="mb-4">
                    <div className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${achievement.gradient} mb-2`}>
                      {achievement.number}
                    </div>
                    <div className="text-lg font-semibold text-gray-600 uppercase tracking-wide">
                      {achievement.label}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Sparkle Effects */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards Showcase */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Awards & Recognition 🏆
            </h3>
            <p className="text-xl text-gray-600">
              Honored by industry leaders and educational bodies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Best Technical Institute 2023", org: "Engineering Council" },
              { name: "Excellence in Education", org: "Industry Association" },
              { name: "Innovation Award 2022", org: "Tech Leaders Forum" },
              { name: "Student Success Recognition", org: "Education Board" }
            ].map((award, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center shadow-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-3xl">🏆</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{award.name}</h4>
                <p className="text-sm text-gray-600">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutAchievements