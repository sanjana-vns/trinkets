'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, Users, Award, Building, ArrowRight, CheckCircle } from 'lucide-react'

const PlacementHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const highlights = [
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-400" />,
      number: "98%",
      label: "Placement Success Rate",
      description: "Guaranteed placement assistance"
    },
    {
      icon: <Users className="w-12 h-12 text-indigo-400" />,
      number: "5000+",
      label: "Students Placed",
      description: "Across top engineering companies"
    },
    {
      icon: <Building className="w-12 h-12 text-purple-400" />,
      number: "500+",
      label: "Hiring Partners",
      description: "Leading multinational companies"
    },
    {
      icon: <Award className="w-12 h-12 text-cyan-400" />,
      number: "12+ LPA",
      label: "Average Package",
      description: "Competitive salary packages"
    }
  ]

  const careerPaths = [
    {
      title: "Mechanical Engineering",
      roles: ["Design Engineer", "Project Engineer", "Production Engineer"],
      companies: ["Tata Motors", "Mahindra", "L&T", "Thermax"]
    },
    {
      title: "Electrical Engineering", 
      roles: ["Control Engineer", "Power Systems Engineer", "Automation Engineer"],
      companies: ["Siemens", "ABB", "Schneider Electric", "GE"]
    },
    {
      title: "Civil Engineering",
      roles: ["Structural Engineer", "Construction Manager", "Site Engineer"],
      companies: ["L&T Construction", "Shapoorji Pallonji", "DLF", "Godrej"]
    },
    {
      title: "Petrochemical Engineering",
      roles: ["Process Engineer", "Plant Engineer", "Safety Engineer"],
      companies: ["Reliance", "IOCL", "ONGC", "Chevron"]
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % careerPaths.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [careerPaths.length])

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-blue-100 text-sm font-medium">100% Placement Assistance Guarantee</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-white">Launch Your</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Engineering Career
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                Transform your engineering knowledge into a successful career with our comprehensive placement assistance. 
                Join thousands of engineers who have secured their dream jobs through our proven placement methodology.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center">
                  Get Placement Assistance
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 border-2 border-blue-400/50 rounded-xl font-semibold text-blue-100 hover:bg-blue-500/10 transition-all duration-300">
                View Success Stories
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Career Paths Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Career Opportunities</h3>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-blue-300 mb-4">
                      {careerPaths[currentSlide].title}
                    </h4>
                    
                    <div className="space-y-3 mb-6">
                      <h5 className="text-white font-medium">Available Roles:</h5>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {careerPaths[currentSlide].roles.map((role, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-200 border border-blue-400/30"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h5 className="text-white font-medium">Hiring Partners:</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {careerPaths[currentSlide].companies.map((company, index) => (
                          <div
                            key={index}
                            className="p-3 bg-white/5 rounded-lg border border-white/10 text-gray-300 text-sm"
                          >
                            {company}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {careerPaths.map((_, index) => (
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

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="group p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">{item.number}</div>
                    <div className="text-blue-300 font-semibold mb-1">{item.label}</div>
                    <div className="text-gray-400 text-sm">{item.description}</div>
                  </div>
                </div>
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
          <span className="text-white/60 text-sm">Scroll to explore</span>
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

export default PlacementHero