import Link from 'next/link'
import Image from 'next/image'
import { memo } from 'react'
import BackToTopButton from './ui/BackToTopButton'

const Footer = memo(() => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white mt-0 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-1/4 w-36 h-36 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Company Info - Enhanced */}
            <div className="lg:col-span-5">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 p-1">
                    <Image
                      src="/images/trinketlogo.jpg"
                      alt="Trinkets Institute Logo"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Trinkets Institute
                  </h2>
                  <p className="text-blue-300 font-medium">of Technology</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                🚀 Transforming careers through industry-oriented engineering training. 
                Join <span className="text-blue-400 font-semibold">10,000+</span> successful professionals who started their journey with us.
              </p>
              
              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg">📍</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="text-white">823, Ecstasy Business Park, Mulund (W), Mumbai</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-lg">📞</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Call Us</p>
                        <p className="text-white font-medium">+91 9820 924 788</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-lg">✉️</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="text-white font-medium">info@titindia.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="mr-2">🏢</span>
                Company
              </h3>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/courses", label: "Our Courses" },
                  { href: "/corporate-training", label: "Corporate Training" },
                  { href: "/services", label: "Services" },
                  { href: "/placements", label: "Placements" },
                  { href: "/gallery", label: "Gallery & Awards" },
                  { href: "/testimonials", label: "Testimonials" },
                  { href: "/contact", label: "Contact Us" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group"
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Courses */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="mr-2">🎓</span>
                Popular Courses
              </h3>
              <ul className="space-y-3">
                {[
                  { href: "/courses/sp3d-piping-design-training", label: "SP3D Piping Design" },
                  { href: "/courses/caesar-ii-stress-analysis", label: "CAESAR II Analysis" },
                  { href: "/courses/piping-engineering-fundamentals-training", label: "Piping Fundamentals" },
                  { href: "/courses/hvac-system-design", label: "HVAC System Design" },
                  { href: "/courses/mep-engineering", label: "MEP Engineering" },
                  { href: "/courses/structural-design-analysis", label: "Structural Design" },
                  { href: "/courses/autocad-mechanical-design", label: "AutoCAD Mechanical" }
                ].map((course, index) => (
                  <li key={index}>
                    <Link 
                      href={course.href} 
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group text-sm"
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">🔧</span>
                      {course.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Actions & Stats */}
            <div className="lg:col-span-3">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="mr-2">⚡</span>
                Quick Actions
              </h3>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20 text-center">
                  <div className="text-2xl font-bold text-blue-400">10K+</div>
                  <div className="text-xs text-gray-400">Students Trained</div>
                </div>
                <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/20 text-center">
                  <div className="text-2xl font-bold text-green-400">95%</div>
                  <div className="text-xs text-gray-400">Placement Rate</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 text-center">
                  <div className="text-2xl font-bold text-purple-400">15+</div>
                  <div className="text-xs text-gray-400">Course Programs</div>
                </div>
                <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/20 text-center">
                  <div className="text-2xl font-bold text-orange-400">12+</div>
                  <div className="text-xs text-gray-400">Years Experience</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link href="/courses" className="block">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                    🎯 Explore Courses
                  </button>
                </Link>
                <Link href="/contact" className="block">
                  <button className="w-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                    💬 Get Free Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            
            {/* Social Links */}
            <div className="flex items-center space-x-1">
              <span className="text-gray-400 mr-4">Follow us:</span>
              {[
                { href: "https://www.facebook.com/profile.php?id=61578852495738", icon: "🔵", label: "Facebook", color: "hover:text-blue-400" },
                { href: "https://x.com/titindiamumbai", icon: "🔷", label: "Twitter", color: "hover:text-cyan-400" },
                { href: "https://www.youtube.com/@trinketsinstituteoftechnol6645", icon: "🔴", label: "YouTube", color: "hover:text-red-400" },
                { href: "https://wa.me/+919820924788", icon: "🟢", label: "WhatsApp", color: "hover:text-green-400" },
                { href: "https://www.linkedin.com/company/trinkets-institute-of-technology-mumbai/", icon: "🔵", label: "LinkedIn", color: "hover:text-blue-400" },
                { href: "https://www.instagram.com/trinketsinstituteinmumbai/", icon: "🟣", label: "Instagram", color: "hover:text-pink-400" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10 group`}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">📧 Stay Updated:</span>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-xl px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                />
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-r-xl transition-all duration-300 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm">
                © 2025 <span className="text-blue-400 font-semibold">Trinkets Institute of Technology</span>. All rights reserved.
              </p>
              <div className="hidden md:block w-px h-4 bg-gray-600"></div>
              <p className="text-gray-500 text-xs">
                🏆 ISO Certified Training Institute
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-300">Sitemap</Link>
            </div>
          </div>
        </div>

        {/* Floating Back to Top Button */}
        <BackToTopButton />
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer