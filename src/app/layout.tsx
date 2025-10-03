import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trinkets Institute - Turning Students into Professionals',
  description: 'Practical, job-ready training programs tailored for colleges and universities. Expert-led training in engineering design, piping, HVAC, electrical, and structural engineering.',
  keywords: 'engineering training, piping engineering, HVAC engineering, electrical design, structural engineering, MEP engineering, professional courses, Mumbai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}