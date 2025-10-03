'use client'

import { useState, useEffect } from 'react'

// Ultra Creative FAQ Section with Advanced Animations
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    
    // Intersection observer for scroll animations
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    
    const section = document.getElementById('faq-section')
    if (section) observer.observe(section)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
    }
  }, [])

  const faqs = [
    {
      question: "What courses does Trinkets Institute offer?",
      answer: "We offer comprehensive programs in Piping Design, HVAC Systems, Process Engineering, and Structural Design. All our courses are designed by industry experts and include hands-on training with the latest software and tools used in the engineering industry.",
      icon: "🎓",
      gradient: "from-orange-400 via-red-400 to-pink-400"
    },
    {
      question: "Are your courses suitable for beginners?",
      answer: "Yes, our courses are designed to accommodate students from all backgrounds. We start with fundamentals and gradually progress to advanced topics. Our experienced instructors provide personalized attention to ensure every student succeeds.",
      icon: "🌟",
      gradient: "from-amber-400 via-orange-400 to-red-400"
    },
    {
      question: "What is the duration of the courses?",
      answer: "Course duration varies depending on the program. Our standard courses range from 3 to 6 months, with flexible timing options including weekday and weekend batches. We also offer intensive crash courses for working professionals.",
      icon: "⏰",
      gradient: "from-yellow-400 via-amber-400 to-orange-400"
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes, we offer 100% placement support to all our students. Our dedicated placement team works with leading companies in the industry to ensure our graduates find suitable employment opportunities. We have a strong track record of successful placements.",
      icon: "🚀",
      gradient: "from-orange-400 via-amber-400 to-yellow-400"
    },
    {
      question: "What software will I learn in the courses?",
      answer: "Our courses cover industry-standard software including AutoCAD, SolidWorks, ANSYS, Revit, Bentley MicroStation, PDMS, and many more depending on your chosen specialization. You'll gain hands-on experience with the same tools used by professionals in the field.",
      icon: "💻",
      gradient: "from-amber-400 via-yellow-400 to-lime-400"
    },
    {
      question: "What certifications will I receive?",
      answer: "Upon successful completion, you'll receive industry-recognized certificates from Trinkets Institute. We also provide preparation for various professional certifications that are valued by employers in the engineering and design industries.",
      icon: "🏆",
      gradient: "from-yellow-400 via-orange-400 to-amber-400"
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      id="faq-section"
      className="relative py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at ${mousePosition.x * 0.1}px ${mousePosition.y * 0.1}px, rgba(251, 146, 60, 0.1) 0%, transparent 50%),
          radial-gradient(circle at ${mousePosition.x * 0.08}px ${mousePosition.y * 0.08}px, rgba(245, 158, 11, 0.1) 0%, transparent 50%)
        `
      }}
    >
      {/* Dynamic Background Elements with Mouse Interaction */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-br from-orange-300 to-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '10%'
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            right: '10%',
            top: '20%'
          }}
        ></div>
        <div 
          className="absolute w-72 h-72 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            left: '20%',
            bottom: '10%'
          }}
        ></div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className={`relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Ultra Creative Section Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            {/* Animated Badge */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <div className="relative bg-white border-4 border-orange-300 rounded-full px-8 py-4 shadow-2xl">
                <span className="text-orange-600 font-black uppercase tracking-widest text-sm flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
                  🤔 Frequently Asked Questions
                  <div className="w-3 h-3 bg-amber-500 rounded-full animate-ping"></div>
                </span>
              </div>
            </div>
          </div>
          
          {/* Mega Title with Text Effects */}
          <div className="relative mb-8">
            <h2 className="text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 mb-4 leading-tight animate-gradient-x">
              Got Questions?
            </h2>
            <div className="relative">
              <span className="text-4xl lg:text-5xl font-bold text-gray-700 block animate-bounce-gentle">
                We&apos;ve Got Amazing Answers! ✨
              </span>
              {/* Decorative underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Everything you need to know about starting your <span className="text-orange-600 font-bold">engineering career journey</span> with us
          </p>

          {/* Interactive Floating Elements */}
          <div className="flex justify-center mt-12 space-x-8">
            {['🎯', '⚡', '🚀', '💫', '🌟'].map((emoji, i) => (
              <div 
                key={i}
                className="text-4xl animate-bounce hover:scale-125 transition-transform duration-300 cursor-pointer"
                style={{animationDelay: `${i * 200}ms`}}
              >
                {emoji}
              </div>
            ))}
          </div>
        </div>

        {/* Ultra Creative FAQ Items with Advanced Animations */}
        <div className="grid gap-8">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Holographic Card Effect */}
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-4xl transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-orange-200 group-hover:scale-[1.02] transform-gpu">
                
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-sm"></div>
                <div className="relative bg-white rounded-3xl m-0.5">
                  
                  {/* Top Accent Bar with Gradient Animation */}
                  <div className={`h-2 bg-gradient-to-r ${faq.gradient} rounded-t-3xl relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer"></div>
                  </div>
                  
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-10 py-10 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-orange-50/50 hover:to-amber-50/50 transition-all duration-500 group-hover:scale-[1.01] transform-gpu"
                  >
                    <div className="flex items-center space-x-6">
                      {/* 3D Icon with Hover Effects */}
                      <div className={`relative flex-shrink-0 w-16 h-16 bg-gradient-to-br ${faq.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 transform-gpu`}>
                        {/* Icon Background Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${faq.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                        <span className="relative text-3xl filter drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                          {faq.icon}
                        </span>
                        {/* Sparkle Effect */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Question Text with Gradient on Hover */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-amber-600 transition-all duration-500 leading-tight">
                          {faq.question}
                        </h3>
                        {/* Subtle subtitle effect */}
                        <div className="mt-2 h-1 w-0 group-hover:w-full bg-gradient-to-r from-orange-400 to-amber-400 rounded-full transition-all duration-700"></div>
                      </div>
                    </div>
                    
                    {/* 3D Expand Button */}
                    <div className={`relative flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 
                                   flex items-center justify-center transform transition-all duration-700 shadow-xl group-hover:shadow-2xl
                                   ${openIndex === index ? 'rotate-180 scale-110 bg-gradient-to-br from-amber-500 to-orange-500' : 'group-hover:scale-105 group-hover:rotate-12'}`}>
                      {/* Button Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                      <svg className="relative w-6 h-6 text-white filter drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                      {/* Rotation indicator */}
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </button>
                  
                  {/* Advanced Answer Section with Slide Animation */}
                  <div className={`overflow-hidden transition-all duration-700 ease-out 
                                 ${openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-10 pb-10">
                      <div className="relative">
                        {/* Decorative Line */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent mb-8"></div>
                        
                        {/* Answer Content with Glassmorphism */}
                        <div className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-2xl p-8 border border-orange-200/50 backdrop-blur-sm">
                          {/* Background Pattern */}
                          <div className="absolute inset-0 opacity-5">
                            <div className="absolute top-4 left-4 w-6 h-6 bg-orange-400 rounded-full"></div>
                            <div className="absolute top-8 right-8 w-4 h-4 bg-amber-400 rounded-full"></div>
                            <div className="absolute bottom-6 left-8 w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="absolute bottom-4 right-6 w-5 h-5 bg-orange-400 rounded-full"></div>
                          </div>
                          
                          <p className="relative text-gray-700 leading-relaxed text-lg font-medium">
                            {faq.answer}
                          </p>
                          
                          {/* Decorative Quote Mark */}
                          <div className="absolute -top-2 -left-2 text-6xl text-orange-300 opacity-30 font-serif">"</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ultra Creative Contact CTA with 3D Effects */}
        <div className="text-center mt-20">
          <div className="relative group">
            {/* Holographic Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-90 transition-opacity duration-500 animate-pulse-slow"></div>
            
            <div className="relative bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 rounded-3xl shadow-2xl p-16 border-2 border-orange-300/50 overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500">
              
              {/* Dynamic Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-white rounded-full animate-float"
                    style={{
                      width: `${Math.random() * 20 + 10}px`,
                      height: `${Math.random() * 20 + 10}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 10}s`,
                      animationDuration: `${5 + Math.random() * 10}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="text-7xl mb-4 animate-bounce-gentle">🤔</div>
                  <h3 className="text-5xl font-black text-white mb-4 drop-shadow-lg">
                    Still Curious?
                  </h3>
                  <div className="w-24 h-1 bg-white rounded-full mx-auto opacity-75"></div>
                </div>
                
                <p className="text-2xl text-orange-100 mb-12 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md">
                  Our <span className="font-bold text-white">friendly admissions team</span> is excited to help you discover the perfect course for your 
                  <span className="font-bold text-white"> engineering dreams!</span> ✨
                </p>
                
                {/* Interactive Buttons */}
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <a
                    href="/contact"
                    className="group/btn relative px-12 py-6 bg-white text-orange-600 font-bold rounded-2xl 
                             hover:bg-orange-50 transition-all duration-500 hover:shadow-2xl hover:scale-110 text-center
                             border-4 border-orange-200 hover:border-orange-300 transform-gpu overflow-hidden"
                  >
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                    
                    <span className="relative flex items-center justify-center gap-4 text-xl">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center group-hover/btn:rotate-12 transition-transform duration-300">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      Let&apos;s Chat & Explore! 💬
                    </span>
                  </a>
                  
                  <a
                    href="tel:+919820924788"
                    className="group/btn relative px-12 py-6 bg-orange-600 text-white font-bold rounded-2xl 
                             hover:bg-orange-700 transition-all duration-500 hover:shadow-2xl hover:scale-110 text-center
                             border-4 border-orange-500 hover:border-orange-400 transform-gpu overflow-hidden"
                  >
                    {/* Button Pulse Effect */}
                    <div className="absolute inset-0 bg-orange-400 rounded-2xl opacity-0 group-hover/btn:opacity-30 group-hover/btn:animate-ping"></div>
                    
                    <span className="relative flex items-center justify-center gap-4 text-xl">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover/btn:animate-pulse">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      Call Now & Start Today! 📞
                    </span>
                  </a>
                </div>

                {/* Social Proof Badge */}
                <div className="mt-12 flex justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/30">
                    <div className="flex items-center gap-4 text-white">
                      <div className="flex -space-x-2">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-8 h-8 bg-orange-300 rounded-full border-2 border-white flex items-center justify-center text-sm font-bold">
                            👨‍🎓
                          </div>
                        ))}
                      </div>
                      <div className="text-left">
                        <div className="font-bold">5000+ Happy Students</div>
                        <div className="text-sm opacity-90">Join our success story!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection