'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation, Train, Bus, Car } from 'lucide-react';

interface LocationSectionProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export default function LocationSection({ 
  title = "Visit Our Training Centers", 
  subtitle = "Experience our world-class facilities across multiple locations",
  compact = false 
}: LocationSectionProps) {
  const locations = [
    {
      id: 1,
      name: "Head Office - Mumbai",
      address: "823, Ecstasy Business Park, City of Joy, JSD Road, Mulund West, Mumbai - 400080",
      phone: "+91 9820 924 788",
      email: "mumbai@trinketsinstitute.com",
      timing: "Mon - Sat: 9:00 AM - 6:00 PM",
      coordinates: { lat: 19.1704, lng: 72.9560 },
      color: "from-blue-500 to-indigo-600",
      landmark: "Near Mulund Railway Station",
      badge: "Main Campus",
      transportation: [
        { icon: Train, name: "Mulund Station", distance: "200m" },
        { icon: Bus, name: "Bus Routes", distance: "100m" },
        { icon: Car, name: "Parking", distance: "On-site" }
      ]
    },
    {
      id: 2,
      name: "Branch Office - Chennai",
      address: "AGSM House, Plot B, Sri Sairam Avenue, Roja Street, Moulivakkam, Porur, Chennai - 600125",
      phone: "+91 7338 819 986",
      email: "chennai@trinketsinstitute.com",
      timing: "Mon - Sat: 9:00 AM - 6:00 PM",
      coordinates: { lat: 13.0097, lng: 80.2209 },
      color: "from-green-500 to-emerald-600",
      landmark: "Near Porur IT Corridor",
      badge: "South Zone",
      transportation: [
        { icon: Bus, name: "MTC Bus", distance: "150m" },
        { icon: Car, name: "IT Corridor", distance: "Direct" },
        { icon: Train, name: "Suburban Rail", distance: "2km" }
      ]
    },
    {
      id: 3,
      name: "Branch Office - Ludhiana",
      address: "516, K-10 tower, Feroze Gandhi Market, Near Stock Exchange, Ludhiana - 141001",
      phone: "+91 9820 924 788",
      email: "ludhiana@trinketsinstitute.com",
      timing: "Mon - Sat: 9:00 AM - 6:00 PM",
      coordinates: { lat: 30.9010, lng: 75.8573 },
      color: "from-purple-500 to-violet-600",
      landmark: "Near Stock Exchange",
      badge: "North Zone",
      transportation: [
        { icon: Bus, name: "City Bus", distance: "100m" },
        { icon: Car, name: "Central Location", distance: "Easy Access" },
        { icon: Train, name: "Ludhiana Station", distance: "3km" }
      ]
    }
  ];

  if (compact) {
    return (
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${location.color} text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-4`}>
                  {location.badge}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{location.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-600">{location.address}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="text-sm text-blue-600 hover:underline">
                      {location.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{location.timing}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href={`https://maps.google.com/?q=${location.coordinates.lat},${location.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gradient-to-r ${location.color} text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300 flex-1 justify-center`}
                  >
                    <Navigation className="w-4 h-4" />
                    Directions
                  </a>
                  <a
                    href={`tel:${location.phone.replace(/\s/g, '')}`}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-gray-200 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4">Need Directions or Want to Visit?</h3>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Contact us for detailed directions or schedule a visit to see our facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                Contact Us
              </a>
              <a
                href="tel:+919820924788"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Full version with detailed information and embedded map
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <h3 className="text-2xl font-bold mb-2">Find Us on Map</h3>
              <p className="text-blue-100">Click on any location marker to get directions</p>
            </div>
            <div className="h-96 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8537565890504!2d72.95373741408855!3d19.170424987066168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f8b8f8b8f8%3A0x8b8f8b8f8b8f8b8f!2s823%2C%20Ecstasy%20Business%20Park%2C%20City%20of%20Joy%2C%20JSD%20Rd%2C%20Mulund%20West%2C%20Mumbai%2C%20Maharashtra%20400080!5e0!3m2!1sen!2sin!4v1635500000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Trinkets Institute Locations"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Location Details */}
        <div className="grid lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${location.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                    {location.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{location.name}</h3>
                <p className="text-white/80">{location.landmark}</p>
              </div>

              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{location.address}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-500" />
                    <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="text-blue-600 font-semibold hover:underline">
                      {location.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <a href={`mailto:${location.email}`} className="text-blue-600 font-semibold hover:underline">
                      {location.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">{location.timing}</span>
                  </div>
                </div>

                {/* Transportation */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">How to Reach</h4>
                  <div className="space-y-2">
                    {location.transportation.map((transport, transportIndex) => (
                      <div key={transportIndex} className="flex items-center gap-3">
                        <transport.icon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{transport.name} ({transport.distance})</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={`https://maps.google.com/?q=${location.coordinates.lat},${location.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gradient-to-r ${location.color} text-white px-4 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300 flex-1 justify-center`}
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                  <a
                    href={`tel:${location.phone.replace(/\s/g, '')}`}
                    className="bg-gray-100 text-gray-700 px-4 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-gray-200 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Visit Us?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a visit to any of our centers and experience our world-class training facilities firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors duration-300"
            >
              Schedule a Visit
            </a>
            <a
              href="tel:+919820924788"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Call for Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}