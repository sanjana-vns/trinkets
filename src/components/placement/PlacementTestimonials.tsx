'use client'
import { motion } from "framer-motion"
import { StarIcon } from "@heroicons/react/24/solid"
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Mechanical Design Engineer",
    company: "Tata Motors",
    package: "₹8.5 LPA",
    course: "Mechanical Design & AutoCAD",
    image: "/api/placeholder/80/80",
    rating: 5,
    testimonial: "The placement support was exceptional. From resume building to interview preparation, everything was perfectly planned. I got placed in my dream company within 2 months of course completion.",
    location: "Pune, Maharashtra"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Piping Design Engineer",
    company: "L&T Hydrocarbon",
    package: "₹12 LPA",
    course: "Piping Design & Engineering",
    image: "/api/placeholder/80/80",
    rating: 5,
    testimonial: "The industry connections and practical training made all the difference. I was confident during interviews because of the real-world projects we worked on during the course.",
    location: "Mumbai, Maharashtra"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Process Engineer",
    company: "Reliance Industries",
    package: "₹15 LPA",
    course: "Process Engineering",
    image: "/api/placeholder/80/80",
    rating: 5,
    testimonial: "From a fresher to a process engineer in 6 months! The mentorship and placement guidance were outstanding. The course content was exactly what industry needs.",
    location: "Vadodara, Gujarat"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Structural Engineer",
    company: "DLF Limited",
    package: "₹9 LPA",
    course: "Structural Engineering & Design",
    image: "/api/placeholder/80/80",
    rating: 5,
    testimonial: "The personalized attention and career counseling helped me identify my strengths. The placement team worked tirelessly to match me with the right opportunity.",
    location: "Hyderabad, Telangana"
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "HVAC Design Engineer",
    company: "Johnson Controls",
    package: "₹10.5 LPA",
    course: "HVAC System Design",
    image: "/api/placeholder/80/80",
    rating: 5,
    testimonial: "The hands-on training with industry-standard software and the placement support made me job-ready. I appreciate the continuous support even after placement.",
    location: "Delhi, NCR"
  },
  {
    id: 6,
    name: "Kavya Nair",
    role: "Quality Engineer",
    company: "Mahindra Group",
    package: "₹7.5 LPA",
    course: "Quality Engineering & Six Sigma",
    image: "/api/placeholder/80/80",
    rating: 5,
    testimonial: "The course curriculum was perfectly aligned with industry requirements. The placement team's dedication and the alumni network support were incredible.",
    location: "Chennai, Tamil Nadu"
  }
]

const stats = [
  {
    label: "Average Salary Hike",
    value: "250%",
    icon: "📈"
  },
  {
    label: "Placement Within",
    value: "90 Days",
    icon: "⏱️"
  },
  {
    label: "Career Transitions",
    value: "85%",
    icon: "🔄"
  },
  {
    label: "Student Satisfaction",
    value: "98%",
    icon: "😊"
  }
]

export default function PlacementTestimonials() {
  return (
    <div className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Success <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our alumni who transformed their careers and achieved their dreams 
            through our comprehensive placement program
          </p>
        </motion.div>

        {/* Success Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <ChatBubbleBottomCenterTextIcon className="w-8 h-8 text-purple-400" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </p>

                {/* User Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-purple-600 font-medium">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>

                {/* Package and Location */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-green-600">{testimonial.package}</span>
                    <span className="text-xs text-gray-500">{testimonial.location}</span>
                  </div>
                  <p className="text-xs text-blue-600 mt-1">{testimonial.course}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Watch Success Stories</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            See how our alumni share their journey from learning to landing their dream jobs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="w-full h-32 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-4 border-l-purple-600 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                </div>
              </div>
              <h4 className="font-semibold mb-2">Mechanical Engineers</h4>
              <p className="text-sm opacity-90">Journey to Top Automotive Companies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="w-full h-32 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-4 border-l-purple-600 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                </div>
              </div>
              <h4 className="font-semibold mb-2">Piping Engineers</h4>
              <p className="text-sm opacity-90">Success in Oil & Gas Industry</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="w-full h-32 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-4 border-l-purple-600 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                </div>
              </div>
              <h4 className="font-semibold mb-2">Civil Engineers</h4>
              <p className="text-sm opacity-90">Leading Construction Projects</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}