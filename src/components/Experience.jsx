import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {

  const experiences = [
    {
      company: "Amazon",
      position: "AI Content Expert 2",
      period: "TBD"
    },
    {
      company: 'Bliss (Family Business)',
      position: 'Growth Hacker',
      period: 'Jun 2025 - Present',
      highlights: [
        "Identified that word-of-mouth drove 80% of new tenant acquisition through customer behavior analysis – discovered untapped referral opportunity in organic peer recommendations",
        "Designed and launched referral program with 10:1 ROI – increased revenue 31% in 21 days"
      ],
    },
    {
      company: 'Norstella',
      position: 'Data Science Intern',
      period: 'July 2024 - Dec 2024',
      highlights: [
        'Prototyped LLM system (Llama 3.1 8B) to fill in 97% of missing data.',
        'Built an ML model to identify bottlenecks - projects ran 110% faster for customers',
        'NLP to cluster clients - helped teams personalize renewal conversations'
      ],
    }
  ]

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-purple to-accent-purple-light" />

          <div className="relative sm:pl-20 space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline dot - hidden on mobile */}
                <div className="hidden sm:block absolute left-6 top-2 w-4 h-4 bg-accent-purple rounded-full ring-4 ring-dark-bg" />
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="glass-effect rounded-xl sm:rounded-2xl p-6 sm:p-8 hover-glow smooth-transition"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-dark-text">{experience.position}</h3>
                      <p className="text-lg sm:text-xl text-accent-purple">{experience.company}</p>
                    </div>
                    <span className="text-sm sm:text-base text-dark-muted">{experience.period}</span>
                  </div>

                  <ul className="space-y-3">
                    {experience.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="flex items-start"
                      >
                        <span className="text-accent-purple mr-2 sm:mr-3 mt-0.5 flex-shrink-0">▸</span>
                        <span className="text-sm sm:text-base text-dark-muted leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
