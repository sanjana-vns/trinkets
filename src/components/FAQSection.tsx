'use client'

import { useState } from 'react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is the best Piping Course In Mumbai?",
      answer: "Trinkets Institute offers the best Piping Course In Mumbai covering comprehensive piping design training including PDMS, SP3D, E3D, AutoCAD Plant 3D, CAESAR II, and piping stress analysis. Our piping course in Mumbai includes live industry projects and 100% placement assistance."
    },
    {
      question: "Is the Piping Course In Mumbai suitable for beginners?",
      answer: "Yes, our Piping Course In Mumbai is designed for both beginners and experienced professionals. We start with piping design fundamentals and progress to advanced topics including 3D piping modeling, stress analysis, and industry standards. Our experienced piping instructors provide personalized attention."
    },
    {
      question: "What is the duration of Piping Course In Mumbai?",
      answer: "Our comprehensive Piping Course In Mumbai duration is 6 months with flexible timing options. We offer weekday, weekend, and evening batches for our piping design training. Fast-track 4-month piping courses are also available for working professionals in Mumbai."
    },
    {
      question: "Do you provide placement assistance after Piping Course In Mumbai?",
      answer: "Yes, we provide 100% placement assistance after completing our Piping Course In Mumbai. Our dedicated placement team has partnerships with leading oil & gas, petrochemical, and EPC companies. Students from our piping course in Mumbai get placed in top companies with attractive packages."
    },
    {
      question: "What software is covered in Piping Course In Mumbai?",
      answer: "Our Piping Course In Mumbai covers industry-standard piping design software including PDMS, SP3D (SmartPlant 3D), E3D, AutoCAD Plant 3D, CAESAR II for stress analysis, and PDS. You'll gain hands-on experience with the same piping design tools used by professionals in Mumbai's top engineering companies."
    },
    {
      question: "What certification do I get after Piping Course In Mumbai?",
      answer: "After completing our Piping Course In Mumbai, you receive industry-recognized piping design certification from Trinkets Institute. We also provide preparation for PDMS, SP3D, and CAESAR II professional certifications that are highly valued by employers in Mumbai's engineering sector."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-4">
            <span className="text-blue-600 font-semibold text-sm">💡 FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Piping Course In Mumbai - FAQs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our Piping Course In Mumbai and training programs
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-blue-600 transform transition-transform duration-200 ${
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
                  <div className="border-t border-blue-100 pt-4">
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
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-6 text-white">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
              <p className="text-blue-100">
                Our team is here to help you find the perfect course for your career goals.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="tel:+919820924788"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 border border-blue-500"
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