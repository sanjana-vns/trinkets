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
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Trinkets Institute image */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative flex items-center space-x-3">
                {/* Logo Image */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg 
                                 group-hover:scale-105 transition-all duration-200 ease-out">
                    <Image
                      src="/images/trinketlogo.jpg"
                      alt="Trinkets Institute Logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Logo Text with clean typography */}
                <div className="relative">
                  <div className="flex flex-col">
                    <div className="text-2xl font-bold tracking-tight leading-none">
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 
                                     bg-clip-text text-transparent group-hover:from-blue-700 
                                     group-hover:to-indigo-700 transition-all duration-300">
                        Trinkets
                      </span>
                    </div>
                    <div className="text-sm font-medium tracking-wide text-gray-600 
                                   group-hover:text-blue-600 transition-colors duration-300">
                      INSTITUTE
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation with clean hover effects */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group px-4 py-2 rounded-lg text-gray-700 font-medium transition-all duration-200
                           hover:text-blue-600 hover:bg-blue-50"
                >
                  <span className="relative z-10 text-sm">{item.name}</span>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 
                                 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-200 ease-out rounded-full"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Clean CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/courses"
              className="relative group overflow-hidden px-6 py-3 rounded-lg font-semibold text-white
                       bg-gradient-to-r from-blue-600 to-indigo-600 
                       hover:from-blue-700 hover:to-indigo-700 
                       hover:scale-105 hover:shadow-lg
                       transition-all duration-200 ease-out
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Courses
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
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

      {/* Clean Mobile Navigation */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t border-gray-100">
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 
                        hover:bg-blue-50 font-medium transition-all duration-200
                        "
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/courses"
              className="block px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 
                       text-white font-semibold text-center
                       hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </div>

      {/* Simple CSS for clean animations */}
      <style jsx>{`
        .animate-slideInFromLeft {
          animation: slideInFromLeft 0.3s ease-out forwards;
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation