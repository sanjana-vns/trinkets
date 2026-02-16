'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const PlacementSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const placements = [
    {
      company: "Tata Consulting Engineers Limited",
      designation: "Piping Design Engineer",
      package: "6 Lakhs Per Annum",
      qualification: "BE in Mechanical Engineering",
      icon: "🏭",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      company: "Black and Veatch",
      designation: "E3D Piping Designer", 
      package: "6 Lakhs Per Annum",
      qualification: "SSC",
      icon: "⚡",
      gradient: "from-green-600 to-teal-600"
    },
    {
      company: "Effwa Infra & Research LTD.",
      designation: "Piping Designer",
      package: "4 Lakhs Per Annum", 
      qualification: "SSC",
      icon: "🔧",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      company: "Tata Consulting Engineers Ltd",
      designation: "E3D Piping Design Engineer",
      package: "7.2 Lakhs Per Annum",
      qualification: "Diploma in Electronics engineering",
      icon: "🚀",
      gradient: "from-orange-600 to-red-600"
    }
  ]

  const stats = [
    { number: "80%", label: "Placed Students", icon: "🎯" },
    { number: "40+", label: "Courses", icon: "🏢" },
    { number: "20K+", label: "Trained Students", icon: "💰" },
    { number: "14+", label: "Years Experience", icon: "📞" }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('placement-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % placements.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [placements.length])

  return (
    <section id="placement-section" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-200/15 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-3 mb-6 shadow-lg backdrop-blur-sm border border-white/20">
            <span className="text-blue-600 font-semibold text-sm mr-2">🎓</span>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">Student Success Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Piping Course In Mumbai
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Placement Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our Piping Course In Mumbai students have been successfully placed in leading piping engineering companies across Mumbai and India with exceptional packages
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`group text-center transform transition-all duration-500 hover:scale-110 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Placement Carousel */}
        <div className="relative mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 overflow-hidden">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Featured Success Stories</h3>
              <p className="text-gray-600">Inspiring journeys of our alumni</p>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {placements.map((placement, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-br ${placement.gradient} p-8 rounded-2xl text-white relative overflow-hidden`}>
                      {/* Background Decoration */}
                      <div className="absolute top-4 right-4 text-6xl opacity-20">{placement.icon}</div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white/20 rounded-full"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl mr-4">
                            {placement.icon}
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold">{placement.designation}</h4>
                            <p className="text-white/90">{placement.company}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <div className="text-white/80 text-sm mb-1">Package</div>
                            <div className="text-2xl font-bold">{placement.package}</div>
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <div className="text-white/80 text-sm mb-1">Qualification</div>
                            <div className="text-lg font-semibold">{placement.qualification}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {placements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Placements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {placements.map((placement, index) => (
            <div
              key={index}
              className={`group bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform overflow-hidden relative ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Decoration */}
              <div className="absolute top-4 right-4 text-4xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                {placement.icon}
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 relative z-10">
                <div className={`bg-gradient-to-br ${placement.gradient} p-4 rounded-2xl flex-shrink-0 self-center sm:self-start group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white text-2xl">{placement.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-blue-600 transition-colors duration-300">
                    {placement.company}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-gray-500 text-sm w-24">Position:</span>
                      <span className="text-gray-700 font-medium">{placement.designation}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 text-sm w-24">Package:</span>
                      <span className="text-blue-600 font-bold">{placement.package}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 text-sm w-24">Education:</span>
                      <span className="text-gray-600 text-sm">{placement.qualification}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-4 left-4 w-12 h-12 border-2 border-blue-200/50 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 bg-purple-200/30 rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-gray-900 mb-4">
                Ready to Start Your
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Success Journey?
                </span>
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                Join thousands of successful alumni and kickstart your career with our industry-focused training programs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/placements" 
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    📊 View All Placements
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  href="/contact" 
                  className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    🚀 Start Your Journey
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlacementSection