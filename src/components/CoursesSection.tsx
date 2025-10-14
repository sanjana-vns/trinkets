'use client'

import { useState } from 'react'
import Link from 'next/link'

const CoursesSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const categories = [
    { id: 'all', label: 'All Courses', icon: '🎯' },
    { id: 'piping', label: 'Piping Design', icon: '🔧' },
    { id: 'hvac', label: 'HVAC Systems', icon: '❄️' },
    { id: 'process', label: 'Process Engineering', icon: '⚙️' },
    { id: 'structural', label: 'Structural Design', icon: '🏗️' },
    { id: 'mep', label: 'MEP Engineering', icon: '🔌' },
    { id: 'software', label: 'Software Training', icon: '💻' },
    { id: 'mechanical', label: 'Mechanical Design', icon: '⚡' }
  ]

  const courses = [
    {
      title: "Piping Course In Mumbai",
      description: "Comprehensive Piping Course In Mumbai covering piping design fundamentals, PDMS, SP3D, E3D, AutoCAD Plant 3D, and stress analysis. Best piping training institute in Mumbai.",
      duration: "6 Months",
      rating: "4.9",
      students: "1200+",
      category: "piping",
      link: "/courses/piping-design-course-mumbai",
      features: ["Complete Piping Design", "PDMS & SP3D Training", "Live Industry Projects", "100% Job Placement"]
    },
    {
      title: "Advanced Piping Design Training",
      description: "Professional piping design course Mumbai with E3D, PDMS, SP3D training. Learn advanced 3D piping layout, clash detection, and plant modeling techniques.",
      duration: "4 Months",
      rating: "4.9",
      students: "680+",
      category: "piping",
      link: "/courses/e3d-piping",
      features: ["AVEVA E3D Training", "Professional Piping Design", "Advanced 3D Modeling", "Industry Certification"]
    },
    {
      title: "SP3D Piping Course Mumbai",
      description: "Specialized SP3D piping course in Mumbai for advanced 3D piping design. Learn SmartPlant 3D modeling, equipment design, and piping layout for industrial plants.",
      duration: "5 Months",
      rating: "4.8",
      students: "750+",
      category: "piping",
      link: "/courses/sp3d-piping-design-training",
      features: ["SP3D Professional Training", "Piping Equipment Design", "3D Plant Layout", "Industry Projects"]
    },
    {
      title: "HVAC Engineering",
      description: "HVAC Engineering designs and optimizes heating, ventilation and air conditioning systems to ensure comfort, air quality and energy efficiency.",
      duration: "4 Months", 
      rating: "4.7",
      students: "650+",
      category: "hvac",
      link: "/courses/hvac-system-design",
      features: ["HAP Software", "Load Calculations", "Duct Design", "Certification"]
    },
    {
      title: "Process Engineering",
      description: "Learn process design, P&ID development, and process simulation with industry software.",
      duration: "5 Months",
      rating: "4.9",
      students: "720+", 
      category: "process",
      link: "/courses/process-engineering",
      features: ["HYSYS Training", "P&ID Design", "Process Safety", "Real Projects"]
    },
    {
      title: "MEP Engineering",
      description: "MEP Engineering involves designing and maintaining mechanical, electrical, and plumbing systems to ensure efficiency and safety in buildings.",
      duration: "5 Months",
      rating: "4.7",
      students: "600+",
      category: "mep",
      link: "/courses/mep-engineering",
      features: ["Mechanical Systems", "Electrical Design", "Plumbing Systems", "Building Codes"]
    },
    {
      title: "Structural Engineering",
      description: "Structural Engineering involves designing safe, stable structures like buildings and bridges. It ensures they withstand loads and environmental forces.",
      duration: "6 Months",
      rating: "4.6",
      students: "580+",
      category: "structural", 
      link: "/courses/structural-design-analysis",
      features: ["STAAD Pro", "ETABS", "Design Codes", "Live Projects"]
    },
    {
      title: "AutoCAD Mechanical Design",
      description: "Complete mechanical design course with 2D drafting and 3D modeling techniques.",
      duration: "3 Months",
      rating: "4.5",
      students: "920+",
      category: "mechanical",
      link: "/courses/autocad-mechanical-design",
      features: ["2D Drafting", "3D Modeling", "GD&T", "Industry Practice"]
    },
    {
      title: "SolidWorks Professional",
      description: "Master 3D CAD design, simulation, and manufacturing with SolidWorks software.",
      duration: "4 Months",
      rating: "4.8",
      students: "780+",
      category: "mechanical",
      link: "/courses/solidworks-professional",
      features: ["3D Modeling", "Simulation", "Assembly Design", "Certification"]
    },
    {
      title: "STAAD Pro",
      description: "STAAD Pro is structural analysis and design software for modeling buildings, bridges and other structures. It supports multiple materials and design codes.",
      duration: "3 Months",
      rating: "4.7",
      students: "450+",
      category: "software",
      link: "/courses/staad-pro",
      features: ["Structural Analysis", "Design Codes", "Building Modeling", "Bridge Design"]
    },
    {
      title: "ETABS",
      description: "ETABS is advanced structural engineering software used for analyzing and designing multi-story buildings efficiently, accurately and reliably.",
      duration: "3 Months",
      rating: "4.6",
      students: "420+",
      category: "software",
      link: "/courses/etabs",
      features: ["Building Analysis", "Multi-story Design", "Seismic Analysis", "Professional Certification"]
    },
    {
      title: "CAESAR II",
      description: "CAESAR II is a software for pipe stress analysis, ensuring safe and efficient piping system design. It supports compliance with industry standards.",
      duration: "2 Months",
      rating: "4.8",
      students: "380+",
      category: "software",
      link: "/courses/caesar-ii",
      features: ["Pipe Stress Analysis", "Industry Standards", "Safety Design", "Professional Training"]
    }
  ]

  const filteredCourses = activeFilter === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeFilter)

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-6 shadow-lg backdrop-blur-sm border border-white/20">
            <span className="text-blue-600 font-semibold text-sm mr-2">🎓</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">Our Courses</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Best Piping Course In Mumbai
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              & Engineering Programs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mumbai&apos;s leading piping course institute offering comprehensive piping design training, PDMS, SP3D, E3D courses with hands-on training and expert guidance.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`group relative flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl shadow-blue-500/25'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:text-blue-600 border border-gray-200 hover:border-blue-300 hover:shadow-lg'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
              <span className="hidden sm:inline">{category.label}</span>
              {activeFilter === category.id && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 transform"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Header */}
              <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 p-6 relative overflow-hidden">
                {/* Floating Particles Effect */}
                <div className="absolute inset-0">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
                  <div className="absolute bottom-3 left-3 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 border border-white/30">
                      <span className="text-white text-sm font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-2xl px-3 py-2 border border-white/30">
                      <span className="text-yellow-300 text-lg">⭐</span>
                      <span className="text-white text-sm font-semibold">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 group-hover:text-yellow-100 transition-colors duration-300">{course.title}</h3>
                  <p className="text-blue-100 text-sm flex items-center">
                    <span className="mr-2">👥</span>
                    {course.students} students enrolled
                  </p>
                </div>
                
                {/* Hover Effect Overlay */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-100 transition-opacity duration-300"></div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 relative">
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {course.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {course.features.slice(0, 3).map((feature, i) => (
                      <span 
                        key={i} 
                        className="bg-gradient-to-r from-gray-100 to-blue-50 text-gray-700 px-3 py-2 rounded-xl text-xs font-medium border border-gray-200 hover:border-blue-300 transition-colors duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                    {course.features.length > 3 && (
                      <span className="text-gray-500 text-xs bg-gray-50 px-2 py-1 rounded-lg">+{course.features.length - 3} more</span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex justify-end">
                  <Link 
                    href={course.link} 
                    className="group/btn relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-2xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Learn More
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>
                
                {/* Corner Decoration */}
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-blue-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card Border Glow Effect */}
              {hoveredCard === index && (
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-xl -z-10 scale-110"></div>
              )}
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="relative bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0">
              <div className="absolute top-4 left-4 w-16 h-16 border-2 border-blue-200/50 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-purple-200/30 rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-blue-200/20 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-gray-900 mb-4">
                Can&apos;t Find What You&apos;re 
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Looking For?
                </span>
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                We offer customized training programs for organizations and individuals. Contact us to discuss your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="group relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    🚀 Contact Us
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  href="/courses" 
                  className="group relative border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-2xl font-bold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    📚 View All Courses
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoursesSection