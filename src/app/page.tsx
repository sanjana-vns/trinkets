import Hero from '@/components/Hero'
import CoursesSection from '@/components/CoursesSection'
import StatsSection from '@/components/StatsSection'
import PlacementSection from '@/components/PlacementSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <CoursesSection />
      <StatsSection />
      <PlacementSection />
    </div>
  )
}