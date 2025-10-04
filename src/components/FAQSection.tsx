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
      question: "What certifications will I receive?",
      answer: "Upon successful completion, you'll receive industry-recognized certificates from Trinkets Institute. We also provide preparation for various professional certifications that are valued by employers in the engineering and design industries."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-orange-100 rounded-full px-4 py-2 mb-4">
            <span className="text-orange-600 font-semibold text-sm">💡 FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our courses and services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-orange-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-orange-600 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-4">
                  <div className="border-t border-orange-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
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
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-6 text-white">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
              <p className="text-orange-100">
                Our team is here to help you find the perfect course for your career goals.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="tel:+919820924788"
                className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200 border border-orange-500"
              >
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