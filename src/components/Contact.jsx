import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaCopy, FaCheck, FaLinkedin, FaGithub } from 'react-icons/fa'
import { BOOKING_URL, bookingHref, EMAIL, GITHUB, LINKEDIN } from '../config'

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
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Let's <span className="gradient-text">talk</span>
        </h2>
        <p className="text-base sm:text-lg text-dark-muted mb-10">
          Hiring for applied AI or forward-deployed work? Pick a time that suits you.
        </p>

        <motion.a
          href={bookingHref}
          target={BOOKING_URL ? '_blank' : undefined}
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-accent-purple text-white text-lg font-semibold hover:bg-accent-hover hover:shadow-[0_0_40px_rgba(99,102,241,0.45)] transition-all duration-300"
        >
          <FaCalendarAlt className="w-5 h-5" />
          Book a 15-min call
        </motion.a>

        <div className="mt-8 flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-dark-border hover:border-accent-purple hover:bg-accent-purple/10 text-sm sm:text-base transition-all duration-300"
          >
            {copied ? <FaCheck className="w-4 h-4 text-accent-purple" /> : <FaCopy className="w-4 h-4" />}
            {copied ? 'Copied' : EMAIL}
          </button>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-dark-border hover:border-accent-purple hover:bg-accent-purple/10 text-sm sm:text-base transition-all duration-300"
          >
            <FaLinkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-dark-border hover:border-accent-purple hover:bg-accent-purple/10 text-sm sm:text-base transition-all duration-300"
          >
            <FaGithub className="w-4 h-4" /> GitHub
          </a>
        </div>

        <p className="mt-6 text-sm text-dark-muted">Boston, MA · US Citizen</p>
      </div>
    </section>
  )
}

export default Contact
