import React from 'react'

// Enhanced SEO component for additional structured data and meta information
const AdvancedSEO: React.FC = () => {
  // Course aggregate rating schema
  const courseRatingSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "Course",
      "name": "Piping Design Course Mumbai",
      "description": "Comprehensive piping design training with PDMS, SP3D, E3D, and CAESAR II"
    },
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "200",
    "reviewCount": "180"
  }

  // How-to schema for piping course process
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Become a Piping Engineer in Mumbai",
    "description": "Step-by-step guide to becoming a professional piping engineer through Trinkets Institute's comprehensive training program",
    "image": "https://trinketsinstitute.com/images/piping-course-steps.jpg",
    "totalTime": "PT6M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": "35000"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Computer with CAD software"
      },
      {
        "@type": "HowToSupply", 
        "name": "Engineering drawing tools"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "PDMS Software"
      },
      {
        "@type": "HowToTool",
        "name": "SP3D Software"
      },
      {
        "@type": "HowToTool", 
        "name": "AutoCAD Plant 3D"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Enroll in Piping Design Course",
        "text": "Register for comprehensive piping design training at Trinkets Institute Mumbai",
        "url": "https://trinketsinstitute.com/courses/piping-design-course-mumbai"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Learn Piping Fundamentals",
        "text": "Master piping engineering basics, codes, standards, and industry practices"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Software Training",
        "text": "Get hands-on training in PDMS, SP3D, E3D, AutoCAD Plant 3D, and CAESAR II"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Project Work",
        "text": "Complete real-world piping design projects under expert guidance"
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Job Placement",
        "text": "Secure placement through our 100% placement assistance program"
      }
    ]
  }

  // Job posting schema for career opportunities
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Piping Design Engineer - Mumbai",
    "description": "Excellent career opportunities for piping engineers trained at Trinkets Institute Mumbai. Join leading engineering companies in oil & gas, petrochemical, and power sectors.",
    "identifier": {
      "@type": "PropertyValue",
      "name": "Trinkets Institute",
      "value": "PIPING-ENG-MUM-2024"
    },
    "datePosted": "2024-01-01T00:00:00+05:30",
    "validThrough": "2024-12-31T23:59:59+05:30",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Engineering Companies - Mumbai",
      "sameAs": "https://trinketsinstitute.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "823, Ecstasy Business Park, City of Joy, JSD Road, Mulund West",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400080",
        "addressCountry": {
          "@type": "Country",
          "name": "IN"
        }
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 400000,
        "maxValue": 1200000,
        "unitText": "YEAR"
      }
    },
    "qualifications": "Piping Design Certification from recognized institute like Trinkets Institute",
    "skills": "PDMS, SP3D, E3D, CAESAR II, AutoCAD Plant 3D, Piping Design, Stress Analysis"
  }

  // Video object schema for testimonials
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Trinkets Institute Piping Course Success Stories",
    "description": "Student testimonials and success stories from our piping design course graduates",
    "thumbnailUrl": "https://trinketsinstitute.com/images/video-thumbnail.jpg",
    "uploadDate": "2024-01-01T00:00:00.000Z",
    "duration": "PT5M",
    "contentUrl": "https://trinketsinstitute.com/videos/success-stories.mp4",
    "embedUrl": "https://trinketsinstitute.com/embed/success-stories",
    "publisher": {
      "@type": "Organization",
      "name": "Trinkets Institute of Technology",
      "logo": {
        "@type": "ImageObject",
        "url": "https://trinketsinstitute.com/images/trinketlogo.jpg"
      }
    }
  }

  return (
    <>
      {/* Course Rating Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseRatingSchema, null, 2)
        }}
      />

      {/* How-To Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema, null, 2)
        }}
      />

      {/* Job Posting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingSchema, null, 2)
        }}
      />

      {/* Video Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoSchema, null, 2)
        }}
      />
    </>
  )
}

export default AdvancedSEO