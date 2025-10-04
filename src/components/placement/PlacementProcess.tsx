'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  UserPlus, 
  BookOpen, 
  Target, 
  Users, 
  FileText, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight,
  ClipboardCheck,
  Award,
  Briefcase,
  TrendingUp
} from 'lucide-react'

const PlacementProcess = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const placementSteps = [
    {
      id: 1,
      icon: <UserPlus className="w-6 h-6" />,
      title: 'Profile Assessment',
      duration: '1-2 Days',
      description: 'Comprehensive evaluation of your technical background, career goals, and skill gaps',
      details: [
        'Technical skills assessment',
        'Career goal alignment',
        'Experience evaluation',
        'Learning path recommendation'
      ],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 2,
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Skill Enhancement',
      duration: '2-6 Months',
      description: 'Targeted training in industry-relevant engineering software and methodologies',
      details: [
        'SP3D, CAESAR II, STAAD Pro training',
        'Industry-specific modules',
        'Hands-on project experience',
        'Certification programs'
      ],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 3,
      icon: <FileText className="w-6 h-6" />,
      title: 'Profile Building',
      duration: '1 Week',
      description: 'Professional resume crafting and LinkedIn profile optimization for maximum impact',
      details: [
        'ATS-optimized resume creation',
        'LinkedIn profile enhancement',
        'Portfolio development',
        'Achievement highlighting'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 4,
      icon: <Target className="w-6 h-6" />,
      title: 'Job Matching',
      duration: '1-2 Weeks',
      description: 'Strategic matching with relevant job opportunities based on your profile and preferences',
      details: [
        'Company-specific targeting',
        'Role suitability analysis',
        'Salary negotiation preparation',
        'Location preference matching'
      ],
      color: 'from-pink-500 to-red-600'
    },
    {
      id: 5,
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Interview Preparation',
      duration: '2-3 Weeks',
      description: 'Comprehensive interview coaching including technical and HR rounds preparation',
      details: [
        'Technical interview practice',
        'HR round preparation',
        'Mock interview sessions',
        'Industry-specific questions'
      ],
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 6,
      icon: <Users className="w-6 h-6" />,
      title: 'Interview Coordination',
      duration: 'Ongoing',
      description: 'Active coordination of interview schedules and feedback management',
      details: [
        'Interview scheduling',
        'Company communication',
        'Feedback collection',
        'Follow-up management'
      ],
      color: 'from-orange-500 to-yellow-600'
    },
    {
      id: 7,
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Offer Management',
      duration: '1-2 Weeks',
      description: 'Professional negotiation and offer evaluation to secure the best opportunity',
      details: [
        'Offer evaluation',
        'Salary negotiation',
        'Terms discussion',
        'Final decision support'
      ],
      color: 'from-yellow-500 to-green-600'
    },
    {
      id: 8,
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Post-Placement Support',
      duration: '6 Months',
      description: 'Continued mentorship and career guidance for long-term success',
      details: [
        'Onboarding assistance',
        'Career mentorship',
        'Performance guidance',
        'Growth opportunities'
      ],
      color: 'from-green-500 to-blue-600'
    }
  ]

  const supportServices = [
    {
      icon: <ClipboardCheck className="w-6 h-6 text-blue-500" />,
      title: '24/7 Placement Support',
      description: 'Round-the-clock assistance throughout your placement journey'
    },
    {
      icon: <Award className="w-6 h-6 text-purple-500" />,
      title: 'Industry Mentorship',
      description: 'Direct guidance from experienced engineering professionals'
    },
    {
      icon: <Briefcase className="w-6 h-6 text-green-500" />,
      title: 'Multiple Job Offers',
      description: 'Access to numerous opportunities across various companies'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
      title: 'Career Growth Tracking',
      description: 'Long-term career monitoring and advancement support'
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
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % placementSteps.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isVisible, placementSteps.length])

  return (
    <section ref={sectionRef} className="pt-20 pb-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
            <Target className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-semibold">Placement Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Step-by-Step</span> Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our structured approach ensures maximum success rate through personalized guidance, industry connections, and comprehensive support at every stage.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-20"
        >
          <div className="grid lg:grid-cols-4 gap-6">
            {placementSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div
                  className={`relative p-6 bg-white rounded-2xl border-2 transition-all duration-300 ${
                    activeStep === index
                      ? 'border-blue-500 shadow-2xl shadow-blue-500/20'
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-lg'
                  }`}
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${step.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                      {step.duration}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connection Line */}
                  {index < placementSteps.length - 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-300" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Active Step Details */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12 border border-blue-100 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${placementSteps[activeStep].color} text-white`}>
                  {placementSteps[activeStep].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Step {placementSteps[activeStep].id}: {placementSteps[activeStep].title}
                  </h3>
                  <p className="text-blue-600 font-medium">{placementSteps[activeStep].duration}</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {placementSteps[activeStep].description}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">What&apos;s Included:</h4>
              <div className="space-y-3">
                {placementSteps[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Support Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {supportServices.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Placement Journey?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our proven 8-step process has helped thousands of engineers secure their dream jobs. Take the first step today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Begin Assessment
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PlacementProcess