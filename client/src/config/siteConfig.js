// Site Configuration
export const siteConfig = {
  name: 'My Story',
  tagline: 'We all have a story to tell',
  description: 'Join the journey of self-discovery, productivity, and breaking norms. My Story channel official website.',
  
  social: {
    youtube: 'https://www.youtube.com/@mystorystarts',
    linkedin: 'https://linkedin.com/company/my-story-starts',
    email: 'mystoryaugust@gmail.com'
  },

  urls: {
    channelTrailer: 'https://youtu.be/SLi0cXDgs80?si=zKPodvR2EBMIraBR',
  },

  navigation: [
    { href: '#about', label: 'About' },
    { href: '#store', label: 'Store' },
    { href: '#services', label: 'Services' },
    { href: '#newsletter', label: 'Newsletter' }
  ],

  stats: [
    { value: '50+', label: 'Videos Created' },
    { value: 'Active', label: 'Community' },
    { value: 'Weekly', label: 'New Insights' }
  ],

  products: [
    {
      id: 1,
      type: 'E-BOOK',
      title: 'The Narrative Shift',
      description: 'A practical guide to rewriting your internal monologue and taking control of your life story.',
      price: '₹99',
      bgGradient: 'from-blue-900 to-gray-900',
      cardColor: 'bg-blue-600',
      borderColor: 'border-blue-400',
      hoverColor: 'hover:border-blue-500',
      icon: 'fas fa-book-open',
      rotation: 'rotate-[-5deg]',
      purchaseUrl: 'https://mail.google.com/mail/?view=cm&fs=1&to=mystoryaugust@gmail.com&su=Purchase: The Narrative Shift&body=Hi, I would like to purchase The Narrative Shift e-book (₹99).'
    },
    {
      id: 2,
      type: 'POSTER',
      title: 'Daily Affirmations Pack',
      description: 'High-resolution digital posters to remind you of your potential every single day.',
      price: '₹49',
      bgGradient: 'from-purple-900 to-gray-900',
      cardColor: 'bg-purple-600',
      borderColor: 'border-purple-400',
      hoverColor: 'hover:border-purple-500',
      icon: null,
      rotation: 'group-hover:scale-105',
      purchaseUrl: 'https://mail.google.com/mail/?view=cm&fs=1&to=mystoryaugust@gmail.com&su=Purchase: Daily Affirmations Pack&body=Hi, I would like to purchase the Daily Affirmations Pack (₹49).'
    },
    {
      id: 3,
      type: 'E-BOOK',
      title: 'Student to Creator',
      description: 'The blueprint for balancing education while building your personal brand online.',
      price: '₹99',
      bgGradient: 'from-pink-900 to-gray-900',
      cardColor: 'bg-pink-600',
      borderColor: 'border-pink-400',
      hoverColor: 'hover:border-pink-500',
      icon: 'fas fa-pen-nib',
      rotation: 'rotate-[5deg]',
      purchaseUrl: 'https://mail.google.com/mail/?view=cm&fs=1&to=mystoryaugust@gmail.com&su=Purchase: Student to Creator&body=Hi, I would like to purchase the Student to Creator e-book (₹99).'
    }
  ],

  services: [
    {
      id: 1,
      title: 'One-to-One Storytelling',
      icon: 'fas fa-user-friends',
      bgIcon: 'bg-blue-600/20',
      textIcon: 'text-blue-500',
      bgButton: 'bg-blue-600 hover:bg-blue-700',
      features: [
        'Personalized narrative coaching',
        'Deep dive into your personal goals',
        '60-minute private video call',
        'Action plan for your content'
      ],
      buttonText: 'Book a Session',
      bookingUrl: 'https://mail.google.com/mail/?view=cm&fs=1&to=mystoryaugust@gmail.com&su=Book One-to-One Storytelling Session&body=Hi, I would like to book a one-to-one storytelling session.',
      decorIcon: 'fas fa-comments'
    },
    {
      id: 2,
      title: "Online Workshop: The Creator's Path",
      icon: 'fas fa-laptop-code',
      bgIcon: 'bg-purple-600/20',
      textIcon: 'text-purple-500',
      bgButton: 'bg-purple-600 hover:bg-purple-700',
      features: [
        'Live group sessions',
        'Interactive Q&A and peer feedback',
        'Access to workshop recordings',
        'Exclusive community access'
      ],
      buttonText: 'Join Waitlist',
      bookingUrl: 'https://mail.google.com/mail/?view=cm&fs=1&to=mystoryaugust@gmail.com&su=Join Workshop Waitlist&body=Hi, I would like to join the waitlist for The Creator\'s Path workshop.',
      decorIcon: 'fas fa-chalkboard-teacher'
    }
  ]
}
