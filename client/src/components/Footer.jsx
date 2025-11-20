import { FaYoutube, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { siteConfig } from '../config/siteConfig'

function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-gray-900 text-sm text-gray-400">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <picture>
            <source srcSet="/logo.webp" type="image/webp" />
            <img src="/logo.png" alt="My Story Logo" className="w-8 h-8 object-contain" />
          </picture>
          <span className="font-bold text-white">{siteConfig.name}</span>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <a 
            href={`mailto:${siteConfig.social.email}`}
            className="hover:text-white transition text-gray-400"
          >
            {siteConfig.social.email}
          </a>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#store" className="hover:text-white transition">Store</a>
          </div>
        </div>

        <div className="flex gap-4">
          <a 
            href={siteConfig.social.youtube} 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our YouTube channel"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <FaYoutube />
          </a>
          <a 
            href={siteConfig.social.linkedin} 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on LinkedIn"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaLinkedinIn />
          </a>
          <a 
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.social.email}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send us an email"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-8 text-center md:text-left">
        <p>&copy; 2025 {siteConfig.name} Channel. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
