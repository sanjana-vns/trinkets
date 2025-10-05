'use client'
import { motion } from "framer-motion"
import Image from "next/image"

const companies = [
  {
    name: "Tata Motors",
    logo: "/api/placeholder/120/60",
    sector: "Automotive",
    positions: "Design Engineer, Production Engineer",
    package: "₹6-12 LPA"
  },
  {
    name: "L&T Construction",
    logo: "/api/placeholder/120/60",
    sector: "Construction",
    positions: "Site Engineer, Project Manager",
    package: "₹5-10 LPA"
  },
  {
    name: "Siemens",
    logo: "/api/placeholder/120/60",
    sector: "Technology",
    positions: "Automation Engineer, R&D Engineer",
    package: "₹8-15 LPA"
  },
  {
    name: "NTPC",
    logo: "/api/placeholder/120/60",
    sector: "Power",
    positions: "Power Engineer, Operations Engineer",
    package: "₹7-14 LPA"
  },
  {
    name: "Reliance Industries",
    logo: "/api/placeholder/120/60",
    sector: "Oil & Gas",
    positions: "Process Engineer, Safety Engineer",
    package: "₹9-18 LPA"
  },
  {
    name: "Mahindra Group",
    logo: "/api/placeholder/120/60",
    sector: "Manufacturing",
    positions: "Design Engineer, Quality Engineer",
    package: "₹6-11 LPA"
  },
  {
    name: "ABB India",
    logo: "/api/placeholder/120/60",
    sector: "Electrical",
    positions: "Electrical Engineer, Control Engineer",
    package: "₹7-13 LPA"
  },
  {
    name: "ONGC",
    logo: "/api/placeholder/120/60",
    sector: "Oil & Gas",
    positions: "Drilling Engineer, Production Engineer",
    package: "₹10-20 LPA"
  }
]

const sectors = [
  {
    name: "Manufacturing",
    companies: 85,
    icon: "🏭",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Oil & Gas",
    companies: 45,
    icon: "⚡",
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Power & Energy",
    companies: 65,
    icon: "🔋",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Construction",
    companies: 70,
    icon: "🏗️",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Automotive",
    companies: 55,
    icon: "🚗",
    color: "from-indigo-500 to-blue-500"
  },
  {
    name: "Technology",
    companies: 40,
    icon: "💻",
    color: "from-cyan-500 to-teal-500"
  }
]

export default function CompanyPartners() {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Industry Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;ve partnered with industry leaders across multiple sectors to provide 
            diverse career opportunities for our graduates
          </p>
        </motion.div>

        {/* Industry Sectors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden"
            >
              <div className={`bg-gradient-to-br ${sector.color} p-6 rounded-xl text-white text-center transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                <div className="text-3xl mb-3">{sector.icon}</div>
                <h3 className="font-semibold text-sm mb-2">{sector.name}</h3>
                <p className="text-xs opacity-90">{sector.companies}+ Companies</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Companies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">Featured Hiring Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="flex items-center justify-center h-16 mb-4 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors duration-300">
                  <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                    {company.name}
                  </div>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{company.name}</h4>
                <p className="text-sm text-blue-600 font-medium mb-2">{company.sector}</p>
                <p className="text-xs text-gray-600 mb-3 line-clamp-2">{company.positions}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-green-600">{company.package}</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Statistics Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Partnership Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Active Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-90">Industry Sectors</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-sm opacity-90">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">Partner Retention</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}