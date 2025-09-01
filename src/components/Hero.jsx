import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Rithvik-katakamm', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/rithvikkatakam/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:rithvik.katakamm@gmail.com', label: 'Email' },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 pt-20">
      {/* Background gradient effects - subtle for performance */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-accent-purple/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-accent-purple-light/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text Content - Order 2 on mobile, Order 1 on desktop */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            Hi, I'm <span className="gradient-text whitespace-nowrap">Rithvik</span><span className="blinking-cursor"></span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-dark-muted mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                         I like AI and engineering. 
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-lg border border-dark-border hover:border-accent-purple hover:bg-accent-purple/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}

              >
                <link.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Image - Order 1 on mobile, Order 2 on desktop */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]">
            {/* Modern clean image presentation like Aditi's */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="IMG_0495.png"
                alt="Rithvik Katakam"
                className="w-full h-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
              {/* Subtle gradient overlay at bottom for depth */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark-bg/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Minimal floating accents */}
            <div className="absolute -top-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 bg-accent-purple/15 rounded-2xl filter blur-2xl" />
            <div className="absolute -bottom-2 -left-2 w-20 h-20 sm:w-24 sm:h-24 bg-accent-purple-light/15 rounded-2xl filter blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
