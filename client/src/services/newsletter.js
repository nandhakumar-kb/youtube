// Newsletter Service - Mailchimp/ConvertKit Integration
const NEWSLETTER_API_ENDPOINT = import.meta.env.VITE_NEWSLETTER_API_KEY 
  ? '/api/newsletter' 
  : null

export const subscribeToNewsletter = async (email) => {
  try {
    // If no API key configured, simulate success for development
    if (!NEWSLETTER_API_ENDPOINT) {
      console.log('Newsletter subscription (dev mode):', email)
      return { success: true, message: 'Thanks for subscribing!' }
    }

    // For Mailchimp
    const response = await fetch(NEWSLETTER_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email,
        listId: import.meta.env.VITE_NEWSLETTER_LIST_ID 
      }),
    })

    if (!response.ok) {
      throw new Error('Subscription failed')
    }

    const data = await response.json()
    return { success: true, message: 'Thanks for subscribing! Check your inbox.' }
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return { 
      success: false, 
      message: 'Something went wrong. Please try again later.' 
    }
  }
}

// Alternative: ConvertKit Integration
export const subscribeToConvertKit = async (email) => {
  const CONVERTKIT_API_KEY = import.meta.env.VITE_NEWSLETTER_API_KEY
  const FORM_ID = import.meta.env.VITE_NEWSLETTER_LIST_ID

  if (!CONVERTKIT_API_KEY) {
    console.log('ConvertKit subscription (dev mode):', email)
    return { success: true, message: 'Thanks for subscribing!' }
  }

  try {
    const response = await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: CONVERTKIT_API_KEY,
        email: email,
      }),
    })

    if (!response.ok) {
      throw new Error('Subscription failed')
    }

    return { success: true, message: 'Thanks for subscribing! Check your inbox.' }
  } catch (error) {
    console.error('ConvertKit subscription error:', error)
    return { 
      success: false, 
      message: 'Something went wrong. Please try again later.' 
    }
  }
}
