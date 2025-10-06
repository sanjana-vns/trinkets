'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Ultra-Creative Services Hero Section
const ServicesHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeService, setActiveService] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  const featuredServices = [
    {
      title: "Piping Engineering",
      subtitle: "Industrial Piping Design Excellence",
      description: "SP3D, AutoCAD, CAESAR II",
      icon: "🔧",
      gradient: "from-blue-600 via-indigo-600 to-blue-800",
      projects: "200+",
      link: "/services/piping-engineering-services"
    },
    {
      title: "MEP Engineering", 
      subtitle: "Comprehensive Building Systems",
      description: "Mechanical, Electrical & Plumbing",
      icon: "⚡",
      gradient: "from-indigo-600 via-purple-600 to-indigo-800",
      projects: "150+",
      link: "/services/mep-system-design-services-mumbai"
    },
    {
      title: "HVAC Design",
      subtitle: "Climate Control Solutions",
      description: "Energy Efficient Systems",
      icon: "❄️",
      gradient: "from-purple-600 via-blue-600 to-purple-800",
      projects: "120+",
      link: "/services/hvac-system-design-services-mumbai"
    },
    {
      title: "Structural Engineering",
      subtitle: "Strong Foundation Solutions",
      description: "STAAD Pro, ETABS, SAP2000",
      icon: "🏗️",
      gradient: "from-blue-600 via-cyan-600 to-blue-800",
      projects: "180+",
      link: "/services/structural-analysis-design-services-mumbai"
    }
  ]

  const stats = [
    { number: "500+", label: "Projects Completed", icon: "🎯" },
    { number: "50+", label: "Industry Clients", icon: "🏢" },
    { number: "98%", label: "Client Satisfaction", icon: "⭐" },
    { number: "15+", label: "Years Experience", icon: "📈" }
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

    // Auto-rotate services
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % featuredServices.length)
    }, 4000)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      clearInterval(interval)
    }
  }, [featuredServices.length])

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

        {/* Engineering Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-blue-400/20 font-mono text-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
              }}
            >
              {['Engineering', 'Design', 'Analysis', 'Consulting', 'Solutions', 'Projects', 'Innovation', 'Excellence'][i % 8]}
            </div>
          ))}
        </div>

        {/* Background Shapes */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading with Gradient Effects */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-none">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Our Services
              </span>
              <span className="block text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent mt-2">
                Engineering Excellence Delivered
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Professional engineering services that power industrial growth. From concept to completion, 
              we deliver innovative solutions that exceed expectations.
            </p>
          </div>

          {/* Interactive Service Categories Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredServices.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className={`relative group cursor-pointer transform transition-all duration-500 ${
                  activeService === index ? 'scale-110 z-20' : 'scale-100 hover:scale-105'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${service.gradient} backdrop-blur-lg border border-white/20 shadow-2xl overflow-hidden`}>
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Service Icon */}
                  <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {service.icon}
                  </div>
                  
                  {/* Service Info */}
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/80 text-sm mb-3">{service.subtitle}</p>
                  <p className="text-white/70 text-xs mb-3">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/90 font-semibold">{service.projects} Projects</span>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <svg className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {activeService === index && (
                    <div className="absolute inset-0 border-2 border-white/40 rounded-2xl animate-pulse"></div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Dynamic Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
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
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25">
              <span className="relative z-10 flex items-center gap-2">
                Explore All Services
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/50 transform hover:scale-105 transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                Get Free Consultation
                <svg className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </button>
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
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center cursor-pointer transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-2xl">
            <span className="text-2xl">🔧</span>
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-ping"></div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero