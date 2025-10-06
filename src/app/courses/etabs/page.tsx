import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ETABS Course in Mumbai | Advanced Structural Engineering Software Training',
  description: 'Master ETABS software for multi-story building analysis and design in Mumbai. Advanced structural engineering training with expert guidance and industry projects.',
  keywords: 'ETABS course Mumbai, structural engineering software, building analysis training, multi-story design course, ETABS certification Mumbai, seismic analysis training',
  openGraph: {
    title: 'ETABS Course in Mumbai | Advanced Structural Engineering Software Training',
    description: 'Master ETABS software for multi-story building analysis and design in Mumbai. Advanced structural engineering training with expert guidance.',
    type: 'website',
    url: 'https://trinkets.com/courses/etabs',
  },
}

const RelatedCourses = () => {
  const relatedCourses = [
    {
      title: "STAAD Pro",
      description: "Structural analysis and design for buildings and bridges",
      duration: "3 Months",
      link: "/courses/staad-pro"
    },
    {
      title: "Structural Engineering",
      description: "Complete structural design and analysis program",
      duration: "6 Months", 
      link: "/courses/structural-design-analysis"
    },
    {
      title: "CAESAR II",
      description: "Pipe stress analysis software training",
      duration: "2 Months",
      link: "/courses/caesar-ii"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Courses</h2>
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

export default function ETABSCoursePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-purple-700/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <span className="text-purple-200 font-semibold text-sm">🏗️ Advanced Software</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ETABS Course in Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Master advanced structural engineering software for multi-story building design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Master ETABS Software</h2>
              <p className="text-lg text-gray-600 mb-6">
                ETABS is advanced structural engineering software used for analyzing and designing multi-story buildings 
                efficiently, accurately and reliably. It&apos;s the industry standard for high-rise building design.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
                  <p className="text-purple-600 font-medium">3 Months</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Rating</h3>
                  <p className="text-green-600 font-medium">⭐ 4.6/5</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Students</h3>
                  <p className="text-blue-600 font-medium">420+ Enrolled</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Mode</h3>
                  <p className="text-orange-600 font-medium">Online & Offline</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">Can&apos;t Find What You&apos;re Looking For?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>Multi-story building modeling techniques</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>Advanced seismic analysis methods</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>Wind load analysis and design</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>Performance-based design concepts</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>High-rise building optimization</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Curriculum</h2>
            <p className="text-lg text-gray-600">Comprehensive ETABS training modules</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ETABS Fundamentals</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Software interface and tools</li>
                <li>• Building modeling basics</li>
                <li>• Material and section properties</li>
                <li>• Grid systems and templates</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Modeling</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Complex geometry creation</li>
                <li>• Load patterns and combinations</li>
                <li>• Diaphragm and floor systems</li>
                <li>• Non-linear modeling techniques</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analysis & Design</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Dynamic analysis procedures</li>
                <li>• Seismic design optimization</li>
                <li>• Performance-based design</li>
                <li>• Result evaluation and reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Software Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ETABS Key Features</h2>
            <p className="text-lg text-gray-600">Industry-leading capabilities for building design</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Building Modeling</h3>
              <p className="text-gray-600 text-sm">Intuitive 3D modeling for complex buildings</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌊</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Seismic Analysis</h3>
              <p className="text-gray-600 text-sm">Advanced earthquake simulation and design</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💨</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Wind Analysis</h3>
              <p className="text-gray-600 text-sm">Comprehensive wind load calculations</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">Automated design optimization tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Opportunities in Mumbai</h2>
            <p className="text-lg text-gray-600">High demand for ETABS specialists in construction industry</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Job Roles</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Structural Design Engineer</li>
                <li>• High-rise Building Designer</li>
                <li>• Seismic Analysis Specialist</li>
                <li>• Building Design Consultant</li>
                <li>• Structural Project Manager</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Top Employers</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Godrej Properties</li>
                <li>• Oberoi Realty</li>
                <li>• Lodha Group</li>
                <li>• Hiranandani Group</li>
                <li>• Piramal Realty</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Salary Prospects</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Fresher: ₹3.5-5 LPA</li>
                <li>• Experienced: ₹6-10 LPA</li>
                <li>• Senior Designer: ₹10-15 LPA</li>
                <li>• Design Manager: ₹15-25 LPA</li>
                <li>• Consultant: ₹25+ LPA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Master ETABS?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join Mumbai&apos;s leading ETABS training program and excel in high-rise building design
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Enroll Now
            </Link>
            <Link href="/contact" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Download Syllabus
            </Link>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <RelatedCourses />
    </div>
  )
}