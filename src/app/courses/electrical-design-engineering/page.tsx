import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Electrical Design Engineering Course in Mumbai | Professional Training Institute | TIT India',
  description: 'Master Electrical Design Engineering Course in Mumbai with AutoCAD Electrical, ETAP, EPLAN training. Professional electrical system design certification for power distribution, lighting design, industrial automation, panel design, and cable routing with hands-on training.',
  keywords: 'Electrical Design Engineering Course in Mumbai, electrical design training Mumbai, AutoCAD Electrical course Mumbai, ETAP training Mumbai, EPLAN course Mumbai, electrical system design course, power distribution course Mumbai, electrical CAD training Mumbai, electrical engineering institute Mumbai, lighting design course, industrial automation training, panel design course, cable routing training, electrical safety course, protection systems training, load calculation course, energy management training, electrical consultant course Mumbai',
  openGraph: {
    title: 'Electrical Design Engineering Course in Mumbai | Professional Training Institute',
    description: 'Master Electrical Design Engineering Course in Mumbai with AutoCAD Electrical, ETAP, EPLAN training. Professional certification for electrical system design with hands-on training and 100% placement support.',
    type: 'website',
    url: 'https://trinketsinstitute.com/courses/electrical-design-engineering',
    images: [
      {
        url: 'https://trinketsinstitute.com/images/electrical-design-course-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Electrical Design Engineering Course in Mumbai - Professional Training',
      },
    ],
  },
  alternates: {
    canonical: 'https://trinketsinstitute.com/courses/electrical-design-engineering',
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
        {/* Creative Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-700/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
                <span className="text-blue-200 font-semibold text-sm mr-2">⚡</span>
                <span className="text-blue-100 font-semibold">Professional Electrical Design Training</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-bold mb-8">
                <span className="inline-block">Electrical Design</span>{' '}
                <span className="text-purple-300">Engineering Course</span>{' '}
                <span className="text-blue-300">in Mumbai</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
                Master electrical system design with AutoCAD Electrical, ETAP, and EPLAN for power distribution, lighting design, and industrial automation in Mumbai
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link href="/contact" className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  ⚡ Enroll Now - Limited Seats
                </Link>
                <Link href="#curriculum" className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  📚 View Curriculum
                </Link>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-white">6</div>
                  <div className="text-blue-200 text-sm">Months Duration</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-white">4.8⭐</div>
                  <div className="text-blue-200 text-sm">Student Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-white">580+</div>
                  <div className="text-blue-200 text-sm">Students Trained</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-blue-200 text-sm">Placement Support</div>
                </div>
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

        {/* Mumbai Industry Focus */}
        <section className="py-16 bg-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Electrical Design Engineering Opportunities in Mumbai</h2>
              <p className="text-lg text-gray-600">Mumbai is India&apos;s financial and industrial capital with massive opportunities for electrical design professionals</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Commercial Buildings</h3>
                <p className="text-gray-600 text-center mb-4">Nariman Point, BKC, Lower Parel, Andheri</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Office complex electrical design</li>
                  <li>• Shopping mall power systems</li>
                  <li>• Hotel electrical infrastructure</li>
                  <li>• Smart building automation</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl">🏭</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Manufacturing Units</h3>
                <p className="text-gray-600 text-center mb-4">Mahindra, Godrej, Bajaj, Tata Motors</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Industrial power distribution</li>
                  <li>• Motor control centers</li>
                  <li>• Factory automation systems</li>
                  <li>• Energy management systems</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🚇</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Infrastructure Projects</h3>
                <p className="text-gray-600 text-center mb-4">Mumbai Metro, MMRDA, Airport Projects</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Transit electrical systems</li>
                  <li>• Airport terminal design</li>
                  <li>• Highway lighting design</li>
                  <li>• Smart city infrastructure</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Mumbai Advantage for Electrical Design Engineers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">🌟 Corporate Headquarters</h4>
                  <p className="text-gray-600 mb-4">Mumbai houses head offices of Tata Power, L&T Electrical, Siemens, ABB, Schneider Electric offering direct career opportunities.</p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">💼 Diverse Projects</h4>
                  <p className="text-gray-600">From residential towers to industrial complexes, Mumbai offers exposure to all types of electrical design projects.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">🎯 Consulting Opportunities</h4>
                  <p className="text-gray-600 mb-4">Mumbai&apos;s construction boom creates massive demand for electrical design consultants and freelance opportunities.</p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">📈 Premium Salaries</h4>
                  <p className="text-gray-600">Electrical design engineers in Mumbai command 25-40% higher salaries compared to other Indian cities due to high demand.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Voice Search Optimized */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions - Electrical Design Engineering Course in Mumbai</h2>
              <p className="text-lg text-gray-600">Get answers to common questions about our comprehensive electrical design engineering training</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What is Electrical Design Engineering and why should I learn it in Mumbai?</h3>
                <p className="text-gray-600">Electrical Design Engineering involves designing electrical systems for buildings, industries, and infrastructure. Learning in Mumbai provides access to India&apos;s largest industrial and commercial hub, with opportunities in companies like Tata Power, L&T, Siemens, ABB, and numerous engineering consultancies seeking certified electrical design professionals.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How long does the Electrical Design Engineering course take in Mumbai?</h3>
                <p className="text-gray-600">Our comprehensive Electrical Design Engineering course in Mumbai takes 6 months to complete, covering AutoCAD Electrical, ETAP, EPLAN, power distribution design, lighting systems, and industrial automation. Weekend and evening batches are available for working professionals.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Which software will I learn in the Electrical Design Engineering course?</h3>
                <p className="text-gray-600">You&apos;ll master industry-standard software including AutoCAD Electrical for schematic design, ETAP for power system analysis, EPLAN for control panel design, DIALux for lighting design, and other essential electrical design tools used by top companies in Mumbai.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What salary can I expect after Electrical Design Engineering certification in Mumbai?</h3>
                <p className="text-gray-600">Electrical Design Engineers in Mumbai can expect starting salaries of ₹3.5-5.5 LPA for freshers, ₹6-10 LPA for 2-5 years experience, ₹10-16 LPA for senior designers, and ₹25-35+ LPA for design managers and principal engineers in Mumbai&apos;s electrical industry.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Is online Electrical Design Engineering training available from Mumbai?</h3>
                <p className="text-gray-600">Yes, we offer both online and classroom Electrical Design Engineering training from Mumbai. Online sessions include live lectures, hands-on software practice, real project work, individual mentoring, and access to our Mumbai-based industry expert faculty.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Which companies in Mumbai hire Electrical Design Engineers?</h3>
                <p className="text-gray-600">Top companies hiring Electrical Design Engineers in Mumbai include Tata Power, Larsen & Toubro, Siemens India, ABB India, Schneider Electric, Thermax, Crompton Greaves, Godrej, Mahindra, and hundreds of electrical consulting firms and infrastructure companies.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What are the prerequisites for Electrical Design Engineering course?</h3>
                <p className="text-gray-600">Basic electrical engineering knowledge is sufficient to start. We cover electrical fundamentals before advanced topics. The course is suitable for electrical engineering graduates, diploma holders, and professionals looking to specialize in electrical design and power systems.</p>
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
