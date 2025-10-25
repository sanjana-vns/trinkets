import React from 'react'

interface StructuredDataProps {
  type: 'organization' | 'course' | 'service' | 'localBusiness' | 'breadcrumb' | 'website' | 'faq' | 'educationalOrganization' | 'siteNavigation' | 'review'
  data: any
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generateStructuredData = () => {
    const baseContext = "https://schema.org"
    
    switch (type) {
      case 'organization':
        return {
          "@context": baseContext,
          "@type": "EducationalOrganization",
          "name": data.name || "Trinkets Institute of Technology",
          "alternateName": ["Trinkets Institute", "TIT Mumbai"],
          "url": "https://trinketsinstitute.com",
          "logo": "https://trinketsinstitute.com/images/trinketlogo.jpg",
          "description": data.description || "Leading technical education institute specializing in Engineering Design, Piping, HVAC, MEP, Structural Engineering, and Professional Training Programs in Mumbai.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "823, Ecstasy Business Park, City of Joy, JSD Road",
            "addressLocality": "Mulund West",
            "addressRegion": "Mumbai",
            "postalCode": "400080",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9820924788",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
          },
          "sameAs": [
            "https://www.linkedin.com/company/trinkets-institute",
            "https://www.facebook.com/trinketsinstitute",
            "https://twitter.com/trinketsinstitute",
            "https://www.youtube.com/c/trinketsinstitute",
            "https://www.instagram.com/trinketsinstitute"
          ],
          "foundingDate": "2010",
          "founder": {
            "@type": "Person",
            "name": "Trinkets Institute Founders"
          },
          "numberOfEmployees": "50-100",
          "aggregateRating": {
            "@type": "AggregateRating",
            "itemReviewed": {
              "@type": "EducationalOrganization",
              "name": "Trinkets Institute of Technology"
            },
            "ratingValue": "4.8",
            "reviewCount": "500",
            "bestRating": "5",
            "worstRating": "1"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Engineering Training Courses",
            "itemListElement": [
              {
                "@type": "OfferCatalog",
                "name": "Piping Engineering Courses",
                "itemListElement": [
                  { "@type": "Course", "name": "SP3D Piping Design Training" },
                  { "@type": "Course", "name": "CAESAR II Stress Analysis" },
                  { "@type": "Course", "name": "Piping Engineering Fundamentals" }
                ]
              },
              {
                "@type": "OfferCatalog", 
                "name": "MEP Engineering Courses",
                "itemListElement": [
                  { "@type": "Course", "name": "HVAC System Design" },
                  { "@type": "Course", "name": "MEP Engineering" },
                  { "@type": "Course", "name": "HVAC Drafting Course" }
                ]
              },
              {
                "@type": "OfferCatalog",
                "name": "Structural Engineering Courses", 
                "itemListElement": [
                  { "@type": "Course", "name": "STAAD Pro" },
                  { "@type": "Course", "name": "ETABS" },
                  { "@type": "Course", "name": "Structural Design Analysis" }
                ]
              }
            ]
          }
        }

      case 'course':
        return {
          "@context": baseContext,
          "@type": "Course",
          "name": data.name || "Engineering Course",
          "description": data.description || "Professional engineering training course",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Trinkets Institute of Technology",
            "url": "https://trinketsinstitute.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "823, Ecstasy Business Park, City of Joy, JSD Road",
              "addressLocality": "Mulund West",
              "addressRegion": "Mumbai",
              "postalCode": "400080",
              "addressCountry": "IN"
            }
          },
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": ["onsite", "online"],
            "duration": data.duration || "P3M",
            "startDate": data.startDate || "2024-11-01",
            "endDate": data.endDate || "2025-02-01",
            "location": {
              "@type": "Place",
              "name": "Trinkets Institute",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "823, Ecstasy Business Park",
                "addressLocality": "Mulund West",
                "addressRegion": "Mumbai",
                "postalCode": "400080",
                "addressCountry": "IN"
              }
            },
            "instructor": {
              "@type": "Person",
              "name": "Industry Expert Faculty"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": data.price || "25000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "category": "Education",
            "url": "https://trinketsinstitute.com/contact"
          },
          "coursePrerequisites": data.prerequisites || "Basic Engineering Knowledge",
          "educationalCredentialAwarded": data.certification || "Professional Certificate",
          "timeRequired": data.duration || "P3M",
          "aggregateRating": {
            "@type": "AggregateRating",
            "itemReviewed": {
              "@type": "Course",
              "name": data.name || "Engineering Course"
            },
            "ratingValue": data.rating || "4.7",
            "reviewCount": data.reviewCount || "150",
            "bestRating": "5",
            "worstRating": "1"
          }
        }

      case 'service':
        return {
          "@context": baseContext,
          "@type": "ProfessionalService",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "Trinkets Institute of Technology",
            "url": "https://trinketsinstitute.com"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Mumbai, Maharashtra, India"
          },
          "serviceType": data.serviceType || "Engineering Consulting",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceRange": data.priceRange || "₹₹-₹₹₹",
            "priceCurrency": "INR"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "itemReviewed": {
              "@type": "Service",
              "name": data.name || "Engineering Service"
            },
            "ratingValue": "4.8",
            "reviewCount": "200",
            "bestRating": "5",
            "worstRating": "1"
          }
        }

      case 'localBusiness':
        return {
          "@context": baseContext,
          "@type": "LocalBusiness",
          "name": "Trinkets Institute of Technology",
          "image": "https://trinketsinstitute.com/images/trinketlogo.jpg",
          "telephone": "+91-9820924788",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "823, Ecstasy Business Park, City of Joy, JSD Road",
            "addressLocality": "Mulund West",
            "addressRegion": "Mumbai",
            "postalCode": "400080",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.1729,
            "longitude": 72.9573
          },
          "url": "https://trinketsinstitute.com",
          "openingHours": [
            "Mo-Fr 09:00-18:00",
            "Sa 09:00-15:00"
          ],
          "priceRange": "₹₹-₹₹₹",
          "aggregateRating": {
            "@type": "AggregateRating",
            "itemReviewed": {
              "@type": "LocalBusiness",
              "name": "Trinkets Institute of Technology"
            },
            "ratingValue": "4.8",
            "reviewCount": "500",
            "bestRating": "5",
            "worstRating": "1"
          }
        }

      case 'breadcrumb':
        return {
          "@context": baseContext,
          "@type": "BreadcrumbList",
          "itemListElement": data.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": {
              "@type": "Thing",
              "@id": item.url
            }
          }))
        }

      case 'website':
        return {
          "@context": baseContext,
          "@type": "WebSite",
          "name": "Trinkets Institute",
          "alternateName": "Trinkets Institute of Technology",
          "url": "https://trinketsinstitute.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://trinketsinstitute.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Trinkets Institute of Technology",
            "logo": {
              "@type": "ImageObject",
              "url": "https://trinketsinstitute.com/images/trinketlogo.jpg"
            }
          }
        }

      case 'faq':
        return {
          "@context": baseContext,
          "@type": "FAQPage",
          "mainEntity": data.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }

      case 'educationalOrganization':
        return {
          "@context": baseContext,
          "@type": "EducationalOrganization",
          "name": "Trinkets Institute of Technology",
          "url": "https://trinketsinstitute.com",
          "logo": "https://trinketsinstitute.com/images/trinketlogo.jpg",
          "description": "Premier Engineering Training Institute in Mumbai specializing in Piping Design, MEP, HVAC, Structural Engineering with 100% placement assistance.",
          "foundingDate": "2015",
          "numberOfEmployees": "50-100",
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "Professional Certificate",
              "name": "Piping Design Engineering Certificate"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Engineering Courses",
            "itemListElement": [
              {
                "@type": "Course",
                "name": "Piping Design Course Mumbai",
                "courseCode": "PDC-001",
                "description": "Comprehensive Piping Design Training with PDMS, SP3D, E3D, and CAESAR II"
              }
            ]
          },
          "alumni": [
            {
              "@type": "Person",
              "name": "Engineering Professionals",
              "jobTitle": "Piping Engineers"
            }
          ]
        }

      case 'siteNavigation':
        return {
          "@context": baseContext,
          "@type": "SiteNavigationElement",
          "name": "Main Navigation",
          "url": "https://trinketsinstitute.com",
          "hasPart": [
            {
              "@type": "WebPage",
              "name": "Piping Courses",
              "url": "https://trinketsinstitute.com/courses",
              "description": "Professional piping design and engineering courses"
            },
            {
              "@type": "WebPage", 
              "name": "About Us",
              "url": "https://trinketsinstitute.com/about",
              "description": "Learn about Trinkets Institute and our mission"
            },
            {
              "@type": "WebPage",
              "name": "Placements",
              "url": "https://trinketsinstitute.com/placements", 
              "description": "Student placement records and success stories"
            }
          ]
        }

      case 'review':
        return {
          "@context": baseContext,
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "worstRating": "1"
          },
          "author": {
            "@type": "Person",
            "name": "Trinkets Institute Students"
          },
          "reviewBody": "Excellent piping course training in Mumbai with industry expert faculty and 100% placement assistance.",
          "itemReviewed": {
            "@type": "EducationalOrganization",
            "name": "Trinkets Institute of Technology"
          }
        }

      default:
        return {}
    }
  }

  const structuredData = generateStructuredData()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  )
}

export default StructuredData