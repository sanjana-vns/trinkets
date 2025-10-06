'use client'

import { useState, memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navigation = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Courses', href: '/courses' },
    { name: 'Corporate Training', href: '/corporate-training' },
    { name: 'Services', href: '/services' },
    { name: 'Placements', href: '/placements' },
    { name: 'Gallery / Awards', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white/90 backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b border-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/20 to-indigo-50/30"></div>
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-200/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-0 right-1/3 w-24 h-24 bg-purple-200/10 rounded-full blur-2xl animate-float-reverse"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Trinkets Institute image */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative flex items-center space-x-3">
                {/* Logo Image */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl 
                                 group-hover:scale-110 transition-all duration-300 ease-out
                                 ring-2 ring-blue-200 group-hover:ring-blue-300">
                    <Image
                      src="/images/trinketlogo.jpg"
                      alt="Trinkets Institute Logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Pulsing dot indicator */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full 
                                 animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                </div>

                {/* Logo Text with enhanced typography */}
                <div className="relative">
                  <div className="flex flex-col">
                    <div className="text-2xl font-black tracking-tight leading-none">
                      <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-600 
                                     bg-clip-text text-transparent group-hover:from-blue-800 
                                     group-hover:via-purple-500 group-hover:to-indigo-700
                                     transition-all duration-500 ease-out drop-shadow-sm">
                        Trinkets
                      </span>
                    </div>
                    <div className="text-sm font-bold tracking-[0.2em] text-gray-600 
                                   group-hover:text-purple-600 transition-colors duration-300 
                                   transform group-hover:translate-x-1 transition-transform duration-300
                                   relative">
                      INSTITUTE
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 text-purple-300 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm">
                        INSTITUTE
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced animated underline */}
                  <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-500 
                                 group-hover:w-full transition-all duration-700 ease-out rounded-full shadow-lg"></div>
                  
                  {/* Enhanced floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-4 w-1.5 h-1.5 bg-blue-400 rounded-full 
                                   animate-bounce shadow-lg" style={{animationDelay: '0ms'}}></div>
                    <div className="absolute top-2 right-8 w-1 h-1 bg-purple-400 rounded-full 
                                   animate-bounce shadow-md" style={{animationDelay: '200ms'}}></div>
                    <div className="absolute bottom-1 left-12 w-1.5 h-1.5 bg-indigo-400 rounded-full 
                                   animate-bounce shadow-lg" style={{animationDelay: '400ms'}}></div>
                    <div className="absolute top-1 left-8 w-0.5 h-0.5 bg-pink-300 rounded-full 
                                   animate-pulse" style={{animationDelay: '600ms'}}></div>
                  </div>
                </div>

                {/* Enhanced glowing effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 
                               bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 blur-2xl 
                               transition-opacity duration-700 -z-10 animate-pulse"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation with enhanced hover effects */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group px-4 py-3 rounded-xl text-gray-700 font-semibold transition-all duration-300 ease-out
                           hover:text-white hover:shadow-2xl hover:-translate-y-1 hover:scale-105
                           before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r 
                           before:from-blue-600 before:via-purple-500 before:to-indigo-600 before:opacity-0 before:scale-95
                           hover:before:opacity-100 hover:before:scale-100 before:transition-all before:duration-300
                           after:absolute after:inset-0 after:rounded-xl after:bg-white/10 after:opacity-0
                           hover:after:opacity-100 after:transition-opacity after:duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10 text-sm flex items-center gap-1">
                    {item.name}
                    <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-white/80 to-white/60 
                                 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-400 ease-out rounded-full shadow-lg"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Button with professional format */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Primary CTA Button */}
            <Link
              href="/courses"
              className="relative group overflow-hidden px-8 py-4 rounded-2xl font-bold text-white
                       bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 
                       hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 
                       hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30
                       transition-all duration-400 ease-out
                       before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/30 before:via-white/10 before:to-transparent
                       before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700
                       after:absolute after:inset-0 after:rounded-2xl after:shadow-inner
                       focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:ring-offset-2
                       border border-white/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                ✨ Explore Courses
                <svg className="w-4 h-4 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              
              {/* Enhanced pulse effect */}
              <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 
                             group-hover:opacity-100 group-hover:animate-ping 
                             transition-opacity duration-300"></div>
              
              {/* Rotating border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                             bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 
                             animate-spin-slow transition-opacity duration-300 -z-10 blur-sm"></div>
            </Link>
          </div>

          {/* Mobile menu button with enhanced animation */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative group p-2 rounded-lg text-gray-700 hover:text-blue-600 
                       hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                       transition-all duration-300 ease-out"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-out
                  ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-out
                  ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-out
                  ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-4 pb-6 space-y-2 bg-gradient-to-br from-white/95 via-blue-50/80 to-purple-50/80 backdrop-blur-xl border-t border-gradient-to-r from-blue-200 to-purple-200 relative overflow-hidden">
          {/* Mobile background decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-200/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-4 rounded-xl text-gray-700 hover:text-white 
                          hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-500 hover:to-indigo-600
                          font-semibold transition-all duration-300 ease-out
                          hover:translate-x-2 hover:shadow-xl hover:scale-105
                          border border-transparent hover:border-white/20
                          ${isMenuOpen ? 'animate-slideInFromLeft' : ''}
                          `}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="text-lg">
                      {index === 0 ? '🏠' : index === 1 ? 'ℹ️' : index === 2 ? '📚' : 
                       index === 3 ? '🏢' : index === 4 ? '⚙️' : index === 5 ? '🎯' : 
                       index === 6 ? '🏆' : index === 7 ? '💬' : '📞'}
                    </span>
                    {item.name}
                  </span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] 
                                group-hover:translate-x-0 transition-all duration-300" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              {/* Enhanced Mobile Primary CTA */}
              <Link
                href="/courses"
                className="block px-4 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 
                         text-white font-bold text-center
                         hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 hover:scale-105 hover:shadow-2xl
                         transition-all duration-300 ease-out border border-white/20
                         relative overflow-hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="relative z-10 flex items-center justify-center gap-2">
                  ✨ Explore Courses
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-180deg);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-slideInFromLeft {
          animation: slideInFromLeft 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </nav>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation