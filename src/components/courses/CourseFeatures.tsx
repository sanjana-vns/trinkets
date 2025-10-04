'use client'

import { useState, useEffect } from 'react'

// Ultra-Creative Course Features Component
const CourseFeatures = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [visibleStats, setVisibleStats] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleStats(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('course-features')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      id: 1,
      title: "Live Interactive Classes",
      description: "Real-time learning with expert instructors and immediate doubt resolution",
      icon: "🎥",
      gradient: "from-blue-500 to-cyan-500",
      benefits: ["Live coding sessions", "Real-time Q&A", "Screen sharing", "Interactive whiteboard"]
    },
    {
      id: 2,
      title: "Hands-on Projects",
      description: "Build real-world applications and create an impressive portfolio",
      icon: "🛠️",
      gradient: "from-purple-500 to-pink-500",
      benefits: ["Industry projects", "Portfolio building", "Code reviews", "Best practices"]
    },
    {
      id: 3,
      title: "Placement Assistance",
      description: "100% placement support with resume building and interview preparation",
      icon: "💼",
      gradient: "from-green-500 to-teal-500",
      benefits: ["Resume building", "Mock interviews", "Job referrals", "Salary negotiation"]
    },
    {
      id: 4,
      title: "Industry Mentorship",
      description: "Learn from industry experts with years of practical experience",
      icon: "👨‍🏫",
      gradient: "from-orange-500 to-red-500",
      benefits: ["1-on-1 mentoring", "Industry insights", "Career guidance", "Network building"]
    },
    {
      id: 5,
      title: "Flexible Schedule",
      description: "Choose from weekday, weekend, or fast-track batch options",
      icon: "⏰",
      gradient: "from-indigo-500 to-purple-500",
      benefits: ["Multiple batches", "Weekend classes", "Recorded sessions", "Flexible timing"]
    },
    {
      id: 6,
      title: "Lifetime Support",
      description: "Continuous learning with lifetime access to course materials and updates",
      icon: "♾️",
      gradient: "from-emerald-500 to-green-500",
      benefits: ["Lifetime access", "Course updates", "Alumni network", "Continuous support"]
    }
  ]

  const stats = [
    { number: "95%", label: "Success Rate", icon: "🎯" },
    { number: "2000+", label: "Students Placed", icon: "👥" },
    { number: "50+", label: "Industry Partners", icon: "🤝" },
    { number: "4.8/5", label: "Average Rating", icon: "⭐" }
  ]

  const learningPath = [
    {
      phase: "Foundation",
      duration: "Week 1-4",
      description: "Build strong fundamentals",
      icon: "🏗️",
      color: "blue"
    },
    {
      phase: "Practical",
      duration: "Week 5-12",
      description: "Hands-on projects and labs",
      icon: "⚡",
      color: "purple"
    },
    {
      phase: "Advanced",
      duration: "Week 13-20",
      description: "Advanced concepts and specialization",
      icon: "🚀",
      color: "green"
    },
    {
      phase: "Portfolio",
      duration: "Week 21-24",
      description: "Capstone projects and portfolio",
      icon: "🎨",
      color: "orange"
    }
  ]

  return (
    <section id="course-features" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-morph"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full blur-3xl animate-morph-reverse"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-4 h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className="border border-white/10 animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
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
              Why Choose Our Courses?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience world-class training with cutting-edge curriculum, expert mentorship, 
            and guaranteed placement assistance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative"
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2`}>
                {/* Feature Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>

                {/* Feature Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>

                {/* Feature Benefits */}
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div
                      key={benefitIndex}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full`}></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
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

        {/* Learning Path */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-white mb-4">Your Learning Journey</h3>
            <p className="text-gray-300 text-lg">Structured path from beginner to industry-ready professional</p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 transform -translate-y-1/2 opacity-30"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {learningPath.map((phase, index) => (
                <div key={index} className="relative group">
                  <div className={`relative p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105`}>
                    {/* Phase Number */}
                    <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-${phase.color}-500 to-${phase.color}-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {index + 1}
                    </div>

                    {/* Phase Icon */}
                    <div className="text-4xl text-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {phase.icon}
                    </div>

                    {/* Phase Content */}
                    <h4 className="text-xl font-bold text-white text-center mb-2">{phase.phase}</h4>
                    <p className="text-gray-400 text-sm text-center mb-3">{phase.duration}</p>
                    <p className="text-gray-300 text-center text-sm">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
                {/* Stat Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {stat.icon}
                </div>

                {/* Stat Number */}
                <div className={`text-4xl font-black text-white mb-2 transition-all duration-1000 ${
                  visibleStats ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}>
                  {stat.number}
                </div>

                {/* Stat Label */}
                <div className="text-gray-300 font-semibold">{stat.label}</div>

                {/* Animated Background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25">
              <span className="relative z-10 flex items-center gap-2">
                Start Your Journey
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group relative px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/50 transform hover:scale-105 transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                Talk to Counselor
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseFeatures