'use client'
import { useState, useEffect } from 'react'
import { TrendingUp, Users, Award, Building, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const PlacementHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  const highlights = [
    {
      icon: <TrendingUp className="w-8 md:w-12 h-8 md:h-12 text-blue-400" />,
      number: "98%",
      label: "Placement Success Rate",
      description: "Guaranteed placement assistance"
    },
    {
      icon: <Users className="w-8 md:w-12 h-8 md:h-12 text-indigo-400" />,
      number: "5000+",
      label: "Students Placed",
      description: "Across top engineering companies"
    },
    {
      icon: <Building className="w-8 md:w-12 h-8 md:h-12 text-purple-400" />,
      number: "500+",
      label: "Hiring Partners",
      description: "Leading multinational companies"
    },
    {
      icon: <Award className="w-8 md:w-12 h-8 md:h-12 text-cyan-400" />,
      number: "12+ LPA",
      label: "Average Package",
      description: "Competitive salary packages"
    }
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-blue-100 text-sm font-medium">100% Placement Assistance Guarantee</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Launch Your</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Engineering Career
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Transform your engineering knowledge into a successful career with our comprehensive placement assistance. 
                Join thousands of engineers who have secured their dream jobs through our proven placement methodology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 text-center"
              >
                <span className="flex items-center justify-center">
                  Get Placement Assistance
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/testimonials"
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-blue-400/50 rounded-xl font-semibold text-blue-100 hover:bg-blue-500/10 transition-all duration-300 text-center"
              >
                View Success Stories
              </Link>
            </div>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className={`grid grid-cols-2 gap-4 md:gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="group p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl md:text-3xl font-bold text-white">{highlight.number}</div>
                    <div className="text-sm md:text-base font-semibold text-blue-200">{highlight.label}</div>
                    <div className="text-xs md:text-sm text-gray-400 hidden md:block">{highlight.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className={`mt-12 lg:mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-lg md:text-2xl font-bold text-white">15+</div>
              <div className="text-xs md:text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-lg md:text-2xl font-bold text-white">24/7</div>
              <div className="text-xs md:text-sm text-gray-400">Career Support</div>
            </div>
            <div className="text-center">
              <div className="text-lg md:text-2xl font-bold text-white">₹6-20L</div>
              <div className="text-xs md:text-sm text-gray-400">Salary Range</div>
            </div>
            <div className="text-center">
              <div className="text-lg md:text-2xl font-bold text-white">100%</div>
              <div className="text-xs md:text-sm text-gray-400">Support Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlacementHero