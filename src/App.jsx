import React, { useEffect } from 'react'
import SEO from './components/SEO'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    // Simple smooth scrolling without conflicts
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="min-h-screen bg-dark-bg">
      <SEO
        title="Rithvik Katakam"
        description="Applied AI engineer in Boston. I build AI agents and ship them to real users."
        image="/Portfolio-picture.jpeg"
        type="website"
        twitterHandle="@"
      />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
