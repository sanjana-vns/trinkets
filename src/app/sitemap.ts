import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://trinketsinstitute.com'
  
  // All course page slugs
  const coursePages = [
    'autocad-civil-software-course',
    'autocad-electrical-software-course',
    'autocad-mechanical-design',
    'autocad-piping-software-course',
    'autodesk-3ds-max-software-course',
    'building-information-modelling-training',
    'cadworx-software-course',
    'caesar-ii',
    'caesar-ii-stress-analysis',
    'e3d-piping',
    'electrical-design-engineering',
    'energy-modeling-green-building-training',
    'etabs',
    'hvac-drafting-course',
    'hvac-system-design',
    'instrumentation-control',
    'matlab-software-course',
    'mep-engineering',
    'microstation-software-course',
    'piping-design-course-mumbai',
    'piping-design-engineering',
    'piping-engineering-fundamentals-training',
    'plant-design-layout-training',
    'process-engineering',
    'smart-plant-3d',
    'solidworks-professional',
    'sp3d-piping-design-training',
    'staad-pro',
    'structural-design-analysis',
    'tekla-software-course'
  ]

  // All service page slugs
  const servicePages = [
    'building-services-engineering-mumbai',
    'foundation-engineering-services-mumbai',
    'hvac-system-design-analysis-services-mumbai',
    'hvac-system-design-services-mumbai',
    'mep-coordination-clash-detection-mumbai',
    'mep-system-design-services-mumbai',
    'piping-engineering-services',
    'piping-material-engineering-services-mumbai',
    'piping-stress-analysis-services-mumbai',
    'process-piping-design-services',
    'steel-structure-design-services-mumbai',
    'structural-analysis-design-services-mumbai'
  ]
  
  return [
    // Main pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/corporate-training`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/placements`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // All course pages
    ...coursePages.map(course => ({
      url: `${baseUrl}/courses/${course}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // All service pages
    ...servicePages.map(service => ({
      url: `${baseUrl}/services/${service}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  ]
}