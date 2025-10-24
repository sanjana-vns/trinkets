'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const MobilePlacementHero = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <section className="py-12 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="container mx-auto px-4 text-white">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-white/20 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-white/10 rounded w-2/3 mx-auto"></div>
            <div className="h-12 bg-blue-600/50 rounded w-40 mx-auto"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 max-w-md mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
            100% Placement 
            <span className="block text-blue-300 mt-1">Assistance Guaranteed</span>
          </h1>
          
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Join 5000+ engineering graduates placed in top companies with our comprehensive career support program.
          </p>

          <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-2">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span className="text-left">98% Success Rate</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-2">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span className="text-left">500+ Companies</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-2">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span className="text-left">12+ LPA Average</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-2">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span className="text-left">Guaranteed Support</span>
            </div>
          </div>

          <div className="pt-4 space-y-3">
            <Link href="/courses" className="block">
              <button className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base">
                Explore Courses
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </Link>
            
            <Link href="/contact" className="block">
              <button className="w-full px-6 py-2 border border-white/30 text-white rounded-lg font-medium transition-colors duration-200 hover:bg-white/10 text-sm">
                Get Career Guidance
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobilePlacementHero