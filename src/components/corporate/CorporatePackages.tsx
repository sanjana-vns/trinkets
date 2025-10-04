'use client'

import { useState, useEffect } from 'react'

// Ultra-Creative Corporate Packages Component
const CorporatePackages = () => {
  const [activePackage, setActivePackage] = useState('standard')
  const [teamSize, setTeamSize] = useState('small')
  const [showCustomizer, setShowCustomizer] = useState(false)
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])

  const packages = {
    starter: {
      name: "Starter Package",
      subtitle: "Perfect for small teams getting started",
      price: "₹2,50,000",
      duration: "1-2 months",
      participants: "10-20",
      gradient: "from-green-500 to-teal-500",
      icon: "🌱",
      popular: false,
      features: [
        "Custom curriculum design",
        "Virtual classroom training",
        "Basic assessment & certification",
        "Email support",
        "Standard learning materials",
        "Monthly progress reports"
      ],
      included: {
        "Training Hours": "40 hours",
        "Trainers": "1 dedicated trainer",
        "Support": "Email support",
        "Materials": "Digital resources",
        "Certification": "Basic certification",
        "Follow-up": "3 months"
      }
    },
    standard: {
      name: "Professional Package",
      subtitle: "Comprehensive training for growing teams",
      price: "₹5,00,000",
      duration: "2-4 months",
      participants: "20-50",
      gradient: "from-blue-500 to-purple-500",
      icon: "🚀",
      popular: true,
      features: [
        "Advanced custom curriculum",
        "Hybrid delivery (on-site + virtual)",
        "Comprehensive assessment & certification",
        "24/7 technical support",
        "Premium learning materials",
        "Bi-weekly progress reports",
        "1-on-1 mentoring sessions",
        "Industry-specific case studies"
      ],
      included: {
        "Training Hours": "80 hours",
        "Trainers": "2 dedicated trainers",
        "Support": "24/7 support",
        "Materials": "Premium resources + labs",
        "Certification": "Industry certification",
        "Follow-up": "6 months"
      }
    },
    enterprise: {
      name: "Enterprise Package",
      subtitle: "Complete solution for large organizations",
      price: "₹10,00,000+",
      duration: "3-6 months",
      participants: "50-200+",
      gradient: "from-orange-500 to-red-500",
      icon: "🏆",
      popular: false,
      features: [
        "Fully customized curriculum",
        "Multi-modal delivery options",
        "Advanced assessment & analytics",
        "Dedicated success manager",
        "Custom learning platform",
        "Real-time progress tracking",
        "Unlimited mentoring sessions",
        "Custom case studies & projects",
        "Leadership training modules",
        "ROI measurement & reporting"
      ],
      included: {
        "Training Hours": "120+ hours",
        "Trainers": "Dedicated training team",
        "Support": "Dedicated success manager",
        "Materials": "Custom platform + resources",
        "Certification": "Custom certification",
        "Follow-up": "12 months"
      }
    }
  }

  const addons = [
    {
      id: "assessment",
      name: "Advanced Skills Assessment",
      description: "Comprehensive pre & post training evaluation",
      price: "₹50,000",
      icon: "📊"
    },
    {
      id: "mentoring",
      name: "Extended Mentoring",
      description: "Additional 6 months of 1-on-1 mentoring",
      price: "₹1,00,000",
      icon: "🤝"
    },
    {
      id: "platform",
      name: "Custom Learning Platform",
      description: "Branded learning management system",
      price: "₹2,00,000",
      icon: "💻"
    },
    {
      id: "analytics",
      name: "Advanced Analytics",
      description: "Detailed learning analytics and insights",
      price: "₹75,000",
      icon: "📈"
    }
  ]

  const teamSizes = {
    small: { range: "10-25", multiplier: 1, label: "Small Team" },
    medium: { range: "26-50", multiplier: 1.5, label: "Medium Team" },
    large: { range: "51-100", multiplier: 2.2, label: "Large Team" },
    enterprise: { range: "100+", multiplier: 3, label: "Enterprise" }
  }

  const currentPackage = packages[activePackage as keyof typeof packages]
  const currentTeamSize = teamSizes[teamSize as keyof typeof teamSizes]

  const calculatePrice = () => {
    const basePrice = parseInt(currentPackage.price.replace(/[^\d]/g, ''))
    const sizeMultiplier = currentTeamSize.multiplier
    const addonsCost = selectedAddons.reduce((total, addonId) => {
      const addon = addons.find(a => a.id === addonId)
      return total + (addon ? parseInt(addon.price.replace(/[^\d]/g, '')) : 0)
    }, 0)
    
    return Math.round((basePrice * sizeMultiplier + addonsCost))
  }

  const formatPrice = (price: number) => {
    return `₹${(price / 100000).toFixed(1)}L`
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-morph"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full blur-3xl animate-morph-reverse"></div>
        
        {/* Floating Price Icons */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-white/10 text-2xl animate-float-delayed"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 1.2}s`,
              }}
            >
              {['💰', '📊', '🎯', '⚡', '🚀'][i % 5]}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Training Packages
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible pricing options designed to meet diverse organizational needs. 
            Choose a package that fits your team size, budget, and training objectives.
          </p>
        </div>

        {/* Package Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white/10 backdrop-blur-lg rounded-2xl p-2 border border-white/20">
            {Object.entries(packages).map(([key, pkg]) => (
              <button
                key={key}
                onClick={() => setActivePackage(key)}
                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activePackage === key
                    ? `bg-gradient-to-r ${pkg.gradient} text-white shadow-lg`
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{pkg.icon}</span>
                  <span>{pkg.name}</span>
                  {pkg.popular && (
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Team Size Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
            <label className="text-white font-semibold mb-3 block text-center">Team Size:</label>
            <div className="flex gap-3">
              {Object.entries(teamSizes).map(([key, size]) => (
                <button
                  key={key}
                  onClick={() => setTeamSize(key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    teamSize === key
                      ? 'bg-white text-blue-600 shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-semibold">{size.label}</div>
                    <div className="text-xs opacity-80">{size.range} people</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Package Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Package Details */}
          <div className="lg:col-span-2">
            <div className={`relative p-8 bg-gradient-to-br ${currentPackage.gradient} rounded-3xl text-white shadow-2xl overflow-hidden`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 transform -skew-x-12"></div>
              </div>

              <div className="relative z-10">
                {/* Package Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl">{currentPackage.icon}</span>
                      <h3 className="text-3xl font-bold">{currentPackage.name}</h3>
                      {currentPackage.popular && (
                        <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full font-semibold">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <p className="text-white/90 text-lg">{currentPackage.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-black mb-1">{formatPrice(calculatePrice())}</div>
                    <div className="text-white/80 text-sm">Starting price</div>
                  </div>
                </div>

                {/* Package Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-white/10 rounded-xl">
                    <div className="text-white/80 text-sm">Duration</div>
                    <div className="font-bold">{currentPackage.duration}</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl">
                    <div className="text-white/80 text-sm">Participants</div>
                    <div className="font-bold">{currentTeamSize.range}</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl">
                    <div className="text-white/80 text-sm">Training Hours</div>
                    <div className="font-bold">{currentPackage.included["Training Hours"]}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4">What&apos;s Included:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentPackage.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-white/90 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Package Includes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(currentPackage.included).map(([key, value]) => (
                    <div key={key} className="p-3 bg-white/10 rounded-lg">
                      <div className="text-white/80 text-xs">{key}</div>
                      <div className="font-semibold text-sm">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1500"></div>
            </div>
          </div>

          {/* Package Customizer */}
          <div className="space-y-6">
            {/* Add-ons */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4">Optional Add-ons</h4>
              <div className="space-y-3">
                {addons.map((addon) => (
                  <label
                    key={addon.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-300 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedAddons.includes(addon.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedAddons([...selectedAddons, addon.id])
                        } else {
                          setSelectedAddons(selectedAddons.filter(id => id !== addon.id))
                        }
                      }}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{addon.icon}</span>
                        <span className="text-white font-semibold text-sm">{addon.name}</span>
                      </div>
                      <div className="text-white/70 text-xs">{addon.description}</div>
                      <div className="text-white font-bold text-sm mt-1">{addon.price}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4">Price Summary</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-white/80">
                  <span>Base Package ({currentTeamSize.label})</span>
                  <span>{formatPrice(parseInt(currentPackage.price.replace(/[^\d]/g, '')) * currentTeamSize.multiplier)}</span>
                </div>
                {selectedAddons.map((addonId) => {
                  const addon = addons.find(a => a.id === addonId)
                  return addon ? (
                    <div key={addonId} className="flex justify-between text-white/80">
                      <span>{addon.name}</span>
                      <span>{addon.price}</span>
                    </div>
                  ) : null
                })}
                <div className="border-t border-white/20 pt-3">
                  <div className="flex justify-between text-white font-bold text-lg">
                    <span>Total</span>
                    <span>{formatPrice(calculatePrice())}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className={`w-full py-4 bg-gradient-to-r ${currentPackage.gradient} text-white font-bold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}>
                Request Detailed Quote
              </button>
              <button className="w-full py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="w-full py-4 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300">
                Download Package Details
              </button>
            </div>
          </div>
        </div>

        {/* Enterprise Features */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Need Something Custom?</h3>
              <p className="text-purple-100 text-lg max-w-2xl mx-auto">
                For large enterprises or unique requirements, we offer fully customized training solutions 
                with dedicated support and flexible pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { icon: "🎯", title: "Custom Curriculum", desc: "Tailored to your tech stack" },
                { icon: "📊", title: "Advanced Analytics", desc: "Detailed ROI measurement" },
                { icon: "🤝", title: "Dedicated Manager", desc: "Personal success manager" },
                { icon: "🔄", title: "Ongoing Support", desc: "12+ months of support" }
              ].map((feature, index) => (
                <div key={index} className="text-center p-4 bg-white/10 rounded-xl">
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <div className="font-semibold mb-1">{feature.title}</div>
                  <div className="text-purple-100 text-sm">{feature.desc}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="group relative px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                <span className="relative z-10 flex items-center gap-2">
                  Discuss Enterprise Solution
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 transform -skew-x-12 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-2000"></div>
        </div>
      </div>
    </section>
  )
}

export default CorporatePackages