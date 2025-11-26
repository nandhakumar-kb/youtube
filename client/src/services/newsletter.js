// Newsletter Service - Custom Backend Integration
// Newsletter Service - Custom Backend Integration
const API_URL = ''; // Use relative path for proxy

export const subscribeToNewsletter = async (email) => {
  console.log('Attempting to subscribe with API_URL:', API_URL);
  try {
    const response = await fetch(`${API_URL}/api/newsletter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    console.log('Response status:', response.status);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Subscription failed');
    }

    return { success: true, message: data.message };
  } catch (error) {
    console.error('Newsletter subscription error details:', error);
    return {
      success: false,
      message: error.message || 'Something went wrong. Please try again later.'
    };
  }
};
