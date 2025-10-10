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
      <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="container mx-auto px-4 text-white">
          <div className="animate-pulse">
            <div className="h-8 bg-white/20 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-white/10 rounded w-1/2 mb-8"></div>
            <div className="h-12 bg-blue-600/50 rounded w-40"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold leading-tight">
            100% Placement 
            <span className="block text-blue-300">Assistance Guaranteed</span>
          </h1>
          
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Join 5000+ engineering graduates placed in top companies with our comprehensive career support program.
          </p>

          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span>98% Success Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span>500+ Companies</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span>12+ LPA Average</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span>Guaranteed Support</span>
            </div>
          </div>

          <div className="pt-4">
            <Link href="/courses">
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200">
                Explore Courses
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobilePlacementHero