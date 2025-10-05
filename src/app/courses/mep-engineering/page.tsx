import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import RelatedCourses from '@/components/RelatedCourses'

export const metadata: Metadata = {
  title: 'MEP Engineering Course in Mumbai - Master Mechanical, Electrical & Plumbing Design | Trinkets Institute',
  description: 'Professional MEP Engineering Course in Mumbai with AutoCAD MEP, Revit MEP, HAP, TRACE 700 training. 100% placement assistance in MEP consultancy, construction & building design industries. Industry-certified curriculum.',
  keywords: [
    'MEP engineering course Mumbai',
    'MEP engineering training Mumbai',
    'MEP design course',
    'mechanical electrical plumbing course',
    'AutoCAD MEP training Mumbai',
    'Revit MEP course Mumbai',
    'MEP consultancy training',
    'building services engineering',
    'HVAC design course Mumbai',
    'electrical design training',
    'plumbing design course',
    'MEP certification Mumbai',
    'building services course',
    'MEP engineering institute Mumbai',
    'MEP design training',
    'construction MEP course',
    'MEP project training',
    'building MEP systems',
    'MEP engineering career',
    'MEP design software training'
  ].join(', '),
  authors: [{ name: 'Trinkets Institute of Technology' }],
  creator: 'Trinkets Institute of Technology',
  publisher: 'Trinkets Institute of Technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://trinketsinstitute.com'),
  alternates: {
    canonical: '/courses/mep-engineering',
  },
  openGraph: {
    title: 'MEP Engineering Course in Mumbai - Master Building Services Design | Trinkets Institute',
    description: 'Professional MEP Engineering training in Mumbai with industry-leading software. 100% placement assistance in MEP consultancy and construction industries.',
    url: 'https://trinketsinstitute.com/courses/mep-engineering',
    siteName: 'Trinkets Institute',
    images: [
      {
        url: '/images/mep-engineering-course-og.jpg',
        width: 1200,
        height: 630,
        alt: 'MEP Engineering Course in Mumbai - Trinkets Institute',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEP Engineering Course in Mumbai - Master Building Services | Trinkets Institute',
    description: 'Learn professional MEP design with AutoCAD MEP, Revit MEP, HAP, TRACE 700. 100% placement assistance in Mumbai MEP industry.',
    images: ['/images/mep-engineering-course-twitter.jpg'],
    creator: '@TrinketsInstitute',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Engineering Course',
}

export default function MEPEngineeringCoursePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "MEP Engineering Course in Mumbai",
    "description": "Comprehensive MEP (Mechanical, Electrical & Plumbing) Engineering course with AutoCAD MEP, Revit MEP, HAP, TRACE 700 training in Mumbai",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Trinkets Institute",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Engineering Hub",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400001",
        "addressCountry": "IN"
      },
      "url": "https://trinketsinstitute.com",
      "telephone": "+91-9876543210"
    },
    "offers": {
      "@type": "Offer",
      "category": "Professional Training",
      "availability": "https://schema.org/InStock"
    },
    "courseCode": "MEP-101",
    "educationalLevel": "Professional",
    "teaches": [
      "AutoCAD MEP",
      "Revit MEP",
      "HAP Software",
      "TRACE 700",
      "MEP Design Principles",
      "Building Services Engineering",
      "HVAC System Design",
      "Electrical System Design",
      "Plumbing System Design",
      "Fire Fighting Systems",
      "MEP Coordination",
      "BIM for MEP"
    ],
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": ["Classroom", "Online"],
      "location": {
        "@type": "Place",
        "name": "Trinkets Institute",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Courses', href: '/courses' },
            { label: 'MEP Engineering Course in Mumbai', href: '/courses/mep-engineering' }
          ]}
        />
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MEP Engineering Course in Mumbai
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Master Mechanical, Electrical & Plumbing Design with Industry-Leading Software
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">AutoCAD MEP</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Revit MEP</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">HAP Software</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">TRACE 700</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">100% Placement</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Enroll Now - Limited Seats
              </Link>
              <Link href="#curriculum" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                View Curriculum
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">6 Months</div>
              <div className="text-gray-600">Course Duration</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-gray-600">Placement Assistance</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-gray-600">Students Placed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">₹8L+</div>
              <div className="text-gray-600">Average Package</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Best MEP Engineering Course in Mumbai
          </h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-xl leading-relaxed mb-6">
              Transform your career with Mumbai&apos;s most comprehensive <strong>MEP Engineering Course</strong>. Our industry-aligned curriculum covers Mechanical, Electrical, and Plumbing design using cutting-edge software like AutoCAD MEP, Revit MEP, HAP, and TRACE 700.
            </p>
            <p className="leading-relaxed mb-6">
              Located in the heart of Mumbai, Trinkets Institute offers the premier <strong>MEP engineering training</strong> that has successfully placed over 500+ students in top MEP consultancy firms, construction companies, and building design organizations across Mumbai and India.
            </p>
            <p className="leading-relaxed">
              Our <strong>MEP design course</strong> is meticulously crafted by industry experts who bring real-world project experience into the classroom, ensuring you&apos;re job-ready from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose This MEP Course */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our MEP Engineering Course in Mumbai?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry-Certified Curriculum</h3>
              <p className="text-gray-600">Learn from Mumbai&apos;s top MEP engineering professionals with 10+ years industry experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Latest MEP Software Training</h3>
              <p className="text-gray-600">Master AutoCAD MEP, Revit MEP, HAP, TRACE 700 with hands-on project experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Placement Guarantee</h3>
              <p className="text-gray-600">Guaranteed job placement in Mumbai&apos;s top MEP consultancy and construction companies</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Real Project Training</h3>
              <p className="text-gray-600">Work on live MEP projects from Mumbai&apos;s leading construction and infrastructure companies</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Faculty from Mumbai</h3>
              <p className="text-gray-600">Learn from Mumbai&apos;s most experienced MEP engineers and consultants</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry Certification</h3>
              <p className="text-gray-600">Receive globally recognized MEP engineering certification upon course completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Curriculum */}
      <section id="curriculum" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Comprehensive MEP Engineering Curriculum
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Module 1 */}
            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Module 1: MEP Fundamentals & Building Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• Introduction to MEP Engineering</li>
                  <li>• Building Services Overview</li>
                  <li>• MEP Design Standards & Codes</li>
                  <li>• HVAC System Fundamentals</li>
                  <li>• Electrical Systems Basics</li>
                </ul>
                <ul className="space-y-2 text-gray-600">
                  <li>• Plumbing & Fire Fighting Systems</li>
                  <li>• Energy Efficiency in Buildings</li>
                  <li>• Green Building Concepts</li>
                  <li>• MEP Coordination Principles</li>
                  <li>• Mumbai Building Bye-laws</li>
                </ul>
              </div>
            </div>

            {/* Module 2 */}
            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Module 2: AutoCAD MEP Mastery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• AutoCAD MEP Interface & Tools</li>
                  <li>• MEP Drawing Standards</li>
                  <li>• HVAC System Design & Layout</li>
                  <li>• Electrical Circuit Design</li>
                  <li>• Plumbing System Layout</li>
                </ul>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fire Fighting System Design</li>
                  <li>• MEP Symbols & Annotations</li>
                  <li>• 3D MEP Modeling</li>
                  <li>• Clash Detection & Resolution</li>
                  <li>• MEP Drawing Documentation</li>
                </ul>
              </div>
            </div>

            {/* Module 3 */}
            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Module 3: Revit MEP & BIM</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• Revit MEP Fundamentals</li>
                  <li>• BIM for MEP Engineering</li>
                  <li>• Mechanical Systems in Revit</li>
                  <li>• Electrical Systems Design</li>
                  <li>• Plumbing & Fire Protection</li>
                </ul>
                <ul className="space-y-2 text-gray-600">
                  <li>• MEP Families Creation</li>
                  <li>• System Analysis & Sizing</li>
                  <li>• Coordination Models</li>
                  <li>• Quantity Takeoffs</li>
                  <li>• Construction Documentation</li>
                </ul>
              </div>
            </div>

            {/* Module 4 */}
            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Module 4: HVAC Design Software (HAP & TRACE 700)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• HAP Software Fundamentals</li>
                  <li>• Load Calculations</li>
                  <li>• System Sizing & Selection</li>
                  <li>• Energy Analysis</li>
                  <li>• TRACE 700 Basics</li>
                </ul>
                <ul className="space-y-2 text-gray-600">
                  <li>• Building Energy Modeling</li>
                  <li>• HVAC System Optimization</li>
                  <li>• Energy Code Compliance</li>
                  <li>• Life Cycle Cost Analysis</li>
                  <li>• Reports & Documentation</li>
                </ul>
              </div>
            </div>

            {/* Module 5 */}
            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Module 5: Real Project Implementation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• Live MEP Project Analysis</li>
                  <li>• Mumbai Construction Case Studies</li>
                  <li>• MEP Coordination Meetings</li>
                  <li>• Value Engineering</li>
                  <li>• Project Documentation</li>
                </ul>
                <ul className="space-y-2 text-gray-600">
                  <li>• Site Visit & Inspection</li>
                  <li>• MEP Installation Supervision</li>
                  <li>• Commissioning & Testing</li>
                  <li>• Final Portfolio Development</li>
                  <li>• Industry Presentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            MEP Engineering Career Opportunities in Mumbai
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">MEP Design Engineer</h3>
              <p className="text-gray-600 mb-4">Design mechanical, electrical, and plumbing systems for buildings</p>
              <div className="text-2xl font-bold text-gray-800">₹6-12 LPA</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">HVAC Design Consultant</h3>
              <p className="text-gray-600 mb-4">Specialize in heating, ventilation, and air conditioning systems</p>
              <div className="text-2xl font-bold text-gray-800">₹8-15 LPA</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">Project Coordinator</h3>
              <p className="text-gray-600 mb-4">Coordinate MEP systems in large construction projects</p>
              <div className="text-2xl font-bold text-gray-800">₹7-14 LPA</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">MEP Supervisor</h3>
              <p className="text-gray-600 mb-4">Supervise MEP installation and commissioning on sites</p>
              <div className="text-2xl font-bold text-gray-800">₹5-10 LPA</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">Building Services Engineer</h3>
              <p className="text-gray-600 mb-4">Design and optimize building services for efficiency</p>
              <div className="text-2xl font-bold text-gray-800">₹9-18 LPA</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">MEP Consultant</h3>
              <p className="text-gray-600 mb-4">Provide expert MEP consulting services to clients</p>
              <div className="text-2xl font-bold text-gray-800">₹12-25 LPA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Partners */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our MEP Engineering Placement Partners in Mumbai
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
            <div className="font-semibold text-gray-700">L&T</div>
            <div className="text-sm text-gray-500">Construction</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
            <div className="font-semibold text-gray-700">Godrej</div>
            <div className="text-sm text-gray-500">Properties</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
            <div className="font-semibold text-gray-700">Shapoorji</div>
            <div className="text-sm text-gray-500">Pallonji</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
            <div className="font-semibold text-gray-700">Tata</div>
            <div className="text-sm text-gray-500">Projects</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
            <div className="font-semibold text-gray-700">Punj Lloyd</div>
            <div className="text-sm text-gray-500">Engineering</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
            <div className="font-semibold text-gray-700">JLL</div>
            <div className="text-sm text-gray-500">India</div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            MEP Engineering Success Stories from Mumbai
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold">RS</span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold">Rohit Sharma</div>
                  <div className="text-sm text-gray-500">MEP Design Engineer at L&T</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &ldquo;The MEP course at Trinkets transformed my career. I got placed at L&T Mumbai with a 10 LPA package. The practical training and real project exposure made all the difference.&rdquo;
              </p>
              <div className="mt-4 text-indigo-600 font-semibold">Package: ₹10 LPA</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold">PP</span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold">Priya Patel</div>
                  <div className="text-sm text-gray-500">HVAC Consultant at Godrej</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &ldquo;Best MEP engineering institute in Mumbai! The AutoCAD MEP and Revit training was comprehensive. Now working as HVAC consultant earning 12 LPA.&rdquo;
              </p>
              <div className="mt-4 text-indigo-600 font-semibold">Package: ₹12 LPA</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold">AK</span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold">Arjun Kumar</div>
                  <div className="text-sm text-gray-500">Project Coordinator at Shapoorji Pallonji</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &ldquo;Mumbai&apos;s top MEP training center! The faculty&apos;s industry experience and placement support helped me secure a project coordinator role with 14 LPA package.&rdquo;
              </p>
              <div className="mt-4 text-indigo-600 font-semibold">Package: ₹14 LPA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          MEP Engineering Course Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Flexible Learning Options</h3>
                <p className="text-gray-600">Weekend and weekday batches available to suit your schedule in Mumbai</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Industry-Standard Software</h3>
                <p className="text-gray-600">Latest versions of AutoCAD MEP, Revit MEP, HAP, and TRACE 700</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Live Project Training</h3>
                <p className="text-gray-600">Work on real MEP projects from Mumbai&apos;s construction industry</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Resume Building Support</h3>
                <p className="text-gray-600">Professional resume and portfolio development for MEP engineers</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Interview Preparation</h3>
                <p className="text-gray-600">Mock interviews and technical preparation for MEP engineering roles</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Industry Networking</h3>
                <p className="text-gray-600">Connect with Mumbai&apos;s MEP engineering professionals and companies</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Lifetime Support</h3>
                <p className="text-gray-600">Continued support and guidance throughout your MEP engineering career</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Global Certification</h3>
                <p className="text-gray-600">Industry-recognized MEP engineering certification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked Questions - MEP Engineering Course Mumbai
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-2">What is the duration of the MEP Engineering Course in Mumbai?</h3>
                <p className="text-gray-600">Our comprehensive MEP engineering course duration is 6 months with flexible weekend and weekday batch options in Mumbai.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-2">What software will I learn in this MEP course?</h3>
                <p className="text-gray-600">You&apos;ll master AutoCAD MEP, Revit MEP, HAP software, TRACE 700, and other industry-standard MEP design software used in Mumbai&apos;s construction industry.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-2">What is the placement record for MEP engineering students?</h3>
                <p className="text-gray-600">We have 100% placement assistance with 95% successful placements in Mumbai&apos;s top MEP consultancy firms and construction companies with packages ranging from 6-15 LPA.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-2">Is this MEP course suitable for freshers?</h3>
                <p className="text-gray-600">Yes, our MEP engineering course is designed for both freshers and working professionals. We start from basics and progress to advanced MEP design concepts.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-2">What are the career opportunities after completing MEP course in Mumbai?</h3>
                <p className="text-gray-600">Career opportunities include MEP Design Engineer, HVAC Consultant, Building Services Engineer, Project Coordinator, and MEP Supervisor roles in Mumbai&apos;s construction and consultancy sector.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <RelatedCourses 
            currentCourse="/courses/mep-engineering"
          />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your MEP Engineering Career in Mumbai?</h2>
          <p className="text-xl mb-6">Join Mumbai&apos;s best MEP engineering course and transform your career with 100% placement assistance.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Course Fee: </span>Contact for Details
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Duration: </span>6 Months
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-lg">
              <span className="font-semibold">Limited Seats: </span>Only 20 Students
            </div>
          </div>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link href="/contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Enroll Now - Book Your Seat
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              Call for Consultation
            </Link>
          </div>
          <p className="text-indigo-100 text-sm mt-4">
            💡 Special Offer: Early Bird Discount Available - <Link href="/contact" className="underline hover:text-white">Contact Us Today!</Link>
          </p>
        </div>
      </section>

      {/* Browse All Courses Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore More Engineering Courses</h2>
          <p className="text-gray-600 mb-6">Discover our comprehensive range of professional engineering courses designed for career growth</p>
          <Link href="/courses" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
            View All Courses
          </Link>
        </div>
      </section>
    </div>
  )
}