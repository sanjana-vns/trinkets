import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import AdvancedSEO from '@/components/AdvancedSEO'

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

const SEOContentSection = dynamic(() => import('@/components/SEOContentSection'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
  ssr: true,
})

const LocationSection = dynamic(() => import('@/components/LocationSection'), {
  loading: () => <div className="h-96 bg-blue-50 animate-pulse" />,
  ssr: true,
})

// Additional content section for piping course focus
const PipingCourseSection = dynamic(() => import('@/components/PipingCourseSection'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  ssr: true,
})

export default function Home() {
  return (
    <main className="min-h-screen" role="main">
      {/* SEO H1 - Hidden but accessible to search engines */}
      <h1 className="sr-only">Piping Course In Mumbai | Best Piping Design Training Institute | Trinkets Institute</h1>
      
      {/* Advanced SEO Structured Data */}
      <AdvancedSEO />
      
      {/* Breadcrumb structured data for homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://trinketsinstitute.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Piping Course In Mumbai",
                "item": "https://trinketsinstitute.com/courses/piping-design-course-mumbai"
              }
            ]
          })
        }}
      />
      
      {/* Hero Section - Above the fold */}
      <section aria-label="Hero banner for Piping Course in Mumbai">
        <Hero />
      </section>

      {/* Core Content Sections */}
      <section aria-label="Available courses">
        <CoursesSection />
      </section>
      
      <section aria-label="About Trinkets Institute">
        <AboutUsSection />
      </section>
      
      <article aria-label="Piping course details and curriculum">
        <PipingCourseSection />
      </article>
      
      <section aria-label="Institute statistics and achievements">
        <StatsSection />
      </section>
      
      <section aria-label="Student placement records">
        <PlacementSection />
      </section>
      
      <section aria-label="Frequently asked questions">
        <FAQSection />
      </section>
      
      <article aria-label="Comprehensive piping course information">
        <SEOContentSection />
      </article>
      
      <section aria-label="Institute location and contact">
        <LocationSection />
      </section>
    </main>
  )
}