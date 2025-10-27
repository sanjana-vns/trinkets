'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Best Piping Course In Mumbai",
      subtitle: "Master Piping Design with PDMS, SP3D, E3D & CAESAR II. Join Mumbai's leading piping training institute",
      bgColor: "from-slate-900/90 to-blue-900/90",
      accentColor: "from-cyan-400 to-blue-500",
      image: "/images/bg1.jpg",
      icon: "🏭"
    },
    {
      title: "Advanced Piping Design Training",
      subtitle: "Learn comprehensive piping course with AutoCAD Plant 3D, PDMS, SP3D with real-world projects",
      bgColor: "from-gray-900/90 to-purple-900/90",
      accentColor: "from-purple-400 to-pink-500",
      image: "/images/bg2.jpg",
      icon: "⚙️"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [slides.length])

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Single Background Image */}
      <div className="absolute inset-0">
        <Image
          src={currentSlideData.image}
          alt={currentSlideData.title}
          fill
          className="object-cover transition-opacity duration-1000"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.bgColor}`} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
                <span className="text-2xl mr-2" role="img" aria-label="factory">{currentSlideData.icon}</span>
                <span className="text-white font-semibold">Mumbai's #1 Piping Course Institute</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white block">
                  {currentSlideData.title.split(' ').slice(0, 3).join(' ')}
                </span>
                <span className={`bg-gradient-to-r ${currentSlideData.accentColor} bg-clip-text text-transparent block`}>
                  {currentSlideData.title.split(' ').slice(3).join(' ')}
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                {currentSlideData.subtitle}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center lg:text-left">
                  <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${currentSlideData.accentColor} bg-clip-text text-transparent`}>
                    5000+
                  </div>
                  <div className="text-gray-300 text-sm">Students</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${currentSlideData.accentColor} bg-clip-text text-transparent`}>
                    98%
                  </div>
                  <div className="text-gray-300 text-sm">Placement</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${currentSlideData.accentColor} bg-clip-text text-transparent`}>
                    500+
                  </div>
                  <div className="text-gray-300 text-sm">Partners</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className={`bg-gradient-to-r ${currentSlideData.accentColor} text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2`}
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
            
            {/* Right Column - Simple Course Card */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4">Popular Courses</h3>
                <div className="space-y-3">
                  <Link href="/courses/piping-design-course-mumbai" className="block bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-3 transition-all duration-200">
                    <div className="text-white font-medium">Piping Design Course</div>
                    <div className="text-gray-400 text-sm">6 Months • 100% Placement</div>
                  </Link>
                  <Link href="/courses/hvac-system-design" className="block bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-3 transition-all duration-200">
                    <div className="text-white font-medium">HVAC System Design</div>
                    <div className="text-gray-400 text-sm">4 Months • Industry Ready</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero