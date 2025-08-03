import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: 'Master of Science - Data Analytics and Engineering',
      school: 'Northeastern University, Boston',
      period: 'May 2025',
      highlights: ['Machine Learning', 'Natural Language Processing', 'Healthcare Analytics'],
    },
    {
      degree: 'Bachelor of Technology - Computer Science and Engineering',
      school: 'Sreenidhi Institute of Science and Technology',
      period: 'July 2023',
      highlights: ['Data Structures', 'Algorithms', 'Software Engineering'],
    },
  ]

  return (
    <section id="education" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
        >
          <span className="gradient-text">Education</span>
        </motion.h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="glass-effect rounded-xl sm:rounded-2xl p-6 sm:p-8 hover-glow smooth-transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                <div className="p-3 sm:p-4 rounded-full bg-accent-purple/10 text-accent-purple flex-shrink-0 self-start">
                  <FaGraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-dark-text mb-1 sm:mb-2">{edu.degree}</h3>
                  <p className="text-base sm:text-lg text-accent-purple mb-1">{edu.school}</p>
                  <p className="text-sm sm:text-base text-dark-muted mb-3 sm:mb-4">{edu.period}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {edu.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs sm:text-sm text-dark-muted px-2 sm:px-3 py-1 rounded-full bg-dark-bg border border-dark-border"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education
