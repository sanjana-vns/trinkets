'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Navigation, Car, Train, Bus, Plane, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';

export default function OfficeLocations() {
  const offices = [
    {
      id: 1,
      title: "Head Office",
      city: "Mumbai",
      state: "Maharashtra",
      badge: "Main Campus",
      address: "823, Ecstasy Business Park, City of Joy, JSD Road, Near Mulund Railway Station, Mulund West, Mumbai - 400080",
      phone: "+91 9820 924 788",
      altPhone: "+91 9867 488 499",
      email: "mumbai@trinketsinstitute.com",
      landmark: "Near Mulund Railway Station",
      timing: "Mon - Sat: 9:00 AM - 6:00 PM",
      coordinates: { lat: 19.1704, lng: 72.9560 },
      image: "/api/placeholder/400/300",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      transportation: [
        { icon: Train, name: "Mulund Railway Station", distance: "200m", color: "text-blue-600" },
        { icon: Bus, name: "Multiple Bus Routes", distance: "100m", color: "text-green-600" },
        { icon: Car, name: "Parking Available", distance: "On-site", color: "text-purple-600" }
      ],
      features: [
        "Main Administrative Office",
        "All Course Enrollments", 
        "Career Counseling Center",
        "Placement Assistance",
        "Library & Resources",
        "Student Support Services"
      ],
      courses: [
        "Piping Design & Engineering",
        "Structural Design & Analysis",
        "HVAC Design & Engineering",
        "MEP Engineering",
        "AutoCAD & Drafting"
      ],
      stats: {
        students: "2000+",
        placement: "97%",
        experience: "15+ Years"
      }
    },
    {
      id: 2,
      title: "Branch Office",
      city: "Chennai",
      state: "Tamil Nadu", 
      badge: "South Zone",
      address: "AGSM House, Plot B, Sri Sairam Avenue, Roja Street, Moulivakkam, Porur, Chennai - 600125",
      phone: "+91 7338 819 986",
      email: "chennai@trinketsinstitute.com",
      landmark: "Near Porur IT Corridor",
      timing: "Mon - Sat: 9:00 AM - 6:00 PM",
      coordinates: { lat: 13.0097, lng: 80.2209 },
      image: "/api/placeholder/400/300",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      transportation: [
        { icon: Bus, name: "MTC Bus Services", distance: "150m", color: "text-green-600" },
        { icon: Car, name: "IT Corridor Access", distance: "Direct", color: "text-purple-600" },
        { icon: Train, name: "Suburban Rail", distance: "2km", color: "text-blue-600" }
      ],
      features: [
        "Regional Training Center",
        "Local Language Support",
        "Industry Partnerships",
        "Placement Support",
        "Technical Labs",
        "Student Mentoring"
      ],
      courses: [
        "SP3D - Plant Design",
        "CAESAR II - Pipe Stress",
        "STAAD Pro - Structural",
        "Revit MEP",
        "Design Engineering"
      ],
      stats: {
        students: "1500+",
        placement: "95%",
        experience: "10+ Years"
      }
    },
    {
      id: 3,
      title: "Branch Office",
      city: "Ludhiana",
      state: "Punjab",
      badge: "North Zone",
      address: "516, K-10 tower, Feroze Gandhi Market, Near Ludhiana Stock Exchange, Ludhiana (Punjab) Pin-141001",
      phone: "+91 9820 924 788",
      email: "ludhiana@trinketsinstitute.com",
      landmark: "Near Stock Exchange",
      timing: "Mon - Sat: 9:00 AM - 6:00 PM",
      coordinates: { lat: 30.9010, lng: 75.8573 },
      image: "/api/placeholder/400/300",
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50",
      transportation: [
        { icon: Bus, name: "City Bus Services", distance: "100m", color: "text-green-600" },
        { icon: Car, name: "Central Location", distance: "Easy Access", color: "text-purple-600" },
        { icon: Train, name: "Ludhiana Station", distance: "3km", color: "text-blue-600" }
      ],
      features: [
        "Regional Training Hub",
        "Industrial Area Access",
        "Local Industry Connect",
        "Career Guidance",
        "Practical Training",
        "Job Placement Support"
      ],
      courses: [
        "ETABS - Building Design",
        "Industrial Engineering",
        "Manufacturing Tech",
        "Quality Engineering",
        "Project Management"
      ],
      stats: {
        students: "1000+",
        placement: "94%",
        experience: "8+ Years"
      }
    }
  ];

  const whyVisitUs = [
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from industry professionals with real-world experience"
    },
    {
      icon: Award,
      title: "Modern Facilities",
      description: "State-of-the-art labs and equipment for hands-on training"
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "96% average placement rate across all locations"
    },
    {
      icon: Navigation,
      title: "Industry Connections",
      description: "Strong network with leading engineering companies"
    }
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
            Visit Our Training Centers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our world-class facilities, meet our expert faculty, and see why thousands of engineering professionals choose Trinkets Institute for their career transformation.
          </p>
        </motion.div>

        {/* Office Cards */}
        <div className="space-y-16">
          {offices.map((office, index) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${office.bgColor} rounded-3xl shadow-2xl border border-gray-100 overflow-hidden hover:shadow-3xl transition-all duration-300`}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Office Image & Info */}
                <div className="relative p-8 lg:p-12">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{office.title}</h3>
                      <p className="text-xl text-gray-600">{office.city}, {office.state}</p>
                    </div>
                    <div className={`bg-gradient-to-r ${office.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                      {office.badge}
                    </div>
                  </div>

                  {/* Office Image */}
                  <div className="relative mb-8 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={office.image}
                      alt={`${office.city} office`}
                      width={400}
                      height={256}
                      className="w-full h-64 object-cover"
                      priority={office.id === 1}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">{office.landmark}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4">
                      <div className="text-2xl font-bold text-gray-900">{office.stats.students}</div>
                      <div className="text-sm text-gray-600">Students Trained</div>
                    </div>
                    <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4">
                      <div className="text-2xl font-bold text-green-600">{office.stats.placement}</div>
                      <div className="text-sm text-gray-600">Placement Rate</div>
                    </div>
                    <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4">
                      <div className="text-2xl font-bold text-blue-600">{office.stats.experience}</div>
                      <div className="text-sm text-gray-600">Experience</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href={`https://maps.google.com/?q=${office.coordinates.lat},${office.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-r ${office.color} text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300`}
                    >
                      <Navigation className="w-4 h-4" />
                      Get Directions
                    </motion.a>
                    <motion.a
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-50 transition-all duration-300"
                    >
                      <Phone className="w-4 h-4" />
                      Call Office
                    </motion.a>
                  </div>
                </div>

                {/* Office Details */}
                <div className="bg-white/50 backdrop-blur-sm p-8 lg:p-12">
                  {/* Contact Information */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className={`bg-gradient-to-r ${office.color} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-gray-700">{office.address}</p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className={`bg-gradient-to-r ${office.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-blue-600 font-semibold hover:underline block">
                            {office.phone}
                          </a>
                          {office.altPhone && (
                            <a href={`tel:${office.altPhone.replace(/\s/g, '')}`} className="text-blue-600 font-semibold hover:underline block">
                              {office.altPhone}
                            </a>
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
                  </div>

                  {/* Transportation */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">How to Reach</h4>
                    <div className="space-y-3">
                      {office.transportation.map((transport, transportIndex) => (
                        <div key={transportIndex} className="flex items-center gap-4">
                          <transport.icon className={`w-6 h-6 ${transport.color}`} />
                          <div>
                            <span className="font-semibold text-gray-900">{transport.name}</span>
                            <span className="text-gray-600 ml-2">({transport.distance})</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Available Courses */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Featured Courses</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {office.courses.map((course, courseIndex) => (
                        <div key={courseIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Available Services</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {office.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Visit Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Visit Our Centers?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyVisitUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h4>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Visit Us?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a visit to any of our centers and experience our world-class training facilities firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors duration-300 flex items-center gap-3 justify-center"
            >
              Schedule a Visit
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="tel:+919820924788"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-3 justify-center"
            >
              <Phone className="w-5 h-5" />
              Call for Directions
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}