import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'
import HeroSection from './components/HeroSection'
import FeaturedAnime from './components/FeaturedAnime'
import TrendingAnime from './components/TrendingAnime'
import Categories from './components/Categories'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './styles/App.css'
import './styles/components.css'

function App1() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="app">
      {/* Particle Background */}
      <div id="particles-js" className="particles-background"></div>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <HeroSection />
        <FeaturedAnime />
        <TrendingAnime />
        <Categories />
        <CTA /> 
        <Footer />
      </div>
      
      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  )
}

// Scroll to Top Component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      id="scroll-to-top"
      className={`scroll-to-top-btn ${isVisible ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  )
}

export default App1