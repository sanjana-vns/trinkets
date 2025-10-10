'use client'
import React from 'react'

interface ReloadButtonProps {
  className?: string
  children: React.ReactNode
}

const ReloadButton: React.FC<ReloadButtonProps> = ({ className = '', children }) => {
  const handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }

  return (
    <button onClick={handleReload} className={className}>
      {children}
    </button>
  )
}

export default ReloadButton