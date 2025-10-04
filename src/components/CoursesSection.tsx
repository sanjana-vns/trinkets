'use client'

import { useState, useEffect, useRef } from 'react'

// Revolutionary Ultra-Creative Courses Section with Next-Level Effects
const CoursesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  // Advanced mouse tracking and scroll effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    
    // Advanced Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        if (entry.isIntersecting) {
          setTimeout(() => {
            const cards = document.querySelectorAll('.course-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in')
              }, index * 150)
            })
          }, 200)
        }
      },
      { threshold: [0.1, 0.3, 0.5] }
    )
    
    if (sectionRef.current) observer.observe(sectionRef.current)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const courses = [
    {
      title: "Piping Engineering",
      description: "Master the art of designing safe, efficient piping systems for industrial facilities. Learn cutting-edge techniques used by industry leaders worldwide.",
      icon: "🔧",
      gradient: "from-orange-400 via-red-500 to-pink-500",
      bgPattern: "circuit",
      category: "mechanical",
      duration: "6 Months",
      level: "Intermediate",
      students: "1200+",
      rating: 4.9,
      highlights: ["AutoCAD", "PDMS", "Industrial Safety", "3D Modeling"]
    },
    {
      title: "Instrumentation & Control",
      description: "Become an expert in process automation using advanced sensors, control systems and monitoring technologies across diverse industries.",
      icon: "⚡",
      gradient: "from-amber-400 via-orange-500 to-red-500",
      bgPattern: "hexagon",
      category: "automation",
      duration: "5 Months",
      level: "Advanced",
      students: "950+",
      rating: 4.8,
      highlights: ["PLC Programming", "SCADA", "DCS", "Smart Sensors"]
    },
    {
      title: "Electrical Design Engineering",
      description: "Design sophisticated electrical systems for buildings and industries, ensuring optimal power distribution and comprehensive safety standards.",
      icon: "💡",
      gradient: "from-yellow-400 via-amber-500 to-orange-500",
      bgPattern: "waves",
      category: "electrical",
      duration: "4 Months",
      level: "Beginner",
      students: "1500+",
      rating: 4.7,
      highlights: ["Electrical CAD", "Power Systems", "Safety Codes", "Panel Design"]
    },
    {
      title: "Structural Engineering",
      description: "Engineer resilient structures like skyscrapers and bridges. Master the science of ensuring buildings withstand loads and environmental forces.",
      icon: "🏗️",
      gradient: "from-orange-400 via-amber-500 to-yellow-500",
      bgPattern: "grid",
      category: "structural",
      duration: "6 Months",
      level: "Intermediate",
      students: "800+",
      rating: 4.9,
      highlights: ["Structural Analysis", "Steel Design", "Concrete Design", "Seismic Engineering"]
    },
    {
      title: "MEP Engineering",
      description: "Integrate mechanical, electrical, and plumbing systems seamlessly. Design building infrastructures that prioritize efficiency and safety.",
      icon: "🔌",
      gradient: "from-amber-400 via-yellow-500 to-lime-500",
      bgPattern: "dots",
      category: "mechanical",
      duration: "5 Months",
      level: "Advanced",
      students: "1100+",
      rating: 4.8,
      highlights: ["MEP Coordination", "BIM Modeling", "Energy Efficiency", "Building Codes"]
    },
    {
      title: "HVAC Engineering",
      description: "Optimize heating, ventilation and air conditioning systems for maximum comfort, superior air quality and outstanding energy efficiency.",
      icon: "❄️",
      gradient: "from-yellow-400 via-orange-500 to-amber-500",
      bgPattern: "mesh",
      category: "mechanical",
      duration: "4 Months",
      level: "Intermediate",
      students: "1300+",
      rating: 4.9,
      highlights: ["Load Calculations", "System Design", "Energy Modeling", "Green HVAC"]
    }
  ]

  const categories = [
    { id: 'all', label: 'All Courses', icon: '🎯' },
    { id: 'mechanical', label: 'Mechanical', icon: '⚙️' },
    { id: 'electrical', label: 'Electrical', icon: '⚡' },
    { id: 'automation', label: 'Automation', icon: '🤖' },
    { id: 'structural', label: 'Structural', icon: '🏗️' }
  ]

  const filteredCourses = activeFilter === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeFilter)

  // Generate dynamic background patterns
  const getBackgroundPattern = (pattern: string, color: string) => {
    const patterns = {
      dots: `radial-gradient(circle at 25% 25%, ${color} 2px, transparent 2px)`,
      waves: `repeating-linear-gradient(45deg, transparent, transparent 10px, ${color} 10px, ${color} 20px)`,
      grid: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
      circuit: `linear-gradient(90deg, ${color} 1px, transparent 1px), linear-gradient(${color} 1px, transparent 1px)`,
      hexagon: `radial-gradient(circle at 50% 50%, ${color} 3px, transparent 3px)`,
      mesh: `conic-gradient(from 0deg at 50% 50%, ${color}, transparent, ${color})`
    }
    return patterns[pattern as keyof typeof patterns] || patterns.dots
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at ${mousePosition.x * 0.1}px ${mousePosition.y * 0.1}px, rgba(251, 146, 60, 0.1) 0%, transparent 50%),
          radial-gradient(circle at ${mousePosition.x * 0.08}px ${mousePosition.y * 0.08}px, rgba(245, 158, 11, 0.08) 0%, transparent 50%)
        `,
        transform: `translateY(${scrollY * 0.05}px)`
      }}
    >
      {/* Ultra Dynamic Background with 3D Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Morphing Background Shapes */}
        <div 
          className="absolute w-[150vh] h-[150vh] opacity-15"
          style={{
            background: `conic-gradient(from ${mousePosition.x * 0.3}deg at 50% 50%, 
                        #fb923c, #f59e0b, #eab308, #fb923c)`,
            borderRadius: '40% 60% 60% 40% / 40% 40% 60% 60%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotate(${scrollY * 0.08}deg)`,
            left: '-25%',
            top: '-25%',
            filter: 'blur(80px)',
            animation: 'morph-courses 25s ease-in-out infinite'
          }}
        />
        
        <div 
          className="absolute w-[120vh] h-[120vh] opacity-20"
          style={{
            background: `radial-gradient(circle at 40% 40%, #f59e0b, #fb923c, transparent)`,
            borderRadius: '70% 30% 40% 60% / 50% 60% 40% 50%',
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px) rotate(${-scrollY * 0.1}deg)`,
            right: '-20%',
            bottom: '-20%',
            filter: 'blur(60px)',
            animation: 'morph-reverse 30s ease-in-out infinite'
          }}
        />

        {/* 3D Floating Course Elements */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              background: `linear-gradient(135deg, #fb923c, #f59e0b, #eab308)`,
              borderRadius: Math.random() > 0.5 ? '50%' : `${Math.random() * 30 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate(${mousePosition.x * (Math.random() * 0.03)}px, ${mousePosition.y * (Math.random() * 0.03)}px) rotate(${scrollY * (Math.random() * 0.5)}deg)`,
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`,
              filter: 'blur(2px)'
            }}
          />
        ))}

        {/* Animated Grid Lines */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #fb923c 1px, transparent 1px),
              linear-gradient(#fb923c 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            animation: 'grid-move 20s linear infinite'
          }}
        />
      </div>

      <div className={`relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Revolutionary Section Header */}
        <div className="text-center mb-20">
          {/* Floating Badge with Holographic Effect */}
          <div className="relative inline-block mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full blur-2xl opacity-50 animate-pulse-slow scale-125"></div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-md border-4 border-orange-300/50 rounded-full px-16 py-8 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <div className="flex items-center gap-6">
                  <div className="flex space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full animate-ping"></div>
                    <div className="w-5 h-5 bg-amber-500 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-5 h-5 bg-yellow-500 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
                  </div>
                  <span className="text-orange-600 font-black uppercase tracking-widest text-xl">
                    🎓 Our Engineering Courses
                  </span>
                  <div className="flex space-x-3">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
                    <div className="w-5 h-5 bg-amber-500 rounded-full animate-ping" style={{animationDelay: '0.8s'}}></div>
                    <div className="w-5 h-5 bg-orange-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mind-Blowing Title */}
          <div className="relative mb-12">
            <div className="absolute inset-0 text-7xl lg:text-8xl font-black text-orange-200/20 blur-sm transform scale-110">
              ENGINEERING EXCELLENCE
            </div>
            <h2 className="relative text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 leading-tight mb-6">
              Engineering Excellence
            </h2>
            
            <div className="relative">
              <div className="absolute inset-0 text-4xl lg:text-5xl font-bold text-amber-200/30 blur-sm">
                Industry-Oriented Training Programs 🚀
              </div>
              <p className="relative text-3xl lg:text-4xl font-bold text-gray-700">
                Industry-Oriented Training Programs 
                <span className="inline-block animate-spin text-5xl ml-4">🚀</span>
              </p>
            </div>

            {/* Enhanced Description */}
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto mt-8 leading-relaxed font-medium">
              Designed to <span className="text-orange-600 font-bold">empower your career</span> with practical skills and 
              <span className="text-amber-600 font-bold"> expert guidance</span> from industry professionals
            </p>

            {/* Dynamic Underline */}
            <div className="mt-10 flex justify-center">
              <div className="w-64 h-2 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -skew-x-12 animate-shimmer"></div>
              </div>
            </div>
          </div>

          {/* Revolutionary Filter System */}
          <div className="flex justify-center mb-16">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-4 shadow-2xl border-2 border-orange-200/50">
              <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 ${
                      activeFilter === category.id
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-2xl scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                  >
                    {activeFilter === category.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur-lg opacity-50 animate-pulse-slow"></div>
                    )}
                    <span className="relative flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      {category.label}
                    </span>
                    {activeFilter === category.id && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Revolutionary Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className={`course-card group relative transition-all duration-1000 transform-gpu ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              } ${hoveredIndex === index ? 'scale-105 z-20' : ''}`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                perspective: '1000px'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Ultra 3D Course Card */}
              <div className="relative group/card h-full">
                {/* Dynamic Background Pattern */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-5"
                  style={{
                    backgroundImage: getBackgroundPattern(course.bgPattern, `rgba(251, 146, 60, 0.4)`),
                    backgroundSize: '40px 40px',
                    transform: `rotate(${hoveredIndex === index ? '10deg' : '0deg'})`,
                    transition: 'transform 0.7s ease'
                  }}
                />

                {/* Outer Glow Ring */}
                <div className={`absolute -inset-3 bg-gradient-to-r ${course.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-700 animate-pulse-slow`}></div>
                
                {/* Main Card Container */}
                <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-4xl transition-all duration-700 overflow-hidden border-2 border-transparent hover:border-orange-200/50 group-hover/card:scale-[1.02] transform-gpu h-full flex flex-col">
                  
                  {/* Top Accent with Course Category */}
                  <div className={`h-3 bg-gradient-to-r ${course.gradient} relative overflow-hidden rounded-t-3xl`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-shimmer"></div>
                    <div className="absolute top-0 left-0 w-full h-full opacity-60">
                      {[...Array(15)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                          style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${0.8 + Math.random() * 1.2}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Card Header */}
                  <div className="relative p-8 pb-4">
                    {/* Course Rating & Stats Badge */}
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <span>⭐</span>
                      <span>{course.rating}</span>
                    </div>

                    {/* 3D Icon with Complex Animations */}
                    <div className="relative mb-6">
                      {/* Icon Glow */}
                      <div className={`absolute inset-0 w-24 h-24 bg-gradient-to-br ${course.gradient} rounded-3xl blur-xl opacity-50 group-hover/card:opacity-100 transition-all duration-500 animate-pulse-slow`}></div>
                      
                      {/* Main Icon Container */}
                      <div className={`relative w-24 h-24 bg-gradient-to-br ${course.gradient} rounded-3xl flex items-center justify-center shadow-2xl group-hover/card:shadow-4xl group-hover/card:scale-110 transition-all duration-700 transform-gpu overflow-hidden`}>
                        {/* Icon Background Pattern */}
                        <div 
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage: getBackgroundPattern(course.bgPattern, 'rgba(255, 255, 255, 0.4)'),
                            backgroundSize: '12px 12px'
                          }}
                        />
                        
                        {/* Animated Icon */}
                        <span className="relative text-5xl filter drop-shadow-2xl transform group-hover/card:scale-125 group-hover/card:rotate-12 transition-all duration-500 z-10">
                          {course.icon}
                        </span>
                        
                        {/* Multi-layer Sparkle Effects */}
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-white rounded-full opacity-0 group-hover/card:opacity-100 animate-ping transition-opacity duration-300"></div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-300 rounded-full opacity-0 group-hover/card:opacity-100 animate-ping transition-opacity duration-300" style={{animationDelay: '0.3s'}}></div>
                        <div className="absolute top-1/2 -right-3 w-3 h-3 bg-orange-300 rounded-full opacity-0 group-hover/card:opacity-100 animate-ping transition-opacity duration-300" style={{animationDelay: '0.6s'}}></div>
                      </div>

                      {/* Floating Orbit Rings */}
                      <div className="absolute inset-0 w-24 h-24 border-2 border-orange-300 rounded-3xl opacity-0 group-hover/card:opacity-100 group-hover/card:scale-150 transition-all duration-1000 pointer-events-none animate-spin-slow"></div>
                      <div className="absolute inset-0 w-24 h-24 border-2 border-amber-300 rounded-3xl opacity-0 group-hover/card:opacity-100 group-hover/card:scale-125 transition-all duration-700 pointer-events-none animate-spin-reverse"></div>
                    </div>

                    {/* Enhanced Course Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-orange-600 group-hover/card:to-amber-600 transition-all duration-700 leading-tight mb-4">
                      {course.title}
                    </h3>

                    {/* Course Info Pills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                        📅 {course.duration}
                      </span>
                      <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">
                        📊 {course.level}
                      </span>
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                        👥 {course.students}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="px-8 pb-6 flex-1 flex flex-col">
                    {/* Enhanced Description */}
                    <p className="text-gray-600 leading-relaxed text-lg mb-6 flex-1">
                      {course.description}
                    </p>

                    {/* Course Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.highlights.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 text-orange-700 px-3 py-1 rounded-lg text-sm font-medium hover:scale-105 transition-transform duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Ultra Creative Action Button */}
                    <div className="relative">
                      <button className="group/btn relative w-full px-8 py-4 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white font-bold rounded-2xl hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600 transition-all duration-500 hover:shadow-2xl hover:scale-105 text-center transform-gpu overflow-hidden">
                        {/* Button Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                        
                        {/* Button Content */}
                        <span className="relative flex items-center justify-center gap-3 text-lg">
                          <span className="transform group-hover/btn:scale-110 transition-transform duration-300">🚀</span>
                          Explore Course
                          <span className="transform group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                        </span>

                        {/* Button Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl opacity-0 group-hover/btn:opacity-30 group-hover/btn:animate-ping"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call-to-Action Section */}
        <div className="text-center mt-20">
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse-slow"></div>
            
            <div className="relative bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 rounded-3xl shadow-2xl p-16 border-2 border-orange-300/50 overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500">
              
              {/* Dynamic Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(25)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-white rounded-full animate-float"
                    style={{
                      width: `${Math.random() * 25 + 10}px`,
                      height: `${Math.random() * 25 + 10}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 8}s`,
                      animationDuration: `${4 + Math.random() * 8}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-5xl font-black text-white mb-6 drop-shadow-lg">
                  Ready to Transform Your Career? 🎯
                </h3>
                <p className="text-2xl text-orange-100 mb-10 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-md">
                  Join thousands of successful engineers who started their journey with us. 
                  <span className="font-bold text-white"> Your future begins today!</span>
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="/contact"
                    className="group/cta px-12 py-6 bg-white text-orange-600 font-bold rounded-2xl hover:bg-orange-50 transition-all duration-500 hover:shadow-2xl hover:scale-110 text-center border-4 border-orange-200 hover:border-orange-300 transform-gpu overflow-hidden text-xl"
                  >
                    <span className="relative flex items-center justify-center gap-4">
                      <span className="text-3xl">📞</span>
                      Get Course Details
                      <span className="transform group-hover/cta:rotate-12 transition-transform duration-300">✨</span>
                    </span>
                  </a>
                  
                  <a
                    href="/courses"
                    className="group/cta px-12 py-6 bg-orange-600 text-white font-bold rounded-2xl hover:bg-orange-700 transition-all duration-500 hover:shadow-2xl hover:scale-110 text-center border-4 border-orange-500 hover:border-orange-400 transform-gpu overflow-hidden text-xl"
                  >
                    <span className="relative flex items-center justify-center gap-4">
                      <span className="text-3xl">🎓</span>
                      View All Courses
                      <span className="transform group-hover/cta:translate-x-2 transition-transform duration-300">→</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoursesSection