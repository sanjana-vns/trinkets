import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SP3D Piping Design Training in Mumbai | Professional Piping Course Institute',
  description: 'Master SP3D Piping Design Training in Mumbai with SmartPlant 3D software. Professional piping design course with AutoCAD Plant 3D, PDMS training for oil & gas, petrochemical industry certification.',
  keywords: 'SP3D Piping Design Training in Mumbai, SmartPlant 3D course Mumbai, piping design training, AutoCAD Plant 3D course, PDMS training, piping engineering institute Mumbai, oil gas piping course, petrochemical piping design, 3D piping modeling Mumbai',
  openGraph: {
    title: 'SP3D Piping Design Training in Mumbai | Professional Piping Course Institute',
    description: 'Master SP3D Piping Design Training in Mumbai with SmartPlant 3D software. Professional certification for piping design and 3D modeling.',
    type: 'website',
    url: 'https://trinkets.com/courses/sp3d-piping-design-training',
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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-700/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <span className="text-blue-200 font-semibold text-sm">🏗️ Professional Training</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                SP3D Piping Design Training in Mumbai
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Master SmartPlant 3D piping design with AutoCAD Plant 3D and PDMS for oil & gas, petrochemical industry 3D modeling and engineering
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Master SP3D Piping Design in Mumbai</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our comprehensive SP3D Piping Design Training in Mumbai covers the complete spectrum of 3D piping design from basic modeling to advanced plant design using SmartPlant 3D software. Learn industry-standard methodologies used by leading oil & gas and petrochemical companies in Mumbai and across India.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  This course is designed for mechanical engineers, piping designers, and professionals looking to enhance their skills in 3D piping design with hands-on training on SP3D, AutoCAD Plant 3D, PDMS, and advanced piping engineering tools.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
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
        <section id="curriculum" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">SP3D Piping Design Training Curriculum</h2>
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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