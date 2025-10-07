'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Trophy, Medal, Star, Camera, Image as ImageIcon, ArrowRight, Eye, Users, Target } from 'lucide-react'

const GalleryHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const highlights = [
    {
      icon: <Award className="w-12 h-12 text-yellow-400" />,
      number: "50+",
      label: "Awards & Recognition",
      description: "Industry and academic excellence"
    },
    {
      icon: <Trophy className="w-12 h-12 text-blue-400" />,
      number: "1000+",
      label: "Project Showcases",
      description: "Real engineering solutions"
    },
    {
      icon: <Medal className="w-12 h-12 text-purple-400" />,
      number: "25+",
      label: "Professional Certifications",
      description: "Industry-recognized credentials"
    },
    {
      icon: <Star className="w-12 h-12 text-orange-400" />,
      number: "4.8/5",
      label: "Excellence Rating",
      description: "Consistent quality recognition"
    }
  ]

  const galleryCategories = [
    {
      title: "Awards & Recognition",
      description: "Celebrating excellence in engineering education and industry partnerships",
      image: "/images/gallery1.webp",
      count: "50+ Awards",
      icon: <Award className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Student Projects",
      description: "Showcase of innovative engineering solutions and design projects",
      image: "/images/gallery2.webp", 
      count: "500+ Projects",
      icon: <Target className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Certifications",
      description: "Professional certifications and industry-recognized credentials",
      image: "/images/gallery3.webp",
      count: "25+ Certifications",
      icon: <Medal className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Success Stories",
      description: "Visual testimonials and career transformation journeys",
      image: "/images/gallery4.webp",
      count: "1000+ Stories", 
      icon: <Users className="w-8 h-8 text-green-500" />
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryCategories.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [galleryCategories.length])

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                className="inline-flex items-center px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-400/30"
              >
                <Camera className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-yellow-100 text-sm font-medium">Excellence Showcase</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-white">Gallery of</span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Excellence
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                Explore our journey of engineering excellence through awards, certifications, project showcases, 
                and success stories that define our commitment to professional education and industry leadership.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl font-semibold text-white shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Explore Gallery
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 border-2 border-yellow-400/50 rounded-xl font-semibold text-yellow-100 hover:bg-yellow-500/10 transition-all duration-300">
                <span className="flex items-center">
                  <ImageIcon className="w-5 h-5 mr-2" />
                  View Awards
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Gallery Categories Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Gallery Categories</h3>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden">
                      <img
                        src={galleryCategories[currentSlide].image}
                        alt={galleryCategories[currentSlide].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
                        {galleryCategories[currentSlide].icon}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                      {galleryCategories[currentSlide].count}
                    </div>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <h4 className="text-xl font-semibold text-white">
                      {galleryCategories[currentSlide].title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {galleryCategories[currentSlide].description}
                    </p>
                  </div>

                  <button className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group">
                    View Category
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </AnimatePresence>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {galleryCategories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-yellow-400 scale-110' : 'bg-white/30'
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
                    <div className="text-yellow-300 font-semibold mb-1">{item.label}</div>
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
          <span className="text-white/60 text-sm">Explore our achievements</span>
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

export default GalleryHero