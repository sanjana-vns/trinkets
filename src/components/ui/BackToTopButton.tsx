'use client'

interface BackToTopButtonProps {
  className?: string
}

const BackToTopButton = ({ className = "" }: BackToTopButtonProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button 
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center z-50 group ${className}`}
    >
      <span className="text-xl group-hover:-translate-y-1 transition-transform duration-300">⬆️</span>
    </button>
  )
}

export default BackToTopButton