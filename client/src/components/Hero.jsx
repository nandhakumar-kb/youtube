import { motion } from 'framer-motion'
import { FaYoutube } from 'react-icons/fa'
import { siteConfig } from '../config/siteConfig'
import { trackButtonClick, trackSocialClick } from '../services/analytics'

function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm text-xs font-medium text-gray-300 uppercase tracking-widest"
        >
          Personal Growth & Storytelling
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          We all have a story to tell.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-serif italic">
            This is mine.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Join me on a journey of self-discovery, challenging norms, and rewriting the narrative of what it means to live a fulfilling life.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <a 
            href={siteConfig.social.youtube} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => trackSocialClick('YouTube - Hero')}
            aria-label="Watch My Story channel on YouTube"
            className="px-8 py-4 bg-[#CC0000] hover:bg-[#FF0000] text-white font-bold rounded-lg transition transform hover:-translate-y-1 shadow-lg shadow-red-900/20 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <FaYoutube /> Watch on YouTube
          </a>
          <a 
            href="#store" 
            onClick={() => trackButtonClick('Visit Store - Hero')}
            aria-label="Visit digital store"
            className="px-8 py-4 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Visit Store
          </a>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-gray-800 pt-8"
        >
          {siteConfig.stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </header>
  )
}

export default Hero
