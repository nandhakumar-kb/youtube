import ReactGA from 'react-ga4'

const TRACKING_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

export const initGA = () => {
  if (TRACKING_ID) {
    ReactGA.initialize(TRACKING_ID)
    console.log('Google Analytics initialized')
  } else {
    console.log('Google Analytics disabled (no tracking ID)')
  }
}

export const logPageView = () => {
  if (TRACKING_ID) {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
  }
}

export const logEvent = (category, action, label) => {
  if (TRACKING_ID) {
    ReactGA.event({
      category: category,
      action: action,
      label: label,
    })
  }
}

// Custom event tracking
export const trackButtonClick = (buttonName) => {
  logEvent('Button', 'Click', buttonName)
}

export const trackFormSubmission = (formName) => {
  logEvent('Form', 'Submit', formName)
}

export const trackSocialClick = (platform) => {
  logEvent('Social', 'Click', platform)
}

export const trackProductView = (productName) => {
  logEvent('Product', 'View', productName)
}

export const trackProductPurchaseAttempt = (productName) => {
  logEvent('Product', 'Purchase Attempt', productName)
}
