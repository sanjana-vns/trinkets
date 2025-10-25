'use client'

import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { HomeIcon } from '@heroicons/react/24/outline'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

const Breadcrumb = ({ items, className = '' }: BreadcrumbProps) => {
  // Generate JSON-LD structured data for breadcrumbs
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": {
          "@type": "Thing",
          "@id": "https://trinketsinstitute.com"
        }
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": {
          "@type": "Thing",
          "@id": item.href ? `https://trinketsinstitute.com${item.href}` : `https://trinketsinstitute.com`
        }
      }))
    ]
  }

  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData, null, 2)
        }}
      />
      
      <nav className={`flex items-center space-x-2 text-sm ${className}`} aria-label="Breadcrumb">
      <Link 
        href="/" 
        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
      >
        <HomeIcon className="w-4 h-4" />
        <span className="sr-only">Home</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
          {item.href && index !== items.length - 1 ? (
            <Link 
              href={item.href}
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-500 font-medium">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
    </>
  )
}

export default Breadcrumb