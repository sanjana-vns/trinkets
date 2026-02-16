'use client'
import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { TrendingUp, Users, Award, Building, Target, Clock, Star, CheckCircle, BookOpen, Briefcase } from 'lucide-react'

const PlacementStats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [counters, setCounters] = useState({
    placementRate: 0,
    studentsPlaced: 0,
    companies: 0,
    averagePackage: 0,
    experience: 0,
    satisfaction: 0
  })
  const sectionRef = useRef<HTMLDivElement>(null)

  // Mobile detection and reduced motion preference
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    const checkReducedMotion = () => setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    
    checkMobile()
    checkReducedMotion()
    
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Memoize stats data to prevent unnecessary re-renders
  const stats = useMemo(() => [
    {
      icon: <Target className="w-8 h-8" />,
      value: 80,
      suffix: '%',
      label: 'Placed Students',
      description: 'Industry-leading placement success',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-400/30'
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: 20,
      suffix: 'K+',
      label: 'Trained Students',
      description: 'Successful career transitions',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-400/30'
    },
    {
      icon: <Building className="w-8 h-8" />,
      value: 40,
      suffix: '+',
      label: 'Courses Offered',
      description: 'Top engineering programs',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-400/30'
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: 14,
      suffix: '+ Years',
      label: 'Industry Experience',
      description: 'Proven track record',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-400/30'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: 30,
      suffix: '+',
      label: 'Expert Teachers',
      description: 'Experienced trainers',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-400/30'
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: 9,
      suffix: '+',
      label: 'Awards & Recognition',
      description: 'Industry accolades',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-400/30'
    }
  ], [])

  // Memoize achievements data
  const achievements = useMemo(() => [
    {
      icon: <BookOpen className="w-6 h-6 text-blue-400" />,
      title: 'Curriculum-Industry Alignment',
      description: 'Our training programs are designed with direct input from industry partners'
    },
    {
      icon: <Briefcase className="w-6 h-6 text-indigo-400" />,
      title: 'Interview Guarantee',
      description: 'Every eligible student gets minimum 5 interview opportunities'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'Placement Assistance Until Success',
      description: 'Continuous support until you secure your desired position'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
      title: 'Career Growth Tracking',
      description: 'Post-placement career monitoring and advancement support'
    }
  ], [])

  // Mobile-optimized motion configurations
  const getMotionConfig = () => {
    if (reducedMotion) {
      return { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }
    }
    
    return isMobile 
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 } }
      : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } }
  }

  const getCounterKey = useCallback((index: number) => {
    const keys = ['placementRate', 'studentsPlaced', 'companies', 'averagePackage', 'experience', 'satisfaction']
    return keys[index]
  }, [])

  const startCounters = useCallback(() => {
    // Use isMobile state instead of window check
    const duration = isMobile ? 1000 : 2000
    const steps = isMobile ? 30 : 60
    const interval = duration / steps

    stats.forEach((stat, index) => {
      let current = 0
      const increment = stat.value / steps

      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          current = stat.value
          clearInterval(timer)
        }

        setCounters(prev => ({
          ...prev,
          [getCounterKey(index)]: Math.floor(current)
        }))
      }, interval)
    })
  }, [stats, isMobile, getCounterKey])

  useEffect(() => {
    // Use mobile state for better performance optimization
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          startCounters()
        }
      },
      { threshold: isMobile ? 0.1 : 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [startCounters, isMobile])

  const getCounterValue = (index: number) => {
    const values = [
      counters.placementRate,
      counters.studentsPlaced,
      counters.companies,
      counters.averagePackage,
      counters.experience,
      counters.satisfaction
    ]
    return values[index]
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          {...getMotionConfig()}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible && !isMobile ? 0 : (isMobile ? 0 : 30) }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
            <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-semibold">Placement Statistics</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Success</span> in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the impact of our comprehensive placement assistance program through these achievement milestones that showcase our commitment to your engineering career success.
          </p>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              {...getMotionConfig()}
              animate={{ 
                opacity: isVisible ? 1 : 0, 
                y: isVisible && !isMobile ? 0 : (isMobile ? 0 : 30) 
              }}
              transition={{ 
                duration: isMobile ? 0.3 : 0.6, 
                delay: isMobile ? 0 : index * 0.1 
              }}
              className={`group relative p-8 ${stat.bgColor} backdrop-blur-sm rounded-2xl border ${stat.borderColor} hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 ${!isMobile ? 'hover:scale-105' : ''}`}
            >
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${stat.color} text-white mb-4 ${!isMobile ? 'group-hover:scale-110' : ''} transition-transform duration-300`}>
                  {stat.icon}
                </div>
                
                <div className="space-y-3">
                  <div className="text-4xl font-bold text-gray-900">
                    {getCounterValue(index)}{stat.suffix}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{stat.label}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              </div>

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          {...getMotionConfig()}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            y: isVisible && !isMobile ? 0 : (isMobile ? 0 : 30) 
          }}
          transition={{ 
            duration: isMobile ? 0.3 : 0.8, 
            delay: isMobile ? 0 : 0.6 
          }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What Makes Our <span className="text-blue-600">Placement Program</span> Special
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach ensures not just job placement but career advancement and long-term professional growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                {...getMotionConfig()}
                animate={{ 
                  opacity: isVisible ? 1 : 0, 
                  x: isVisible && !isMobile ? 0 : (isMobile ? 0 : (index % 2 === 0 ? -30 : 30))
                }}
                transition={{ 
                  duration: isMobile ? 0.3 : 0.6, 
                  delay: isMobile ? 0 : 0.8 + index * 0.1 
                }}
                className="group flex items-start space-x-4 p-6 rounded-2xl hover:bg-blue-50 transition-all duration-300"
              >
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-2xl group-hover:bg-blue-200 transition-colors duration-300">
                  {achievement.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          {...getMotionConfig()}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            y: isVisible && !isMobile ? 0 : (isMobile ? 0 : 30) 
          }}
          transition={{ 
            duration: isMobile ? 0.3 : 0.8, 
            delay: isMobile ? 0 : 1.0 
          }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Take the first step towards your dream engineering career with our proven placement assistance program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                  Start Your Journey
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  Get Placement Assistance
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PlacementStats