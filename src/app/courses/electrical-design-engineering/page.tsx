import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Electrical Design Engineering Course in Mumbai | Professional Training Institute',
  description: 'Master Electrical Design Engineering Course in Mumbai with AutoCAD Electrical, ETAP, EPLAN training. Professional electrical system design certification for power distribution, lighting design and industrial automation.',
  keywords: 'Electrical Design Engineering Course in Mumbai, electrical design training Mumbai, AutoCAD Electrical course, ETAP training, EPLAN course, electrical system design, power distribution course, electrical CAD training Mumbai, electrical engineering institute Mumbai',
  openGraph: {
    title: 'Electrical Design Engineering Course in Mumbai | Professional Training Institute',
    description: 'Master Electrical Design Engineering Course in Mumbai with AutoCAD Electrical, ETAP, EPLAN training. Professional certification for electrical system design.',
    type: 'website',
    url: 'https://trinkets.com/courses/electrical-design-engineering',
  },
  alternates: {
    canonical: 'https://trinkets.com/courses/electrical-design-engineering',
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
}

const RelatedCourses = () => {
  const relatedCourses = [
    {
      title: "AutoCAD Mechanical Design",
      description: "Master 2D/3D design, Inventor, SolidWorks for manufacturing",
      duration: "4 Months",
      link: "/courses/autocad-mechanical-design"
    },
    {
      title: "MEP Engineering",
      description: "Complete MEP training with AutoCAD MEP, Revit MEP, HAP",
      duration: "6 Months", 
      link: "/courses/mep-engineering"
    },
    {
      title: "Instrumentation & Control",
      description: "Process control, automation and instrumentation design",
      duration: "5 Months",
      link: "/courses/process-engineering"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Engineering Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-medium">{course.duration}</span>
                <Link href={course.link} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ElectricalDesignEngineeringCoursePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Electrical Design Engineering Course in Mumbai",
    "description": "Professional Electrical Design Engineering Course in Mumbai covering AutoCAD Electrical, ETAP, EPLAN with hands-on training for power distribution, lighting design and industrial automation systems.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "TIT India",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": ["classroom", "online"],
      "duration": "P6M",
      "location": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      }
    },
    "coursePrerequisites": "Basic electrical engineering knowledge",
    "occupationalCredentialAwarded": "Electrical Design Engineering Certificate",
    "educationalLevel": "Professional",
    "audience": {
      "@type": "EducationalAudience",
      "audienceType": "electrical engineers, fresh graduates, professionals"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-700/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <span className="text-blue-200 font-semibold text-sm">⚡ Professional Training</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Electrical Design Engineering Course in Mumbai
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Master electrical system design with AutoCAD Electrical, ETAP, and EPLAN for power distribution, lighting design, and industrial automation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Enroll Now
                </Link>
                <Link href="#curriculum" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  View Curriculum
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Master Electrical Design Engineering in Mumbai</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our comprehensive Electrical Design Engineering Course in Mumbai covers the complete spectrum of electrical system design from power distribution to industrial automation. Learn industry-standard software and methodologies used by leading electrical engineering companies in Mumbai and across India.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  This course is designed for electrical engineers, fresh graduates, and professionals looking to enhance their skills in electrical design engineering with hands-on training on AutoCAD Electrical, ETAP, EPLAN, and other essential tools.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
                    <p className="text-blue-600 font-medium">6 Months</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Rating</h3>
                    <p className="text-green-600 font-medium">⭐ 4.8/5</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Students</h3>
                    <p className="text-purple-600 font-medium">580+ Enrolled</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Certification</h3>
                    <p className="text-orange-600 font-medium">Industry Recognized</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What You&apos;ll Learn</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>Power distribution system design and analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>Lighting design and illumination calculations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>Industrial automation and control systems</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>Electrical safety and protection systems</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>Cable routing and panel design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>Load calculations and energy management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section id="curriculum" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Electrical Design Engineering Course Curriculum</h2>
              <p className="text-lg text-gray-600">Comprehensive modules covering all aspects of electrical design engineering</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Electrical Fundamentals</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Basic electrical engineering principles</li>
                  <li>• Power systems overview</li>
                  <li>• Electrical codes and standards</li>
                  <li>• Safety regulations and practices</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-indigo-600 text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AutoCAD Electrical</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Electrical schematic design</li>
                  <li>• Panel layout and design</li>
                  <li>• Wire numbering and reports</li>
                  <li>• Symbol libraries and standards</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-600 text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Power System Analysis</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Load flow analysis</li>
                  <li>• Short circuit calculations</li>
                  <li>• Protection coordination</li>
                  <li>• Power quality analysis</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">ETAP Software</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Power system modeling</li>
                  <li>• Arc flash analysis</li>
                  <li>• Motor starting studies</li>
                  <li>• Reliability assessment</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-orange-600 text-xl font-bold">5</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">EPLAN & Design</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Control panel design</li>
                  <li>• Terminal strip generation</li>
                  <li>• Cable and harness design</li>
                  <li>• 3D cabinet layout</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-red-600 text-xl font-bold">6</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Implementation</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Real-world project execution</li>
                  <li>• Documentation and drawings</li>
                  <li>• Testing and commissioning</li>
                  <li>• Industry best practices</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Software Tools */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry-Standard Software Tools</h2>
              <p className="text-lg text-gray-600">Master the most demanded electrical design software in Mumbai&apos;s engineering industry</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">AutoCAD Electrical</h3>
                <p className="text-gray-600 text-sm">Electrical schematic and panel design software</p>
              </div>
              <div className="text-center p-6 bg-indigo-50 rounded-lg">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔌</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">ETAP</h3>
                <p className="text-gray-600 text-sm">Power system analysis and simulation</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔧</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">EPLAN</h3>
                <p className="text-gray-600 text-sm">Control panel and automation design</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💡</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">DIALux</h3>
                <p className="text-gray-600 text-sm">Professional lighting design software</p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Prospects in Mumbai */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Opportunities in Mumbai</h2>
              <p className="text-lg text-gray-600">Electrical Design Engineering professionals are in high demand across Mumbai&apos;s industrial and infrastructure sectors</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Job Roles</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Electrical Design Engineer</li>
                  <li>• Power System Engineer</li>
                  <li>• Automation Design Engineer</li>
                  <li>• Electrical Consultant</li>
                  <li>• Project Engineer - Electrical</li>
                  <li>• Lighting Design Specialist</li>
                  <li>• Control System Designer</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Top Companies in Mumbai</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Tata Power</li>
                  <li>• Larsen & Toubro</li>
                  <li>• Siemens India</li>
                  <li>• ABB India</li>
                  <li>• Schneider Electric</li>
                  <li>• Thermax</li>
                  <li>• Crompton Greaves</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Salary Range in Mumbai</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Fresher: ₹3.5-5.5 LPA</li>
                  <li>• 2-5 Years: ₹6-10 LPA</li>
                  <li>• 5-8 Years: ₹10-16 LPA</li>
                  <li>• Senior Designer: ₹16-25 LPA</li>
                  <li>• Design Manager: ₹25-35 LPA</li>
                  <li>• Principal Engineer: ₹35+ LPA</li>
                  <li>• Consultant: ₹40+ LPA</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Electrical Design Engineering Course in Mumbai?</h2>
              <p className="text-lg text-gray-600">Experience the best electrical design engineering training in Mumbai with industry experts</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">👨‍🏫</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Faculty</h3>
                <p className="text-gray-600 text-sm">Learn from industry professionals with 15+ years of experience in electrical design engineering</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🏗️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Real Projects</h3>
                <p className="text-gray-600 text-sm">Work on actual electrical design projects from Mumbai&apos;s leading engineering companies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl">🎓</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Industry Certification</h3>
                <p className="text-gray-600 text-sm">Receive industry-recognized certification upon successful completion of the course</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">💼</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Placement Support</h3>
                <p className="text-gray-600 text-sm">100% placement assistance with top electrical engineering companies in Mumbai</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start Your Electrical Design Engineering Career in Mumbai
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join Mumbai&apos;s premier Electrical Design Engineering Course and become an expert in electrical system design with industry-standard tools and methodologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Enroll Now - Limited Seats
              </Link>
              <Link href="/contact" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Download Course Brochure
              </Link>
            </div>
          </div>
        </section>

        {/* Related Courses */}
        <RelatedCourses />
      </div>
    </>
  )
}