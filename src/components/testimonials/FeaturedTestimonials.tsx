'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const FeaturedTestimonials = () => {
  const [selectedStory] = useState(0)

  const stories = [
    {
      name: "Rahul Krishnan",
      role: "Senior Design Engineer", 
      company: "Tata Motors",
      testimonial: "The mechanical design course at Trinkets Institute was a game-changer.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Student Success Stories
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-2">{stories[selectedStory].name}</h3>
              <p className="text-lg text-gray-600 mb-2">{stories[selectedStory].role}</p>
              <p className="text-gray-500 mb-6">{stories[selectedStory].company}</p>
              <Quote className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <p className="text-lg text-gray-700 italic">
                &quot;{stories[selectedStory].testimonial}&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedTestimonials
