'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Cache busting key to force re-render
  const cacheKey = `hero-v2-${Date.now()}`

  const slides = [
    {
      title: "Transform Your Engineering Career",
      subtitle: "Join India's leading engineering training institute with 98% placement success rate",
      bgColor: "from-slate-900/80 via-blue-900/80 to-indigo-900/80",
      accentColor: "from-cyan-400 to-blue-500",
      image: "/images/bg1.jpg",
      icon: "🚀"
    },
    {
      title: "Master Industry-Leading Technologies",
      subtitle: "Learn AutoCAD, SolidWorks, PDMS, STAAD Pro with real-world projects and expert mentorship",
      bgColor: "from-gray-900/80 via-purple-900/80 to-violet-900/80",
      accentColor: "from-purple-400 to-pink-500",
      image: "/images/bg2.jpg",
      icon: "⚙️"
    },
    {
      title: "Build Your Professional Portfolio",
      subtitle: "Work on live industry projects and build an impressive portfolio that gets you hired",
      bgColor: "from-slate-900/80 via-green-900/80 to-emerald-900/80",
      accentColor: "from-emerald-400 to-teal-500",
      image: "/images/bg3.jpg",
      icon: "💼"
    },
    {
      title: "Guaranteed Career Success",
      subtitle: "100% placement assistance with top companies. Start your dream career today",
      bgColor: "from-gray-900/80 via-orange-900/80 to-red-900/80",
      accentColor: "from-orange-400 to-red-500",
      image: "/images/bg4.jpg",
      icon: "🎯"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section key={cacheKey} className="relative min-h-screen overflow-hidden">
      {/* Background Images with Overlay */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${slide.image}')`
            }}
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor} transition-all duration-1000`} />
        </div>
      ))}

      {/* Animated Elements Overlay */}
      <div className="absolute inset-0">
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white/10 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-white/10 rotate-45 animate-pulse" />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/5 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-20 right-40 w-24 h-24 border border-white/10 rotate-12 animate-spin" style={{ animationDuration: '15s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="text-left">
              {/* Badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
                <span className="text-2xl mr-2">{slides[currentSlide].icon}</span>
                <span className="text-white font-semibold">India&apos;s #1 Engineering Institute</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white block">
                  {slides[currentSlide].title.split(' ').slice(0, 2).join(' ')}
                </span>
                <span className={`bg-gradient-to-r ${slides[currentSlide].accentColor} bg-clip-text text-transparent block`}>
                  {slides[currentSlide].title.split(' ').slice(2).join(' ')}
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                {slides[currentSlide].subtitle}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center lg:text-left">
                  <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${slides[currentSlide].accentColor} bg-clip-text text-transparent`}>
                    5000+
                  </div>
                  <div className="text-gray-300 text-sm">Students Trained</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${slides[currentSlide].accentColor} bg-clip-text text-transparent`}>
                    98%
                  </div>
                  <div className="text-gray-300 text-sm">Placement Rate</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${slides[currentSlide].accentColor} bg-clip-text text-transparent`}>
                    500+
                  </div>
                  <div className="text-gray-300 text-sm">Company Partners</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className={`group bg-gradient-to-r ${slides[currentSlide].accentColor} text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3`}
                >
                  Start Your Journey
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/courses"
                  className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Explore Courses
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </Link>
              </div>
              
              {/* Quick Links */}
              <div className="flex flex-wrap gap-6">
                <Link href="/placements" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full group-hover:scale-125 transition-transform"></span>
                  Placement Success
                </Link>
                <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full group-hover:scale-125 transition-transform"></span>
                  Student Stories
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full group-hover:scale-125 transition-transform"></span>
                  About Institute
                </Link>
              </div>
            </div>
            
            {/* Right Column - Interactive Elements */}
            <div className="relative">
              {/* Course Selection Card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${slides[currentSlide].accentColor} rounded-xl flex items-center justify-center`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Choose Your Path</h3>
                    <p className="text-gray-300 text-sm">Start your engineering journey today</p>
                  </div>
                </div>
                
                {/* Popular Courses */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <Link href="/courses/piping-design-engineering" className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-3 transition-all duration-200">
                    <div className="text-2xl mb-1">🔧</div>
                    <div className="text-white font-medium text-sm group-hover:text-cyan-300 transition-colors">Piping Design</div>
                    <div className="text-gray-400 text-xs">6 Months</div>
                  </Link>
                  <Link href="/courses/hvac-system-design" className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-3 transition-all duration-200">
                    <div className="text-2xl mb-1">❄️</div>
                    <div className="text-white font-medium text-sm group-hover:text-cyan-300 transition-colors">HVAC Systems</div>
                    <div className="text-gray-400 text-xs">4 Months</div>
                  </Link>
                  <Link href="/courses/solidworks-professional" className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-3 transition-all duration-200">
                    <div className="text-2xl mb-1">🎨</div>
                    <div className="text-white font-medium text-sm group-hover:text-cyan-300 transition-colors">SolidWorks</div>
                    <div className="text-gray-400 text-xs">4 Months</div>
                  </Link>
                  <Link href="/courses/structural-design-analysis" className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-3 transition-all duration-200">
                    <div className="text-2xl mb-1">🏗️</div>
                    <div className="text-white font-medium text-sm group-hover:text-cyan-300 transition-colors">Structural</div>
                    <div className="text-gray-400 text-xs">6 Months</div>
                  </Link>
                </div>
                
                {/* Expert Guidance CTA */}
                <div className="space-y-4">
                  <div className="text-center mb-4">
                    <h4 className="text-white font-semibold text-lg mb-2">Need Expert Guidance?</h4>
                    <p className="text-gray-300 text-sm">Get personalized counseling from our industry experts</p>
                  </div>
                  <Link 
                    href="/contact"
                    className={`w-full bg-gradient-to-r ${slides[currentSlide].accentColor} text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 text-lg`}
                  >
                    Get Free Counseling
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <div className="text-center">
                    <p className="text-gray-400 text-xs">✓ Free Career Consultation ✓ Course Recommendations ✓ Placement Guidance</p>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <Link href="/courses" className="text-gray-300 hover:text-white text-sm underline-offset-4 hover:underline transition-colors">
                    View All Courses →
                  </Link>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce" style={{ animationDuration: '2s' }} />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-200 group"
      >
        <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-200 group"
      >
        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero