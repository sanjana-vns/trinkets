'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ArrowLeft, ArrowRight, MapPin, Calendar, TrendingUp, Award, User, Briefcase } from 'lucide-react'

const PlacementSuccess = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStory, setCurrentStory] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  const successStories = [
    {
      name: 'Rajesh Kumar',
      previousRole: 'Mechanical Engineering Graduate',
      currentRole: 'Senior Design Engineer',
      company: 'Siemens India',
      package: '14 LPA',
      location: 'Bangalore',
      duration: '6 months',
      story: 'The comprehensive training in SP3D and industry-specific modules helped me transition from campus to a senior role. The placement team\'s guidance was instrumental in securing multiple offers.',
      image: '/api/placeholder/80/80',
      rating: 5,
      specialization: 'Plant Design Engineering',
      achievements: ['SP3D Certified', 'Led 2 Major Projects', 'Team of 8 Engineers']
    },
    {
      name: 'Priya Sharma',
      previousRole: 'Electrical Engineering Student',
      currentRole: 'Automation Engineer',
      company: 'ABB Limited',
      package: '12 LPA',
      location: 'Pune',
      duration: '4 months',
      story: 'The hands-on training with real industry projects and the interview preparation sessions gave me the confidence to crack multiple technical rounds. Amazing support throughout the journey.',
      image: '/api/placeholder/80/80',
      rating: 5,
      specialization: 'Industrial Automation',
      achievements: ['PLC Programming Expert', 'HMI Development', 'Industrial IoT']
    },
    {
      name: 'Arjun Patel',
      previousRole: 'Civil Engineering Professional',
      currentRole: 'Structural Engineer',
      company: 'L&T Construction',
      package: '16 LPA',
      location: 'Mumbai',
      duration: '8 months',
      story: 'The STAAD Pro and structural analysis training combined with placement assistance helped me switch from a general civil role to specialized structural engineering with a 80% salary hike.',
      image: '/api/placeholder/80/80',
      rating: 5,
      specialization: 'Structural Engineering',
      achievements: ['STAAD Pro Expert', '15+ Bridge Projects', 'Design Team Lead']
    },
    {
      name: 'Sneha Reddy',
      previousRole: 'Chemical Engineering Graduate',
      currentRole: 'Process Engineer',
      company: 'Reliance Industries',
      package: '18 LPA',
      location: 'Jamnagar',
      duration: '5 months',
      story: 'The process simulation training and industry mentorship program opened doors to petrochemical giants. The networking opportunities were invaluable for my career growth.',
      image: '/api/placeholder/80/80',
      rating: 5,
      specialization: 'Process Engineering',
      achievements: ['HYSYS Certified', 'Refinery Operations', 'Process Optimization']
    },
    {
      name: 'Vikram Singh',
      previousRole: 'Mechanical Engineering Graduate',
      currentRole: 'Piping Engineer',
      company: 'Worley India',
      package: '22 LPA',
      location: 'Chennai',
      duration: '7 months',
      story: 'From campus placement preparation to landing a role in an international consultancy, the journey was transformative. The CAESAR II training was a game-changer for my career.',
      image: '/api/placeholder/80/80',
      rating: 5,
      specialization: 'Piping Engineering',
      achievements: ['CAESAR II Expert', 'Global Projects', 'Senior Consultant']
    },
    {
      name: 'Kavya Nair',
      previousRole: 'Engineering Professional',
      currentRole: 'Project Manager',
      company: 'General Electric',
      package: '20 LPA',
      location: 'Hyderabad',
      duration: '6 months',
      story: 'The leadership training and technical skills development helped me transition into project management. The placement team\'s industry connections made all the difference.',
      image: '/api/placeholder/80/80',
      rating: 5,
      specialization: 'Project Management',
      achievements: ['PMP Certified', '$50M Projects', 'Cross-functional Teams']
    }
  ]

  const successMetrics = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      value: '150%',
      label: 'Average Salary Hike',
      description: 'Post-training placement success'
    },
    {
      icon: <Award className="w-6 h-6 text-blue-500" />,
      value: '95%',
      label: 'Job Satisfaction Rate',
      description: 'Alumni feedback rating'
    },
    {
      icon: <User className="w-6 h-6 text-purple-500" />,
      value: '60 Days',
      label: 'Average Placement Time',
      description: 'From course completion'
    },
    {
      icon: <Briefcase className="w-6 h-6 text-orange-500" />,
      value: '3.2',
      label: 'Average Job Offers',
      description: 'Per successful candidate'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentStory((prev) => (prev + 1) % successStories.length)
      }, 6000)
      return () => clearInterval(interval)
    }
  }, [autoPlay, successStories.length])

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length)
    setAutoPlay(false)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length)
    setAutoPlay(false)
  }

  const currentStudent = successStories[currentStory]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-4">
            <Star className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-700 font-semibold">Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Stories, Real <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our placement assistance program has transformed engineering careers and opened doors to exciting opportunities in leading companies.
          </p>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {successMetrics.map((metric, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-gray-100 transition-colors duration-300">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900">{metric.value}</div>
                <h3 className="font-semibold text-gray-800">{metric.label}</h3>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main Success Story Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStory}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Student Info */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    {currentStudent.name.charAt(0)}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">{currentStudent.name}</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600">{currentStudent.previousRole}</p>
                      <p className="text-blue-600 font-semibold">{currentStudent.currentRole}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Briefcase className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-700">Company</span>
                    </div>
                    <p className="font-semibold text-gray-900">{currentStudent.company}</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-700">Package</span>
                    </div>
                    <p className="font-semibold text-gray-900">{currentStudent.package}</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-700">Location</span>
                    </div>
                    <p className="font-semibold text-gray-900">{currentStudent.location}</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-4 h-4 text-orange-600" />
                      <span className="text-sm font-medium text-orange-700">Duration</span>
                    </div>
                    <p className="font-semibold text-gray-900">{currentStudent.duration}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentStudent.achievements.map((achievement, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Story Content */}
              <div className="space-y-6">
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                  <blockquote className="text-lg text-gray-700 leading-relaxed pl-6 italic">
                    &ldquo;{currentStudent.story}&rdquo;
                  </blockquote>
                </div>

                <div className="flex items-center space-x-1">
                  {[...Array(currentStudent.rating)].map((_, index) => (
                    <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    ({currentStudent.rating}/5 rating)
                  </span>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500">
                  <p className="text-sm font-medium text-blue-700 mb-1">Specialization</p>
                  <p className="text-lg font-semibold text-blue-900">{currentStudent.specialization}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevStory}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Previous
            </button>

            <div className="flex space-x-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentStory(index)
                    setAutoPlay(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStory ? 'bg-blue-600 scale-110' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextStory}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Next
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful engineers who have transformed their careers through our comprehensive placement assistance program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Start Your Journey
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                View All Success Stories
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PlacementSuccess