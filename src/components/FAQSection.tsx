'use client'

import { useState } from 'react'

// Force deployment trigger - Creative Orange FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What courses does Trinkets Institute offer?",
      answer: "We offer comprehensive programs in Piping Design, HVAC Systems, Process Engineering, and Structural Design. All our courses are designed by industry experts and include hands-on training with the latest software and tools used in the engineering industry."
    },
    {
      question: "Are your courses suitable for beginners?",
      answer: "Yes, our courses are designed to accommodate students from all backgrounds. We start with fundamentals and gradually progress to advanced topics. Our experienced instructors provide personalized attention to ensure every student succeeds."
    },
    {
      question: "What is the duration of the courses?",
      answer: "Course duration varies depending on the program. Our standard courses range from 3 to 6 months, with flexible timing options including weekday and weekend batches. We also offer intensive crash courses for working professionals."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes, we offer 100% placement support to all our students. Our dedicated placement team works with leading companies in the industry to ensure our graduates find suitable employment opportunities. We have a strong track record of successful placements."
    },
    {
      question: "What software will I learn in the courses?",
      answer: "Our courses cover industry-standard software including AutoCAD, SolidWorks, ANSYS, Revit, Bentley MicroStation, PDMS, and many more depending on your chosen specialization. You'll gain hands-on experience with the same tools used by professionals in the field."
    },
    {
      question: "What certifications will I receive?",
      answer: "Upon successful completion, you'll receive industry-recognized certificates from Trinkets Institute. We also provide preparation for various professional certifications that are valued by employers in the engineering and design industries."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Creative Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"></div>
            <div className="relative">
              <span className="text-orange-600 font-bold uppercase tracking-widest text-sm bg-orange-100 px-4 py-2 rounded-full border-2 border-orange-200">
                ❓ Frequently Asked Questions
              </span>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full"></div>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 mb-8 leading-tight">
            Got Questions?
            <span className="block text-3xl lg:text-4xl font-bold text-gray-700 mt-2">
              We&apos;ve Got Answers! 🎯
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about starting your engineering career journey with us
          </p>

          {/* Decorative Elements */}
          <div className="flex justify-center mt-8 space-x-4">
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
            <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
          </div>
        </div>

        {/* Creative FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-orange-100 hover:border-orange-300"
            >
              {/* Creative gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400"></div>
              
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-8 text-left flex justify-between items-center hover:bg-orange-50/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 pr-4 group-hover:text-orange-700 transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>
                
                <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 
                               flex items-center justify-center transform transition-all duration-500 shadow-lg
                               ${openIndex === index ? 'rotate-180 scale-110' : 'group-hover:scale-105'}`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out 
                             ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-8">
                  <div className="pt-4 border-t-2 border-orange-100">
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Creative Contact CTA */}
        <div className="text-center mt-16">
          <div className="relative bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-3xl shadow-2xl p-12 border border-orange-200 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full"></div>
              <div className="absolute top-8 right-8 w-6 h-6 bg-white rounded-full"></div>
              <div className="absolute bottom-6 left-8 w-4 h-4 bg-white rounded-full"></div>
              <div className="absolute bottom-4 right-6 w-10 h-10 bg-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-black text-white mb-4">
                Still Curious? 🤔
              </h3>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Our friendly admissions team is excited to help you discover the perfect course for your engineering dreams!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="group px-10 py-4 bg-white text-orange-600 font-bold rounded-2xl 
                           hover:bg-orange-50 transition-all duration-300 hover:shadow-xl hover:scale-105 text-center
                           border-2 border-orange-200 hover:border-orange-300"
                >
                  <span className="flex items-center justify-center gap-3">
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Let&apos;s Chat!
                  </span>
                </a>
                
                <a
                  href="tel:+1234567890"
                  className="group px-10 py-4 bg-orange-600 text-white font-bold rounded-2xl 
                           hover:bg-orange-700 transition-all duration-300 hover:shadow-xl hover:scale-105 text-center
                           border-2 border-orange-500"
                >
                  <span className="flex items-center justify-center gap-3">
                    <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now! 📞
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection