'use client'

import { useState } from 'react'

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
      question: "Do you offer online or offline classes?",
      answer: "We offer both online and offline classes to suit your convenience. Our hybrid learning approach combines the best of both worlds - live interactive sessions, recorded lectures, and hands-on practical training in our state-of-the-art labs."
    },
    {
      question: "What are the fees and payment options?",
      answer: "Our course fees are competitive and vary by program. We offer flexible payment options including installments, education loans, and early bird discounts. Please contact our admissions team for detailed fee structure and available scholarships."
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500"></div>
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
              FAQ
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-blue-600"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our courses, admissions, and career opportunities
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 
                               flex items-center justify-center transform transition-transform duration-300 
                               ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out 
                             ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed mt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our admissions team is here to help you choose the right course for your career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white 
                         font-semibold rounded-lg hover:from-blue-700 hover:to-orange-600 
                         transition-all duration-300 hover:shadow-lg hover:scale-105 text-center"
              >
                Contact Our Team
              </a>
              <a
                href="tel:+1234567890"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold 
                         rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 text-center
                         flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection