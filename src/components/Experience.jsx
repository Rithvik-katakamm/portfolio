import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {

  const experiences = [
    {
      company: 'Amazon · AGI Data Services',
      position: 'Agentic AI Teacher',
      period: 'Dec 2025 – Present',
      highlights: [
        'Ranked #2 worldwide among 50+ raters, evaluating 27 computer-use agent runs in a day, each 60–90 steps of reasoning, tool calls and actions: where the agent looped, stalled or picked the wrong tool',
        'Produced training data for frontier models across 3 modalities: agent trajectories, 70+ hours of narrated vision-language-action gameplay at 99% quality, and full-duplex speech',
        'Self-started Claude Code onboarding for 20+ co-workers, centered on verifying agent-written code; 3 went on to ship and deploy their own apps',
        'Built Atlas, a gamified learning site for co-workers on the path to software engineering; shipped a user-requested DSA visualizer in 45 minutes',
      ],
    },
    {
      company: 'Independent Software Studio · vikrith.com',
      position: 'Engineer',
      period: 'Jul 2026 – Present',
      highlights: [
        'Built and deployed a booking platform for a Northeastern University lab in 10 days; Postgres row locks make double-booking impossible under parallel load. The lab manager green-lit rollout',
        'Designed a white-label lane-booking engine MCP-first: tools described for an AI agent the way a good UI is for a person, so agents book and cancel cleanly',
        "Turned a business owner's request for a custom AI agent into a zero-build fix on Claude Cowork, which he now uses",
      ],
    },
    {
      company: 'Norstella',
      position: 'Data Science Intern',
      period: 'Jul 2024 – Dec 2024',
      highlights: [
        'Prototyped an LLM system (Llama 3.1 8B) that filled 97% of missing project data',
        'Built an ML model to find platform bottlenecks; customer projects ran 110% faster',
        'Used NLP to cluster clients so teams could personalize renewal conversations',
      ],
    },
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

                  {experience.highlights && experience.highlights.length > 0 && (
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
                  )}
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
