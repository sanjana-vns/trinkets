import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Instrumentation and Control Course in Mumbai | Professional Training Institute | TIT India',
  description: 'Master Instrumentation and Control Course in Mumbai with PLC programming, SCADA, DCS, HMI training. Professional process automation and control system design certification for industrial automation with hands-on experience and 100% placement support.',
  keywords: 'Instrumentation and Control Course in Mumbai, instrumentation training Mumbai, PLC programming course Mumbai, SCADA training Mumbai, DCS course Mumbai, HMI design Mumbai, process automation course Mumbai, control system design Mumbai, industrial automation training Mumbai, instrumentation engineering institute Mumbai, PLC ladder logic Mumbai, process control training, automation engineer course, control loop tuning course, fieldbus training Mumbai, distributed control systems Mumbai, safety instrumented systems Mumbai, process instrumentation Mumbai',
  openGraph: {
    title: 'Instrumentation and Control Course in Mumbai | Professional Training Institute',
    description: 'Master Instrumentation and Control Course in Mumbai with PLC programming, SCADA, DCS, HMI training. Professional certification for process automation and control systems with industry expert training.',
    type: 'website',
    url: 'https://trinkets.com/courses/instrumentation-control',
    images: [
      {
        url: 'https://trinkets.com/images/instrumentation-control-course-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Instrumentation and Control Course in Mumbai - Professional Training',
      },
    ],
  },
  alternates: {
    canonical: 'https://trinkets.com/courses/instrumentation-control',
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
      title: "Process Engineering",
      description: "Master HYSYS, Aspen Plus, HTRI for chemical processes",
      duration: "4 Months",
      link: "/courses/process-engineering"
    },
    {
      title: "Electrical Design Engineering",
      description: "Complete electrical system design with AutoCAD Electrical, ETAP",
      duration: "6 Months", 
      link: "/courses/electrical-design-engineering"
    },
    {
      title: "MEP Engineering",
      description: "Building services design with MEP systems integration",
      duration: "6 Months",
      link: "/courses/mep-engineering"
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
                <span className="text-orange-600 font-medium">{course.duration}</span>
                <Link href={course.link} className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
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

export default function InstrumentationControlCoursePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Instrumentation and Control Course in Mumbai",
    "description": "Professional Instrumentation and Control Course in Mumbai covering PLC programming, SCADA, DCS, HMI with hands-on training for process automation, control system design and industrial automation systems.",
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
      "duration": "P5M",
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
    "coursePrerequisites": "Basic electrical and electronics engineering knowledge",
    "occupationalCredentialAwarded": "Instrumentation and Control Engineering Certificate",
    "educationalLevel": "Professional",
    "audience": {
      "@type": "EducationalAudience",
      "audienceType": "engineers, technicians, fresh graduates, automation professionals"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-white">
        {/* Creative Animated Hero Section */}
        <section className="bg-gradient-to-br from-orange-900 via-red-800 to-orange-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-4 h-4 bg-orange-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-20 right-20 w-6 h-6 bg-red-400 rounded-full opacity-40 animate-bounce delay-300"></div>
            <div className="absolute bottom-20 left-20 w-3 h-3 bg-yellow-400 rounded-full opacity-50 animate-ping delay-500"></div>
            <div className="absolute bottom-10 right-10 w-5 h-5 bg-orange-300 rounded-full opacity-70 animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/4 w-8 h-8 border border-red-300 rounded-full opacity-30 animate-spin"></div>
            <div className="absolute top-1/3 right-1/3 w-6 h-6 border border-orange-300 rounded-full opacity-40 animate-ping delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center bg-orange-700/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                <span className="text-orange-200 font-semibold text-sm mr-2 animate-pulse">🔧</span>
                <span className="text-orange-100 font-semibold">Professional Automation Training</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-bold mb-8 transform hover:scale-105 transition-transform duration-300">
                <span className="inline-block bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">Instrumentation</span>{' '}
                <span className="text-white">and</span>{' '}
                <span className="inline-block bg-gradient-to-r from-red-300 to-orange-300 bg-clip-text text-transparent">Control</span>{' '}
                <span className="text-orange-200">Course in Mumbai</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-orange-100 mb-10 max-w-4xl mx-auto leading-relaxed">
                Master process automation with PLC programming, SCADA, DCS, and HMI for industrial control systems and process optimization in Mumbai&apos;s leading industries
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link href="/contact" className="bg-white text-orange-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  🚀 Enroll Now - Limited Seats
                </Link>
                <Link href="#curriculum" className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  📚 View Curriculum
                </Link>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-white">5</div>
                  <div className="text-orange-200 text-sm">Months Duration</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-white">4.9⭐</div>
                  <div className="text-orange-200 text-sm">Student Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-white">750+</div>
                  <div className="text-orange-200 text-sm">Students Trained</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-orange-200 text-sm">Placement Support</div>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Master Instrumentation and Control in Mumbai</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our comprehensive Instrumentation and Control Course in Mumbai covers the complete spectrum of industrial automation from PLC programming to advanced process control systems. Learn industry-standard technologies used by leading automation companies in Mumbai and across India.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  This course is designed for engineers, technicians, and professionals looking to enhance their skills in instrumentation and control engineering with hands-on training on PLC programming, SCADA systems, DCS, HMI design, and process automation.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
                    <p className="text-orange-600 font-medium">5 Months</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Rating</h3>
                    <p className="text-green-600 font-medium">⭐ 4.9/5</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Students</h3>
                    <p className="text-red-600 font-medium">750+ Enrolled</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Certification</h3>
                    <p className="text-yellow-600 font-medium">Industry Recognized</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What You&apos;ll Learn</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>PLC programming and ladder logic design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>SCADA system development and configuration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>DCS architecture and process control strategies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>HMI design and operator interface development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>Process instrumentation and sensor technologies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>Control loop tuning and optimization</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Instrumentation and Control Course Curriculum</h2>
              <p className="text-lg text-gray-600">Comprehensive modules covering all aspects of industrial automation and control systems</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-orange-600 text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fundamentals</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Process control basics</li>
                  <li>• Instrumentation principles</li>
                  <li>• Control theory and dynamics</li>
                  <li>• Industrial safety standards</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-red-600 text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">PLC Programming</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Ladder logic programming</li>
                  <li>• Function block diagrams</li>
                  <li>• Structured text programming</li>
                  <li>• PLC hardware configuration</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-yellow-600 text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">SCADA Systems</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• SCADA architecture and design</li>
                  <li>• Data acquisition systems</li>
                  <li>• Alarm management</li>
                  <li>• Historical data management</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">DCS & Advanced Control</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Distributed control systems</li>
                  <li>• Advanced process control</li>
                  <li>• Model predictive control</li>
                  <li>• Process optimization</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl font-bold">5</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">HMI & Visualization</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• HMI design principles</li>
                  <li>• Operator interface development</li>
                  <li>• Graphics and animations</li>
                  <li>• User experience optimization</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-600 text-xl font-bold">6</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Industrial Projects</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Real-world automation projects</li>
                  <li>• System integration</li>
                  <li>• Commissioning and testing</li>
                  <li>• Maintenance strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Software Tools */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry-Standard Software & Hardware</h2>
              <p className="text-lg text-gray-600">Master the most demanded automation tools in Mumbai&apos;s industrial sector</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔧</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">PLC Programming</h3>
                <p className="text-gray-600 text-sm">Siemens, Allen Bradley, Schneider PLCs</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">SCADA Software</h3>
                <p className="text-gray-600 text-sm">WinCC, Wonderware, iFIX systems</p>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🖥️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">DCS Platforms</h3>
                <p className="text-gray-600 text-sm">Honeywell, Yokogawa, ABB DCS</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">HMI Development</h3>
                <p className="text-gray-600 text-sm">Panel View, WinCC Flexible, FT View</p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Prospects in Mumbai */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Opportunities in Mumbai</h2>
              <p className="text-lg text-gray-600">Instrumentation and Control professionals are in high demand across Mumbai&apos;s industrial and manufacturing sectors</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Job Roles</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Instrumentation Engineer</li>
                  <li>• Control System Engineer</li>
                  <li>• Automation Engineer</li>
                  <li>• PLC Programmer</li>
                  <li>• SCADA Developer</li>
                  <li>• Process Control Engineer</li>
                  <li>• DCS Engineer</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Top Companies in Mumbai</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Reliance Industries</li>
                  <li>• ONGC</li>
                  <li>• Tata Chemicals</li>
                  <li>• Honeywell Automation</li>
                  <li>• ABB India</li>
                  <li>• Siemens India</li>
                  <li>• Yokogawa India</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Salary Range in Mumbai</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Fresher: ₹4.0-6.0 LPA</li>
                  <li>• 2-5 Years: ₹7-12 LPA</li>
                  <li>• 5-8 Years: ₹12-18 LPA</li>
                  <li>• Senior Engineer: ₹18-28 LPA</li>
                  <li>• Lead Engineer: ₹28-40 LPA</li>
                  <li>• Project Manager: ₹40-55 LPA</li>
                  <li>• Consultant: ₹55+ LPA</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mumbai Industry Focus */}
        <section className="py-16 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Instrumentation & Control Opportunities in Mumbai</h2>
              <p className="text-lg text-gray-600">Mumbai is India&apos;s industrial hub with massive opportunities for automation professionals</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">🏭</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Process Industries</h3>
                <p className="text-gray-600 text-center mb-4">Reliance, ONGC, Tata Chemicals, HPCL</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• DCS implementation and maintenance</li>
                  <li>• Advanced process control systems</li>
                  <li>• Safety instrumented systems (SIS)</li>
                  <li>• Batch process automation</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Power & Utilities</h3>
                <p className="text-gray-600 text-center mb-4">Tata Power, Adani Power, BEST Mumbai</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Power plant automation systems</li>
                  <li>• Grid automation and SCADA</li>
                  <li>• Renewable energy control systems</li>
                  <li>• Smart grid instrumentation</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Manufacturing</h3>
                <p className="text-gray-600 text-center mb-4">Mahindra, Bajaj, Godrej, L&T Mumbai</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Factory automation and MES</li>
                  <li>• Robotic control systems</li>
                  <li>• Quality control automation</li>
                  <li>• Industry 4.0 implementations</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Mumbai is Perfect for Automation Careers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">🌟 Industrial Capital</h4>
                  <p className="text-gray-600 mb-4">Mumbai hosts India&apos;s largest concentration of process industries, manufacturing units, and automation companies.</p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">💼 Career Growth</h4>
                  <p className="text-gray-600">From junior instrument technician to automation consultant, Mumbai offers complete career progression paths.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">🎯 Innovation Hub</h4>
                  <p className="text-gray-600 mb-4">Access to cutting-edge automation technologies and Industry 4.0 implementations in Mumbai&apos;s modern facilities.</p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">📈 Premium Salaries</h4>
                  <p className="text-gray-600">Instrumentation professionals in Mumbai earn 30-40% higher than other Indian cities due to industry demand.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Voice Search Optimized */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions - Instrumentation & Control Course in Mumbai</h2>
              <p className="text-lg text-gray-600">Get answers to common questions about our comprehensive instrumentation and control training</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What is Instrumentation and Control and why should I learn it in Mumbai?</h3>
                <p className="text-gray-600">Instrumentation and Control involves designing automated systems for industrial processes. Learning in Mumbai provides access to India&apos;s largest industrial base including oil refineries, chemical plants, power stations, and manufacturing units with companies like Reliance, ONGC, Tata, and global automation firms actively hiring certified professionals.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How long does the Instrumentation and Control course take in Mumbai?</h3>
                <p className="text-gray-600">Our comprehensive Instrumentation and Control course in Mumbai takes 5 months to complete, covering PLC programming, SCADA systems, DCS, HMI design, and process automation. Weekend and evening batches are available for working professionals with flexible scheduling options.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Which automation software will I learn in this course?</h3>
                <p className="text-gray-600">You&apos;ll master industry-leading automation software including Siemens TIA Portal, Allen Bradley RSLogix, Schneider Unity Pro for PLC programming, Wonderware and WinCC for SCADA, plus Honeywell and ABB DCS platforms used by Mumbai&apos;s major industries.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What salary can I expect after Instrumentation and Control certification in Mumbai?</h3>
                <p className="text-gray-600">Instrumentation and Control professionals in Mumbai can expect starting salaries of ₹4-6 LPA for freshers, ₹7-12 LPA for 2-5 years experience, ₹12-18 LPA for senior engineers, and ₹28-55+ LPA for lead engineers and consultants in Mumbai&apos;s process and manufacturing industries.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Is online Instrumentation and Control training available from Mumbai?</h3>
                <p className="text-gray-600">Yes, we offer both online and hands-on laboratory training from Mumbai. Online sessions include live PLC programming sessions, virtual SCADA development, DCS simulation exercises, and one-on-one mentoring with Mumbai-based industry experts.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Which companies in Mumbai hire Instrumentation and Control engineers?</h3>
                <p className="text-gray-600">Top companies hiring in Mumbai include Reliance Industries, ONGC, Tata Chemicals, Honeywell Automation, ABB India, Siemens India, Yokogawa India, L&T Automation, Thermax, and hundreds of process industries, manufacturing units, and automation system integrators.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Covered */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries Covered</h2>
              <p className="text-lg text-gray-600">Apply instrumentation and control skills across diverse Mumbai industries</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🏭</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Oil & Gas</h3>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">⚗️</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Chemicals</h3>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">💊</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Pharma</h3>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Power</h3>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🏗️</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Manufacturing</h3>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-lg">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🚰</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Water Treatment</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Instrumentation and Control Course in Mumbai?</h2>
              <p className="text-lg text-gray-600">Experience the best instrumentation and control training in Mumbai with industry experts</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">👨‍🏫</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Faculty</h3>
                <p className="text-gray-600 text-sm">Learn from industry professionals with 20+ years of experience in instrumentation and control</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 text-2xl">🔬</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Hands-on Labs</h3>
                <p className="text-gray-600 text-sm">State-of-the-art automation lab with real PLCs, SCADA systems, and DCS trainers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-600 text-2xl">🎓</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Industry Certification</h3>
                <p className="text-gray-600 text-sm">Receive industry-recognized certification upon successful completion of the course</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">💼</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Placement Support</h3>
                <p className="text-gray-600 text-sm">100% placement assistance with top automation companies in Mumbai</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-orange-600 to-red-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start Your Instrumentation and Control Career in Mumbai
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join Mumbai&apos;s premier Instrumentation and Control Course and become an expert in industrial automation with PLC programming, SCADA, DCS, and process control systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
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