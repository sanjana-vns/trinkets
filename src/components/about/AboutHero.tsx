'use client'

import { useState, useEffect } from 'react'

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Floating Badge */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-xl opacity-75 animate-pulse-slow"></div>
              <div className="relative bg-white/90 backdrop-blur-md border-4 border-blue-300/50 rounded-full px-8 py-4 shadow-2xl">
                <span className="text-blue-600 font-black uppercase tracking-widest text-lg flex items-center gap-3">
                  <span className="text-2xl">🏢</span>
                  About Trinkets Institute
                  <span className="text-2xl">✨</span>
                </span>
              </div>
            </div>

            {/* Revolutionary Title */}
            <h1 className="text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-500 leading-tight mb-8">
              Turning Students into
              <span className="block text-5xl lg:text-7xl mt-4 animate-bounce-gentle">
                Industry Professionals
              </span>
            </h1>

            {/* Enhanced Description */}
            <p className="text-2xl text-gray-700 leading-relaxed mb-12 font-medium">
              For over <span className="text-blue-600 font-bold">15 years</span>, we&apos;ve been at the forefront of 
              <span className="text-indigo-600 font-bold"> engineering education</span>, transforming ambitious students 
              into skilled professionals ready to tackle real-world challenges.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-blue-600 mb-2">15+</div>
                <div className="text-gray-600 font-semibold">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-indigo-600 mb-2">5000+</div>
                <div className="text-gray-600 font-semibold">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-sky-600 mb-2">95%</div>
                <div className="text-gray-600 font-semibold">Placement Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#story"
                className="group px-10 py-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-2xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-500 hover:shadow-2xl hover:scale-105 text-center overflow-hidden transform-gpu"
              >
                <span className="relative flex items-center justify-center gap-3 text-xl">
                  <span className="text-2xl">📖</span>
                  Our Story
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
              </a>
              
              <a
                href="/contact"
                className="group px-10 py-5 bg-white border-4 border-blue-300 text-blue-600 font-bold rounded-2xl hover:bg-blue-50 hover:border-blue-400 transition-all duration-500 hover:shadow-2xl hover:scale-105 text-center"
              >
                <span className="flex items-center justify-center gap-3 text-xl">
                  <span className="text-2xl">💬</span>
                  Get in Touch
                </span>
              </a>
            </div>
          </div>

          {/* Right Visual Content */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative group">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse-slow"></div>
              
              {/* Image Frame */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-200/50 transform group-hover:scale-105 transition-all duration-700">
                <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-blue-100 to-indigo-100 p-12">
                  {/* Placeholder for Institute Image */}
                  <div className="w-full h-96 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">🏫</div>
                      <div className="text-2xl font-bold text-blue-700">Trinkets Institute</div>
                      <div className="text-lg text-indigo-700">Excellence in Engineering Education</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Achievement Badges */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl px-6 py-4 shadow-2xl animate-bounce-gentle">
                <div className="text-center">
                  <div className="text-2xl font-bold">🏆</div>
                  <div className="text-sm font-semibold">Award Winning</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-indigo-500 to-sky-500 text-white rounded-2xl px-6 py-4 shadow-2xl animate-bounce-gentle" style={{animationDelay: '0.5s'}}>
                <div className="text-center">
                  <div className="text-2xl font-bold">⭐</div>
                  <div className="text-sm font-semibold">Industry Certified</div>
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