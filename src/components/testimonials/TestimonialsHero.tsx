'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, Play, Users, TrendingUp, Award, ArrowRight, Heart, CheckCircle, Target } from 'lucide-react'

const TestimonialsHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const heroStories = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Senior Mechanical Engineer",
      company: "Reliance Industries",
      image: "/api/placeholder/120/120",
      before: "Fresh Graduate",
      after: "Senior Engineer",
      salaryIncrease: "180%",
      course: "Mechanical Engineering Design",
      testimonial: "Trinkets Institute transformed my career completely. From a confused graduate to a confident senior engineer at Reliance Industries.",
      achievement: "Led 5 major projects worth ₹50+ crores",
      rating: 5,
      background: "from-blue-600 to-indigo-600"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Lead Piping Engineer",
      company: "ONGC",
      image: "/api/placeholder/120/120",
      before: "Job Seeker",
      after: "Lead Engineer",
      salaryIncrease: "220%",
      course: "Piping Design & Engineering",
      testimonial: "The hands-on training and industry exposure at Trinkets Institute gave me the confidence to excel in the oil & gas sector.",
      achievement: "Designed pipeline systems across 3 states",
      rating: 5,
      background: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      name: "Amit Singh",
      role: "Structural Design Engineer",
      company: "L&T Construction",
      image: "/api/placeholder/120/120",
      before: "Career Change",
      after: "Design Expert",
      salaryIncrease: "150%",
      course: "Structural Engineering & Design",
      testimonial: "Switching careers at 28 seemed impossible until I found Trinkets Institute. Now I'm designing skyscrapers!",
      achievement: "Designed 10+ high-rise buildings",
      rating: 5,
      background: "from-green-600 to-teal-600"
    },
    {
      id: 4,
      name: "Sneha Patel",
      role: "HVAC Design Engineer",
      company: "Godrej & Boyce",
      image: "/api/placeholder/120/120",
      before: "Unemployed",
      after: "Design Engineer",
      salaryIncrease: "200%",
      course: "HVAC Design & MEP",
      testimonial: "After 2 years of unemployment, Trinkets Institute gave me not just a job, but a thriving career in HVAC design.",
      achievement: "Designed HVAC for 50+ commercial projects",
      rating: 5,
      background: "from-orange-600 to-red-600"
    }
  ]

  const quickStats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, number: "5,000+", label: "Success Stories", description: "Career transformations" },
    { icon: <Star className="w-8 h-8 text-yellow-500" />, number: "4.9/5", label: "Student Rating", description: "Consistent excellence" },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, number: "165%", label: "Avg Salary Increase", description: "Post-training growth" },
    { icon: <Award className="w-8 h-8 text-purple-500" />, number: "98%", label: "Placement Rate", description: "Industry placement success" }
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroStories.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroStories.length])

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30"
              >
                <Heart className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-100 text-sm font-medium">Real Success Stories</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-white">Career</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Transformations
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                Discover inspiring stories of engineering professionals who transformed their careers 
                with our industry-focused training programs. Real people, real results, real success.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="/gallery"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Stories
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="/testimonials"
                className="px-8 py-4 border-2 border-blue-400/50 rounded-xl font-semibold text-blue-100 hover:bg-blue-500/10 transition-all duration-300"
              >
                <span className="flex items-center">
                  <Quote className="w-5 h-5 mr-2" />
                  Read Reviews
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Success Story Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Profile Header */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full overflow-hidden">
                        <div className={`w-full h-full bg-gradient-to-br ${heroStories[currentSlide].background} opacity-80 flex items-center justify-center`}>
                          <Users className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {heroStories[currentSlide].name}
                      </h3>
                      <p className="text-blue-300 text-sm font-medium mb-1">
                        {heroStories[currentSlide].role}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {heroStories[currentSlide].company}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        {[...Array(heroStories[currentSlide].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-green-400 text-sm font-bold">
                        +{heroStories[currentSlide].salaryIncrease} Salary
                      </p>
                    </div>
                  </div>

                  {/* Transformation Timeline */}
                  <div className="grid grid-cols-3 gap-4 my-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Target className="w-6 h-6 text-red-400" />
                      </div>
                      <p className="text-red-300 text-sm font-medium">Before</p>
                      <p className="text-white text-xs">{heroStories[currentSlide].before}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Award className="w-6 h-6 text-blue-400" />
                      </div>
                      <p className="text-blue-300 text-sm font-medium">Training</p>
                      <p className="text-white text-xs">{heroStories[currentSlide].course}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <TrendingUp className="w-6 h-6 text-green-400" />
                      </div>
                      <p className="text-green-300 text-sm font-medium">After</p>
                      <p className="text-white text-xs">{heroStories[currentSlide].after}</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <Quote className="w-6 h-6 text-blue-400 mb-2" />
                    <p className="text-gray-200 text-sm leading-relaxed italic">
                      &ldquo;{heroStories[currentSlide].testimonial}&rdquo;
                    </p>
                  </div>

                  {/* Achievement */}
                  <div className="flex items-center justify-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-3 border border-blue-400/20">
                    <Award className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-yellow-300 text-sm font-medium">
                      {heroStories[currentSlide].achievement}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {heroStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-blue-400 scale-110' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="group p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-300 font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/60 text-sm">Read more success stories</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default TestimonialsHero