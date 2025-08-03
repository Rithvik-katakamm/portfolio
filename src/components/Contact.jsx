import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'rithvik.katakamm@gmail.com',
      href: 'mailto:rithvik.katakamm@gmail.com',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Boston, MA',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'rithvikkatakam',
      href: 'https://linkedin.com/in/rithvikkatakam/',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'Rithvik-katakamm',
      href: 'https://github.com/Rithvik-katakamm',
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:rithvik.katakamm@gmail.com?subject=${formData.subject}&body=From: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`
    window.location.href = mailtoLink
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Contact Information</h3>
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 rounded-full bg-accent-purple/10 text-accent-purple flex-shrink-0">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm sm:text-base text-dark-muted">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-dark-text hover:text-accent-purple transition-colors duration-300 break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base text-dark-text">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm sm:text-base text-dark-muted mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-dark-bg border border-dark-border focus:border-accent-purple outline-none transition-colors duration-300 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base text-dark-muted mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-dark-bg border border-dark-border focus:border-accent-purple outline-none transition-colors duration-300 text-sm sm:text-base"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm sm:text-base text-dark-muted mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-dark-bg border border-dark-border focus:border-accent-purple outline-none transition-colors duration-300 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm sm:text-base text-dark-muted mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-dark-bg border border-dark-border focus:border-accent-purple outline-none transition-colors duration-300 resize-none text-sm sm:text-base"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-accent-purple to-accent-purple-light text-white font-semibold hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300 text-sm sm:text-base"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
