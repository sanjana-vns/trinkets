'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navigation = () => {
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
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 
                                     bg-clip-text text-transparent group-hover:from-blue-800 
                                     group-hover:via-indigo-500 group-hover:to-blue-700
                                     transition-all duration-500 ease-out">
                        Trinkets
                      </span>
                    </div>
                    <div className="text-sm font-semibold tracking-widest text-gray-600 
                                   group-hover:text-indigo-600 transition-colors duration-300 
                                   transform group-hover:translate-x-1 transition-transform duration-300">
                      INSTITUTE
                    </div>
                  </div>
                  
                  {/* Animated underline */}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-500 
                                 group-hover:w-full transition-all duration-500 ease-out"></div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-4 w-1 h-1 bg-secondary-400 rounded-full 
                                   animate-bounce" style={{animationDelay: '0ms'}}></div>
                    <div className="absolute top-2 right-8 w-1 h-1 bg-blue-400 rounded-full 
                                   animate-bounce" style={{animationDelay: '200ms'}}></div>
                    <div className="absolute bottom-1 left-12 w-1 h-1 bg-indigo-300 rounded-full 
                                   animate-bounce" style={{animationDelay: '400ms'}}></div>
                  </div>
                </div>

                {/* Glowing effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 
                               bg-gradient-to-r from-blue-400 to-indigo-400 blur-xl 
                               transition-opacity duration-500 -z-10"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation with enhanced hover effects */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group px-4 py-3 rounded-xl text-gray-700 font-medium transition-all duration-300 ease-out
                           hover:text-blue-600 hover:bg-gray-50 hover:shadow-md hover:-translate-y-1
                           before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r 
                           before:from-blue-600 before:to-indigo-500 before:opacity-0 before:scale-95
                           hover:before:opacity-10 hover:before:scale-100 before:transition-all before:duration-300"
                >
                  <span className="relative z-10 text-sm">{item.name}</span>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-500 
                                 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 ease-out"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Button with professional format */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Primary CTA Button */}
            <Link
              href="/courses"
              className="relative group overflow-hidden px-8 py-3 rounded-xl font-semibold text-white
                       bg-gradient-to-r from-blue-600 to-indigo-500 
                       hover:from-blue-700 hover:to-indigo-600 
                       hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25
                       transition-all duration-300 ease-out
                       before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent
                       before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700
                       after:absolute after:inset-0 after:rounded-xl after:shadow-inner
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Courses
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              
              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 
                             group-hover:opacity-100 group-hover:animate-ping 
                             transition-opacity duration-300"></div>
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
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-100">
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 
                        hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50
                        font-medium transition-all duration-300 ease-out
                        hover:translate-x-2 hover:shadow-md
                        ${isMenuOpen ? 'animate-slideInFromLeft' : ''}
                        `}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center justify-between">
                <span>{item.name}</span>
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] 
                              group-hover:translate-x-0 transition-all duration-300" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
          <div className="pt-4 space-y-3">
            {/* Mobile Primary CTA */}
            <Link
              href="/courses"
              className="block px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-500 
                       text-white font-semibold text-center
                       hover:from-blue-700 hover:to-indigo-600 hover:scale-105 hover:shadow-xl
                       transition-all duration-300 ease-out"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center justify-center gap-2">
                Explore Courses
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
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
        
        .animate-slideInFromLeft {
          animation: slideInFromLeft 0.6s ease-out forwards;
        }
      `}</style>
    </nav>
  )
}

export default Navigation