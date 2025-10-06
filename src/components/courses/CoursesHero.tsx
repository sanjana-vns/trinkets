'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Ultra-Creative Courses Hero Section
const CoursesHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeCategory, setActiveCategory] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  const courseCategories = [
    {
      title: "Piping Engineering",
      subtitle: "Master Industrial Piping Design",
      courses: 8,
      icon: "🔧",
      gradient: "from-blue-600 via-purple-600 to-blue-800",
      link: "/courses/piping-design-engineering"
    },
    {
      title: "MEP Engineering", 
      subtitle: "Mechanical, Electrical & Plumbing",
      courses: 6,
      icon: "⚡",
      gradient: "from-green-600 via-teal-600 to-green-800",
      link: "/courses/mep-engineering"
    },
    {
      title: "Structural Engineering",
      subtitle: "Build Strong Foundations",
      courses: 5,
      icon: "🏗️",
      gradient: "from-orange-600 via-red-600 to-orange-800",
      link: "/courses/structural-design-analysis"
    },
    {
      title: "HVAC Design",
      subtitle: "Climate Control Solutions",
      courses: 4,
      icon: "❄️",
      gradient: "from-red-600 via-pink-600 to-red-800",
      link: "/courses/hvac-system-design"
    }
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    // Auto-rotate categories
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % courseCategories.length)
    }, 4000)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      clearInterval(interval)
    }
  }, [courseCategories.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Dynamic Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        >
          <div className="absolute inset-0 bg-grid-pattern animate-pulse"></div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-blue-400/20 font-mono text-sm animate-float-delayed"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
              }}
            >
              {['SP3D()', 'E3D Design', 'CAESAR II', 'STAAD Pro', 'HVAC Load', 'MEP Design', 'AutoCAD', 'Piping ISO'][i % 8]}
            </div>
          ))}
        </div>

        {/* Morphing Background Shapes */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full animate-morph-courses blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full animate-morph-reverse blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-full animate-morph blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-none text-white">
              Our Courses
              <span className="block text-3xl md:text-4xl font-bold text-gray-300 mt-2">
                Transform Your Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover comprehensive engineering training programs designed to elevate your career. 
              From piping design to structural analysis, master industry-standard tools and techniques.
            </p>
          </div>

          {/* Interactive Course Categories Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {courseCategories.map((category, index) => (
              <Link 
                key={index}
                href={category.link}
                className={`relative group cursor-pointer transform transition-all duration-500 ${
                  activeCategory === index ? 'scale-110 z-20' : 'scale-100 hover:scale-105'
                }`}
                onClick={() => setActiveCategory(index)}
              >
                <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${category.gradient} backdrop-blur-lg border border-white/20 shadow-2xl overflow-hidden`}>
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Category Icon */}
                  <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {category.icon}
                  </div>
                  
                  {/* Category Info */}
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-white/80 text-sm mb-3">{category.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/90 font-semibold">{category.courses} Courses</span>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <svg className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {activeCategory === index && (
                    <div className="absolute inset-0 border-2 border-white/40 rounded-2xl animate-pulse"></div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Dynamic Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { number: "23+", label: "Engineering Courses", icon: "�" },
              { number: "2000+", label: "Students Trained", icon: "👨‍🎓" },
              { number: "95%", label: "Placement Rate", icon: "🎯" },
              { number: "50+", label: "Industry Partners", icon: "🤝" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-black text-white mb-1">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => {
                const coursesSection = document.querySelector('[aria-label="Course categories and selection"]')
                if (coursesSection) {
                  coursesSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore All Courses
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <Link href="/contact">
              <button className="group relative px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/50 transform hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  Download Brochure
                  <svg className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Floating Action Elements */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <div className="relative group">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-2xl">
            <span className="text-2xl">🚀</span>
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full animate-ping"></div>
        </div>
      </div>
    </section>
  )
}

export default CoursesHero