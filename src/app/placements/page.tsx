import { Metadata } from "next"
import Link from "next/link"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Optimized dynamic loading for better mobile performance
const PlacementHero = dynamic(() => import('@/components/placement/PlacementHero'), {
  loading: () => (
    <div className="min-h-[60vh] bg-gradient-to-br from-slate-900 to-blue-900 animate-pulse flex items-center justify-center">
      <div className="text-white text-lg">Loading placement information...</div>
    </div>
  ),
  ssr: true,
})

const PlacementStats = dynamic(() => import('@/components/placement/PlacementStats'), {
  loading: () => <div className="h-96 bg-gradient-to-br from-slate-50 to-blue-50 animate-pulse rounded-lg"></div>,
  ssr: true,
})

const PlacementProcess = dynamic(() => import('@/components/placement/PlacementProcess'), {
  loading: () => <div className="h-96 bg-white animate-pulse"></div>,
  ssr: false, // Heavy component - load after interaction
})

const PlacementSuccess = dynamic(() => import('@/components/placement/PlacementSuccess'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse"></div>,
  ssr: false, // Heavy images - load after interaction
})

const PlacementPartners = dynamic(() => import('@/components/placement/PlacementPartners'), {
  loading: () => <div className="h-96 bg-blue-50 animate-pulse"></div>,
  ssr: false, // Many images - load after interaction
})

const PlacementTestimonials = dynamic(() => import('@/components/placement/PlacementTestimonials'), {
  loading: () => <div className="h-96 bg-white animate-pulse"></div>,
  ssr: false, // Heavy images - load after interaction
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
      {/* Progressive loading for better mobile performance */}
      <PlacementHero />
      
      <Suspense fallback={<div className="h-96 bg-gradient-to-br from-slate-50 to-blue-50 animate-pulse"></div>}>
        <PlacementStats />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-white animate-pulse"></div>}>
        <PlacementProcess />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse"></div>}>
        <PlacementSuccess />
      </Suspense>
      
      {/* Load heavy image components last */}
      <Suspense fallback={
        <div className="h-96 bg-blue-50 animate-pulse flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading company partners...</p>
          </div>
        </div>
      }>
        <PlacementPartners />
      </Suspense>
      
      <Suspense fallback={
        <div className="h-96 bg-white animate-pulse flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading student testimonials...</p>
          </div>
        </div>
      }>
        <PlacementTestimonials />
      </Suspense>
    </div>
  )
}
