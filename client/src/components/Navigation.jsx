import { useState } from 'react'
import { FaYoutube, FaBars, FaTimes } from 'react-icons/fa'
import { siteConfig } from '../config/siteConfig'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href="#" 
          className="flex items-center gap-2 text-xl font-bold tracking-tighter focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label="My Story Home"
        >
          <picture>
            <source srcSet="/logo.webp" type="image/webp" />
            <img src="/logo.png" alt="My Story Logo" className="w-10 h-10 object-contain" />
          </picture>
          <span>My Story</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          {siteConfig.navigation.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="hover:text-white transition focus:outline-none focus:text-white focus:underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Subscribe Button */}
        <a 
          href={siteConfig.social.youtube} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Subscribe on YouTube"
        >
          <FaYoutube className="text-red-600" /> Subscribe
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-2"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-gray-800">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {siteConfig.navigation.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-gray-300 hover:text-white transition py-2 focus:outline-none focus:text-white focus:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href={siteConfig.social.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-3 rounded-full text-sm font-bold hover:bg-gray-200 transition flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Subscribe on YouTube"
            >
              <FaYoutube className="text-red-600" /> Subscribe
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
