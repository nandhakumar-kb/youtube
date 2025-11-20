import { FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa'
import { siteConfig } from '../config/siteConfig'
import { trackSocialClick } from '../services/analytics'

function Community() {
  return (
    <section id="community" className="py-24 bg-gradient-to-t from-gray-900 to-black border-t border-gray-900">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <FaLinkedin className="text-5xl text-blue-600 mb-6 mx-auto" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Connect Beyond YouTube</h2>
          <p className="text-xl text-gray-400 mb-8">
            The conversation doesn't stop at the comment section. Follow the journey on LinkedIn for deeper insights and professional updates.
          </p>
          <a 
            href={siteConfig.social.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => trackSocialClick('LinkedIn - Community')}
            aria-label="Follow My Story on LinkedIn"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-900/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Follow on LinkedIn <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Community
