'use client'
import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center'
  size?: 'small' | 'medium' | 'large'
}

const WhatsAppButton = ({ 
  phoneNumber = '+919876543210', // Replace with actual business number
  message = 'Hi! I am interested in engineering courses at Trinkets Institute. Please provide more information.',
  position = 'bottom-right',
  size = 'medium'
}: WhatsAppButtonProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Show button after page loads to avoid layout shift
  useEffect(() => {
    console.log('WhatsApp button component mounted')
    const timer = setTimeout(() => {
      setIsVisible(true)
      console.log('WhatsApp button set to visible')
    }, 1000)
    
    // Check if mobile device with better detection
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768 || 
                           /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(isMobileDevice)
      console.log('Mobile detection:', isMobileDevice, 'Window width:', window.innerWidth)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Auto-show tooltip for first-time visitors
  useEffect(() => {
    if (isVisible && !localStorage.getItem('whatsapp-tooltip-shown')) {
      const timer = setTimeout(() => {
        setShowTooltip(true)
        localStorage.setItem('whatsapp-tooltip-shown', 'true')
        
        // Auto-hide tooltip after 5 seconds
        setTimeout(() => setShowTooltip(false), 5000)
      }, 2000)
      
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = isMobile 
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
    
    // Hide tooltip after clicking
    setShowTooltip(false)
  }

  const positionClasses = {
    'bottom-right': isMobile ? 'bottom-6 right-4' : 'bottom-20 right-6', // Mobile-friendly positioning
    'bottom-left': isMobile ? 'bottom-6 left-4' : 'bottom-20 left-6',   // Mobile-friendly positioning  
    'bottom-center': isMobile ? 'bottom-6 left-1/2 transform -translate-x-1/2' : 'bottom-20 left-1/2 transform -translate-x-1/2'
  }

  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-14 h-14',
    large: 'w-16 h-16'
  }

  const iconSizes = {
    small: 'w-6 h-6',
    medium: 'w-7 h-7',
    large: 'w-8 h-8'
  }

  if (!isVisible) {
    console.log('WhatsApp button not visible yet')
    return null
  }

  console.log('WhatsApp button rendering, isMobile:', isMobile, 'position:', position)

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className={`fixed ${positionClasses[position]} z-[9999] group`} style={{ zIndex: 9999 }}>
        {/* Tooltip - Mobile optimized */}
        {showTooltip && (
          <div className={`absolute bottom-full ${isMobile ? 'right-0 w-56' : 'right-0 w-64'} mb-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 transform translate-y-2 opacity-0 animate-fadeInUp`}>
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close tooltip"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-sm mb-1">
                  Need Help? Chat with us!
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Get instant support for course details, admission process, and career guidance.
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="mt-2 text-green-600 text-xs font-medium hover:text-green-700 transition-colors"
                >
                  Start Conversation →
                </button>
              </div>
            </div>
            
            {/* Arrow pointer */}
            <div className="absolute bottom-0 right-4 transform translate-y-full">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => !isMobile && setShowTooltip(true)}
          onMouseLeave={() => !isMobile && setShowTooltip(false)}
          onTouchStart={() => isMobile && setShowTooltip(true)} // Add touch support for mobile
          className={`
            ${sizeClasses[size]}
            bg-green-500 hover:bg-green-600 active:bg-green-700
            text-white rounded-full shadow-lg hover:shadow-xl 
            transition-all duration-300 ease-out
            flex items-center justify-center
            transform hover:scale-110 active:scale-95
            ring-4 ring-green-500/20 hover:ring-green-500/40
            group-hover:animate-pulse
            ${isMobile ? 'touch-manipulation' : ''}
          `}
          style={{ 
            WebkitTapHighlightColor: 'transparent',
            zIndex: 9999,
            position: 'relative'
          }}
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className={`${iconSizes[size]} transition-transform group-hover:rotate-12`} />
          
          {/* Notification dot for new messages */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </button>

        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping"></div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </>
  )
}

export default WhatsAppButton