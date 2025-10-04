'use client'

import { useState } from 'react'

const ServiceProcess = () => {
  const [activeStep, setActiveStep] = useState(0)

  const processSteps = [
    {
      id: 0,
      title: "Discovery & Analysis",
      description: "Understand requirements, analyze scope, and define project objectives",
      icon: "🔍",
      gradient: "from-blue-500 to-indigo-500",
      duration: "1-2 days",
      deliverables: ["Requirement Analysis", "Scope Definition", "Project Plan"]
    },
    {
      id: 1,
      title: "Design & Engineering",
      description: "Create detailed engineering designs and technical specifications",
      icon: "⚙️",
      gradient: "from-indigo-500 to-purple-500",
      duration: "1-4 weeks",
      deliverables: ["Engineering Drawings", "Technical Specs", "3D Models"]
    },
    {
      id: 2,
      title: "Review & Validation",
      description: "Comprehensive quality checks and stakeholder reviews",
      icon: "✅",
      gradient: "from-purple-500 to-pink-500",
      duration: "3-5 days",
      deliverables: ["Quality Reports", "Validation Documents", "Approvals"]
    },
    {
      id: 3,
      title: "Delivery & Support",
      description: "Final delivery with documentation and ongoing support",
      icon: "🚀",
      gradient: "from-green-500 to-teal-500",
      duration: "1-2 days",
      deliverables: ["Final Documents", "Training", "Support Plan"]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Our Process
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology that ensures quality, efficiency, and client satisfaction in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`relative cursor-pointer transition-all duration-500 ${
                activeStep === index ? 'scale-105' : 'hover:scale-102'
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className={`p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 ${
                activeStep === index ? 'bg-white/20 border-blue-400/50' : 'hover:bg-white/15'
              }`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-2xl`}>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 mb-4">{step.description}</p>
                
                <div className="text-sm text-gray-400 mb-4">
                  Duration: <span className="text-blue-400 font-semibold">{step.duration}</span>
                </div>

                <div className="space-y-2">
                  {step.deliverables.map((deliverable, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className={`w-2 h-2 bg-gradient-to-r ${step.gradient} rounded-full`}></div>
                      {deliverable}
                    </div>
                  ))}
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceProcess