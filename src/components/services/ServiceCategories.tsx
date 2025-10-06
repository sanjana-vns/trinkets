'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Ultra-Creative Service Categories Component
const ServiceCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [visibleServices, setVisibleServices] = useState<number[]>([])

  const categories = [
    { id: 'all', name: 'All Services', icon: '🔧', count: 12 },
    { id: 'piping', name: 'Piping Engineering', icon: '⚡', count: 4 },
    { id: 'mep', name: 'MEP Engineering', icon: '🏗️', count: 3 },
    { id: 'hvac', name: 'HVAC Systems', icon: '❄️', count: 2 },
    { id: 'structural', name: 'Structural Engineering', icon: '🏢', count: 3 }
  ]

  const services = [
    {
      id: 1,
      title: "Piping Engineering Services",
      category: "piping",
      description: "Professional piping engineering services in Mumbai with 15+ years experience",
      features: ["Piping Design", "Stress Analysis", "3D Modeling", "Project Consultancy"],
      icon: "🔧",
      gradient: "from-blue-600 to-indigo-600",
      timeline: "2-4 weeks",
      complexity: "Advanced",
      link: "/services/piping-engineering-services"
    },
    {
      id: 2,
      title: "Process Piping Design",
      category: "piping",
      description: "Specialized process piping design for industrial plants and refineries",
      features: ["Process Flow Diagrams", "P&ID Development", "Line Sizing", "Material Selection"],
      icon: "⚗️",
      gradient: "from-indigo-600 to-purple-600",
      timeline: "3-6 weeks",
      complexity: "Expert",
      link: "/services/process-piping-design-services"
    },
    {
      id: 3,
      title: "Piping Stress Analysis",
      category: "piping",
      description: "Comprehensive stress analysis to ensure piping system integrity",
      features: ["CAESAR II Analysis", "Thermal Stress", "Seismic Analysis", "Support Design"],
      icon: "📊",
      gradient: "from-purple-600 to-pink-600",
      timeline: "1-3 weeks",
      complexity: "Advanced",
      link: "/services/piping-stress-analysis-services-mumbai"
    },
    {
      id: 4,
      title: "Piping Material Engineering",
      category: "piping",
      description: "Material selection and specification for optimal piping performance",
      features: ["Material Selection", "Corrosion Analysis", "Cost Optimization", "Procurement Support"],
      icon: "🧪",
      gradient: "from-blue-600 to-cyan-600",
      timeline: "1-2 weeks",
      complexity: "Intermediate",
      link: "/services/piping-material-engineering-services-mumbai"
    },
    {
      id: 5,
      title: "MEP System Design",
      category: "mep",
      description: "Comprehensive mechanical, electrical, and plumbing system design",
      features: ["Load Calculations", "System Layout", "Equipment Selection", "Energy Analysis"],
      icon: "⚡",
      gradient: "from-green-600 to-teal-600",
      timeline: "3-5 weeks",
      complexity: "Advanced",
      link: "/services/mep-system-design-services-mumbai"
    },
    {
      id: 6,
      title: "Building Services Engineering",
      category: "mep",
      description: "Complete building services design for commercial and residential projects",
      features: ["Electrical Design", "Plumbing Design", "Fire Safety", "BMS Integration"],
      icon: "🏢",
      gradient: "from-teal-600 to-blue-600",
      timeline: "4-8 weeks",
      complexity: "Expert",
      link: "/services/building-services-engineering-mumbai"
    },
    {
      id: 7,
      title: "MEP Coordination & Clash Detection",
      category: "mep",
      description: "3D coordination and clash detection for MEP systems",
      features: ["3D Modeling", "Clash Detection", "Coordination Drawings", "Installation Support"],
      icon: "🎯",
      gradient: "from-blue-600 to-indigo-600",
      timeline: "2-4 weeks",
      complexity: "Advanced",
      link: "/services/mep-coordination-clash-detection-mumbai"
    },
    {
      id: 8,
      title: "HVAC System Design",
      category: "hvac",
      description: "Energy-efficient HVAC system design and optimization",
      features: ["Load Calculations", "Duct Design", "Equipment Selection", "Energy Modeling"],
      icon: "❄️",
      gradient: "from-cyan-600 to-blue-600",
      timeline: "3-6 weeks",
      complexity: "Advanced",
      link: "/services/hvac-system-design-services-mumbai"
    },
    {
      id: 9,
      title: "HVAC Energy Analysis",
      category: "hvac",
      description: "Comprehensive energy analysis and optimization for HVAC systems",
      features: ["Energy Modeling", "Cost Analysis", "Green Building", "LEED Compliance"],
      icon: "🌱",
      gradient: "from-green-600 to-emerald-600",
      timeline: "2-4 weeks",
      complexity: "Intermediate",
      link: "/services/hvac-system-design-analysis-services-mumbai"
    },
    {
      id: 10,
      title: "Structural Analysis & Design",
      category: "structural",
      description: "Complete structural engineering solutions using advanced software",
      features: ["STAAD Pro Analysis", "ETABS Modeling", "Foundation Design", "Seismic Analysis"],
      icon: "🏗️",
      gradient: "from-indigo-600 to-purple-600",
      timeline: "4-8 weeks",
      complexity: "Expert",
      link: "/services/structural-analysis-design-services-mumbai"
    },
    {
      id: 11,
      title: "Steel Structure Design",
      category: "structural",
      description: "Specialized steel structure design for industrial applications",
      features: ["Connection Design", "Fabrication Drawings", "Erection Sequence", "Cost Optimization"],
      icon: "🔩",
      gradient: "from-gray-600 to-slate-600",
      timeline: "3-6 weeks",
      complexity: "Advanced",
      link: "/services/steel-structure-design-services-mumbai"
    },
    {
      id: 12,
      title: "Foundation Engineering",
      category: "structural", 
      description: "Foundation design and geotechnical engineering services",
      features: ["Soil Analysis", "Foundation Design", "Pile Design", "Retaining Walls"],
      icon: "🪨",
      gradient: "from-amber-600 to-orange-600",
      timeline: "2-5 weeks",
      complexity: "Advanced",
      link: "/services/foundation-engineering-services-mumbai"
    }
  ]

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const serviceId = parseInt(entry.target.getAttribute('data-service-id') || '0')
            setVisibleServices(prev => [...prev, serviceId])
          }
        })
      },
      { threshold: 0.1 }
    )

    const serviceElements = document.querySelectorAll('[data-service-id]')
    serviceElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Intermediate': return 'text-green-400'
      case 'Advanced': return 'text-blue-400'
      case 'Expert': return 'text-purple-400'
      default: return 'text-gray-400'
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl animate-morph"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full blur-3xl animate-morph-reverse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Our Engineering Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive engineering solutions delivered by industry experts. 
            From design to implementation, we ensure excellence at every step.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-2xl shadow-blue-500/25'
                  : 'bg-white/10 backdrop-blur-lg text-white hover:bg-white/20'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-lg">{category.icon}</span>
                {category.name}
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </span>
              {selectedCategory === category.id && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              data-service-id={service.id}
              className={`group relative transform transition-all duration-700 ${
                visibleServices.includes(service.id)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`relative p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden`}>
                {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>

                {/* Service Content */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getComplexityColor(service.complexity)} bg-white/10`}>
                      {service.complexity}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Service Details */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Timeline:</span>
                      <span className="text-white font-semibold">{service.timeline}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex gap-3">
                  {service.link ? (
                    <Link href={service.link} className="flex-1">
                      <button className={`w-full px-4 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                        View Details
                      </button>
                    </Link>
                  ) : (
                    <Link href="/contact" className="flex-1">
                      <button className={`w-full px-4 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                        View Details
                      </button>
                    </Link>
                  )}
                  <Link href="/contact">
                    <button className="px-4 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
                      Contact
                    </button>
                  </Link>
                </div>

                {/* Hover Glow Effect */}
                {hoveredService === service.id && (
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-10 blur-xl -z-10 scale-110`}></div>
                )}

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25">
              <span className="relative z-10 flex items-center gap-2">
                Request Custom Service
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            <button className="group relative px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/50 transform hover:scale-105 transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                Schedule Consultation
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceCategories