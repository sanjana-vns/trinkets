'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Best Piping Course In Mumbai",
      subtitle: "Master Piping Design with PDMS, SP3D, E3D & CAESAR II. Join Mumbai's leading piping training institute with 98% placement success rate",
      bgColor: "from-slate-900/80 via-blue-900/80 to-indigo-900/80",
      accentColor: "from-cyan-400 to-blue-500",
      image: "/images/bg1.jpg",
      icon: "🏭"
    },
    {
      title: "Advanced Piping Design Training",
      subtitle: "Learn comprehensive piping course in Mumbai with AutoCAD Plant 3D, PDMS, SP3D, STAAD Pro with real-world piping projects and expert mentorship",
      bgColor: "from-gray-900/80 via-purple-900/80 to-violet-900/80",
      accentColor: "from-purple-400 to-pink-500",
      image: "/images/bg2.jpg",
      icon: "⚙️"
    },
    {
      title: "Professional Piping Engineering Career",
      subtitle: "Build your piping engineering career with live industry piping projects and professional portfolio through our comprehensive piping course in Mumbai",
      bgColor: "from-slate-900/80 via-green-900/80 to-emerald-900/80",
      accentColor: "from-emerald-400 to-teal-500",
      image: "/images/bg3.jpg",
      icon: "💼"
    },
    {
      title: "Guaranteed Piping Job Placement",
      subtitle: "100% placement assistance in piping engineering roles with top oil & gas, petrochemical companies. Start your piping career today",
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
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Images with Overlay */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            quality={85}
            sizes="100vw"
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor} transition-all duration-1000`} />
        </div>
      ))}

      {/* Animated Elements Overlay */}
      <div className="absolute inset-0">
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
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
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
                <span className="text-2xl mr-2" role="img" aria-label="factory">{slides[currentSlide].icon}</span>
                <span className="text-white font-semibold">Mumbai's #1 Piping Course Institute</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white block">
                  {slides[currentSlide].title.split(' ').slice(0, 3).join(' ')}
                </span>
                <span className={`bg-gradient-to-r ${slides[currentSlide].accentColor} bg-clip-text text-transparent block`}>
                  {slides[currentSlide].title.split(' ').slice(3).join(' ')}
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                {slides[currentSlide].subtitle}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center lg:text-left">
                  <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${slides[currentSlide].accentColor} bg-clip-text text-transparent`}>
                    5000+
                  </div>
                  <div className="text-gray-300 text-sm">Students</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${slides[currentSlide].accentColor} bg-clip-text text-transparent`}>
                    98%
                  </div>
                  <div className="text-gray-300 text-sm">Placement</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${slides[currentSlide].accentColor} bg-clip-text text-transparent`}>
                    500+
                  </div>
                  <div className="text-gray-300 text-sm">Partners</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className={`bg-gradient-to-r ${slides[currentSlide].accentColor} text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2`}
                >
                  Start Your Journey
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/courses"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Explore Courses
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Right Column - Interactive Course Showcase */}
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
                  <Link href="/courses/piping-design-course-mumbai" className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-3 transition-all duration-200">
                    <div className="text-2xl mb-1">🔧</div>
                    <div className="text-white font-medium text-sm group-hover:text-cyan-300 transition-colors">Piping Course Mumbai</div>
                    <div className="text-gray-400 text-xs">Best in Mumbai</div>
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
                
                {/* Quick Actions */}
                <div className="space-y-3">
                  <a 
                    href="https://wa.me/919820924788?text=Hi!%20I'm%20interested%20in%20engineering%20courses%20at%20Trinkets%20Institute%20Mumbai.%20I%20would%20like%20to%20get%20free%20counseling%20about%20course%20details,%20fees,%20and%20admission%20process."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full bg-gradient-to-r ${slides[currentSlide].accentColor} text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Get Free Counselling
                  </a>
                  <div className="text-center">
                    <p className="text-gray-400 text-xs mb-2">✓ Free Career Consultation ✓ Course Recommendations ✓ Placement Guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
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

      {/* Enhanced Slide Indicators */}
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
              aria-label={`Go to slide ${index + 1}`}
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