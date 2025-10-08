// SEO Performance Enhancements
// This file contains additional optimizations for better SEO scores

// Add to your pages for better performance
export const SEOEnhancements = {
  // Critical resource hints
  resourceHints: `
    <!-- DNS prefetch for external domains -->
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//www.google-analytics.com">
    <link rel="dns-prefetch" href="//www.googletagmanager.com">
    
    <!-- Preconnect to critical origins -->
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Preload critical resources -->
    <link rel="preload" href="/images/trinketlogo.jpg" as="image" type="image/jpeg">
    <link rel="preload" href="/icons/icon-192x192.svg" as="image" type="image/svg+xml">
    <link rel="preload" href="/manifest.json" as="fetch" crossorigin>
  `,

  // Meta tags for better social sharing
  socialMetaTags: `
    <!-- Enhanced Open Graph tags -->
    <meta property="og:site_name" content="Trinkets Institute">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="en_IN">
    <meta property="og:locale:alternate" content="en_US">
    
    <!-- Twitter Card enhanced -->
    <meta name="twitter:domain" content="trinketsinstitute.com">
    <meta name="twitter:data1" content="Engineering Training">
    <meta name="twitter:label1" content="Category">
    <meta name="twitter:data2" content="Mumbai, India">
    <meta name="twitter:label2" content="Location">
    
    <!-- LinkedIn specific -->
    <meta property="linkedin:owner" content="trinkets-institute">
    
    <!-- WhatsApp sharing -->
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:type" content="image/jpeg">
  `,

  // Enhanced meta tags for search engines
  searchEngineMeta: `
    <!-- Search engine specific meta tags -->
    <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1">
    <meta name="googlebot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1">
    <meta name="bingbot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1">
    <meta name="slurp" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1">
    
    <!-- Geo targeting -->
    <meta name="geo.region" content="IN-MH">
    <meta name="geo.placename" content="Mumbai">
    <meta name="geo.position" content="19.1729;72.9573">
    <meta name="ICBM" content="19.1729, 72.9573">
    
    <!-- Content classification -->
    <meta name="rating" content="general">
    <meta name="distribution" content="global">
    <meta name="language" content="en-IN">
    <meta name="audience" content="all">
    <meta name="copyright" content="Trinkets Institute of Technology">
  `,

  // Performance meta tags
  performanceMeta: `
    <!-- Performance optimization -->
    <meta http-equiv="x-dns-prefetch-control" content="on">
    <meta name="format-detection" content="telephone=no,email=no,address=no">
    
    <!-- PWA enhancement -->
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="Trinkets Institute">
    <meta name="application-name" content="Trinkets Institute">
    <meta name="msapplication-TileColor" content="#3b82f6">
    <meta name="msapplication-TileImage" content="/icons/icon-144x144.png">
    <meta name="msapplication-square70x70logo" content="/icons/icon-70x70.png">
    <meta name="msapplication-square150x150logo" content="/icons/icon-150x150.png">
    <meta name="msapplication-wide310x150logo" content="/icons/icon-310x150.png">
    <meta name="msapplication-square310x310logo" content="/icons/icon-310x310.png">
  `,

  // Structured data for specific pages
  coursePageStructuredData: (courseData: any) => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": `https://trinketsinstitute.com/courses/${courseData.slug}#course`,
        "name": courseData.name,
        "description": courseData.description,
        "provider": {
          "@type": "EducationalOrganization",
          "@id": "https://trinketsinstitute.com#organization"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": ["onsite", "online"],
          "duration": courseData.duration,
          "instructor": {
            "@type": "Person",
            "name": "Expert Faculty",
            "worksFor": {
              "@id": "https://trinketsinstitute.com#organization"
            }
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": courseData.rating || "4.7",
          "reviewCount": courseData.reviewCount || "150",
          "bestRating": "5"
        }
      }
    ]
  }),

  // Service page structured data
  servicePageStructuredData: (serviceData: any) => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `https://trinketsinstitute.com/services/${serviceData.slug}#service`,
        "name": serviceData.name,
        "description": serviceData.description,
        "provider": {
          "@type": "Organization",
          "@id": "https://trinketsinstitute.com#organization"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Mumbai Metropolitan Region, Maharashtra, India"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": serviceData.name,
          "itemListElement": serviceData.features?.map((feature: string, index: number) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": feature
            }
          }))
        }
      }
    ]
  }),

  // FAQ structured data
  faqStructuredData: (faqs: Array<{question: string, answer: string}>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }),

  // Breadcrumb structured data
  breadcrumbStructuredData: (breadcrumbs: Array<{name: string, url: string}>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  })
}

// Performance monitoring for Core Web Vitals
export const setupPerformanceMonitoring = () => {
  if (typeof window !== 'undefined') {
    // Monitor Core Web Vitals
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      onCLS((metric) => {
        console.log('CLS:', metric)
        // Send to analytics
      })
      onFCP((metric) => {
        console.log('FCP:', metric)
        // Send to analytics
      })
      onLCP((metric) => {
        console.log('LCP:', metric)
        // Send to analytics
      })
      onTTFB((metric) => {
        console.log('TTFB:', metric)
        // Send to analytics
      })
      onINP((metric) => {
        console.log('INP:', metric)
        // Send to analytics
      })
    })

    // Monitor resource loading
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry)
          } else if (entry.entryType === 'resource') {
            // Monitor slow resources
            if (entry.duration > 1000) {
              console.warn('Slow resource:', entry.name, entry.duration)
            }
          }
        }
      })
      
      observer.observe({ entryTypes: ['navigation', 'resource'] })
    }
  }
}

export default SEOEnhancements