import { FaLightbulb, FaCompass } from 'react-icons/fa'
import { siteConfig } from '../config/siteConfig'

function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            {/* Video Embed Wrapper */}
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-800 group">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-blue-500/50 hidden md:block"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-purple-500/50 hidden md:block"></div>
              
              <a 
                href={siteConfig.urls.channelTrailer} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Watch channel trailer video on YouTube"
                className="block w-full h-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
              >
                <picture>
                  <source srcSet="/intro.webp" type="image/webp" />
                  <img 
                    src="/intro.jpg" 
                    alt="Channel trailer thumbnail - My Story" 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </picture>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">
              More Than Just Content. <br />
              <span className="text-blue-500">It's a Conversation.</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              In a world of noise, finding your own voice is a revolutionary act. <strong className="text-white">My Story</strong> isn't just about my life—it's a mirror for yours. 
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We explore the uncomfortable truths about the education system, the psychology of productivity, and the difficult choices required to live authentically. Whether it's breaking free from the "passive consumer" mindset or redefining success, we tackle it together.
            </p>
            
            <div className="flex gap-4">
              <div className="flex flex-col p-4 bg-gray-800/50 rounded-lg border border-gray-700 w-1/2">
                <FaLightbulb className="text-yellow-400 text-2xl mb-2" />
                <h4 className="font-bold text-white">Productivity</h4>
                <p className="text-sm text-gray-400">Actionable strategies, not just theory.</p>
              </div>
              <div className="flex flex-col p-4 bg-gray-800/50 rounded-lg border border-gray-700 w-1/2">
                <FaCompass className="text-red-400 text-2xl mb-2" />
                <h4 className="font-bold text-white">Life Choices</h4>
                <p className="text-sm text-gray-400">Navigating the path less traveled.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
