import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    // Enable smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Optimize scrolling performance
    let ticking = false
    function updateScrolling() {
      ticking = false
    }
    
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateScrolling)
        ticking = true
      }
    }
    
    window.addEventListener('scroll', requestTick)
    
    return () => {
      window.removeEventListener('scroll', requestTick)
    }
  }, [])

  return (
    <div className="min-h-screen bg-dark-bg scroll-smooth">
      <Navbar />
      <main className="gpu-accelerated">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default App
