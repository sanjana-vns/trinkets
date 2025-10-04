'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';

export default function ContactHero() {
  const contactHighlights = [
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your queries"
    },
    {
      icon: Users,
      title: "Expert Counselors",
      description: "Experienced career guidance professionals"
    },
    {
      icon: Award,
      title: "Industry Leaders",
      description: "Recognized excellence in technical education"
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "5000+ successful career transformations"
    }
  ];

  const quickContacts = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 9820 924 788",
      link: "tel:+919820924788",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      label: "Email Us", 
      value: "info@trinketsinstitute.com",
      link: "mailto:info@trinketsinstitute.com",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "Mumbai | Chennai | Ludhiana",
      link: "#locations",
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Users className="w-4 h-4" />
              Get Expert Guidance
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Get in Touch
              </span>
              <br />
              <span className="text-gray-900">With Us</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Ready to transform your engineering career? Connect with our expert counselors 
              and discover the perfect training program for your professional growth.
            </motion.p>

            {/* Quick Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid sm:grid-cols-3 gap-4 mb-8"
            >
              {quickContacts.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${contact.color} text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group`}
                >
                  <contact.icon className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-sm opacity-90 mb-1">{contact.label}</div>
                  <div className="font-bold text-sm">{contact.value}</div>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center gap-3 group">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-blue-200 text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300">
                Download Brochure
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Contact Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {contactHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -bottom-8 -left-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-3xl font-bold">5000+</div>
              <div className="text-sm opacity-90">Happy Students</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute -top-8 -right-8 bg-gradient-to-r from-purple-500 to-violet-600 text-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-3xl font-bold">96%</div>
              <div className="text-sm opacity-90">Placement Rate</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-100 shadow-xl"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-8 h-8 text-blue-600" />
              <div>
                <div className="font-bold text-gray-900">Mon - Sat</div>
                <div className="text-gray-600">9:00 AM - 6:00 PM</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-8 h-8 text-blue-600" />
              <div>
                <div className="font-bold text-gray-900">3 Locations</div>
                <div className="text-gray-600">Mumbai, Chennai, Ludhiana</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-8 h-8 text-blue-600" />
              <div>
                <div className="font-bold text-gray-900">24/7 Support</div>
                <div className="text-gray-600">Always Here to Help</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-8 h-8 text-blue-600" />
              <div>
                <div className="font-bold text-gray-900">Quick Response</div>
                <div className="text-gray-600">Within 2 Hours</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}