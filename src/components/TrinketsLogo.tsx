'use client'
import Link from 'next/link'

interface TrinketsLogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showText?: boolean
}

const TrinketsLogo = ({ size = 'md', className = '', showText = true }: TrinketsLogoProps) => {
  const sizes = {
    sm: {
      container: 'h-10',
      icon: 'w-10 h-10',
      mainText: 'text-lg',
      subText: 'text-xs',
      spacing: 'space-x-2'
    },
    md: {
      container: 'h-14',
      icon: 'w-14 h-14',
      mainText: 'text-2xl',
      subText: 'text-sm',
      spacing: 'space-x-3'
    },
    lg: {
      container: 'h-20',
      icon: 'w-20 h-20',
      mainText: 'text-4xl',
      subText: 'text-lg',
      spacing: 'space-x-4'
    }
  }

  const currentSize = sizes[size]

  return (
    <Link href="/" className={`flex items-center group ${currentSize.spacing} ${className}`}>
      {/* Modern Circular Logo Icon */}
      <div className={`relative ${currentSize.icon}`}>
        {/* Main Circle Background with Gradient */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 
                       shadow-lg group-hover:shadow-xl transition-all duration-300">
        </div>
        
        {/* Inner Elements */}
        <div className="relative w-full h-full rounded-full overflow-hidden">
          {/* Gear/Cog Icon in the center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-3/5 h-3/5 text-white drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
            </svg>
          </div>
          
          {/* Subtle highlight effect */}
          <div className="absolute top-2 left-2 w-3 h-3 bg-white/20 rounded-full blur-sm"></div>
          
          {/* Green notification dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white
                         shadow-lg flex items-center justify-center">
            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className={`font-bold tracking-tight ${currentSize.mainText}`}>
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 
                           bg-clip-text text-transparent group-hover:from-blue-700 
                           group-hover:to-indigo-800 transition-all duration-300">
              Trinkets Institute
            </span>
          </div>
          <div className={`font-medium tracking-wide text-gray-600 mt-0.5
                          group-hover:text-blue-600 transition-colors duration-300 ${currentSize.subText}`}>
            of Technology
          </div>
        </div>
      )}
    </Link>
  )
}

export default TrinketsLogo