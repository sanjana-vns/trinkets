import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-gradient mb-4">
              Trinkets Institute
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Trinkets Institute of Technology provides industry oriented training to empower
              your career with practical skills and expert guidance.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📍 Address: 823, Ecstasy Business Park, City of Joy, JSD Road, Mulund (W), Mumbai - 400080</p>
              <p>📞 Phone: +91 9820 924 788</p>
              <p>✉️ Email: info@titindia.com</p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="text-gray-300 hover:text-white transition-colors">Our Courses</Link></li>
              <li><Link href="/corporate-training" className="text-gray-300 hover:text-white transition-colors">Corporate Training</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/placements" className="text-gray-300 hover:text-white transition-colors">Placements</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery / Awards</Link></li>
              <li><Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li><Link href="/courses/software" className="text-gray-300 hover:text-white transition-colors">Software Courses</Link></li>
              <li><Link href="/courses/pg-diploma" className="text-gray-300 hover:text-white transition-colors">PG Diploma Courses</Link></li>
              <li><Link href="/courses/design-drafting" className="text-gray-300 hover:text-white transition-colors">Design and Drafting</Link></li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-4 mt-6">Legal Pages</h3>
            <ul className="space-y-2">
              <li><Link href="/disclaimer" className="text-gray-300 hover:text-white transition-colors">Disclaimer</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="https://www.facebook.com/profile.php?id=61578852495738" className="text-gray-300 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="https://x.com/titindiamumbai" className="text-gray-300 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="https://www.youtube.com/@trinketsinstituteoftechnol6645" className="text-gray-300 hover:text-white transition-colors">
                YouTube
              </a>
              <a href="https://wa.me/+919820924788" className="text-gray-300 hover:text-white transition-colors">
                WhatsApp
              </a>
              <a href="https://www.linkedin.com/company/trinkets-institute-of-technology-mumbai/" className="text-gray-300 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/trinketsinstituteinmumbai/" className="text-gray-300 hover:text-white transition-colors">
                Instagram
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Trinkets Institute of Technology. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer