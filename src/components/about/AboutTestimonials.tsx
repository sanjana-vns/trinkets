'use client'

import { useState, useEffect, useRef } from 'react'

// Revolutionary Testimonials Section
const AboutTestimonials = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

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
  }, [])

  const testimonials = [
    {
      name: "Rahul Sharma",
      position: "Piping Design Engineer",
      company: "Tata Consulting Engineers",
      package: "₹8.5 LPA",
      message: "Trinkets Institute transformed my career completely. The practical training and industry exposure I received here made me job-ready from day one. The faculty's dedication and real-world project experience gave me the confidence to excel in my role.",
      avatar: "👨‍💼",
      rating: 5,
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Priya Patel",
      position: "HVAC Design Engineer", 
      company: "Johnson Controls",
      package: "₹7.2 LPA",
      message: "The comprehensive curriculum and hands-on approach at Trinkets Institute set them apart. I learned not just theory but actual industry practices. The placement support was exceptional, and I'm now working with my dream company.",
      avatar: "👩‍💼",
      rating: 5,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      name: "Amit Kumar",
      position: "Electrical Design Engineer",
      company: "L&T Construction",
      package: "₹9.0 LPA",
      message: "What makes Trinkets Institute special is their industry connections and practical approach. The projects we worked on during the course were exactly what I'm doing now in my job. Couldn't have asked for better preparation.",
      avatar: "👨‍🔧",
      rating: 5,
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      name: "Sneha Gupta",
      position: "MEP Coordinator",
      company: "Godrej Properties",
      package: "₹6.8 LPA",
      message: "The mentorship and guidance I received at Trinkets Institute was invaluable. The faculty didn't just teach technical skills but also helped develop professional communication and problem-solving abilities that are crucial in the industry.",
      avatar: "👩‍🏗️",
      rating: 5,
      gradient: "from-orange-500 to-amber-500"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
      </div>

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full blur-xl opacity-75 animate-pulse-slow"></div>
            <div className="relative bg-white/90 backdrop-blur-md border-4 border-orange-300/50 rounded-full px-12 py-6 shadow-2xl">
              <span className="text-orange-600 font-black uppercase tracking-widest text-xl flex items-center gap-3">
                <span className="text-2xl">💬</span>
                Student Success Stories
                <span className="text-2xl">⭐</span>
              </span>
            </div>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 leading-tight mb-8">
            What Our Alumni Say
          </h2>
          
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Real stories from real students who transformed their careers with us
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
                <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border-2 border-orange-200/50">
                  
                  {/* Top Accent */}
                  <div className={`h-3 bg-gradient-to-r ${testimonial.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-shimmer"></div>
                  </div>
                  
                  <div className="p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                      
                      {/* Testimonial Content */}
                      <div className="lg:col-span-2">
                        {/* Quote */}
                        <div className="relative mb-8">
                          <div className="text-8xl text-orange-200 opacity-50 absolute -top-4 -left-4">&ldquo;</div>
                          <blockquote className="text-2xl text-gray-700 leading-relaxed relative z-10 italic">
                            {testimonial.message}
                          </blockquote>
                          <div className="text-6xl text-orange-200 opacity-50 absolute -bottom-4 right-4">&rdquo;</div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-3xl text-yellow-400">⭐</span>
                          ))}
                          <span className="text-lg text-gray-600 ml-2">({testimonial.rating}/5)</span>
                        </div>
                      </div>

                      {/* Student Info */}
                      <div className="text-center lg:text-left">
                        {/* Avatar */}
                        <div className="relative mb-6">
                          <div className={`w-32 h-32 bg-gradient-to-r ${testimonial.gradient} rounded-3xl flex items-center justify-center shadow-2xl mx-auto lg:mx-0`}>
                            <span className="text-6xl">{testimonial.avatar}</span>
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white flex items-center justify-center">
                            <span className="text-sm">✓</span>
                          </div>
                        </div>

                        {/* Info */}
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {testimonial.name}
                        </h3>
                        <p className="text-lg font-semibold text-orange-600 mb-2">
                          {testimonial.position}
                        </p>
                        <p className="text-gray-600 mb-2">
                          {testimonial.company}
                        </p>
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold inline-block">
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
          <div className="flex justify-center mt-12 space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeTestimonial 
                    ? 'bg-orange-500 scale-125' 
                    : 'bg-gray-300 hover:bg-orange-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Statistics */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black text-orange-600 mb-2">4.9/5</div>
              <div className="text-gray-600 font-semibold">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-amber-600 mb-2">2000+</div>
              <div className="text-gray-600 font-semibold">Happy Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-yellow-600 mb-2">95%</div>
              <div className="text-gray-600 font-semibold">Would Recommend</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur-xl opacity-50 animate-pulse-slow"></div>
            <div className="relative bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl shadow-2xl p-12 text-white">
              <h3 className="text-4xl font-bold mb-4">
                Ready to Write Your Success Story? 📝
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Join our community of successful engineering professionals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-10 py-4 bg-white text-orange-600 font-bold rounded-2xl hover:bg-orange-50 transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Start Your Journey →
                </a>
                <a
                  href="/courses"
                  className="px-10 py-4 bg-orange-600 text-white font-bold rounded-2xl hover:bg-orange-700 transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 border-orange-400"
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