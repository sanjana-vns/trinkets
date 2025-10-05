'use client'

import { useState, useEffect, useRef } from 'react'

// Revolutionary Testimonials Section
const AboutTestimonials = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const testimonials = [
    {
      name: "Rahul Sharma",
      position: "Piping Design Engineer",
      company: "Tata Consulting Engineers",
      package: "₹8.5 LPA",
      message: "Trinkets Institute transformed my career completely. The practical training and industry exposure I received here made me job-ready from day one. The faculty's dedication and real-world project experience gave me the confidence to excel in my role.",
      avatar: "👨‍💼",
      rating: 5,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      name: "Priya Patel",
      position: "HVAC Design Engineer", 
      company: "Johnson Controls",
      package: "₹7.2 LPA",
      message: "The comprehensive curriculum and hands-on approach at Trinkets Institute set them apart. I learned not just theory but actual industry practices. The placement support was exceptional, and I'm now working with my dream company.",
      avatar: "👩‍💼",
      rating: 5,
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      name: "Amit Kumar",
      position: "Electrical Design Engineer",
      company: "L&T Construction",
      package: "₹9.0 LPA",
      message: "What makes Trinkets Institute special is their industry connections and practical approach. The projects we worked on during the course were exactly what I'm doing now in my job. Couldn't have asked for better preparation.",
      avatar: "👨‍🔧",
      rating: 5,
      gradient: "from-sky-500 to-indigo-500"
    },
    {
      name: "Sneha Gupta",
      position: "MEP Coordinator",
      company: "Godrej Properties",
      package: "₹6.8 LPA",
      message: "The mentorship and guidance I received at Trinkets Institute was invaluable. The faculty didn't just teach technical skills but also helped develop professional communication and problem-solving abilities that are crucial in the industry.",
      avatar: "👩‍🏗️",
      rating: 5,
      gradient: "from-blue-500 to-sky-500"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) observer.observe(sectionRef.current)
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => {
      observer.disconnect()
      clearInterval(interval)
    }
  }, [testimonials.length])

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 sm:w-80 h-48 sm:h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
      </div>

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="relative inline-block mb-6 sm:mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-xl opacity-75 animate-pulse-slow"></div>
            <div className="relative bg-white/90 backdrop-blur-md border-2 sm:border-4 border-blue-300/50 rounded-full px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 shadow-xl sm:shadow-2xl">
              <span className="text-blue-600 font-black uppercase tracking-widest text-sm sm:text-lg lg:text-xl flex items-center gap-2 sm:gap-3">
                <span className="text-lg sm:text-xl lg:text-2xl">💬</span>
                Student Success Stories
                <span className="text-lg sm:text-xl lg:text-2xl">⭐</span>
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-500 leading-tight mb-4 sm:mb-6 lg:mb-8">
            What Our Alumni Say
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Real stories from real students who transformed their careers with 
            <span className="text-blue-600 font-bold"> excellence</span> and 
            <span className="text-indigo-600 font-bold"> dedication</span>
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative">
          <div className="max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`transition-all duration-1000 ${
                  index === activeTestimonial 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-10 absolute inset-0'
                }`}
              >
                <div className="relative bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border-2 border-blue-200/50">
                  
                  {/* Top Accent */}
                  <div className={`h-2 sm:h-3 bg-gradient-to-r ${testimonial.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-shimmer"></div>
                  </div>
                  
                  <div className="p-6 sm:p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center">
                      
                      {/* Testimonial Content */}
                      <div className="lg:col-span-2">
                        {/* Quote */}
                        <div className="relative mb-6 sm:mb-8">
                          <div className="text-4xl sm:text-6xl lg:text-8xl text-blue-200 opacity-50 absolute -top-2 sm:-top-4 -left-2 sm:-left-4">&ldquo;</div>
                          <blockquote className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed relative z-10 italic">
                            {testimonial.message}
                          </blockquote>
                          <div className="text-3xl sm:text-4xl lg:text-6xl text-blue-200 opacity-50 absolute -bottom-2 sm:-bottom-4 right-2 sm:right-4">&rdquo;</div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 sm:gap-2 mb-4 sm:mb-6 justify-center lg:justify-start">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-xl sm:text-2xl lg:text-3xl text-yellow-400">⭐</span>
                          ))}
                          <span className="text-sm sm:text-base lg:text-lg text-gray-600 ml-2">({testimonial.rating}/5)</span>
                        </div>
                      </div>

                      {/* Student Info */}
                      <div className="text-center lg:text-left">
                        {/* Avatar */}
                        <div className="relative mb-4 sm:mb-6">
                          <div className={`w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-r ${testimonial.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl sm:shadow-2xl mx-auto lg:mx-0`}>
                            <span className="text-4xl sm:text-5xl lg:text-6xl">{testimonial.avatar}</span>
                          </div>
                          <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full border-2 sm:border-4 border-white flex items-center justify-center">
                            <span className="text-xs sm:text-sm">✓</span>
                          </div>
                        </div>

                        {/* Info */}
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                          {testimonial.name}
                        </h3>
                        <p className="text-base sm:text-lg font-semibold text-blue-600 mb-2">
                          {testimonial.position}
                        </p>
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-2">
                          {testimonial.company}
                        </p>
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold inline-block">
                          Package: {testimonial.package}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 sm:mt-12 space-x-2 sm:space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  index === activeTestimonial 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-300 hover:bg-blue-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Statistics */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-600 mb-2">4.9/5</div>
              <div className="text-sm sm:text-base text-gray-600 font-semibold">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-600 mb-2">2000+</div>
              <div className="text-sm sm:text-base text-gray-600 font-semibold">Happy Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-yellow-600 mb-2">95%</div>
              <div className="text-sm sm:text-base text-gray-600 font-semibold">Would Recommend</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20 px-4">
          <div className="relative inline-block w-full max-w-4xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl sm:rounded-3xl blur-xl opacity-50 animate-pulse-slow"></div>
            <div className="relative bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-8 lg:p-12 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Ready to Write Your Success Story? 📝
              </h3>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
                Join our community of successful engineering professionals
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="/contact"
                  className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-white text-blue-600 font-bold rounded-xl sm:rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:scale-105 text-sm sm:text-base"
                >
                  Start Your Journey →
                </a>
                <a
                  href="/courses"
                  className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-blue-600 text-white font-bold rounded-xl sm:rounded-2xl hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 border-blue-400 text-sm sm:text-base"
                >
                  Explore Courses 🎓
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutTestimonials