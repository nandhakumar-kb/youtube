import React from 'react'
import { motion } from 'framer-motion'
import { FaBookOpen, FaPenNib } from 'react-icons/fa'
import { siteConfig } from '../config/siteConfig'
import { trackProductPurchaseAttempt } from '../services/analytics'

const iconMap = {
  'fas fa-book-open': FaBookOpen,
  'fas fa-pen-nib': FaPenNib
}

function Store() {
  const handleBuyClick = (e, url, productName) => {
    e.preventDefault()
    trackProductPurchaseAttempt(productName)
    if (url && url !== '#') {
      window.open(url, '_blank')
    } else {
      alert('Link this to Gumroad/Stripe')
    }
  }

  return (
    <section id="store" className="py-24 bg-black border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Digital Resources</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tools and inspiration to help you craft your own narrative, available instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden ${product.hoverColor} transition group`}
            >
              <div className={`h-64 bg-gradient-to-br ${product.bgGradient} flex items-center justify-center relative overflow-hidden`}>
                {product.icon ? (
                  <div className={`w-32 h-48 ${product.cardColor} rounded shadow-2xl transform ${product.rotation} group-hover:rotate-0 transition duration-500 flex items-center justify-center border-l-4 ${product.borderColor}`}>
                    {iconMap[product.icon] && React.createElement(iconMap[product.icon], { className: 'text-white text-3xl' })}
                  </div>
                ) : (
                  <div className={`w-40 h-56 bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl transform ${product.rotation} transition duration-500 flex flex-col items-center justify-center p-4 text-center`}>
                    <span className="text-xs text-gray-300 font-serif italic">"Your story matters."</span>
                  </div>
                )}
                <div className={`absolute top-4 right-4 ${product.cardColor} text-white text-xs font-bold px-2 py-1 rounded`}>
                  {product.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                  <a 
                    href="#" 
                    onClick={(e) => handleBuyClick(e, product.purchaseUrl, product.title)}
                    aria-label={`Buy ${product.title} for ${product.price}`}
                    className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Store
