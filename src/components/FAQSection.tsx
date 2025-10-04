'use client'

import { useState, useEffect, useRef } from 'react'

// Next-Level Ultra Creative FAQ Section with Cutting-Edge Effects
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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
    
    // Advanced Intersection Observer with multiple thresholds
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        if (entry.isIntersecting) {
          // Trigger staggered animations
          setTimeout(() => {
            const cards = document.querySelectorAll('.faq-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in')
              }, index * 200)
            })
          }, 300)
        }
      },
      { threshold: [0.1, 0.3, 0.5, 0.7] }
    )
    
    if (sectionRef.current) observer.observe(sectionRef.current)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const faqs = [
    {
      question: "What courses does Trinkets Institute offer?",
      answer: "We offer comprehensive programs in Piping Design, HVAC Systems, Process Engineering, and Structural Design. All our courses are designed by industry experts and include hands-on training with the latest software and tools used in the engineering industry.",
      icon: "🎓",
      gradient: "from-orange-400 via-red-400 to-pink-400",
      bgPattern: "dots",
      accentColor: "orange"
    },
    {
      question: "Are your courses suitable for beginners?",
      answer: "Yes, our courses are designed to accommodate students from all backgrounds. We start with fundamentals and gradually progress to advanced topics. Our experienced instructors provide personalized attention to ensure every student succeeds.",
      icon: "🌟",
      gradient: "from-amber-400 via-orange-400 to-red-400",
      bgPattern: "waves",
      accentColor: "amber"
    },
    {
      question: "What is the duration of the courses?",
      answer: "Course duration varies depending on the program. Our standard courses range from 3 to 6 months, with flexible timing options including weekday and weekend batches. We also offer intensive crash courses for working professionals.",
      icon: "⏰",
      gradient: "from-yellow-400 via-amber-400 to-orange-400",
      bgPattern: "grid",
      accentColor: "yellow"
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes, we offer 100% placement support to all our students. Our dedicated placement team works with leading companies in the industry to ensure our graduates find suitable employment opportunities. We have a strong track record of successful placements.",
      icon: "🚀",
      gradient: "from-orange-400 via-amber-400 to-yellow-400",
      bgPattern: "circuit",
      accentColor: "orange"
    },
    {
      question: "What software will I learn in the courses?",
      answer: "Our courses cover industry-standard software including AutoCAD, SolidWorks, ANSYS, Revit, Bentley MicroStation, PDMS, and many more depending on your chosen specialization. You'll gain hands-on experience with the same tools used by professionals in the field.",
      icon: "💻",
      gradient: "from-amber-400 via-yellow-400 to-lime-400",
      bgPattern: "hexagon",
      accentColor: "amber"
    },
    {
      question: "What certifications will I receive?",
      answer: "Upon successful completion, you'll receive industry-recognized certificates from Trinkets Institute. We also provide preparation for various professional certifications that are valued by employers in the engineering and design industries.",
      icon: "🏆",
      gradient: "from-yellow-400 via-orange-400 to-amber-400",
      bgPattern: "mesh",
      accentColor: "yellow"
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
      id="faq-section"
      className="relative py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at ${mousePosition.x * 0.1}px ${mousePosition.y * 0.1}px, rgba(251, 146, 60, 0.15) 0%, transparent 50%),
          radial-gradient(circle at ${mousePosition.x * 0.08}px ${mousePosition.y * 0.08}px, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
          linear-gradient(45deg, transparent 30%, rgba(251, 146, 60, 0.05) 50%, transparent 70%)
        `,
        transform: `translateY(${scrollY * 0.1}px)`
      }}
    >
      {/* Ultra Dynamic Background with Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Morphing Background Shapes */}
        <div 
          className="absolute w-[120vh] h-[120vh] opacity-20"
          style={{
            background: `conic-gradient(from ${mousePosition.x * 0.2}deg at 50% 50%, 
                        #fb923c, #f59e0b, #eab308, #fb923c)`,
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px) rotate(${scrollY * 0.1}deg)`,
            left: '-20%',
            top: '-20%',
            filter: 'blur(60px)',
            animation: 'morph 20s ease-in-out infinite'
          }}
        />
        
        <div 
          className="absolute w-[100vh] h-[100vh] opacity-25"
          style={{
            background: `radial-gradient(circle at 30% 30%, #f59e0b, #fb923c, transparent)`,
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px) rotate(${-scrollY * 0.15}deg)`,
            right: '-15%',
            top: '10%',
            filter: 'blur(40px)',
            animation: 'morph-reverse 25s ease-in-out infinite'
          }}
        />

        {/* Floating 3D Elements */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              background: `linear-gradient(135deg, #fb923c, #f59e0b, #eab308)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate(${mousePosition.x * (Math.random() * 0.02)}px, ${mousePosition.y * (Math.random() * 0.02)}px)`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'blur(1px)'
            }}
          />
        ))}

        {/* Interactive Light Rays */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `conic-gradient(from ${mousePosition.x * 0.1}deg at ${mousePosition.x * 0.1}% ${mousePosition.y * 0.1}%, 
                        transparent 0deg, #fb923c 60deg, transparent 120deg, #f59e0b 180deg, transparent 240deg, #eab308 300deg, transparent 360deg)`,
            animation: 'rotate 60s linear infinite'
          }}
        />
      </div>

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Simplified Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="relative inline-block mb-8">
            <div className="bg-white/90 backdrop-blur-md border-2 border-orange-300/50 rounded-full px-8 py-3 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">
                  🧠 Frequently Asked Questions
                </span>
              </div>
            </div>
          </div>
          
          {/* Title */}
          <div className="relative mb-8">
            <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 leading-tight">
              Got Questions?
            </h2>
            
            <div className="mt-4">
              <span className="text-3xl lg:text-4xl font-bold text-gray-700">
                We&apos;ve Got <span className="text-orange-600">Answers!</span> 🎯
              </span>
            </div>

            {/* Underline */}
            <div className="mt-6 flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 rounded-full"></div>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about starting your 
            <span className="text-orange-600 font-semibold">engineering career journey</span> with us
          </p>
        </div>

        {/* Revolutionary FAQ Cards with Next-Level Creativity */}
        <div className="grid gap-12">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`faq-card group relative transition-all duration-1000 transform-gpu ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              } ${hoveredIndex === index ? 'scale-105 z-10' : ''}`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                perspective: '1000px'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Holographic Card with Advanced Effects */}
              <div className="relative group/card">
                {/* Dynamic Background Pattern */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-5"
                  style={{
                    backgroundImage: getBackgroundPattern(faq.bgPattern, `rgba(251, 146, 60, 0.3)`),
                    backgroundSize: '30px 30px',
                    transform: `rotate(${hoveredIndex === index ? '5deg' : '0deg'})`,
                    transition: 'transform 0.5s ease'
                  }}
                />

                {/* Outer Glow Ring */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${faq.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-75 transition-all duration-700 animate-pulse-slow`}></div>
                
                {/* Main Card Container */}
                <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-4xl transition-all duration-700 overflow-hidden border-2 border-transparent hover:border-orange-200/50 group-hover:scale-[1.02] transform-gpu">
                  
                  {/* Top Accent with Animated Gradient */}
                  <div className={`h-3 bg-gradient-to-r ${faq.gradient} relative overflow-hidden rounded-t-3xl`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-shimmer"></div>
                    <div className="absolute top-0 left-0 w-full h-full opacity-50">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                          style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${1 + Math.random() * 2}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-12 py-12 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-orange-50/80 hover:to-amber-50/80 transition-all duration-700 group-hover/card:scale-[1.01] transform-gpu relative overflow-hidden"
                  >
                    {/* Button Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-100/0 via-orange-100/50 to-orange-100/0 transform translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-1000"></div>
                    
                    <div className="flex items-center space-x-8 relative z-10">
                      {/* 3D Icon with Complex Animations */}
                      <div className="relative flex-shrink-0">
                        {/* Icon Glow */}
                        <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${faq.gradient} rounded-3xl blur-lg opacity-50 group-hover/card:opacity-100 transition-all duration-500 animate-pulse-slow`}></div>
                        
                        {/* Main Icon Container */}
                        <div className={`relative w-20 h-20 bg-gradient-to-br ${faq.gradient} rounded-3xl flex items-center justify-center shadow-2xl group-hover/card:shadow-4xl group-hover/card:scale-110 transition-all duration-700 transform-gpu overflow-hidden`}>
                          {/* Icon Background Pattern */}
                          <div 
                            className="absolute inset-0 opacity-20"
                            style={{
                              backgroundImage: getBackgroundPattern(faq.bgPattern, 'rgba(255, 255, 255, 0.3)'),
                              backgroundSize: '8px 8px'
                            }}
                          />
                          
                          {/* Animated Icon */}
                          <span className="relative text-4xl filter drop-shadow-xl transform group-hover/card:scale-125 group-hover/card:rotate-12 transition-all duration-500 z-10">
                            {faq.icon}
                          </span>
                          
                          {/* Sparkle Effects */}
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full opacity-0 group-hover/card:opacity-100 animate-ping transition-opacity duration-300"></div>
                          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-yellow-300 rounded-full opacity-0 group-hover/card:opacity-100 animate-ping transition-opacity duration-300" style={{animationDelay: '0.2s'}}></div>
                        </div>

                        {/* Floating Ring Effect */}
                        <div className={`absolute inset-0 w-20 h-20 border-4 border-${faq.accentColor}-300 rounded-3xl opacity-0 group-hover/card:opacity-100 group-hover/card:scale-150 transition-all duration-700 pointer-events-none`}></div>
                      </div>
                      
                      {/* Enhanced Question Text */}
                      <div className="flex-1 relative">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-orange-600 group-hover/card:to-amber-600 transition-all duration-700 leading-tight">
                          {faq.question}
                        </h3>
                        
                        {/* Dynamic Progress Bar */}
                        <div className="mt-4 h-1 w-0 group-hover/card:w-full bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 rounded-full transition-all duration-1000"></div>
                        
                        {/* Question Number Badge */}
                        <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg opacity-0 group-hover/card:opacity-100 transition-all duration-500">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    
                    {/* Ultra 3D Expand Button */}
                    <div className="relative flex-shrink-0 ml-8">
                      {/* Button Glow */}
                      <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl blur-lg opacity-50 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Main Button */}
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 
                                     flex items-center justify-center transform transition-all duration-700 shadow-2xl group-hover/card:shadow-4xl overflow-hidden
                                     ${openIndex === index ? 'rotate-180 scale-110 bg-gradient-to-br from-amber-500 to-orange-500' : 'group-hover/card:scale-110 group-hover/card:rotate-12'}`}>
                        
                        {/* Button Background Animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000"></div>
                        
                        {/* Arrow Icon */}
                        <svg className="relative w-7 h-7 text-white filter drop-shadow-lg z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                        
                        {/* Button Sparkles */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover/card:opacity-100 animate-ping transition-opacity duration-300"></div>
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full opacity-0 group-hover/card:opacity-100 animate-ping transition-opacity duration-300" style={{animationDelay: '0.3s'}}></div>
                      </div>
                    </div>
                  </button>
                  
                  {/* Revolutionary Answer Section */}
                  <div className={`overflow-hidden transition-all duration-1000 ease-out 
                                 ${openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-12 pb-12">
                      <div className="relative">
                        {/* Decorative Separator */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent mb-8 relative">
                          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-400 rounded-full"></div>
                        </div>
                        
                        {/* Enhanced Answer Container */}
                        <div className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-3xl p-10 border-2 border-orange-200/50 backdrop-blur-sm overflow-hidden shadow-inner">
                          
                          {/* Dynamic Background Pattern */}
                          <div 
                            className="absolute inset-0 opacity-5"
                            style={{
                              backgroundImage: getBackgroundPattern(faq.bgPattern, 'rgba(251, 146, 60, 0.4)'),
                              backgroundSize: '20px 20px'
                            }}
                          />
                          
                          {/* Floating Elements */}
                          <div className="absolute inset-0 opacity-10">
                            {[...Array(8)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute bg-orange-400 rounded-full animate-float"
                                style={{
                                  width: `${Math.random() * 15 + 5}px`,
                                  height: `${Math.random() * 15 + 5}px`,
                                  left: `${Math.random() * 100}%`,
                                  top: `${Math.random() * 100}%`,
                                  animationDelay: `${Math.random() * 5}s`,
                                  animationDuration: `${3 + Math.random() * 4}s`
                                }}
                              />
                            ))}
                          </div>
                          
                          {/* Answer Text */}
                          <p className="relative text-gray-700 leading-relaxed text-xl font-medium z-10">
                            {faq.answer}
                          </p>
                          
                          {/* Enhanced Quote Mark */}
                          <div className="absolute -top-4 -left-4 text-8xl text-orange-300 opacity-20 font-serif transform rotate-12">&ldquo;</div>
                          <div className="absolute -bottom-2 -right-2 text-6xl text-amber-300 opacity-20 font-serif transform rotate-12">&rdquo;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simplified Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 rounded-2xl shadow-xl p-8 border border-orange-300/50 overflow-hidden max-w-4xl mx-auto">
            
            {/* Content */}
            <div className="relative z-10">
              <div className="mb-6">
                <div className="text-4xl mb-3">🤔</div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  Still Have Questions?
                </h3>
                <div className="w-16 h-1 bg-white rounded-full mx-auto opacity-75"></div>
              </div>
              
              <p className="text-lg text-orange-100 mb-6 max-w-2xl mx-auto leading-relaxed">
                Our friendly team is here to help you find the perfect course for your career goals.
              </p>
              
              {/* Interactive Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300 hover:shadow-lg text-center"
                >
                  Get In Touch 💬
                </a>
                
                <a
                  href="tel:+919820924788"
                  className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-all duration-300 hover:shadow-lg text-center border-2 border-orange-500"
                >
                  Call Now 📞
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection