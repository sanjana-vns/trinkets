'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Ultra-Creative Service Features Component
const ServiceFeatures = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [visibleFeatures, setVisibleFeatures] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  const featureTabs = [
    { id: 0, name: 'Why Choose Us', icon: '⭐' },
    { id: 1, name: 'Our Process', icon: '🔄' },
    { id: 2, name: 'Quality Assurance', icon: '✅' },
    { id: 3, name: 'Support', icon: '🤝' }
  ]

  const features = [
    {
      id: 1,
      title: "Industry Expertise",
      description: "15+ years of engineering excellence with deep domain knowledge",
      icon: "🎯",
      gradient: "from-blue-500 to-cyan-500",
      benefits: ["Experienced team", "Industry standards", "Best practices", "Proven methods"],
      stats: "500+ Projects"
    },
    {
      id: 2,
      title: "Advanced Technology",
      description: "Latest software and tools for precise engineering solutions",
      icon: "💻",
      gradient: "from-purple-500 to-pink-500",
      benefits: ["Latest software", "3D modeling", "Analysis tools", "Cloud integration"],
      stats: "15+ Software"
    },
    {
      id: 3,
      title: "Quality Assurance",
      description: "Rigorous quality checks and compliance with international standards",
      icon: "🛡️",
      gradient: "from-green-500 to-teal-500",
      benefits: ["ISO standards", "Quality checks", "Peer reviews", "Documentation"],
      stats: "99.8% Accuracy"
    },
    {
      id: 4,
      title: "Timely Delivery",
      description: "Committed to delivering projects on time without compromising quality",
      icon: "⏰",
      gradient: "from-indigo-500 to-purple-500",
      benefits: ["Project planning", "Milestone tracking", "Resource optimization", "Time management"],
      stats: "98% On-time"
    },
    {
      id: 5,
      title: "Cost Effective",
      description: "Optimized solutions that provide maximum value for your investment",
      icon: "💰",
      gradient: "from-emerald-500 to-green-500",
      benefits: ["Cost optimization", "Value engineering", "Resource efficiency", "ROI focus"],
      stats: "30% Savings"
    },
    {
      id: 6,
      title: "24/7 Support",
      description: "Round-the-clock support and maintenance for all our services",
      icon: "🚀",
      gradient: "from-blue-500 to-indigo-500",
      benefits: ["24/7 availability", "Expert support", "Quick response", "Ongoing maintenance"],
      stats: "4hr Response"
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Understanding your requirements and project scope",
      icon: "💬",
      color: "blue"
    },
    {
      step: 2,
      title: "Proposal & Planning",
      description: "Detailed proposal with timeline and deliverables",
      icon: "📋",
      color: "indigo"
    },
    {
      step: 3,
      title: "Design & Development",
      description: "Expert engineering design and analysis",
      icon: "⚙️",
      color: "purple"
    },
    {
      step: 4,
      title: "Quality Review",
      description: "Comprehensive quality checks and validation",
      icon: "🔍",
      color: "green"
    },
    {
      step: 5,
      title: "Delivery & Support",
      description: "Final delivery with ongoing support",
      icon: "🎯",
      color: "blue"
    }
  ]

  const qualityStandards = [
    { name: "ISO 9001:2015", icon: "🏆", description: "Quality Management" },
    { name: "ASME Standards", icon: "⚙️", description: "Mechanical Engineering" },
    { name: "API Standards", icon: "🛢️", description: "Petroleum Industry" },
    { name: "ASHRAE Standards", icon: "❄️", description: "HVAC Systems" },
    { name: "IEEE Standards", icon: "⚡", description: "Electrical Engineering" },
    { name: "Green Building", icon: "🌱", description: "Sustainable Design" }
  ]

  const supportServices = [
    { name: "Technical Consultation", icon: "💡", available: "24/7" },
    { name: "Project Management", icon: "📊", available: "Business Hours" },
    { name: "Training & Support", icon: "🎓", available: "Scheduled" },
    { name: "Maintenance Support", icon: "🔧", available: "On-demand" }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleFeatures(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('service-features')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="group relative"
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  {/* Feature Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                    <span className="text-2xl">{feature.icon}</span>
                  </div>

                  {/* Feature Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>

                  {/* Feature Benefits */}
                  <div className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3 text-sm text-gray-300">
                        <div className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full`}></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Feature Stats */}
                  <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${feature.gradient} rounded-full text-white font-bold text-sm`}>
                    {feature.stats}
                  </div>

                  {/* Hover Glow Effect */}
                  {hoveredFeature === feature.id && (
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-20 blur-xl -z-10 scale-110`}></div>
                  )}

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        )
      
      case 1:
        return (
          <div className="relative max-w-4xl mx-auto">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transform -translate-y-1/2 opacity-30"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative group text-center">
                  <div className={`relative p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105`}>
                    {/* Step Number */}
                    <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-${step.color}-500 to-${step.color}-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {step.step}
                    </div>

                    {/* Step Icon */}
                    <div className="text-4xl text-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>

                    {/* Step Content */}
                    <h4 className="text-lg font-bold text-white text-center mb-2">{step.title}</h4>
                    <p className="text-gray-300 text-center text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      
      case 2:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="group relative p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{standard.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{standard.name}</h4>
                    <p className="text-gray-400 text-sm">{standard.description}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-full"></div>
                </div>
              </div>
            ))}
          </div>
        )
      
      case 3:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportServices.map((service, index) => (
              <div key={index} className="group relative p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{service.name}</h4>
                      <p className="text-gray-400 text-sm">Available: {service.available}</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <section id="service-features" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-morph"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl animate-morph-reverse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Service Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover what makes our engineering services stand out. Quality, innovation, 
            and commitment to excellence in every project.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {featureTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-2xl shadow-blue-500/25'
                  : 'bg-white/10 backdrop-blur-lg text-white hover:bg-white/20'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-lg">{tab.icon}</span>
                {tab.name}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-500">
          {renderTabContent()}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4">
            <Link href="/contact">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25">
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </Link>

            <Link href="/services">
              <button className="group relative px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/50 transform hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  Learn More
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceFeatures