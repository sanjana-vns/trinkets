import { Metadata } from 'next'
import Link from 'next/link'
import RelatedCourses from '@/components/RelatedCourses'

export const metadata: Metadata = {
  title: 'Best Piping Design Engineering Course in Mumbai | 100% Placement | Trinkets Institute',
  description: 'Join the #1 Piping Design Engineering Course in Mumbai at Trinkets Institute. Master PDMS, SP3D, AutoCAD Plant 3D, Caesar II with 100% placement assistance. Expert training for oil & gas industry careers in Mumbai.',
  keywords: [
    'piping design engineering course in mumbai',
    'best piping design course mumbai',
    'piping design training mumbai',
    'PDMS course mumbai',
    'SP3D training mumbai',
    'AutoCAD Plant 3D course mumbai',
    'Caesar II training mumbai',
    'oil and gas course mumbai',
    'petrochemical course mumbai',
    'piping stress analysis course mumbai',
    'plant design course mumbai',
    'engineering course mumbai',
    'piping engineer training mumbai',
    'industrial training mumbai',
    'placement assistance mumbai',
    'piping design certification mumbai',
    'oil industry course mumbai',
    'gas industry training mumbai',
    'pipe stress analysis mumbai',
    'plant layout course mumbai',
    'piping design software mumbai',
    'engineering career mumbai',
    'technical course mumbai',
    'professional training mumbai',
    'skilled development mumbai',
    'industry training mumbai',
    'career advancement mumbai',
    'job oriented course mumbai',
    'employment training mumbai',
    'vocational course mumbai'
  ],
  openGraph: {
    title: 'Best Piping Design Engineering Course in Mumbai | 100% Placement',
    description: 'Join the #1 Piping Design Engineering Course in Mumbai. Master PDMS, SP3D, AutoCAD Plant 3D, Caesar II with expert training and guaranteed placement assistance.',
    url: 'https://trinketsinstitute.com/courses/piping-design-engineering',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/courses/piping-design-engineering-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Piping Design Engineering Course in Mumbai',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/courses/piping-design-engineering',
  },
}

export default function PipingDesignEngineeringPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Piping Design Engineering Course in Mumbai",
    "description": "Comprehensive piping design engineering course in Mumbai covering PDMS, SP3D, AutoCAD Plant 3D, Caesar II with 100% placement assistance",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Trinkets Institute",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mumbai, Maharashtra",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400001",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": "English"
      }
    },
    "courseMode": ["in-person", "online"],
    "duration": "P6M",
    "inLanguage": "en",
    "educationalCredentialAwarded": "Certificate in Piping Design Engineering",
    "coursePrerequisites": "Basic engineering knowledge",
    "occupationalCredentialAwarded": "Piping Design Engineer",
    "teaches": [
      "PDMS (Plant Design Management System)",
      "SP3D (Smart Plant 3D)",
      "AutoCAD Plant 3D",
      "Caesar II Pipe Stress Analysis",
      "P&ID Development",
      "Piping Layout Design",
      "Stress Analysis",
      "Plant Design"
    ],
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "locationCreated": {
      "@type": "Place",
      "name": "Mumbai, Maharashtra, India"
    }
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the duration of piping design engineering course in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our comprehensive piping design engineering course in Mumbai is 6 months duration with both classroom and online training options available at Trinkets Institute."
        }
      },
      {
        "@type": "Question",
        "name": "Which software is taught in piping design course in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our piping design engineering course in Mumbai covers PDMS, SP3D, AutoCAD Plant 3D, Caesar II, P&ID development, and piping stress analysis software."
        }
      },
      {
        "@type": "Question",
        "name": "What is the placement rate for piping design course in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trinkets Institute provides 100% placement assistance for piping design engineering course in Mumbai with students placed in top oil & gas, petrochemical companies."
        }
      },
      {
        "@type": "Question",
        "name": "What are the career opportunities after piping design course in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After completing piping design engineering course in Mumbai, students can work as Piping Design Engineer, Plant Design Engineer, Stress Analysis Engineer, CAD Designer in oil & gas industry."
        }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      
      {/* Hero Section - Optimized for Primary Keyword */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Best Piping Design Engineering Course in Mumbai
              </h1>
              <p className="text-xl md:text-2xl mb-6">
                #1 Piping Design Engineering Course in Mumbai at Trinkets Institute - Master PDMS, SP3D, AutoCAD Plant 3D & Caesar II with 100% Placement Assistance
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">6 Months Duration in Mumbai</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">100% Placement Assistance</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Live Mumbai Projects</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Industry Expert Faculty</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Enroll in Mumbai Batch Today
                </Link>
                <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Download Mumbai Course Brochure
                </Link>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Choose Our Piping Design Engineering Course in Mumbai?</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span><strong>Mumbai Industry Focus:</strong> Course content specifically designed for Mumbai&apos;s oil & gas and petrochemical sectors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span><strong>100% Job Placement:</strong> Guaranteed placement assistance with top Mumbai companies like ONGC, BPCL, Reliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span><strong>Expert Mumbai Faculty:</strong> Learn from industry professionals with 15+ years experience in Mumbai&apos;s piping sector</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span><strong>Live Mumbai Projects:</strong> Work on actual piping design projects from Mumbai-based refineries and plants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span><strong>Comprehensive Software Training:</strong> Master PDMS, SP3D, AutoCAD Plant 3D, Caesar II with Mumbai industry standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span><strong>Mumbai Company Visits:</strong> Industrial visits to ONGC Mumbai, BPCL Mumbai refinery, and other major facilities</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">Mumbai Course Highlights</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-green-800">Duration</h4>
                    <p className="text-green-600">6 Months in Mumbai</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-blue-800">Training Mode</h4>
                    <p className="text-blue-600">Classroom/Online in Mumbai</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-purple-800">Certification</h4>
                    <p className="text-purple-600">Industry Recognized</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-orange-800">Projects</h4>
                    <p className="text-orange-600">Real Mumbai Industry</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Special Mumbai Batch Benefits:</h4>
                  <ul className="text-sm space-y-1">
                    <li>✓ Mumbai-based oil & gas company visits</li>
                    <li>✓ Local petrochemical industry networking</li>
                    <li>✓ Mumbai job placement assistance</li>
                    <li>✓ Post-course Mumbai alumni support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Training Section - Mumbai Specific */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Professional Software Training Modules - Mumbai&apos;s Best Piping Design Course</h2>
          <p className="text-center text-gray-600 mb-8">Master industry-leading piping design software with our comprehensive training in Mumbai</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">PDMS Training Mumbai</h3>
              <p className="text-blue-100 mb-4">Plant Design Management System</p>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• Advanced 3D Plant Modeling</li>
                <li>• Equipment Placement Techniques</li>
                <li>• Professional Pipe Routing</li>
                <li>• Intelligent Clash Detection</li>
                <li>• Automated Drawing Generation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">SP3D Course Mumbai</h3>
              <p className="text-green-100 mb-4">Smart Plant 3D Excellence</p>
              <ul className="space-y-2 text-green-100 text-sm">
                <li>• Intelligent 3D Modeling</li>
                <li>• Advanced Catalog Management</li>
                <li>• Equipment Design Mastery</li>
                <li>• Expert Piping Design</li>
                <li>• Professional Report Generation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Caesar II Mumbai</h3>
              <p className="text-purple-100 mb-4">Pipe Stress Analysis Expertise</p>
              <ul className="space-y-2 text-purple-100 text-sm">
                <li>• Comprehensive Static Analysis</li>
                <li>• Advanced Dynamic Analysis</li>
                <li>• Professional Stress Evaluation</li>
                <li>• Optimal Support Design</li>
                <li>• Complete Code Compliance</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">AutoCAD Plant 3D</h3>
              <p className="text-orange-100 mb-4">Comprehensive Plant Design</p>
              <ul className="space-y-2 text-orange-100 text-sm">
                <li>• Professional P&ID Creation</li>
                <li>• Advanced 3D Modeling</li>
                <li>• Spec-driven Design Excellence</li>
                <li>• Orthographic Views Mastery</li>
                <li>• Expert Isometric Generation</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Mumbai&apos;s Most Advanced Piping Design Software Training</h3>
            <p className="text-gray-700">
              Our piping design engineering course in Mumbai provides hands-on training on the latest versions of industry software. 
              Students get access to licensed software and work on real Mumbai-based oil & gas projects for practical experience.
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions - Mumbai SEO */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions - Piping Design Engineering Course in Mumbai</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">What is the duration of piping design engineering course in Mumbai?</h3>
                <p className="text-gray-600">Our comprehensive piping design engineering course in Mumbai is 6 months duration with both classroom and online training options available.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Which software is covered in piping design course Mumbai?</h3>
                <p className="text-gray-600">We provide training on PDMS, SP3D, AutoCAD Plant 3D, Caesar II, and P&ID development software with hands-on projects in Mumbai.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">What is the fee structure for piping design course in Mumbai?</h3>
                <p className="text-gray-600">Our piping design engineering course fees in Mumbai are competitive with EMI options available. Contact us for detailed fee structure and early bird discounts.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Is placement assistance provided for Mumbai students?</h3>
                <p className="text-gray-600">Yes, we provide 100% placement assistance for piping design course Mumbai students with partnerships with top oil & gas companies in Mumbai region.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">What are the career opportunities after piping design course in Mumbai?</h3>
                <p className="text-gray-600">Students can work as Piping Design Engineer, Stress Analysis Engineer, Plant Design Engineer in ONGC, BPCL, Reliance, L&T and other Mumbai companies.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you provide practical training in Mumbai?</h3>
                <p className="text-gray-600">Yes, our piping design engineering course in Mumbai includes hands-on training on live projects from Mumbai&apos;s oil & gas and petrochemical industries.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">What is the salary range after piping design course Mumbai?</h3>
                <p className="text-gray-600">Freshers can expect ₹4-6 LPA while experienced professionals earn ₹8-15 LPA in Mumbai&apos;s oil & gas sector after completing our course.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Can working professionals join piping design course in Mumbai?</h3>
                <p className="text-gray-600">Yes, we offer weekend and evening batches for working professionals in Mumbai with flexible schedules and online learning options.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
            <h3 className="text-xl font-bold mb-2">Still Have Questions About Our Piping Design Engineering Course in Mumbai?</h3>
            <p className="mb-4">Get personalized guidance from our Mumbai-based counselors</p>
            <Link href="/contact" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Mumbai Office Now
            </Link>
          </div>
        </div>
      </section>

      {/* Related Courses Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <RelatedCourses 
            currentCourse="/courses/piping-design-engineering"
          />
        </div>
      </section>

      {/* Enrollment CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Piping Design Career in Mumbai?</h2>
          <p className="text-xl mb-6">Join hundreds of successful piping engineers who started their journey with us in Mumbai.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Next Mumbai Batch: </span>15th November 2025
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Limited Seats: </span>Only 20 Students
            </div>
          </div>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Enroll Now - Book Your Mumbai Seat
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Call Mumbai Office for Consultation
            </Link>
          </div>
          <p className="text-blue-100 text-sm mt-4">
            💡 Special Mumbai Offer: Early Bird Discount Available - <Link href="/contact" className="underline hover:text-white">Contact Us Today!</Link>
          </p>
        </div>
      </section>

      {/* Browse All Courses Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore More Engineering Courses in Mumbai</h2>
          <p className="text-gray-600 mb-6">Discover our comprehensive range of professional engineering courses designed for Mumbai&apos;s industrial growth</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              View All Mumbai Courses
            </Link>
            <Link href="/courses#courses-hero" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Mumbai Courses Overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}