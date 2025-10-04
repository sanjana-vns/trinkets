import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CoursesHero from '@/components/courses/CoursesHero'
import CourseCategories from '@/components/courses/CourseCategories'
import CourseDetails from '@/components/courses/CourseDetails'
import CourseFeatures from '@/components/courses/CourseFeatures'
import CourseTestimonials from '@/components/courses/CourseTestimonials'
import CourseEnrollment from '@/components/courses/CourseEnrollment'

export const metadata: Metadata = {
  title: 'Our Courses - Trinkets Institute | Professional IT Training & Placement',
  description: 'Explore comprehensive IT courses at Trinkets Institute. From programming to data science, web development to cybersecurity - find the perfect course to advance your career.',
  keywords: 'IT courses, programming training, web development, data science, cybersecurity, software training, placement guarantee',
  openGraph: {
    title: 'Our Courses - Trinkets Institute',
    description: 'Comprehensive IT training courses with placement assistance',
    images: ['/og-courses.jpg'],
  },
}

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Courses Hero Section */}
      <CoursesHero />
      
      {/* Course Categories with Filtering */}
      <CourseCategories />
      
      {/* Detailed Course Information */}
      <CourseDetails />
      
      {/* Course Features & Benefits */}
      <CourseFeatures />
      
      {/* Course-specific Testimonials */}
      <CourseTestimonials />
      
      {/* Enrollment Call-to-Action */}
      <CourseEnrollment />
      
      <Footer />
    </main>
  )
}