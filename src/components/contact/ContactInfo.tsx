'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Globe, Users, Building2, Navigation } from 'lucide-react';

export default function ContactInfo() {
  const offices = [
    {
      id: 1,
      title: "Head Office",
      city: "Mumbai",
      badge: "Main Campus",
      address: "823, Ecstasy Business Park, City of Joy, JSD Road, Near Mulund Railway Station, Mulund West, Mumbai - 400080",
      phone: "+91 9820 924 788",
      altPhone: "+91 9867 488 499",
      email: "info@trinketsinstitute.com",
      timing: "Mon - Sat: 9:00 AM - 6:00 PM",
      features: ["Main Administrative Office", "All Course Enrollments", "Career Counseling", "Placement Assistance"],
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      id: 2,
      title: "Branch Office",
      city: "Chennai",
      badge: "South Zone",
      address: "AGSM House, Plot B, Sri Sairam Avenue, Roja Street, Moulivakkam, Porur, Chennai - 600125",
      phone: "+91 7338 819 986",
      email: "chennai@trinketsinstitute.com",
      timing: "Mon - Sat: 9:00 AM - 6:00 PM",
      features: ["Regional Training Center", "Local Language Support", "Industry Partnerships", "Placement Support"],
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      id: 3,
      title: "Branch Office", 
      city: "Ludhiana",
      badge: "North Zone",
      address: "516, K-10 tower, Feroze Gandhi Market, Near Ludhiana Stock Exchange, Ludhiana (Punjab) Pin-141001",
      phone: "+91 9820 924 788",
      email: "ludhiana@trinketsinstitute.com",
      timing: "Mon - Sat: 9:00 AM - 6:00 PM",
      features: ["Regional Training Hub", "Industrial Area Access", "Local Industry Connect", "Career Guidance"],
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50"
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us Directly",
      description: "Speak with our counselors",
      value: "+91 9820 924 788",
      action: "tel:+919820924788",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed information",
      value: "info@trinketsinstitute.com", 
      action: "mailto:info@trinketsinstitute.com",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Globe,
      title: "WhatsApp Chat",
      description: "Quick assistance available",
      value: "Chat with us",
      action: "https://wa.me/919820924788",
      color: "from-green-600 to-green-700"
    },
    {
      icon: Users,
      title: "Career Counseling",
      description: "Book free consultation",
      value: "Schedule Meeting",
      action: "#contact-form",
      color: "from-purple-500 to-violet-600"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience", icon: Building2 },
    { number: "5000+", label: "Students Trained", icon: Users },
    { number: "3", label: "Office Locations", icon: MapPin },
    { number: "96%", label: "Placement Rate", icon: Navigation }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Multiple Ways to Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the most convenient way to reach us. We&apos;re available across multiple channels and locations to serve you better.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${method.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <div className="text-blue-600 font-semibold">{method.value}</div>
            </motion.a>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 mb-20 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Office Locations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Office Locations</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`bg-gradient-to-br ${office.bgColor} rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300`}
              >
                {/* Office Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{office.title}</h4>
                    <p className="text-xl text-gray-600">{office.city}</p>
                  </div>
                  <div className={`bg-gradient-to-r ${office.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                    {office.badge}
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`bg-gradient-to-r ${office.color} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700">{office.address}</p>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`bg-gradient-to-r ${office.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-blue-600 font-semibold hover:underline">
                        {office.phone}
                      </a>
                      {office.altPhone && (
                        <div>
                          <a href={`tel:${office.altPhone.replace(/\s/g, '')}`} className="text-blue-600 font-semibold hover:underline">
                            {office.altPhone}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className={`bg-gradient-to-r ${office.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <a href={`mailto:${office.email}`} className="text-blue-600 font-semibold hover:underline">
                      {office.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className={`bg-gradient-to-r ${office.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">{office.timing}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="border-t border-gray-200 pt-6">
                  <h5 className="font-bold text-gray-900 mb-3">Available Services:</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {office.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-6 bg-gradient-to-r ${office.color} text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300`}
                >
                  Get Directions
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-3xl p-12 shadow-xl border border-gray-100"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert counselors are ready to help you choose the right course for your career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+919820924788"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center gap-3 justify-center"
            >
              <Phone className="w-5 h-5" />
              Call Now: +91 9820 924 788
            </motion.a>
            <motion.a
              href="https://wa.me/919820924788"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center gap-3 justify-center"
            >
              <Globe className="w-5 h-5" />
              WhatsApp Chat
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}