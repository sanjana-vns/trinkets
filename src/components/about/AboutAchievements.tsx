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
      className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-64 h-32 sm:h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-bounce"></div>
      </div>

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="relative inline-block mb-6 sm:mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-xl opacity-75 animate-pulse-slow"></div>
            <div className="relative bg-white/90 backdrop-blur-md border-2 sm:border-4 border-blue-300/50 rounded-full px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 shadow-xl sm:shadow-2xl">
              <span className="text-blue-600 font-black uppercase tracking-widest text-sm sm:text-lg lg:text-xl flex items-center gap-2 sm:gap-3">
                <span className="text-lg sm:text-xl lg:text-2xl">🎯</span>
                Our Achievements
                <span className="text-lg sm:text-xl lg:text-2xl">🏆</span>
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-500 leading-tight mb-4 sm:mb-6 lg:mb-8">
            Milestones & Recognition
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            A testament to our commitment to <span className="text-blue-600 font-bold">excellence</span> and the 
            <span className="text-indigo-600 font-bold"> success of our students</span>
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredAchievement(index)}
              onMouseLeave={() => setHoveredAchievement(null)}
            >
              <div className={`relative bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl sm:hover:shadow-4xl transition-all duration-700 overflow-hidden border-2 border-blue-200/50 hover:border-blue-300 transform ${hoveredAchievement === index ? 'scale-105 z-10' : ''}`}>
                
                {/* Enhanced Card Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`}></div>
                
                {/* Top Accent with Enhanced Animation */}
                <div className={`h-2 sm:h-3 bg-gradient-to-r ${achievement.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-shimmer"></div>
                </div>
                
                {/* Enhanced Card Content */}
                <div className="relative p-4 sm:p-6 lg:p-8 text-center">
                  {/* Enhanced Icon */}
                  <div className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-r ${achievement.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg sm:shadow-xl mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <span className="text-2xl sm:text-3xl lg:text-4xl">{achievement.icon}</span>
                  </div>
                  
                  {/* Enhanced Number Display */}
                  <div className="mb-3 sm:mb-4">
                    <div className={`text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${achievement.gradient} mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {achievement.number}
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg font-semibold text-gray-600 uppercase tracking-wide">
                      {achievement.label}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Enhanced Sparkle Effects */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-sky-400 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
                  </div>
                  <div className="absolute top-1/2 right-6 sm:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-1 h-1 bg-indigo-400 rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Awards Showcase */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              Awards & Recognition 🏆
            </h3>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              Honored by industry leaders and educational bodies for our 
              <span className="text-blue-600 font-bold"> commitment to excellence</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { name: "Best Technical Institute 2023", org: "Engineering Council", gradient: "from-blue-400 to-indigo-400" },
              { name: "Excellence in Education", org: "Industry Association", gradient: "from-indigo-400 to-blue-400" },
              { name: "Innovation Award 2022", org: "Tech Leaders Forum", gradient: "from-sky-400 to-indigo-400" },
              { name: "Student Success Recognition", org: "Education Board", gradient: "from-blue-400 to-sky-400" }
            ].map((award, index) => (
              <div key={index} className="text-center group">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${award.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg sm:shadow-xl mx-auto mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <span className="text-2xl sm:text-2xl lg:text-3xl">🏆</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300 text-sm sm:text-base">{award.name}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutAchievements