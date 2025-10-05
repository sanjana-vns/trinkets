import { Metadata } from "next"
import Link from "next/link"
import PlacementHero from '@/components/placement/PlacementHero'
import PlacementStats from '@/components/placement/PlacementStats'
import PlacementProcess from '@/components/placement/PlacementProcess'
import PlacementSuccess from '@/components/placement/PlacementSuccess'
import CompanyPartners from '@/components/placement/CompanyPartners'
import PlacementTestimonials from '@/components/placement/PlacementTestimonials'

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
      <PlacementHero />
      <PlacementStats />
      <PlacementProcess />
      <PlacementSuccess />
      <CompanyPartners />
      <PlacementTestimonials />
    </div>
  )
}
