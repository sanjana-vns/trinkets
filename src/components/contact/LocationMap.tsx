'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Navigation, Phone, Clock, ExternalLink, Building2 } from 'lucide-react';

export default function LocationMap() {
  const locations = [
    {
      id: 1,
      name: "Head Office",
      city: "Mumbai",
      address: "823, Ecstasy Business Park, City of Joy, JSD Road, Near Mulund Railway Station, Mulund West, Mumbai - 400080",
      phone: "+91 9820 924 788",
      coordinates: { lat: 19.1704, lng: 72.9560 },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.123456789!2d72.9560!3d19.1704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEwJzEzLjQiTiA3MsKwNTcnMjEuNiJF!5e0!3m2!1sen!2sin!4v1234567890",
      directionsUrl: "https://maps.google.com/?q=19.1704,72.9560",
      badge: "Main Campus",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      name: "Branch Office",
      city: "Chennai",
      address: "AGSM House, Plot B, Sri Sairam Avenue, Roja Street, Moulivakkam, Porur, Chennai - 600125",
      phone: "+91 7338 819 986",
      coordinates: { lat: 13.0097, lng: 80.2209 },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.123456789!2d80.2209!3d13.0097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAw'MTQuOSJOIDgwwrAxMycxNS4yIkU!5e0!3m2!1sen!2sin!4v1234567890",
      directionsUrl: "https://maps.google.com/?q=13.0097,80.2209",
      badge: "South Zone",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      name: "Branch Office",
      city: "Ludhiana",
      address: "516, K-10 tower, Feroze Gandhi Market, Near Ludhiana Stock Exchange, Ludhiana (Punjab) Pin-141001",
      phone: "+91 9820 924 788",
      coordinates: { lat: 30.9010, lng: 75.8573 },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.123456789!2d75.8573!3d30.9010!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDU0JzAzLjYiTiA3NcKwNTEnMjYuMyJF!5e0!3m2!1sen!2sin!4v1234567890",
      directionsUrl: "https://maps.google.com/?q=30.9010,75.8573",
      badge: "North Zone",
      color: "from-purple-500 to-violet-600"
    }
  ];

  const [activeLocation, setActiveLocation] = useState(0);

  return (
    <section className="py-20 bg-white">
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
            Find Us Near You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit any of our conveniently located offices across India. We&apos;re strategically positioned to serve engineering professionals nationwide.
          </p>
        </motion.div>

        {/* Location Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {locations.map((location, index) => (
            <motion.button
              key={location.id}
              onClick={() => setActiveLocation(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeLocation === index
                  ? `bg-gradient-to-r ${location.color} text-white shadow-lg`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <MapPin className="w-4 h-4 inline mr-2" />
              {location.city}
            </motion.button>
          ))}
        </motion.div>

        {/* Map and Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Map Container */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl p-8 shadow-xl border border-blue-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {locations[activeLocation].name} - {locations[activeLocation].city}
                </h3>
                <div className={`bg-gradient-to-r ${locations[activeLocation].color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                  {locations[activeLocation].badge}
                </div>
              </div>

              {/* Interactive Map Placeholder */}
              <div className="relative bg-gray-200 rounded-2xl overflow-hidden shadow-inner">
                <iframe
                  src={locations[activeLocation].mapUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                  title={`Map of ${locations[activeLocation].city} office`}
                />
                
                {/* Map Overlay for demonstration (remove when using real maps) */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center rounded-2xl">
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {locations[activeLocation].city} Office
                    </h4>
                    <p className="text-gray-600 mb-4">Interactive map view</p>
                    <motion.a
                      href={locations[activeLocation].directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-r ${locations[activeLocation].color} text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-lg transition-all duration-300`}
                    >
                      <Navigation className="w-4 h-4" />
                      Get Directions
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Map Actions */}
              <div className="flex flex-wrap gap-4 mt-6">
                <motion.a
                  href={locations[activeLocation].directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${locations[activeLocation].color} text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300`}
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </motion.a>
                <motion.a
                  href={`tel:${locations[activeLocation].phone.replace(/\s/g, '')}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-50 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call Office
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-50 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  View in Google Maps
                </motion.button>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            {/* Current Location Card */}
            <motion.div
              key={activeLocation}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`bg-gradient-to-br ${locations[activeLocation].color.replace('from-', 'from-').replace('to-', 'to-')}/10 rounded-3xl p-8 border border-gray-100 shadow-lg`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`bg-gradient-to-r ${locations[activeLocation].color} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{locations[activeLocation].name}</h4>
                  <p className="text-gray-600">{locations[activeLocation].city}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{locations[activeLocation].address}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <a 
                    href={`tel:${locations[activeLocation].phone.replace(/\s/g, '')}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    {locations[activeLocation].phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">Mon - Sat: 9:00 AM - 6:00 PM</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h5 className="font-bold text-gray-900 mb-3">Available Services:</h5>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Course Enrollments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Career Counseling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Placement Assistance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Technical Support</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h5 className="font-bold text-gray-900 mb-4">Quick Actions</h5>
              <div className="space-y-3">
                <motion.a
                  href="#contact-form"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-semibold text-center block hover:shadow-lg transition-all duration-300"
                >
                  Schedule Visit
                </motion.a>
                <motion.a
                  href={`tel:${locations[activeLocation].phone.replace(/\s/g, '')}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-xl font-semibold text-center block hover:shadow-lg transition-all duration-300"
                >
                  Call Now
                </motion.a>
                <motion.a
                  href="https://wa.me/919820924788"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-green-500 text-white py-3 px-4 rounded-xl font-semibold text-center block hover:shadow-lg transition-all duration-300"
                >
                  WhatsApp Chat
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Transportation Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Easy to Reach</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Prime Locations</h4>
              <p className="text-gray-600">All offices near major transportation hubs</p>
            </div>
            <div>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Easy Access</h4>
              <p className="text-gray-600">Well-connected by metro, bus, and road</p>
            </div>
            <div>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Modern Facilities</h4>
              <p className="text-gray-600">State-of-the-art training centers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}