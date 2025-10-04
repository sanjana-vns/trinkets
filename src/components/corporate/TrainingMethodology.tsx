'use client'

import { useState, useEffect } from 'react'

// Ultra-Creative Training Methodology Component
const TrainingMethodology = () => {
  const [activePhase, setActivePhase] = useState(0)
  const [activeApproach, setActiveApproach] = useState('assessment')
  const [progressAnimation, setProgressAnimation] = useState(false)

  const phases = [
    {
      id: 1,
      title: "Assessment & Planning",
      duration: "Week 1",
      description: "Comprehensive skills assessment and customized curriculum design",
      icon: "🎯",
      color: "blue",
      activities: [
        "Current skills evaluation",
        "Learning objectives definition", 
        "Custom curriculum design",
        "Resource allocation planning"
      ]
    },
    {
      id: 2,
      title: "Interactive Learning",
      duration: "Weeks 2-8",
      description: "Hands-on training with real-world projects and expert guidance",
      icon: "🚀",
      color: "purple",
      activities: [
        "Live interactive sessions",
        "Practical workshops",
        "Real-world projects",
        "Peer collaboration"
      ]
    },
    {
      id: 3,
      title: "Application & Practice",
      duration: "Weeks 9-12",
      description: "Apply knowledge through industry-relevant projects and case studies",
      icon: "⚡",
      color: "green",
      activities: [
        "Industry case studies",
        "Team-based projects",
        "Mentorship sessions",
        "Best practices sharing"
      ]
    },
    {
      id: 4,
      title: "Assessment & Certification",
      duration: "Week 13",
      description: "Skills validation, certification, and ongoing support planning",
      icon: "🏆",
      color: "orange",
      activities: [
        "Skills assessment",
        "Project presentations",
        "Certification awards",
        "Continuous support setup"
      ]
    }
  ]

  const approaches = {
    assessment: {
      title: "Skills Assessment",
      icon: "📊",
      gradient: "from-blue-600 to-cyan-600",
      description: "Comprehensive evaluation of current capabilities and training needs",
      features: [
        "Technical skills evaluation",
        "Learning style analysis", 
        "Knowledge gap identification",
        "Custom learning path creation"
      ],
      tools: ["Assessment Portal", "Skills Matrix", "Learning Analytics", "Progress Tracking"]
    },
    delivery: {
      title: "Training Delivery",
      icon: "🎓",
      gradient: "from-purple-600 to-pink-600",
      description: "Multi-modal training delivery with expert instructors and hands-on practice",
      features: [
        "Live interactive sessions",
        "Self-paced learning modules",
        "Practical workshops",
        "Real-world simulations"
      ],
      tools: ["Virtual Classroom", "Lab Environment", "Collaboration Tools", "Resource Library"]
    },
    support: {
      title: "Ongoing Support",
      icon: "🤝",
      gradient: "from-green-600 to-teal-600",
      description: "Continuous mentorship and support throughout the learning journey",
      features: [
        "1-on-1 mentoring sessions",
        "24/7 technical support",
        "Peer learning communities",
        "Regular progress reviews"
      ],
      tools: ["Mentorship Platform", "Support Portal", "Community Forums", "Progress Dashboard"]
    },
    measurement: {
      title: "Impact Measurement",
      icon: "📈",
      gradient: "from-orange-600 to-red-600",
      description: "Comprehensive tracking of learning outcomes and business impact",
      features: [
        "Skills improvement tracking",
        "Performance metrics analysis",
        "ROI measurement",
        "Continuous improvement"
      ],
      tools: ["Analytics Dashboard", "ROI Calculator", "Performance Metrics", "Feedback System"]
    }
  }

  const deliveryMethods = [
    {
      method: "On-site Training",
      icon: "🏢",
      description: "Instructor-led training at your office premises",
      benefits: ["Face-to-face interaction", "Team building", "Customized environment", "Immediate support"],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      method: "Virtual Classroom",
      icon: "💻",
      description: "Live online sessions with interactive participation",
      benefits: ["Flexible scheduling", "Cost-effective", "Global accessibility", "Recorded sessions"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      method: "Hybrid Learning",
      icon: "🔄",
      description: "Combination of on-site and virtual training sessions",
      benefits: ["Best of both worlds", "Flexible approach", "Optimal engagement", "Tailored delivery"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      method: "Self-paced Learning",
      icon: "⏱️",
      description: "Asynchronous learning with guided support",
      benefits: ["Individual pace", "24/7 availability", "Personalized path", "Progress tracking"],
      gradient: "from-purple-500 to-pink-500"
    }
  ]

  useEffect(() => {
    setProgressAnimation(true)
    const timer = setTimeout(() => setProgressAnimation(false), 1000)
    return () => clearTimeout(timer)
  }, [activePhase])

  const currentApproach = approaches[activeApproach as keyof typeof approaches]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-red-200/30 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Training Methodology
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven, systematic approach to corporate training that ensures maximum learning 
            outcomes and measurable business impact for your organization.
          </p>
        </div>

        {/* Training Phases Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Training Process</h3>
          
          {/* Timeline */}
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
            <div 
              className={`absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 transform -translate-y-1/2 transition-all duration-1000 ${
                progressAnimation ? 'animate-pulse' : ''
              }`}
              style={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
            ></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {phases.map((phase, index) => (
                <div
                  key={phase.id}
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    activePhase === index ? 'scale-105' : 'hover:scale-105'
                  }`}
                  onClick={() => setActivePhase(index)}
                >
                  {/* Phase Card */}
                  <div className={`relative p-6 bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 ${
                    activePhase === index 
                      ? `border-${phase.color}-500 shadow-2xl` 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    {/* Phase Number */}
                    <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-${phase.color}-500 to-${phase.color}-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {index + 1}
                    </div>

                    {/* Phase Icon */}
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                        {phase.icon}
                      </div>
                      <div className="text-sm text-gray-500 font-semibold">{phase.duration}</div>
                    </div>

                    {/* Phase Content */}
                    <h4 className="text-lg font-bold text-gray-800 text-center mb-3">{phase.title}</h4>
                    <p className="text-gray-600 text-sm text-center mb-4 leading-relaxed">{phase.description}</p>

                    {/* Activities */}
                    {activePhase === index && (
                      <div className="space-y-2 animate-fadeIn">
                        {phase.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="flex items-center gap-2 text-sm">
                            <div className={`w-2 h-2 bg-${phase.color}-500 rounded-full`}></div>
                            <span className="text-gray-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Training Approaches */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Approach</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Approach Navigation */}
            <div className="space-y-4">
              {Object.entries(approaches).map(([key, approach]) => (
                <button
                  key={key}
                  onClick={() => setActiveApproach(key)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                    activeApproach === key
                      ? `bg-gradient-to-r ${approach.gradient} text-white shadow-xl`
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`text-2xl ${activeApproach === key ? 'text-white' : ''}`}>
                      {approach.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{approach.title}</h4>
                      <p className={`text-sm ${activeApproach === key ? 'text-white/90' : 'text-gray-600'}`}>
                        {approach.description.slice(0, 50)}...
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Approach Details */}
            <div className="lg:col-span-2">
              <div className={`relative p-8 bg-gradient-to-br ${currentApproach.gradient} text-white rounded-3xl shadow-2xl overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 transform -skew-x-12"></div>
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{currentApproach.icon}</div>
                    <div>
                      <h4 className="text-2xl font-bold">{currentApproach.title}</h4>
                      <p className="text-white/90">{currentApproach.description}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h5 className="font-semibold mb-3">Key Features:</h5>
                      <div className="space-y-2">
                        {currentApproach.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-sm text-white/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Tools & Platforms:</h5>
                      <div className="flex flex-wrap gap-2">
                        {currentApproach.tools.map((tool, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Methods */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Flexible Delivery Methods</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryMethods.map((method, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Method Header */}
                <div className={`relative p-6 bg-gradient-to-br ${method.gradient} text-white`}>
                  <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {method.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{method.method}</h4>
                  <p className="text-white/90 text-sm">{method.description}</p>

                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>

                {/* Method Benefits */}
                <div className="p-6">
                  <h5 className="font-semibold text-gray-800 mb-3">Benefits:</h5>
                  <div className="space-y-2">
                    {method.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Team?</h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our proven methodology can accelerate your team&apos;s skills 
              and drive measurable business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                <span className="relative z-10 flex items-center gap-2">
                  Schedule Strategy Session
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
              </button>
              <button className="group relative px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/50 transform hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  Download Methodology Guide
                  <svg className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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

export default TrainingMethodology