'use client'

import { useState, useEffect } from 'react'

// Ultra-Creative Corporate Clients Component
const CorporateClients = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [hoveredClient, setHoveredClient] = useState<number | null>(null)

  const clients = [
    {
      id: 1,
      name: "TechCorp Solutions",
      logo: "🏢",
      industry: "Software Development",
      employees: "5000+",
      gradient: "from-blue-600 to-cyan-600",
      description: "Leading software development company"
    },
    {
      id: 2,
      name: "InnovateTech",
      logo: "🚀",
      industry: "Fintech",
      employees: "2500+",
      gradient: "from-purple-600 to-pink-600",
      description: "Revolutionary fintech solutions"
    },
    {
      id: 3,
      name: "DataSoft Analytics",
      logo: "📊",
      industry: "Data Analytics",
      employees: "3200+",
      gradient: "from-green-600 to-teal-600",
      description: "Advanced data analytics platform"
    },
    {
      id: 4,
      name: "CloudSys",
      logo: "☁️",
      industry: "Cloud Services",
      employees: "1800+",
      gradient: "from-cyan-600 to-blue-600",
      description: "Enterprise cloud solutions"
    },
    {
      id: 5,
      name: "SecureNet",
      logo: "🔒",
      industry: "Cybersecurity",
      employees: "1200+",
      gradient: "from-red-600 to-orange-600",
      description: "Cybersecurity and risk management"
    },
    {
      id: 6,
      name: "RetailPro",
      logo: "🛍️",
      industry: "E-commerce",
      employees: "6500+",
      gradient: "from-orange-600 to-yellow-600",
      description: "Global e-commerce platform"
    },
    {
      id: 7,
      name: "HealthTech",
      logo: "🏥",
      industry: "Healthcare",
      employees: "4100+",
      gradient: "from-emerald-600 to-green-600",
      description: "Healthcare technology solutions"
    },
    {
      id: 8,
      name: "EduSoft",
      logo: "🎓",
      industry: "EdTech",
      employees: "2800+",
      gradient: "from-indigo-600 to-purple-600",
      description: "Educational technology platform"
    }
  ]

  const testimonials = [
    {
      id: 1,
      client: "TechCorp Solutions",
      contact: "Sarah Johnson",
      role: "CTO",
      logo: "🏢",
      program: "Full Stack Development",
      participants: 85,
      duration: "3 months",
      testimonial: "Trinkets Institute transformed our development team's capabilities. The customized curriculum perfectly aligned with our tech stack, and the hands-on approach resulted in immediate productivity gains. Our team now delivers features 40% faster.",
      results: [
        "40% increase in development speed",
        "85 developers trained successfully", 
        "100% completion rate",
        "ROI achieved within 6 months"
      ],
      gradient: "from-blue-600 to-cyan-600",
      rating: 5
    },
    {
      id: 2,
      client: "DataSoft Analytics",
      contact: "Michael Chen",
      role: "Head of Data Science",
      logo: "📊",
      program: "Advanced Data Science & ML",
      participants: 45,
      duration: "4 months",
      testimonial: "The comprehensive data science program exceeded our expectations. Our analysts can now build and deploy machine learning models independently, dramatically improving our client deliverables and business insights.",
      results: [
        "60% improvement in model accuracy",
        "45 data scientists upskilled",
        "50% reduction in project timelines",
        "3x increase in client satisfaction"
      ],
      gradient: "from-green-600 to-teal-600",
      rating: 5
    },
    {
      id: 3,
      client: "CloudSys",
      contact: "Jennifer Martinez",
      role: "VP of Engineering",
      logo: "☁️",
      program: "AWS Cloud Architecture & DevOps",
      participants: 60,
      duration: "2 months",
      testimonial: "Outstanding training program that equipped our team with cutting-edge cloud skills. The practical approach and real-world scenarios helped us migrate our entire infrastructure to AWS with zero downtime.",
      results: [
        "100% successful cloud migration",
        "60 engineers certified",
        "30% reduction in infrastructure costs",
        "99.9% uptime achieved"
      ],
      gradient: "from-cyan-600 to-blue-600",
      rating: 5
    },
    {
      id: 4,
      client: "SecureNet",
      contact: "David Wilson",
      role: "Chief Security Officer",
      logo: "🔒",
      program: "Enterprise Cybersecurity",
      participants: 35,
      duration: "6 weeks",
      testimonial: "The cybersecurity training was exactly what our team needed. Comprehensive coverage of modern threats and hands-on penetration testing exercises. Our security posture has significantly improved.",
      results: [
        "90% reduction in security incidents",
        "35 security professionals trained",
        "100% compliance achievement",
        "Enhanced threat detection by 75%"
      ],
      gradient: "from-red-600 to-orange-600",
      rating: 5
    }
  ]

  const successMetrics = [
    { metric: "Client Retention Rate", value: "98%", icon: "🎯" },
    { metric: "Training Completion", value: "96%", icon: "✅" },
    { metric: "ROI Within 6 Months", value: "250%", icon: "📈" },
    { metric: "Employee Satisfaction", value: "4.9/5", icon: "⭐" }
  ]

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isPlaying, testimonials.length])

  const currentTestimonial = testimonials[activeTestimonial]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-morph"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full blur-3xl animate-morph-reverse"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 120 }).map((_, i) => (
              <div
                key={i}
                className="border border-white/10 animate-pulse"
                style={{ animationDelay: `${i * 0.05}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join hundreds of successful organizations that have transformed their workforce 
            with our expert-led corporate training programs.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Our Corporate Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {clients.map((client, index) => (
              <div
                key={client.id}
                className="group relative"
                onMouseEnter={() => setHoveredClient(client.id)}
                onMouseLeave={() => setHoveredClient(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`relative p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2`}>
                  {/* Client Logo */}
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${client.gradient} rounded-2xl flex items-center justify-center mx-auto mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                      <span className="text-2xl">{client.logo}</span>
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">{client.name}</h4>
                    <p className="text-gray-400 text-xs">{client.industry}</p>
                    <p className="text-gray-300 text-xs">{client.employees}</p>
                  </div>

                  {/* Hover Info */}
                  {hoveredClient === client.id && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full bg-white text-gray-800 p-3 rounded-lg shadow-xl z-20 min-w-max">
                      <div className="text-center">
                        <div className="font-semibold text-sm">{client.name}</div>
                        <div className="text-xs text-gray-600">{client.description}</div>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                    </div>
                  )}

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {successMetrics.map((metric, index) => (
            <div
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
                <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {metric.icon}
                </div>
                <div className="text-3xl font-black text-white mb-2">{metric.value}</div>
                <div className="text-gray-300 font-semibold text-sm">{metric.metric}</div>
                
                {/* Animated Background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className={`relative p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden`}>
              {/* Background Gradient */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${currentTestimonial.gradient}`}></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${currentTestimonial.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300`}>
                    {currentTestimonial.logo}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{currentTestimonial.client}</h3>
                    <p className="text-lg text-blue-300 font-semibold mb-1">{currentTestimonial.contact}</p>
                    <p className="text-gray-300 mb-2">{currentTestimonial.role}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">⭐</span>
                      ))}
                    </div>
                  </div>

                  <div className="text-right text-white">
                    <div className="text-sm text-gray-300 mb-1">Training Program</div>
                    <div className="font-semibold">{currentTestimonial.program}</div>
                    <div className="text-sm text-gray-300 mt-2">{currentTestimonial.participants} participants</div>
                    <div className="text-sm text-gray-300">{currentTestimonial.duration}</div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-200 text-lg leading-relaxed mb-6 italic">
                  &ldquo;{currentTestimonial.testimonial}&rdquo;
                </blockquote>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {currentTestimonial.results.map((result, index) => (
                    <div key={index} className="p-4 bg-white/10 rounded-xl border border-white/20">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-200 text-sm font-medium">{result}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1500"></div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="group p-3 bg-white/20 backdrop-blur-lg rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6 text-white group-hover:text-blue-300 transform group-hover:-translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Play/Pause */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`group p-3 rounded-full border transition-all duration-300 transform hover:scale-110 ${
                  isPlaying ? 'bg-white/20 border-white/30 text-white' : 'bg-blue-600 border-blue-600 text-white'
                }`}
              >
                {isPlaying ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>

              <button
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="group p-3 bg-white/20 backdrop-blur-lg rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6 text-white group-hover:text-blue-300 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index
                      ? `bg-gradient-to-r ${currentTestimonial.gradient} scale-125`
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25">
              <span className="relative z-10 flex items-center gap-2">
                Join Our Success Stories
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CorporateClients