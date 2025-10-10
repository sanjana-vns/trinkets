import { Metadata } from "next"
import Link from "next/link"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import LazySection from '@/components/LazySection'

// Ultra-lightweight mobile hero for instant loading
const MobilePlacementHero = dynamic(() => import('@/components/placement/MobilePlacementHero'), {
  ssr: true,
})

// Full hero for desktop
const PlacementHero = dynamic(() => import('@/components/placement/PlacementHero'), {
  loading: () => (
    <div className="min-h-[50vh] bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="container mx-auto px-4 py-16 text-white">
        <div className="animate-pulse">
          <div className="h-8 bg-white/20 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-white/10 rounded w-1/2 mb-8"></div>
          <div className="h-12 bg-blue-600/50 rounded w-40"></div>
        </div>
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
      {/* Conditional hero based on screen size */}
      <div className="block md:hidden">
        <MobilePlacementHero />
      </div>
      <div className="hidden md:block">
        <PlacementHero />
      </div>
      
      {/* Below-the-fold sections load only when scrolled into view */}
      <LazySection
        fallback={
          <div className="h-64 bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
        rootMargin="300px"
        priority={true}
      >
        <PlacementStats />
      </LazySection>
      
      <LazySection
        fallback={
          <div className="h-48 bg-white flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
        rootMargin="200px"
      >
        <PlacementProcess />
      </LazySection>
      
      <LazySection
        fallback={
          <div className="h-48 bg-gray-50 flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
        rootMargin="100px"
      >
        <PlacementSuccess />
      </LazySection>
      
      <LazySection
        fallback={
          <div className="h-40 bg-blue-50 flex items-center justify-center">
            <div className="text-center">
              <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
              <p className="text-xs text-gray-500">Loading partners...</p>
            </div>
          </div>
        }
        rootMargin="50px"
      >
        <PlacementPartners />
      </LazySection>
      
      <LazySection
        fallback={
          <div className="h-40 bg-white flex items-center justify-center">
            <div className="text-center">
              <div className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
              <p className="text-xs text-gray-500">Loading testimonials...</p>
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
