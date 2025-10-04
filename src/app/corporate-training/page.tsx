import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CorporateHero from '@/components/corporate/CorporateHero'
import TrainingPrograms from '@/components/corporate/TrainingPrograms'
import CorporateClients from '@/components/corporate/CorporateClients'
import TrainingMethodology from '@/components/corporate/TrainingMethodology'
import CorporatePackages from '@/components/corporate/CorporatePackages'
import CorporateContact from '@/components/corporate/CorporateContact'

export const metadata: Metadata = {
  title: 'Corporate Training - Trinkets Institute | Enterprise IT Training Solutions',
  description: 'Transform your workforce with customized corporate IT training programs. Expert-led sessions in latest technologies with flexible scheduling and proven ROI.',
  keywords: 'corporate training, enterprise training, IT training for companies, workforce development, technology training, custom curriculum',
  openGraph: {
    title: 'Corporate Training - Trinkets Institute',
    description: 'Customized enterprise IT training solutions for modern businesses',
    images: ['/og-corporate.jpg'],
  },
}

export default function CorporateTrainingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Corporate Training Hero Section */}
      <CorporateHero />
      
      {/* Training Programs & Technologies */}
      <TrainingPrograms />
      
      {/* Corporate Clients & Success Stories */}
      <CorporateClients />
      
      {/* Training Methodology & Approach */}
      <TrainingMethodology />
      
      {/* Corporate Packages & Pricing */}
      <CorporatePackages />
      
      {/* Corporate Contact & Consultation */}
      <CorporateContact />
      
      <Footer />
    </main>
  )
}