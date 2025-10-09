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
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 transform hover:scale-105 transition-transform duration-300">
                <span className="inline-block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">SP3D</span>{' '}
                <span className="inline-block bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">Piping Design</span>{' '}
                <span className="text-blue-200">Training in Mumbai</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
                Master SmartPlant 3D piping design with AutoCAD Plant 3D and PDMS for oil & gas, petrochemical industry 3D modeling and engineering in Mumbai
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link href="/contact" className="bg-white text-blue-900 px-6 py-3 sm:px-10 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  🚀 Enroll Now - Limited Seats
                </Link>
                <Link href="#curriculum" className="border-2 border-white text-white px-6 py-3 sm:px-10 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  📚 View Curriculum
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-white">6</div>
                  <div className="text-blue-200 text-sm">Months Duration</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-white">4.9⭐</div>
                  <div className="text-blue-200 text-sm">Student Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-white">1200+</div>
                  <div className="text-blue-200 text-sm">Students Trained</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-blue-200 text-sm">Placement Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-12 sm:py-16">
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

        {/* Curriculum */}
                {/* SP3D Curriculum */}
        <section id="curriculum" className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">SP3D Piping Design Training Curriculum</h2>
              <p className="text-lg text-gray-600">Comprehensive modules covering all aspects of 3D piping design and SmartPlant 3D software</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Piping Fundamentals</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Piping engineering basics</li>
                  <li>• Industry codes and standards</li>
                  <li>• Material specifications</li>
                  <li>• P&ID interpretation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-indigo-600 text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AutoCAD Plant 3D</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Plant 3D interface and tools</li>
                  <li>• Equipment modeling</li>
                  <li>• Piping and instrumentation</li>
                  <li>• Orthographic drawings</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">SmartPlant 3D (SP3D)</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• SP3D fundamentals and interface</li>
                  <li>• 3D piping modeling techniques</li>
                  <li>• Equipment placement and routing</li>
                  <li>• Catalog and specifications</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-600 text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">PDMS Design</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• PDMS interface and navigation</li>
                  <li>• Piping design and routing</li>
                  <li>• Clash detection and resolution</li>
                  <li>• Model review and walkthroughs</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-yellow-600 text-xl font-bold">5</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Modeling</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Complex piping arrangements</li>
                  <li>• Support design and modeling</li>
                  <li>• Stress analysis integration</li>
                  <li>• Plant optimization techniques</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-red-600 text-xl font-bold">6</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Implementation</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Real plant design projects</li>
                  <li>• MTO and material reporting</li>
                  <li>• Drawing production and standards</li>
                  <li>• Quality assurance and delivery</li>
                </ul>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Job Roles</h3>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Top Companies in Mumbai</h3>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Salary Range in Mumbai</h3>
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