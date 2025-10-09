import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SP3D Piping Design Training in Mumbai | Professional Piping Course Institute | TIT India',
  description: 'Master SP3D Piping Design Training in Mumbai with SmartPlant 3D software, AutoCAD Plant 3D, PDMS training for oil & gas, petrochemical industry certification. Comprehensive 3D piping modeling, isometric generation, and plant design with hands-on training and 100% placement support.',
  keywords: 'SP3D Piping Design Training in Mumbai, SmartPlant 3D course Mumbai, piping design training Mumbai, AutoCAD Plant 3D course Mumbai, PDMS training Mumbai, piping engineering institute Mumbai, oil gas piping course Mumbai, petrochemical piping design Mumbai, 3D piping modeling Mumbai, SP3D certification Mumbai, piping design course Mumbai, plant design training Mumbai, isometric drawing course Mumbai, piping layout training Mumbai, EPC piping training Mumbai, process piping design Mumbai, piping stress analysis Mumbai',
  openGraph: {
    title: 'SP3D Piping Design Training in Mumbai | Professional Piping Course Institute',
    description: 'Master SP3D Piping Design Training in Mumbai with SmartPlant 3D software. Professional certification for piping design and 3D modeling with industry expert training and placement support.',
    type: 'website',
    url: 'https://trinkets.com/courses/sp3d-piping-design-training',
    images: [
      {
        url: 'https://trinkets.com/images/sp3d-piping-design-course-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'SP3D Piping Design Training in Mumbai - Professional Course',
      },
    ],
  },
  alternates: {
    canonical: 'https://trinkets.com/courses/sp3d-piping-design-training',
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
      title: "Piping Design Engineering",
      description: "Complete piping design with CAESAR II, AutoCAD, stress analysis",
      duration: "6 Months",
      link: "/courses/piping-design-engineering"
    },
    {
      title: "E3D Piping Design",
      description: "Advanced AVEVA E3D piping modeling and design training",
      duration: "4 Months", 
      link: "/courses/e3d-piping"
    },
    {
      title: "Process Engineering",
      description: "Process design with HYSYS, Aspen Plus for chemical plants",
      duration: "5 Months",
      link: "/courses/process-engineering"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Piping Engineering Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
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

export default function SP3DPipingDesignTrainingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "SP3D Piping Design Training in Mumbai",
    "description": "Professional SP3D Piping Design Training in Mumbai covering SmartPlant 3D software, AutoCAD Plant 3D, PDMS with hands-on training for oil & gas, petrochemical piping design and 3D modeling systems.",
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
    "coursePrerequisites": "Basic mechanical or chemical engineering knowledge",
    "occupationalCredentialAwarded": "SP3D Piping Design Professional Certificate",
    "educationalLevel": "Professional",
    "audience": {
      "@type": "EducationalAudience",
      "audienceType": "engineers, designers, fresh graduates, piping professionals"
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
        <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900 text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-12 h-2 bg-blue-400 rounded opacity-60 animate-pulse"></div>
            <div className="absolute top-20 right-20 w-8 h-3 bg-indigo-400 rounded opacity-40 animate-bounce delay-300"></div>
            <div className="absolute bottom-20 left-20 w-10 h-2 bg-cyan-400 rounded opacity-50 animate-ping delay-500"></div>
            <div className="absolute bottom-10 right-10 w-6 h-4 bg-blue-300 rounded opacity-70 animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded opacity-30 animate-pulse delay-1000"></div>
            <div className="absolute top-1/3 right-1/3 w-12 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded opacity-40 animate-bounce delay-1200"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-700/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                <span className="text-blue-200 font-semibold text-sm mr-2 animate-pulse">🏗️</span>
                <span className="text-blue-100 font-semibold">Professional 3D Piping Design Training</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight transform hover:scale-105 transition-transform duration-300">
                <span className="inline-block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">SP3D</span>{' '}
                <span className="inline-block bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">Piping Design</span>{' '}
                <span className="text-blue-200">Training in Mumbai</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Master SmartPlant 3D piping design with AutoCAD Plant 3D and PDMS for oil & gas, petrochemical industry 3D modeling and engineering in Mumbai
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                <Link href="/contact" className="bg-white text-blue-900 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <span className="hidden sm:inline">🚀 Enroll in Mumbai&apos;s Best SP3D Course</span>
                  <span className="sm:hidden">🚀 Enroll Now</span>
                </Link>
                <Link href="#curriculum" className="border-2 border-white text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  📚 View Curriculum
                </Link>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-white">6</div>
                  <div className="text-blue-200 text-xs sm:text-sm">Months Duration</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-white">4.9⭐</div>
                  <div className="text-blue-200 text-xs sm:text-sm">Student Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-white">1200+</div>
                  <div className="text-blue-200 text-xs sm:text-sm">Students Trained</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                  <div className="text-blue-200 text-xs sm:text-sm">Placement Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Master SP3D Piping Design in Mumbai</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6">
                  Our comprehensive SP3D Piping Design Training in Mumbai covers the complete spectrum of 3D piping design from basic modeling to advanced plant design using SmartPlant 3D software. Learn industry-standard methodologies used by leading oil & gas and petrochemical companies in Mumbai and across India.
                </p>
                <p className="text-base sm:text-lg text-gray-600 mb-8">
                  This course is designed for mechanical engineers, piping designers, and professionals looking to enhance their skills in 3D piping design with hands-on training on SP3D, AutoCAD Plant 3D, PDMS, and advanced piping engineering tools.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
                    <p className="text-blue-600 font-medium">6 Months</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Rating</h3>
                    <p className="text-green-600 font-medium">⭐ 4.9/5</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Students</h3>
                    <p className="text-indigo-600 font-medium">1200+ Enrolled</p>
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
                    <span>SmartPlant 3D piping design and modeling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>AutoCAD Plant 3D equipment and piping layout</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>PDMS piping design and clash detection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>Isometric drawing generation and MTO creation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>Plant layout design and equipment integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>Piping stress analysis fundamentals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SP3D Curriculum - Visual Journey */}
        <section id="curriculum" className="container mx-auto px-4 py-16 sm:py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563EB' fill-opacity='0.1'%3E%3Cpath d='M40 0L40 80M0 40L80 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10">
            {/* Section Header */}
            <div className="text-center mb-8 md:mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 sm:px-8 py-3 rounded-full mb-6">
                <span className="text-xl mr-3">🏗️</span>
                <span className="font-bold text-lg">Comprehensive Curriculum</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                  SP3D Piping Design
                </span>
                <br />
                <span className="text-gray-800">Learning Journey</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Master 3D piping design through our structured 6-month program designed by industry experts
              </p>
            </div>

            {/* Timeline Journey */}
            <div className="relative max-w-6xl mx-auto">
              {/* Central Timeline Line - Hidden on mobile */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-indigo-500 to-cyan-500 rounded-full"></div>

              {/* Module Cards */}
              <div className="space-y-8 lg:space-y-16">
                {/* Module 1 - Piping Fundamentals */}
                <div className="relative lg:flex lg:items-center">
                  <div className="lg:w-1/2 lg:pr-12 lg:text-right">
                    <div className="group bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 lg:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer">
                      <div className="flex items-center lg:justify-end mb-4">
                        <h3 className="text-xl lg:text-2xl font-bold lg:mr-4">Piping Fundamentals</h3>
                        <div className="text-3xl lg:text-4xl group-hover:rotate-12 transition-transform duration-300 ml-2 lg:ml-0">🔧</div>
                      </div>
                      <p className="text-blue-100 mb-6">Foundation & Core Concepts</p>
                      <div className="space-y-3 text-blue-100">
                        <div className="flex items-center lg:justify-end group-hover:translate-x-2 transition-transform">
                          <span className="lg:mr-2">Piping engineering basics</span>
                          <span className="text-yellow-300 ml-2 lg:ml-0">📚</span>
                        </div>
                        <div className="flex items-center lg:justify-end group-hover:translate-x-2 transition-transform delay-75">
                          <span className="lg:mr-2">Industry codes and standards</span>
                          <span className="text-yellow-300 ml-2 lg:ml-0">📋</span>
                        </div>
                        <div className="flex items-center lg:justify-end group-hover:translate-x-2 transition-transform delay-150">
                          <span className="lg:mr-2">Material specifications</span>
                          <span className="text-yellow-300 ml-2 lg:ml-0">🔩</span>
                        </div>
                        <div className="flex items-center lg:justify-end group-hover:translate-x-2 transition-transform delay-200">
                          <span className="lg:mr-2">P&ID interpretation</span>
                          <span className="text-yellow-300 ml-2 lg:ml-0">📊</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 border-4 border-white">
                    1
                  </div>
                  <div className="hidden lg:block lg:w-1/2 lg:pl-12"></div>
                </div>

                {/* Module 2 - AutoCAD Plant 3D */}
                <div className="relative lg:flex lg:items-center">
                  <div className="hidden lg:block lg:w-1/2 lg:pr-12"></div>
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 border-4 border-white">
                    2
                  </div>
                  <div className="lg:w-1/2 lg:pl-12">
                    <div className="group bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-6 lg:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl lg:text-4xl group-hover:rotate-12 transition-transform duration-300 mr-4">🖥️</div>
                        <h3 className="text-xl lg:text-2xl font-bold">AutoCAD Plant 3D</h3>
                      </div>
                      <p className="text-indigo-100 mb-6">Professional CAD Design Skills</p>
                      <div className="space-y-3 text-indigo-100">
                        <div className="flex items-center group-hover:translate-x-2 transition-transform">
                          <span className="text-yellow-300 mr-2">⚙️</span>
                          <span>Plant 3D interface and tools</span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform delay-75">
                          <span className="text-yellow-300 mr-2">🏭</span>
                          <span>Equipment modeling</span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform delay-150">
                          <span className="text-yellow-300 mr-2">🔧</span>
                          <span>Piping and instrumentation</span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform delay-200">
                          <span className="text-yellow-300 mr-2">📐</span>
                          <span>Orthographic drawings</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Module 3 - SmartPlant 3D */}
                <div className="relative lg:flex lg:items-center">
                  <div className="lg:w-1/2 lg:pr-12 lg:text-right">
                    <div className="group bg-gradient-to-br from-green-500 to-green-600 text-white p-6 lg:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer">
                      <div className="flex items-center lg:justify-end mb-4">
                        <h3 className="text-xl lg:text-2xl font-bold lg:mr-4">SmartPlant 3D (SP3D)</h3>
                        <div className="text-3xl lg:text-4xl group-hover:rotate-12 transition-transform duration-300 ml-2 lg:ml-0">🌱</div>
                      </div>
                      <p className="text-green-100 mb-6">Advanced 3D Modeling</p>
                      <div className="space-y-3 text-green-100">
                        <div className="flex items-center lg:justify-end group-hover:translate-x-2 transition-transform">
                          <span className="lg:mr-2">SP3D fundamentals and interface</span>
                          <span className="text-yellow-300 ml-2 lg:ml-0">💻</span>
                        </div>
                        <div className="flex items-center lg:justify-end group-hover:translate-x-2 transition-transform delay-75">
                          <span className="lg:mr-2">3D piping modeling techniques</span>
                          <span className="text-yellow-300 ml-2 lg:ml-0">🧩</span>
                        </div>
                        <div className="flex items-center lg:justify-end group-hover:translate-x-2 transition-transform delay-150">
                          <span className="lg:mr-2">Equipment placement and routing</span>
                          <span className="text-yellow-300 ml-2 lg:ml-0">🎯</span>
                        </div>
                        <div className="flex items-center lg:justify-end group-hover:translate-x-2 transition-transform delay-200">
                          <span className="lg:mr-2">Catalog and specifications</span>
                          <span className="text-yellow-300 ml-2 lg:ml-0">📚</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 border-4 border-white">
                    3
                  </div>
                  <div className="hidden lg:block lg:w-1/2 lg:pl-12"></div>
                </div>

                {/* Module 4 - PDMS Design */}
                <div className="relative lg:flex lg:items-center">
                  <div className="hidden lg:block lg:w-1/2 lg:pr-12"></div>
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 border-4 border-white">
                    4
                  </div>
                  <div className="lg:w-1/2 lg:pl-12">
                    <div className="group bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 lg:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl lg:text-4xl group-hover:rotate-12 transition-transform duration-300 mr-4">🔮</div>
                        <h3 className="text-xl lg:text-2xl font-bold">PDMS Design</h3>
                      </div>
                      <p className="text-purple-100 mb-6">Plant Design Management</p>
                      <div className="space-y-3 text-purple-100">
                        <div className="flex items-center group-hover:translate-x-2 transition-transform">
                          <span className="text-yellow-300 mr-2">🧭</span>
                          <span>PDMS interface and navigation</span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform delay-75">
                          <span className="text-yellow-300 mr-2">🛤️</span>
                          <span>Piping design and routing</span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform delay-150">
                          <span className="text-yellow-300 mr-2">⚠️</span>
                          <span>Clash detection and resolution</span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform delay-200">
                          <span className="text-yellow-300 mr-2">👁️</span>
                          <span>Model review and walkthroughs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Module 5 - Advanced Modeling */}
                <div className="relative lg:flex lg:items-center">
                  <div className="lg:w-1/2 lg:pr-12 lg:text-right">
                    <div className="group bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-6 lg:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer">
                      <div className="flex items-center lg:justify-end mb-4">
                        <h3 className="text-xl lg:text-2xl font-bold lg:mr-4">Advanced Modeling</h3>
                        <div className="text-3xl lg:text-4xl group-hover:rotate-12 transition-transform duration-300 ml-2 lg:ml-0">⚡</div>
                      </div>
                      <p className="text-yellow-100 mb-6">Expert Level Techniques</p>
                      <div className="space-y-3 text-yellow-100">
                        <div className="flex items-center lg:justify-end group-hover:translate-x-2 transition-transform">
                          <span className="lg:mr-2">Complex piping arrangements</span>
                          <span className="text-orange-300 ml-2 lg:ml-0">🧮</span>
                        </div>
                        <div className="flex items-center lg:justify-end group-hover:translate-x-2 transition-transform delay-75">
                          <span className="lg:mr-2">Support design and modeling</span>
                          <span className="text-orange-300 ml-2 lg:ml-0">🏗️</span>
                        </div>
                        <div className="flex items-center lg:justify-end group-hover:translate-x-2 transition-transform delay-150">
                          <span className="lg:mr-2">Stress analysis integration</span>
                          <span className="text-orange-300 ml-2 lg:ml-0">🔬</span>
                        </div>
                        <div className="flex items-center lg:justify-end group-hover:translate-x-2 transition-transform delay-200">
                          <span className="lg:mr-2">Plant optimization techniques</span>
                          <span className="text-orange-300 ml-2 lg:ml-0">🎯</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 border-4 border-white">
                    5
                  </div>
                  <div className="hidden lg:block lg:w-1/2 lg:pl-12"></div>
                </div>

                {/* Module 6 - Project Implementation */}
                <div className="relative lg:flex lg:items-center">
                  <div className="hidden lg:block lg:w-1/2 lg:pr-12"></div>
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 border-4 border-white">
                    6
                  </div>
                  <div className="lg:w-1/2 lg:pl-12">
                    <div className="group bg-gradient-to-br from-red-500 to-red-600 text-white p-6 lg:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl lg:text-4xl group-hover:rotate-12 transition-transform duration-300 mr-4">🚀</div>
                        <h3 className="text-xl lg:text-2xl font-bold">Project Implementation</h3>
                      </div>
                      <p className="text-red-100 mb-6">Real-World Application</p>
                      <div className="space-y-3 text-red-100">
                        <div className="flex items-center group-hover:translate-x-2 transition-transform">
                          <span className="text-yellow-300 mr-2">🏭</span>
                          <span>Real plant design projects</span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform delay-75">
                          <span className="text-yellow-300 mr-2">📊</span>
                          <span>MTO and material reporting</span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform delay-150">
                          <span className="text-yellow-300 mr-2">📐</span>
                          <span>Drawing production and standards</span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform delay-200">
                          <span className="text-yellow-300 mr-2">✅</span>
                          <span>Quality assurance and delivery</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Software Tools */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry-Standard Piping Design Software</h2>
              <p className="text-lg text-gray-600">Master the most demanded 3D piping design tools in Mumbai&apos;s oil & gas and petrochemical industry</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏗️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">SmartPlant 3D</h3>
                <p className="text-gray-600 text-sm">Advanced 3D piping design and plant modeling</p>
              </div>
              <div className="text-center p-6 bg-indigo-50 rounded-lg">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔧</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">AutoCAD Plant 3D</h3>
                <p className="text-gray-600 text-sm">3D plant design and piping layout software</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚙️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">PDMS</h3>
                <p className="text-gray-600 text-sm">Plant Design Management System for complex projects</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📐</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">CAESAR II</h3>
                <p className="text-gray-600 text-sm">Pipe stress analysis and flexibility studies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Prospects in Mumbai */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Opportunities in Mumbai</h2>
              <p className="text-lg text-gray-600">SP3D Piping Design professionals are in high demand across Mumbai&apos;s oil & gas, petrochemical, and process industries</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Job Roles</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• SP3D Piping Designer</li>
                  <li>• Plant Design Engineer</li>
                  <li>• 3D Modeling Specialist</li>
                  <li>• Piping Layout Engineer</li>
                  <li>• Senior Piping Designer</li>
                  <li>• Design Coordinator</li>
                  <li>• Project Design Manager</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Top Companies in Mumbai</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Reliance Industries</li>
                  <li>• ONGC</li>
                  <li>• Petrofac</li>
                  <li>• Larsen & Toubro</li>
                  <li>• Technip Energies</li>
                  <li>• Wood Group</li>
                  <li>• KBR India</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Salary Range in Mumbai</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Fresher: ₹4.5-7.0 LPA</li>
                  <li>• 2-5 Years: ₹8-15 LPA</li>
                  <li>• 5-8 Years: ₹15-25 LPA</li>
                  <li>• Senior Designer: ₹25-35 LPA</li>
                  <li>• Design Manager: ₹35-50 LPA</li>
                  <li>• Project Manager: ₹50-70 LPA</li>
                  <li>• Consultant: ₹70+ LPA</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Covered */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries Covered</h2>
              <p className="text-lg text-gray-600">Apply SP3D piping design skills across diverse Mumbai industries</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🛢️</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Oil & Gas</h3>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">⚗️</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Petrochemicals</h3>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🏭</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Process Plants</h3>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Power Plants</h3>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">💊</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Pharmaceuticals</h3>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🚰</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Water Treatment</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Mumbai Industry Focus */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">SP3D Piping Design Opportunities in Mumbai</h2>
              <p className="text-lg text-gray-600">Mumbai is India&apos;s EPC and process industry capital with massive opportunities for SP3D professionals</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">🛢️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Oil & Gas Projects</h3>
                <p className="text-gray-600 text-center mb-4">Reliance, ONGC, Petrofac, KBR, Technip</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Refinery piping design and layout</li>
                  <li>• Offshore platform piping systems</li>
                  <li>• LNG terminal design projects</li>
                  <li>• Petrochemical complex piping</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-indigo-600 text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">EPC Companies</h3>
                <p className="text-gray-600 text-center mb-4">L&T, Fluor, Wood Group, McDermott</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Large-scale plant design projects</li>
                  <li>• International EPC assignments</li>
                  <li>• Brownfield modification projects</li>
                  <li>• Greenfield facility development</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">⚗️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Process Industries</h3>
                <p className="text-gray-600 text-center mb-4">Tata Chemicals, UPL, Aarti Industries</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chemical plant piping design</li>
                  <li>• Pharmaceutical facility piping</li>
                  <li>• Specialty chemicals projects</li>
                  <li>• Process optimization studies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Voice Search Optimized */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions - SP3D Piping Design Training in Mumbai</h2>
              <p className="text-lg text-gray-600">Get answers to common questions about our comprehensive SP3D and 3D piping design training</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What is SP3D and why should I learn it in Mumbai?</h3>
                <p className="text-gray-600">SmartPlant 3D (SP3D) is advanced 3D piping design software used by global EPC companies. Learning SP3D in Mumbai provides access to India&apos;s largest concentration of oil & gas projects, refineries, and process industries with companies like Reliance, L&T, Technip, and international EPC firms actively seeking certified SP3D professionals.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How long does SP3D Piping Design Training take in Mumbai?</h3>
                <p className="text-gray-600">Our comprehensive SP3D Piping Design Training in Mumbai takes 6 months to complete, covering SmartPlant 3D, AutoCAD Plant 3D, PDMS, isometric generation, and real plant projects. Weekend and evening batches are available for working professionals.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Which piping design software will I learn in this course?</h3>
                <p className="text-gray-600">You&apos;ll master SmartPlant 3D (SP3D), AutoCAD Plant 3D, PDMS, and CAESAR II integration for stress analysis. These are the industry-standard tools used by Mumbai&apos;s leading EPC companies and oil & gas projects.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What salary can I expect after SP3D certification in Mumbai?</h3>
                <p className="text-gray-600">SP3D Piping Designers in Mumbai can expect starting salaries of ₹4.5-7 LPA for freshers, ₹8-15 LPA for 2-5 years experience, ₹15-25 LPA for senior designers, and ₹35-70+ LPA for design managers and consultants in Mumbai&apos;s EPC and process industries.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Which companies in Mumbai hire SP3D professionals?</h3>
                <p className="text-gray-600">Top companies hiring SP3D professionals in Mumbai include Reliance Industries, ONGC, L&T ECC, Technip Energies, KBR India, Wood Group, Fluor Corporation, McDermott, Petrofac, and numerous piping design consultancies and EPC contractors.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our SP3D Piping Design Training in Mumbai?</h2>
              <p className="text-lg text-gray-600">Experience the best SP3D and 3D piping design training in Mumbai with industry experts</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">👨‍🏫</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Faculty</h3>
                <p className="text-gray-600 text-sm">Learn from industry professionals with 15+ years of experience in SP3D and piping design</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-indigo-600 text-2xl">🏗️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Real Plant Projects</h3>
                <p className="text-gray-600 text-sm">Work on actual plant design projects from Mumbai&apos;s leading EPC companies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🎓</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Industry Certification</h3>
                <p className="text-gray-600 text-sm">Receive industry-recognized SP3D certification upon successful completion</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl">💼</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Placement Support</h3>
                <p className="text-gray-600 text-sm">100% placement assistance with top piping design companies in Mumbai</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start Your SP3D Piping Design Career in Mumbai
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join Mumbai&apos;s premier SP3D Piping Design Training and become an expert in 3D piping design with SmartPlant 3D, AutoCAD Plant 3D, and PDMS software
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