import { useEffect } from 'react'
import { initGA, logPageView } from './services/analytics'
import ErrorBoundary from './components/ErrorBoundary'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Store from './components/Store'
import Services from './components/Services'
import Newsletter from './components/Newsletter'
import Community from './components/Community'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    initGA()
    logPageView()

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section > div').forEach((el) => {
      el.classList.add('transition', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ErrorBoundary>
      <div className="scroll-smooth antialiased bg-[#0f0f0f] text-[#f1f1f1]">
        <Navigation />
        <Hero />
        <About />
        <Store />
        <Services />
        <Newsletter />
        <Community />
        <Footer />
        <BackToTop />
      </div>
    </ErrorBoundary>
  )
}

export default App
