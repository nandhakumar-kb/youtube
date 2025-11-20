import React from 'react'
import { FaUserFriends, FaLaptopCode, FaComments, FaChalkboardTeacher, FaCheck } from 'react-icons/fa'
import { siteConfig } from '../config/siteConfig'

const iconMap = {
  'fas fa-user-friends': FaUserFriends,
  'fas fa-laptop-code': FaLaptopCode,
  'fas fa-comments': FaComments,
  'fas fa-chalkboard-teacher': FaChalkboardTeacher,
  'fas fa-check': FaCheck
}

function Services() {
  const handleBooking = (e, url) => {
    e.preventDefault()
    if (url && url !== '#') {
      window.location.href = url
    } else {
      alert('Link this to booking service')
    }
  }

  return (
    <section id="services" className="py-24 bg-black border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Work With Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Go deeper with personalized guidance and interactive learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteConfig.services.map((service) => (
            <div 
              key={service.id}
              className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                {iconMap[service.decorIcon] && React.createElement(iconMap[service.decorIcon], { className: 'text-9xl' })}
              </div>
              <div className="relative z-10">
                <div className={`w-16 h-16 ${service.bgIcon} rounded-xl flex items-center justify-center mb-6 ${service.textIcon}`}>
                  {iconMap[service.icon] && React.createElement(iconMap[service.icon], { className: 'text-3xl' })}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <ul className="space-y-3 mb-8 text-gray-300">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <FaCheck className={service.textIcon} /> {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={service.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={service.buttonText}
                  className={`block text-center w-full py-4 ${service.bgButton} text-white font-bold rounded-lg transition focus:outline-none focus:ring-2 focus:ring-white`}
                >
                  {service.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
