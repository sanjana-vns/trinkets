import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'

// Dynamically import non-critical components with loading optimization
const CoursesSection = dynamic(() => import('@/components/CoursesSection'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  ssr: true,
})

const AboutUsSection = dynamic(() => import('@/components/AboutUsSection'), {
  loading: () => <div className="h-96 bg-blue-50 animate-pulse" />,
  ssr: true,
})

const StatsSection = dynamic(() => import('@/components/StatsSection'), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse" />,
  ssr: true,
})

const PlacementSection = dynamic(() => import('@/components/PlacementSection'), {
  loading: () => <div className="h-96 bg-blue-50 animate-pulse" />,
  ssr: true,
})

const FAQSection = dynamic(() => import('@/components/FAQSection'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  ssr: true,
})

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <CoursesSection />
      <AboutUsSection />
      <StatsSection />
      <PlacementSection />
      <FAQSection />
    </div>
  )
}