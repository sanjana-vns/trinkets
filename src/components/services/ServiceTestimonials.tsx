'use client'

import { useState, useEffect } from 'react'

const ServiceTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Project Manager",
      company: "Reliance Industries",
      service: "Piping Engineering Services",
      image: "👨‍💼",
      rating: 5,
      testimonial: "Trinkets Institute delivered exceptional piping design services for our petrochemical plant. Their expertise in SP3D and CAESAR II analysis ensured our project met all safety and efficiency standards.",
      projectValue: "₹2.5 Cr",
      timeline: "Completed in 8 weeks",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Chief Engineer",
      company: "Larsen & Toubro",
      service: "MEP Engineering Consulting",
      image: "👩‍🔬",
      rating: 5,
      testimonial: "Outstanding MEP design services that helped us optimize building performance and reduce energy costs by 25%. Professional team with deep technical knowledge.",
      projectValue: "₹1.8 Cr",
      timeline: "Delivered ahead of schedule",
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Technical Director",
      company: "Tata Projects",
      service: "Structural Engineering Solutions",
      image: "👨‍🏗️",
      rating: 5,
      testimonial: "Excellent structural analysis and design using STAAD Pro. The team's attention to detail and adherence to Indian standards made our industrial facility project a huge success.",
      projectValue: "₹3.2 Cr",
      timeline: "On-time delivery",
      gradient: "from-purple-500 to-pink-600"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Client Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from our satisfied clients who have experienced exceptional engineering services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className={`relative p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden`}>
            <div className="flex items-start gap-6 mb-6">
              <div className={`w-20 h-20 bg-gradient-to-br ${testimonials[currentTestimonial].gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
                {testimonials[currentTestimonial].image}
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">{testimonials[currentTestimonial].name}</h3>
                <p className="text-blue-400 font-semibold mb-1">{testimonials[currentTestimonial].role}</p>
                <p className="text-gray-400">{testimonials[currentTestimonial].company}</p>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
              </div>
            </div>

            <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
              &ldquo;{testimonials[currentTestimonial].testimonial}&rdquo;
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex gap-6">
                <div>
                  <div className="text-sm text-gray-400">Project Value</div>
                  <div className="text-white font-bold">{testimonials[currentTestimonial].projectValue}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Timeline</div>
                  <div className="text-white font-bold">{testimonials[currentTestimonial].timeline}</div>
                </div>
              </div>
              <div className="text-sm text-blue-400 font-semibold">
                {testimonials[currentTestimonial].service}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? 'bg-blue-500 scale-125' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceTestimonials