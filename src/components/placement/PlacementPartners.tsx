'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Building2, Handshake, Globe, Star, ArrowRight, Award, Users, Briefcase } from 'lucide-react'

const PlacementPartners = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const partnerCategories = [
    {
      id: 'multinational',
      label: 'Multinational Corporations',
      icon: <Globe className="w-5 h-5" />,
      description: 'Global engineering leaders'
    },
    {
      id: 'indian',
      label: 'Indian Conglomerates',
      icon: <Building2 className="w-5 h-5" />,
      description: 'Leading Indian companies'
    },
    {
      id: 'consultancy',
      label: 'Engineering Consultancy',
      icon: <Briefcase className="w-5 h-5" />,
      description: 'Specialized consultancy firms'
    },
    {
      id: 'startups',
      label: 'Tech Startups',
      icon: <Star className="w-5 h-5" />,
      description: 'Innovative technology companies'
    }
  ]

  const partners = {
    multinational: [
      {
        name: 'Siemens',
        sector: 'Engineering & Technology',
        roles: ['Automation Engineer', 'Design Engineer', 'Project Engineer'],
        package: '8-15 LPA',
        logo: '/api/placeholder/120/60'
      },
      {
        name: 'General Electric (GE)',
        sector: 'Power & Energy',
        roles: ['Power Systems Engineer', 'Control Engineer', 'Field Engineer'],
        package: '10-18 LPA',
        logo: '/api/placeholder/120/60'
      },
      {
        name: 'ABB',
        sector: 'Industrial Automation',
        roles: ['Electrical Engineer', 'Software Engineer', 'Sales Engineer'],
        package: '7-14 LPA',
        logo: '/api/placeholder/120/60'
      },
      {
        name: 'Schneider Electric',
        sector: 'Energy Management',
        roles: ['Product Engineer', 'Application Engineer', 'R&D Engineer'],
        package: '8-16 LPA',
        logo: '/api/placeholder/120/60'
      },
      {
        name: 'Honeywell',
        sector: 'Process Solutions',
        roles: ['Process Engineer', 'Systems Engineer', 'Technical Consultant'],
        package: '9-17 LPA',
        logo: '/api/placeholder/120/60'
      },
      {
        name: 'Emerson',
        sector: 'Industrial Software',
        roles: ['Automation Specialist', 'Field Service Engineer', 'Project Manager'],
        package: '8-15 LPA',
        logo: '/api/placeholder/120/60'
      }
    ],
    indian: [
      {
        name: 'Larsen & Toubro (L&T)',
        sector: 'Infrastructure & Engineering',
        roles: ['Design Engineer', 'Site Engineer', 'Planning Engineer'],
        package: '6-12 LPA',
        logo: '/api/placeholder/120/60'
      },
      {
        name: 'Tata Motors',
        sector: 'Automotive',
        roles: ['Mechanical Engineer', 'Production Engineer', 'Quality Engineer'],
        package: '5-11 LPA',
        logo: '/api/placeholder/120/60'
      },
      {
        name: 'Mahindra Group',
        sector: 'Automotive & Aerospace',
        roles: ['Product Development Engineer', 'Manufacturing Engineer', 'Test Engineer'],
        package: '5-10 LPA',
        logo: '/api/placeholder/120/60'
      },
      {
        name: 'Reliance Industries',
        sector: 'Petrochemicals & Refining',
        roles: ['Process Engineer', 'Plant Engineer', 'Safety Engineer'],
        package: '8-16 LPA',
        logo: '/api/placeholder/120/60'
      },
      {
        name: 'BHEL',
        sector: 'Heavy Engineering',
        roles: ['Design Engineer', 'Project Engineer', 'Commissioning Engineer'],
        package: '6-12 LPA',
        logo: '/api/placeholder/120/60'
      },
      {
        name: 'Godrej Group',
        sector: 'Engineering & Consumer',
        roles: ['R&D Engineer', 'Manufacturing Engineer', 'Quality Assurance'],
        package: '5-11 LPA',
        logo: '/api/placeholder/120/60'
      }
    ],
    consultancy: [
      {
        name: 'Worley',
        sector: 'Engineering Consultancy',
        roles: ['Piping Engineer', 'Structural Engineer', 'Process Engineer'],
        package: '8-16 LPA',
        logo: '/api/placeholder/120/60'
      },
      {
        name: 'Wood',
        sector: 'Consulting & Engineering',
        roles: ['Project Engineer', 'Design Engineer', 'Lead Engineer'],
        package: '9-18 LPA',
        logo: '/api/placeholder/120/60'
      },
      {
        name: 'Fluor Corporation',
        sector: 'Engineering & Construction',
        roles: ['Lead Piping Engineer', 'Mechanical Engineer', 'Project Manager'],
        package: '10-20 LPA',
        logo: '/api/placeholder/120/60'
      },
      {
        name: 'Techniip (TechnipFMC)',
        sector: 'Oil & Gas Engineering',
        roles: ['Process Engineer', 'Equipment Engineer', 'Pipeline Engineer'],
        package: '12-22 LPA',
        logo: '/api/placeholder/120/60'
      },
      {
        name: 'Petrofac',
        sector: 'Engineering Services',
        roles: ['Senior Engineer', 'Engineering Manager', 'Technical Lead'],
        package: '11-21 LPA',
        logo: '/api/placeholder/120/60'
      },
      {
        name: 'KBR',
        sector: 'Technology & Engineering',
        roles: ['Design Engineer', 'Principal Engineer', 'Engineering Consultant'],
        package: '10-19 LPA',
        logo: '/api/placeholder/120/60'
      }
    ],
    startups: [
      {
        name: 'Ola Electric',
        sector: 'Electric Vehicles',
        roles: ['Battery Engineer', 'Vehicle Dynamics Engineer', 'Software Engineer'],
        package: '8-18 LPA',
        logo: '/api/placeholder/120/60'
      },
      {
        name: 'Zomato',
        sector: 'Food Tech',
        roles: ['Operations Engineer', 'Supply Chain Engineer', 'Data Engineer'],
        package: '10-20 LPA',
        logo: '/api/placeholder/120/60'
      },
      {
        name: 'Urban Company',
        sector: 'Service Platform',
        roles: ['Product Engineer', 'Platform Engineer', 'Quality Engineer'],
        package: '12-25 LPA',
        logo: '/api/placeholder/120/60'
      },
      {
        name: 'Rivigo',
        sector: 'Logistics Tech',
        roles: ['Logistics Engineer', 'Operations Research Engineer', 'Tech Lead'],
        package: '9-19 LPA',
        logo: '/api/placeholder/120/60'
      },
      {
        name: 'Rebel Foods',
        sector: 'Cloud Kitchen',
        roles: ['Kitchen Automation Engineer', 'Process Engineer', 'Tech Engineer'],
        package: '7-15 LPA',
        logo: '/api/placeholder/120/60'
      },
      {
        name: 'Dunzo',
        sector: 'Delivery Platform',
        roles: ['Backend Engineer', 'DevOps Engineer', 'Product Engineer'],
        package: '8-16 LPA',
        logo: '/api/placeholder/120/60'
      }
    ]
  }

  const partnershipBenefits = [
    {
      icon: <Handshake className="w-6 h-6 text-blue-500" />,
      title: 'Direct Industry Connect',
      description: 'Direct partnerships with hiring managers and technical teams'
    },
    {
      icon: <Award className="w-6 h-6 text-green-500" />,
      title: 'Exclusive Job Openings',
      description: 'Access to unadvertised positions and early career opportunities'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Mentorship Programs',
      description: 'Industry expert mentorship and career guidance sessions'
    },
    {
      icon: <Star className="w-6 h-6 text-orange-500" />,
      title: 'Fast-Track Interviews',
      description: 'Streamlined interview process with partner companies'
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

  const currentPartners = partners[partnerCategories[activeTab].id as keyof typeof partners]

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
            <Building2 className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-semibold">Hiring Partners</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Placement</span> Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have established strong partnerships with leading companies across various engineering sectors to provide you with the best career opportunities.
          </p>
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {partnershipBenefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Partner Categories Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {partnerCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.icon}
              <span className="ml-2">{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentPartners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Company Header */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-gray-600">{partner.sector}</p>
                  </div>
                  <div className="w-16 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Package */}
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Package Range</span>
                  <span className="text-sm font-bold text-green-600">{partner.package}</span>
                </div>

                {/* Available Roles */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700">Available Roles:</h4>
                  <div className="space-y-1">
                    {partner.roles.map((role, roleIndex) => (
                      <span
                        key={roleIndex}
                        className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full mr-2 mb-1"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Count Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">500+ Active Hiring Partners</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our extensive network of industry partnerships and accelerate your engineering career growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Explore All Partners
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Partner With Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PlacementPartners