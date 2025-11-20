import { useState, useRef } from 'react'
import { FaPaperPlane, FaSpinner } from 'react-icons/fa'
import { subscribeToNewsletter } from '../services/newsletter'
import { trackFormSubmission } from '../services/analytics'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('') // 'loading', 'success', 'error'
  const [message, setMessage] = useState('')
  const lastSubmitTime = useRef(0)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Prevent double submission within 5 seconds
    const now = Date.now()
    if (now - lastSubmitTime.current < 5000) {
      setStatus('error')
      setMessage('Please wait a moment before submitting again')
      return
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    setMessage('')
    lastSubmitTime.current = now

    // Call newsletter service
    const result = await subscribeToNewsletter(email)
    
    if (result.success) {
      trackFormSubmission('Newsletter')
      setStatus('success')
      setMessage(result.message)
      setEmail('')
      
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('')
        setMessage('')
      }, 5000)
    } else {
      setStatus('error')
      setMessage(result.message)
    }
  }

  return (
    <section id="newsletter" className="py-12 bg-black">
      <div className="container mx-auto px-6">
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center border border-gray-800 max-w-4xl mx-auto">
          <FaPaperPlane className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-bold mb-4">Don't Miss the Next Chapter</h3>
          <p className="text-gray-300 mb-8">
            Join the weekly newsletter where I break down storytelling techniques not shared on YouTube.
          </p>
          <form 
            className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" 
            onSubmit={handleSubmit}
          >
            <input 
              type="email" 
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              required
              aria-label="Email address"
              className="flex-1 bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed" 
            />
            <button 
              type="submit"
              disabled={status === 'loading'}
              aria-label={status === 'loading' ? 'Subscribing...' : 'Subscribe to newsletter'}
              className="bg-white text-black font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {status === 'loading' ? (
                <span className="flex items-center gap-2">
                  <FaSpinner className="animate-spin" /> Subscribing...
                </span>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
          
          {/* Status Messages */}
          {message && (
            <div 
              className={`mt-4 p-3 rounded-lg text-sm ${
                status === 'success' 
                  ? 'bg-green-900/50 text-green-300 border border-green-700' 
                  : 'bg-red-900/50 text-red-300 border border-red-700'
              }`}
              role="alert"
              aria-live="polite"
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter
