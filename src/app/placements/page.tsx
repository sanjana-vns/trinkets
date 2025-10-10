import { Metadata } from "next"
import Link from "next/link"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import LazySection from '@/components/LazySection'

// Critical above-the-fold component loads immediately
const PlacementHero = dynamic(() => import('@/components/placement/PlacementHero'), {
  loading: () => (
    <div className="min-h-[60vh] bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center">
      <div className="text-center text-white">
        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-sm opacity-80">Loading placement services...</p>
      </div>
    </div>
  ),
  ssr: true,
})

// Other components load with lazy intersection observer
const PlacementStats = dynamic(() => import('@/components/placement/PlacementStats'), {
  ssr: false,
})

const PlacementProcess = dynamic(() => import('@/components/placement/PlacementProcess'), {
  ssr: false,
})

const PlacementSuccess = dynamic(() => import('@/components/placement/PlacementSuccess'), {
  ssr: false,
})

const PlacementPartners = dynamic(() => import('@/components/placement/PlacementPartners'), {
  ssr: false,
})

const PlacementTestimonials = dynamic(() => import('@/components/placement/PlacementTestimonials'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: "Engineering Placement Services - 100% Placement Assistance | Trinkets Institute",
  description: "Get guaranteed placement assistance in top engineering companies. Expert career guidance, industry partnerships, and 100% placement support for mechanical, electrical, civil engineering professionals.",
  keywords: [
    'engineering placement services',
    'engineering job placement',
    '100% placement assistance',
    'engineering career guidance',
    'mechanical engineering jobs',
    'civil engineering placement',
    'electrical engineering jobs',
    'piping engineering placement',
    'engineering recruitment',
    'technical job placement',
    'engineering career development',
    'industry placement program',
    'engineering job guarantee',
    'professional placement services',
    'engineering employment support'
  ],
  openGraph: {
    title: 'Engineering Placement Services - 100% Placement Assistance | Trinkets Institute',
    description: 'Get guaranteed placement assistance in top engineering companies with our comprehensive career support program.',
    url: 'https://trinketsinstitute.com/placements',
    siteName: 'Trinkets Institute',
    type: 'website',
  },
}

export default function PlacementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Critical above-the-fold content loads immediately */}
      <PlacementHero />
      
      {/* Below-the-fold sections load only when scrolled into view */}
      <LazySection
        fallback={
          <div className="h-96 bg-gradient-to-br from-slate-50 to-blue-50 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
        rootMargin="200px"
      >
        <PlacementStats />
      </LazySection>
      
      <LazySection
        fallback={
          <div className="h-96 bg-white animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
        rootMargin="150px"
      >
        <PlacementProcess />
      </LazySection>
      
      <LazySection
        fallback={
          <div className="h-96 bg-gray-50 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
        rootMargin="100px"
      >
        <PlacementSuccess />
      </LazySection>
      
      <LazySection
        fallback={
          <div className="h-96 bg-blue-50 animate-pulse flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600 text-sm">Loading company partners...</p>
            </div>
          </div>
        }
        rootMargin="50px"
      >
        <PlacementPartners />
      </LazySection>
      
      <LazySection
        fallback={
          <div className="h-96 bg-white animate-pulse flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600 text-sm">Loading testimonials...</p>
            </div>
          </div>
        }
        rootMargin="0px"
      >
        <PlacementTestimonials />
      </LazySection>
    </div>
  )
}
