'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Ultra-Creative About Hero Section
const AboutHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section 
      className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50 overflow-hidden flex items-center"
      style={{
        backgroundImage: `
          radial-gradient(circle at ${mousePosition.x * 0.1}px ${mousePosition.y * 0.1}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at ${mousePosition.x * 0.08}px ${mousePosition.y * 0.08}px, rgba(99, 102, 241, 0.1) 0%, transparent 50%)
        `
      }}
    >
      {/* Ultra Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Morphing Background Shapes */}
        <div 
          className="absolute w-[120vh] h-[120vh] opacity-20"
          style={{
            background: `conic-gradient(from ${mousePosition.x * 0.2}deg at 50% 50%, 
                        #3b82f6, #6366f1, #0ea5e9, #3b82f6)`,
            borderRadius: '40% 60% 50% 50% / 60% 40% 50% 60%',
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px) rotate(${scrollY * 0.1}deg)`,
            left: '-30%',
            top: '-30%',
            filter: 'blur(80px)',
            animation: 'morph-hero 20s ease-in-out infinite'
          }}
        />
        
        <div 
          className="absolute w-[100vh] h-[100vh] opacity-25"
          style={{
            background: `radial-gradient(circle at 30% 30%, #6366f1, #3b82f6, transparent)`,
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px) rotate(${-scrollY * 0.15}deg)`,
            right: '-20%',
            bottom: '-20%',
            filter: 'blur(60px)',
            animation: 'morph-reverse 25s ease-in-out infinite'
          }}
        />

        {/* Floating Elements */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              width: `${Math.random() * 30 + 15}px`,
              height: `${Math.random() * 30 + 15}px`,
              background: `linear-gradient(135deg, #3b82f6, #6366f1, #0ea5e9)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate(${mousePosition.x * (Math.random() * 0.02)}px, ${mousePosition.y * (Math.random() * 0.02)}px)`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-left order-2 lg:order-1">
            {/* Floating Badge */}
            <div className="relative inline-block mb-6 lg:mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-xl opacity-75 animate-pulse-slow"></div>
              <div className="relative bg-white/90 backdrop-blur-md border-2 lg:border-4 border-blue-300/50 rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 shadow-2xl">
                <span className="text-blue-600 font-black uppercase tracking-wide sm:tracking-widest text-sm sm:text-base lg:text-lg flex items-center gap-2 lg:gap-3">
                  <span className="text-lg sm:text-xl lg:text-2xl">🏢</span>
                  <span className="hidden sm:inline">About Trinkets Institute</span>
                  <span className="sm:hidden">About Us</span>
                  <span className="text-lg sm:text-xl lg:text-2xl">✨</span>
                </span>
              </div>
            </div>

            {/* Revolutionary Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-500 leading-tight mb-6 lg:mb-8">
              Turning Students into
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 lg:mt-4 animate-bounce-gentle">
                Industry Professionals
              </span>
            </h1>

            {/* Enhanced Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 lg:mb-12 font-medium">
              For over <span className="text-blue-600 font-bold">15 years</span>, we&apos;ve been at the forefront of 
              <span className="text-indigo-600 font-bold"> engineering education</span>, transforming ambitious students 
              into skilled professionals ready to tackle real-world challenges.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 lg:mb-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-blue-600 mb-1 lg:mb-2">15+</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-semibold">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-indigo-600 mb-1 lg:mb-2">5000+</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-semibold">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-sky-600 mb-1 lg:mb-2">95%</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-semibold">Placement Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-6 lg:mb-8">
              <a
                href="#story"
                className="group px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-xl lg:rounded-2xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-500 hover:shadow-2xl hover:scale-105 text-center overflow-hidden transform-gpu"
              >
                <span className="relative flex items-center justify-center gap-2 lg:gap-3 text-base sm:text-lg lg:text-xl">
                  <span className="text-lg sm:text-xl lg:text-2xl">📖</span>
                  Our Story
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
              </a>
              
              <a
                href="/contact"
                className="group px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white border-2 lg:border-4 border-blue-300 text-blue-600 font-bold rounded-xl lg:rounded-2xl hover:bg-blue-50 hover:border-blue-400 transition-all duration-500 hover:shadow-2xl hover:scale-105 text-center"
              >
                <span className="flex items-center justify-center gap-2 lg:gap-3 text-base sm:text-lg lg:text-xl">
                  <span className="text-lg sm:text-xl lg:text-2xl">💬</span>
                  Get in Touch
                </span>
              </a>
            </div>

            {/* Additional Navigation Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 text-sm sm:text-base">
              <a href="/courses" className="text-blue-600 hover:text-blue-800 transition-colors underline-offset-4 hover:underline font-medium">
                🎓 Explore Courses
              </a>
              <a href="/placements" className="text-indigo-600 hover:text-indigo-800 transition-colors underline-offset-4 hover:underline font-medium">
                🚀 Placement Success
              </a>
              <a href="/services" className="text-sky-600 hover:text-sky-800 transition-colors underline-offset-4 hover:underline font-medium">
                ⚙️ Our Services
              </a>
              <a href="/testimonials" className="text-purple-600 hover:text-purple-800 transition-colors underline-offset-4 hover:underline font-medium">
                ⭐ Student Reviews
              </a>
            </div>
          </div>

          {/* Right Visual Content */}
          <div className="relative order-1 lg:order-2">
            {/* Main Image Container */}
            <div className="relative group">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl lg:rounded-3xl blur-xl lg:blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse-slow"></div>
              
              {/* Image Frame */}
              <div className="relative bg-white rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden border-2 lg:border-4 border-blue-200/50 transform group-hover:scale-105 transition-all duration-700">
                <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-blue-100 to-indigo-100 p-6 sm:p-8 lg:p-12">
                  {/* About Institute Image */}
                  <div className="w-full h-48 sm:h-64 lg:h-96 rounded-xl lg:rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/about.jpg"
                      alt="Trinkets Institute - Excellence in Engineering Education"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      priority
                      quality={95}
                    />
                  </div>
                </div>
              </div>

              {/* Floating Achievement Badges */}
              <div className="absolute -top-3 sm:-top-4 lg:-top-6 -right-3 sm:-right-4 lg:-right-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl lg:rounded-2xl px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 shadow-2xl animate-bounce-gentle">
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold">🏆</div>
                  <div className="text-xs sm:text-sm font-semibold">Award Winning</div>
                </div>
              </div>

              <div className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 -left-3 sm:-left-4 lg:-left-6 bg-gradient-to-r from-indigo-500 to-sky-500 text-white rounded-xl lg:rounded-2xl px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 shadow-2xl animate-bounce-gentle" style={{animationDelay: '0.5s'}}>
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold">⭐</div>
                  <div className="text-xs sm:text-sm font-semibold">Industry Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero