import AboutHero from '@/components/about/AboutHero'
import AboutStory from '@/components/about/AboutStory'
import AboutMission from '@/components/about/AboutMission'
import AboutTeam from '@/components/about/AboutTeam'
import AboutValues from '@/components/about/AboutValues'
import AboutAchievements from '@/components/about/AboutAchievements'
import AboutTestimonials from '@/components/about/AboutTestimonials'

export const metadata = {
  title: 'About Us - Trinkets Institute | Turning Students into Professionals',
  description: 'Learn about Trinkets Institute\'s journey, mission, and commitment to transforming students into industry-ready professionals through practical engineering education.',
  keywords: 'about trinkets institute, engineering education, professional training, industry experience, faculty, mission, vision',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
      <AboutAchievements />
      <AboutTestimonials />
    </div>
  )
}