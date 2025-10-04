'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  Headphones, 
  Clock, 
  MessageCircle, 
  Video, 
  FileText, 
  Phone, 
  Mail, 
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Star,
  Shield,
  Users,
  Award
} from 'lucide-react'

const PlacementSupport = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const supportServices = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: '24/7 Career Counseling',
      description: 'Round-the-clock availability for career guidance and placement support',
      features: [
        'Dedicated career counselors',
        'Instant query resolution',
        'Career roadmap planning',
        'Emergency interview prep'
      ],
      availability: '24 Hours',
      responseTime: '< 30 minutes',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Virtual Interview Coaching',
      description: 'Live mock interviews with industry experts and real-time feedback',
      features: [
        'Live mock interviews',
        'Video interview practice',
        'Technical round simulation',
        'Performance analytics'
      ],
      availability: 'Scheduled Sessions',
      responseTime: 'Same Day',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Resume & Portfolio Review',
      description: 'Professional review and optimization of your career documents',
      features: [
        'ATS optimization',
        'Industry-specific formatting',
        'Portfolio enhancement',
        'LinkedIn profile optimization'
      ],
      availability: 'On Demand',
      responseTime: '24 Hours',
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Mentorship Program',
      description: 'One-on-one mentorship with industry professionals and alumni',
      features: [
        'Personal industry mentor',
        'Weekly guidance sessions',
        'Industry insights sharing',
        'Network expansion'
      ],
      availability: 'Weekly Sessions',
      responseTime: 'Scheduled',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-500/10'
    }
  ]

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-blue-500" />,
      title: 'Phone Support',
      detail: '+91-XXX-XXX-XXXX',
      description: 'Direct call support for urgent queries',
      availability: '24/7 Available'
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-500" />,
      title: 'WhatsApp Chat',
      detail: '+91-XXX-XXX-XXXX',
      description: 'Instant messaging for quick assistance',
      availability: 'Response < 5 mins'
    },
    {
      icon: <Mail className="w-6 h-6 text-purple-500" />,
      title: 'Email Support',
      detail: 'placement@trinketsinstitute.com',
      description: 'Detailed queries and document sharing',
      availability: 'Response < 2 hours'
    },
    {
      icon: <Video className="w-6 h-6 text-orange-500" />,
      title: 'Video Consultation',
      detail: 'Schedule Online',
      description: 'Face-to-face career guidance sessions',
      availability: 'By Appointment'
    }
  ]

  const guarantees = [
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: '100% Placement Assistance',
      description: 'Guaranteed support until you secure a suitable position'
    },
    {
      icon: <Clock className="w-6 h-6 text-green-500" />,
      title: 'Unlimited Interview Attempts',
      description: 'No limit on the number of interview opportunities'
    },
    {
      icon: <Award className="w-6 h-6 text-purple-500" />,
      title: 'Post-Placement Support',
      description: '6 months of career guidance after job placement'
    },
    {
      icon: <Star className="w-6 h-6 text-orange-500" />,
      title: 'Industry Network Access',
      description: 'Lifetime access to our professional network'
    }
  ]

  const faqData = [
    {
      question: 'How long does the placement process take?',
      answer: 'The average placement time is 60-90 days from course completion, depending on your profile and market conditions.'
    },
    {
      question: 'What if I don\'t get placed within the expected timeframe?',
      answer: 'We provide continued support with no time limit until you secure a suitable position that matches your career goals.'
    },
    {
      question: 'Do you provide support for salary negotiation?',
      answer: 'Yes, our career counselors provide comprehensive guidance on salary negotiation and offer evaluation.'
    },
    {
      question: 'Can I get placement assistance for specific companies?',
      answer: 'We maintain partnerships with 500+ companies and can target specific organizations based on your preferences.'
    }
  ]

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

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

  return (
    <section ref={sectionRef} className="pt-20 pb-0 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
            <Headphones className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-semibold">Placement Support</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Support</span> System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated placement support team ensures you receive personalized assistance throughout your job search journey with multiple channels of communication and expert guidance.
          </p>
        </motion.div>

        {/* Support Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {supportServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group p-8 ${service.bgColor} backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-xl transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveService(index)}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-600">Available</div>
                    <div className="text-lg font-bold text-gray-900">{service.availability}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Response Time</span>
                  <span className="text-sm font-bold text-blue-600">{service.responseTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Multiple Ways to <span className="text-blue-600">Connect</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your preferred communication method and get instant access to our placement support team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      {method.icon}
                    </div>
                    <div className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      {method.availability}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">{method.title}</h4>
                    <p className="text-sm font-medium text-blue-600">{method.detail}</p>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>

                  <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 group-hover:scale-105">
                    Connect Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guarantees Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-gray-100 transition-colors duration-300">
                  {guarantee.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{guarantee.title}</h3>
                <p className="text-sm text-gray-600">{guarantee.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our placement support services.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">{faq.question}</h4>
                    <ArrowRight className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      expandedFaq === index ? 'rotate-90' : ''
                    }`} />
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="p-6 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Start Your Placement Journey Today</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Connect with our placement support team and take the first step towards your dream engineering career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Get Placement Support
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PlacementSupport