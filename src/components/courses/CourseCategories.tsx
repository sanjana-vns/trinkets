'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Ultra-Creative Course Categories with Advanced Filtering
const CourseCategories = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [visibleCourses, setVisibleCourses] = useState(9)
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null)

  const categories = ['All', 'Software Courses', 'PG Diploma Courses', 'Design & Drafting', 'Structural Engineering', 'Electrical Engineering', 'Process Engineering']

  const courses = [
    {
      id: 1,
      title: "Piping Engineering",
      category: "PG Diploma Courses",
      duration: "6 months",
      level: "Intermediate to Advanced",
      rating: 4.8,
      students: 1250,
      features: ["Piping System Design", "Industrial Applications", "Safety Standards", "Real Projects"],
      image: "🔧",
      gradient: "from-blue-600 to-indigo-600",
      badge: "Most Popular",
      link: "/courses/piping-design-engineering"
    },
    {
      id: 2,
      title: "SMART PLANT 3D (SP3D)",
      category: "Software Courses",
      duration: "4 months",
      level: "Advanced",
      rating: 4.9,
      students: 890,
      features: ["3D Plant Modeling", "Equipment Design", "Collision Detection", "Industry Standards"],
      image: "🏭",
      gradient: "from-green-600 to-teal-600",
      badge: "High Demand",
      link: "/courses/smart-plant-3d"
    },
    {
      id: 3,
      title: "Structural Engineering",
      category: "PG Diploma Courses",
      duration: "8 months",
      level: "Intermediate to Advanced",
      rating: 4.7,
      students: 650,
      features: ["Building Design", "Bridge Engineering", "Load Analysis", "Safety Standards"],
      image: "🏗️",
      gradient: "from-purple-600 to-blue-600",
      badge: "Industry Certified",
      link: "/courses/structural-design-analysis"
    },
    {
      id: 4,
      title: "E3D Piping",
      category: "Software Courses",
      duration: "3 months",
      level: "Advanced",
      rating: 4.6,
      students: 2100,
      features: ["AVEVA E3D", "Complex Piping", "3D Modeling", "Clash Detection"],
      image: "⚙️",
      gradient: "from-blue-600 to-indigo-600",
      badge: "Best Seller",
      link: "/courses/piping-design-engineering"
    },
    {
      id: 5,
      title: "MEP Engineering",
      category: "PG Diploma Courses",
      duration: "6 months",
      level: "Intermediate",
      rating: 4.5,
      students: 780,
      features: ["Mechanical Systems", "Electrical Design", "Plumbing Systems", "Building Integration"],
      image: "⚡",
      gradient: "from-indigo-600 to-purple-600",
      badge: "New",
      link: "/courses/mep-engineering"
    },
    {
      id: 6,
      title: "HVAC Engineering",
      category: "PG Diploma Courses",
      duration: "5 months",
      level: "Intermediate",
      rating: 4.8,
      students: 520,
      features: ["System Design", "Energy Efficiency", "Air Quality", "Comfort Analysis"],
      image: "❄️",
      gradient: "from-sky-600 to-blue-600",
      badge: "Premium",
      link: "/courses/hvac-system-design"
    },
    {
      id: 7,
      title: "STAAD Pro",
      category: "Software Courses",
      duration: "3 months",
      level: "Advanced",
      rating: 4.9,
      students: 430,
      features: ["Structural Analysis", "Design Codes", "Building Modeling", "Load Calculations"],
      image: "🏢",
      gradient: "from-emerald-600 to-teal-600",
      badge: "Expert Level",
      link: "/courses/structural-design-analysis"
    },
    {
      id: 8,
      title: "AutoCAD",
      category: "Design & Drafting",
      duration: "2 months",
      level: "Beginner to Intermediate",
      rating: 4.6,
      students: 950,
      features: ["2D Drafting", "Technical Drawing", "Design Documentation", "Industry Standards"],
      image: "📐",
      gradient: "from-blue-600 to-indigo-600",
      badge: "Foundation",
      link: "/courses/autocad-mechanical-design"
    },
    {
      id: 9,
      title: "ETABS",
      category: "Software Courses",
      duration: "3 months",
      level: "Advanced",
      rating: 4.7,
      students: 680,
      features: ["Building Analysis", "Seismic Design", "Wind Analysis", "Multi-story Structures"],
      image: "🌆",
      gradient: "from-violet-600 to-purple-600",
      badge: "Certified",
      link: "/courses/structural-design-analysis"
    },
    {
      id: 10,
      title: "CAESAR II",
      category: "Software Courses",
      duration: "2 months",
      level: "Advanced",
      rating: 4.8,
      students: 420,
      features: ["Pipe Stress Analysis", "Code Compliance", "Thermal Analysis", "Safety Design"],
      image: "🔩",
      gradient: "from-orange-600 to-red-600",
      badge: "Specialized",
      link: "/courses/piping-design-engineering"
    },
    {
      id: 11,
      title: "Electrical Design Engineering",
      category: "PG Diploma Courses",
      duration: "6 months",
      level: "Intermediate to Advanced",
      rating: 4.7,
      students: 580,
      features: ["Power Systems", "Distribution Design", "Safety Standards", "Load Calculations"],
      image: "⚡",
      gradient: "from-yellow-600 to-orange-600",
      badge: "High Growth",
      link: "/courses/mep-engineering"
    },
    {
      id: 12,
      title: "Instrumentation & Control",
      category: "PG Diploma Courses",
      duration: "5 months",
      level: "Advanced",
      rating: 4.6,
      students: 380,
      features: ["Process Control", "Automation Systems", "Sensor Technology", "SCADA Systems"],
      image: "📊",
      gradient: "from-cyan-600 to-blue-600",
      badge: "Automation",
      link: "/courses/process-engineering"
    }
  ]

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeFilter === 'All' || course.category === activeFilter
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.category.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const displayedCourses = filteredCourses.slice(0, visibleCourses)

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden" aria-label="Course categories and selection">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-black mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Choose Your Path to Success
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover the perfect course to accelerate your career in technology. 
            Each program is designed with industry expertise and real-world applications.
          </p>
        </header>

        {/* Search and Filter Controls */}
        <div className="mb-8 md:mb-12">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-6 md:mb-8 px-4 md:px-0">
            <label htmlFor="course-search" className="sr-only">Search for courses</label>
            <div className="absolute inset-y-0 left-4 md:left-3 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              id="course-search"
              type="search"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-12 md:pl-10 pr-3 py-3 md:py-4 border border-gray-300 rounded-xl leading-5 bg-white/80 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-base"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-4 md:px-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm md:text-base ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/80 text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
                aria-pressed={activeFilter === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 px-4 md:px-0">
          {displayedCourses.map((course, index) => (
            <article
              key={course.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border border-gray-100"
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Course Badge */}
              {course.badge && (
                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${course.gradient}`}>
                    {course.badge}
                  </span>
                </div>
              )}

              {/* Course Header */}
              <div className={`relative p-6 bg-gradient-to-br ${course.gradient} text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {course.image}
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-yellow-300">⭐</span>
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                    <div className="text-sm opacity-90">{course.students} students</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 leading-tight">{course.title}</h3>
                <p className="text-white/90 text-sm">{course.category}</p>

                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Course Details */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Duration:</span>
                    <p className="font-semibold text-gray-800">{course.duration}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Level:</span>
                    <p className="font-semibold text-gray-800">{course.level}</p>
                  </div>
                </div>

                {/* Course Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">What you&apos;ll learn:</h4>
                  <div className="space-y-2">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className={`w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${course.gradient} hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                    Enroll Now
                  </button>
                  <Link href={course.link}>
                    <button className="w-full py-3 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all duration-300">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>

              {/* Hover Glow Effect */}
              {hoveredCourse === course.id && (
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${course.gradient} opacity-10 blur-xl -z-10 scale-110`}></div>
              )}
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCourses < filteredCourses.length && (
          <div className="text-center">
            <button
              onClick={() => setVisibleCourses(prev => prev + 6)}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                Load More Courses
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        )}

        {/* Results Counter */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{displayedCourses.length}</span> of{' '}
            <span className="font-semibold">{filteredCourses.length}</span> courses
          </p>
        </div>
      </div>
    </section>
  )
}

export default CourseCategories