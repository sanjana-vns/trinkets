'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  subtitle: string;
  description: string;
  faqs: FAQ[];
  phoneNumber?: string;
}

const FAQSectionTemplate = ({ 
  title, 
  subtitle, 
  description, 
  faqs, 
  phoneNumber = "+91-9820924788" 
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Teal Header Button */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-teal-500 text-white rounded-full px-6 py-3 mb-6 shadow-lg">
            <span className="text-2xl mr-3">❓</span>
            <span className="font-semibold text-lg">Frequently Asked Questions</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
            <span className="block text-gray-700">{subtitle}</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 group"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-6 group-hover:text-teal-600 transition-colors">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white group-hover:bg-teal-600 transition-colors duration-200">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                    
                    {/* Helpful Answer Badge */}
                    <div className="mt-4 inline-flex items-center bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm">
                      <span className="text-yellow-500 mr-2">💡</span>
                      <span className="font-medium">Helpful Answer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-3">Still Have Questions?</h3>
              <p className="text-teal-100 text-lg">
                Our expert counselors are here to help you find the perfect course for your career goals.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Get Free Counseling
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors duration-200 border-2 border-teal-400 shadow-lg"
              >
                📞 Call {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSectionTemplate