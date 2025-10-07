'use client'

import { useState, useEffect } from 'react'

// Ultra-Creative Corporate Training Hero Section
const CorporateHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentClient, setCurrentClient] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  const trustedClients = [
    { name: "TechCorp", logo: "🏢", employees: "5000+" },
    { name: "InnovateTech", logo: "🚀", employees: "2500+" },
    { name: "DataSoft", logo: "📊", employees: "3200+" },
    { name: "CloudSys", logo: "☁️", employees: "1800+" },
    { name: "FinanceHub", logo: "💼", employees: "4100+" },
    { name: "RetailPro", logo: "🛍️", employees: "6500+" }
  ]

  const stats = [
    { number: "200+", label: "Corporate Clients", icon: "🏆" },
    { number: "50K+", label: "Employees Trained", icon: "👥" },
    { number: "98%", label: "Client Satisfaction", icon: "⭐" },
    { number: "15+", label: "Years Experience", icon: "📈" }
  ]

  const keyBenefits = [
    {
      title: "Custom Curriculum",
      description: "Tailored training programs aligned with your business goals",
      icon: "🎯",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Flexible Scheduling",
      description: "On-site, online, or hybrid delivery options to fit your needs",
      icon: "⏰",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Expert Trainers",
      description: "Industry veterans with real-world corporate experience",
      icon: "👨‍🏫",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Measurable ROI",
      description: "Track progress with detailed analytics and performance metrics",
      icon: "📊",
      gradient: "from-blue-500 to-indigo-500"
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

    // Auto-rotate client logos
    const interval = setInterval(() => {
      setCurrentClient((prev) => (prev + 1) % trustedClients.length)
    }, 3000)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      clearInterval(interval)
    }
  }, [trustedClients.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Dynamic Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        >
          <div className="absolute inset-0 bg-grid-pattern animate-pulse"></div>
        </div>

        {/* Floating Corporate Icons */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-blue-400/30 font-bold text-lg animate-float-delayed"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.7}s`,
                transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
              }}
            >
              {['📈', '💼', '🏢', '🚀', '⚡', '🎯', '💡', '🔧'][i % 8]}
            </div>
          ))}
        </div>

        {/* Morphing Background Shapes */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full animate-morph blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full animate-morph-reverse blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-full animate-morph-hero blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-none text-white">
              Corporate Training
              <span className="block text-3xl md:text-4xl font-bold text-gray-300 mt-2">
                Empower Your Workforce
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your team with cutting-edge technology training. Customized programs 
              designed to accelerate innovation and drive business growth.
            </p>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {keyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${benefit.gradient} backdrop-blur-lg border border-white/20 shadow-2xl overflow-hidden`}>
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Benefit Icon */}
                  <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  
                  {/* Benefit Content */}
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
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
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Trusted Clients Carousel */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Trusted by Leading Organizations</h3>
            <div className="relative">
              <div className="flex justify-center items-center gap-8 flex-wrap">
                {trustedClients.map((client, index) => (
                  <div
                    key={index}
                    className={`group relative p-4 rounded-xl transition-all duration-500 transform ${
                      currentClient === index 
                        ? 'scale-110 bg-white/20 border-2 border-blue-400' 
                        : 'scale-100 bg-white/10 border border-white/20 hover:scale-105'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-2">{client.logo}</div>
                      <div className="text-white font-semibold text-sm">{client.name}</div>
                      <div className="text-white/70 text-xs">{client.employees} employees</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Schedule Consultation
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a 
              href="/contact"
              className="group relative px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Request Custom Quote
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </span>
            </a>
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
            <span className="text-2xl">💼</span>
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/50 to-indigo-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>
      </div>
    </section>
  )
}

export default CorporateHero