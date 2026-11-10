import React, { useState } from 'react'
import { FaCalendarAlt, FaCopy, FaCheck, FaLinkedin, FaGithub } from 'react-icons/fa'
import { BOOKING_URL, EMAIL, GITHUB, LINKEDIN } from '../config'

const pill =
  'inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-dark-border hover:border-accent-purple hover:bg-accent-purple/10 text-sm sm:text-base transition-all duration-300'

const Contact = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          Let's <span className="gradient-text">talk</span>
        </h2>
        <p className="text-base sm:text-lg text-dark-muted mb-8">
          Hiring for applied AI or forward-deployed work?
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {BOOKING_URL && (
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent-purple text-white font-semibold hover:bg-accent-hover text-sm sm:text-base transition-colors duration-300"
            >
              <FaCalendarAlt className="w-4 h-4" /> Book a call
            </a>
          )}
          <button type="button" onClick={copyEmail} className={pill}>
            {copied ? <FaCheck className="w-4 h-4 text-accent-purple" /> : <FaCopy className="w-4 h-4" />}
            {copied ? 'Copied' : 'Copy email'}
          </button>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={pill}>
            <FaLinkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className={pill}>
            <FaGithub className="w-4 h-4" /> GitHub
          </a>
        </div>

        <p className="mt-8 text-sm text-dark-muted">Boston, MA · US Citizen</p>
      </div>
    </section>
  )
}

export default Contact
