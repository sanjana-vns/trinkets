'use client'

import { useState, useEffect, useMemo } from 'react'

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedNumbers, setAnimatedNumbers] = useState<Record<string, number>>({})

  const stats = useMemo(() => [
    { number: "14+", label: "Years Experience", icon: "🏆", color: "from-blue-400 to-cyan-500" },
    { number: "40+", label: "Courses", icon: "📚", color: "from-green-400 to-teal-500" },
    { number: "20K+", label: "Trained Students", icon: "👨‍🎓", color: "from-yellow-400 to-orange-500" },
    { number: "80%", label: "Placed Students", icon: "🎯", color: "from-purple-400 to-pink-500" },
    { number: "30+", label: "Teachers", icon: "👨‍🏫", color: "from-indigo-400 to-blue-500" },
    { number: "9+", label: "Awards", icon: "🏅", color: "from-red-400 to-rose-500" }
  ], [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const targetNumber = parseInt(stat.number.replace(/[^0-9]/g, ''))
        let current = 0
        const increment = targetNumber / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= targetNumber) {
            current = targetNumber
            clearInterval(timer)
          }
          setAnimatedNumbers(prev => ({
            ...prev,
            [index]: Math.floor(current)
          }))
        }, 30)
      })
    }
  }, [isVisible, stats])

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-1/4 w-36 h-36 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <span className="text-yellow-400 text-lg mr-2">🌟</span>
            <span className="text-white font-semibold">Our Achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Trinkets Institute
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Success & Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Helping growing industries by providing trained manpower and engineering expertise
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative text-center transform transition-all duration-500 hover:scale-110"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Card */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden">
                {/* Icon */}
                <div className={`text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  {stat.icon}
                </div>
                
                {/* Animated Number */}
                <div className={`text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                  {isVisible ? (
                    <span>
                      {animatedNumbers[index] || 0}
                      {stat.number.includes('+') && '+'}
                      {stat.number.includes('%') && '%'}
                    </span>
                  ) : (
                    '0'
                  )}
                </div>
                
                {/* Label */}
                <div className="text-gray-200 font-semibold text-sm group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}></div>
                
                {/* Floating Particles */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-white/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* External Glow */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 blur-2xl scale-110 transition-opacity duration-300 -z-20`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/10">
            <span className="text-green-400 text-2xl">✨</span>
            <span className="text-white font-semibold">Trusted by Industry Leaders</span>
            <span className="text-blue-400 text-2xl">🚀</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection