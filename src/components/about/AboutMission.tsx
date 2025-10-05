'use client'

import { useState, useEffect, useRef } from 'react'

// Ultra-Creative Mission, Vision, Values Section
const AboutMission = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('mission')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) observer.observe(sectionRef.current)
    
    return () => observer.disconnect()
  }, [])

  const tabs = [
    {
      id: 'mission',
      label: 'Our Mission',
      icon: '🎯',
      gradient: 'from-blue-500 to-indigo-500',
      content: {
        title: 'Empowering Future Engineers',
        description: 'To bridge the gap between academic learning and industry requirements by providing practical, hands-on training that transforms students into skilled professionals ready to excel in their engineering careers.',
        points: [
          'Deliver industry-relevant education with practical applications',
          'Foster innovation and critical thinking in engineering solutions',
          'Provide personalized mentorship and career guidance',
          'Maintain strong partnerships with leading industry players'
        ]
      }
    },
    {
      id: 'vision',
      label: 'Our Vision',
      icon: '🔮',
      gradient: 'from-indigo-500 to-blue-500',
      content: {
        title: 'Leading Engineering Education',
        description: 'To be the premier institution for engineering education globally, recognized for producing industry-ready professionals who drive innovation and contribute meaningfully to technological advancement.',
        points: [
          'Global recognition as a center of engineering excellence',
          'Pioneer in innovative teaching methodologies',
          'Hub for industry-academia collaboration',
          'Catalyst for technological advancement and innovation'
        ]
      }
    },
    {
      id: 'values',
      label: 'Our Values',
      icon: '💎',
      gradient: 'from-sky-500 to-indigo-500',
      content: {
        title: 'Core Principles We Live By',
        description: 'Our values form the foundation of everything we do, guiding our interactions with students, industry partners, and the broader community.',
        points: [
          'Excellence in education and continuous improvement',
          'Integrity and transparency in all our dealings',
          'Innovation and adaptability to changing industry needs',
          'Commitment to student success and professional growth'
        ]
      }
    }
  ]

  const activeContent = tabs.find(tab => tab.id === activeTab)

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
      </div>

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="relative inline-block mb-6 lg:mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-xl opacity-75 animate-pulse-slow"></div>
            <div className="relative bg-white/90 backdrop-blur-md border-2 lg:border-4 border-blue-300/50 rounded-full px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 shadow-2xl">
              <span className="text-blue-600 font-black uppercase tracking-wide sm:tracking-widest text-sm sm:text-base lg:text-xl flex items-center gap-2 lg:gap-3">
                <span className="text-lg sm:text-xl lg:text-2xl">🌟</span>
                What Drives Us
                <span className="text-lg sm:text-xl lg:text-2xl">💫</span>
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-500 leading-tight mb-6 lg:mb-8">
            Mission, Vision & Values
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 lg:mb-16">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl lg:rounded-3xl p-2 sm:p-3 lg:p-4 shadow-2xl border-2 border-blue-200/50 w-full max-w-4xl">
            <div className="flex flex-col sm:flex-row gap-2 lg:gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-500 transform hover:scale-105 flex-1 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.gradient} text-white shadow-2xl scale-105`
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {activeTab === tab.id && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${tab.gradient} rounded-xl lg:rounded-2xl blur-lg opacity-50 animate-pulse-slow`}></div>
                  )}
                  <span className="relative flex items-center justify-center sm:justify-start gap-2 lg:gap-3">
                    <span className="text-lg sm:text-xl lg:text-2xl">{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.label.split(' ')[1]}</span>
                  </span>
                  {activeTab === tab.id && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-sky-400 rounded-full animate-ping"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        {activeContent && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl lg:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border-2 border-blue-200/50">
                {/* Header */}
                <div className="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-8">
                  <div className={`w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-r ${activeContent.gradient} rounded-xl lg:rounded-2xl flex items-center justify-center shadow-xl`}>
                    <span className="text-xl sm:text-2xl lg:text-3xl">{activeContent.icon}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {activeContent.content.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 lg:mb-8">
                  {activeContent.content.description}
                </p>

                {/* Points */}
                <div className="space-y-3 lg:space-y-4">
                  {activeContent.content.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-3 lg:gap-4">
                      <div className={`w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 bg-gradient-to-r ${activeContent.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                        <span className="text-white font-bold text-xs sm:text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative order-1 lg:order-2">
              <div className="relative group">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${activeContent.gradient} rounded-2xl lg:rounded-3xl blur-xl lg:blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow`}></div>
                
                {/* Visual Container */}
                <div className="relative bg-white rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden border-2 lg:border-4 border-blue-200/50 transform group-hover:scale-105 transition-all duration-700">
                  <div className={`h-64 sm:h-80 lg:h-96 bg-gradient-to-br ${activeContent.gradient} p-6 sm:p-8 lg:p-12 flex items-center justify-center relative overflow-hidden`}>
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute bg-white rounded-full"
                          style={{
                            width: `${Math.random() * 20 + 5}px`,
                            height: `${Math.random() * 20 + 5}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                          }}
                        />
                      ))}
                    </div>

                    {/* Central Icon */}
                    <div className="text-center text-white relative z-10">
                      <div className="text-4xl sm:text-6xl lg:text-8xl mb-2 sm:mb-3 lg:mb-4 animate-bounce-gentle">
                        {activeContent.icon}
                      </div>
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 lg:mb-2">
                        {activeContent.content.title}
                      </h4>
                      <div className="w-16 sm:w-20 lg:w-24 h-0.5 lg:h-1 bg-white rounded-full mx-auto opacity-75"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Quote */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="relative max-w-4xl mx-auto">
            <div className="text-4xl sm:text-5xl lg:text-6xl text-blue-200 opacity-50 mb-3 lg:mb-4">&ldquo;</div>
            <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-700 leading-relaxed mb-6 lg:mb-8">
              &ldquo;Education is the most powerful weapon which you can use to change the world. 
              At Trinkets Institute, we&apos;re not just teaching; we&apos;re 
              <span className="text-blue-600 font-bold"> transforming futures</span>.&rdquo;
            </blockquote>
            <div className="text-lg sm:text-xl text-gray-600">
              — Trinkets Institute Foundation
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMission