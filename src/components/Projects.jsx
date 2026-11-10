import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Lab Booking',
    description:
      'Instrument booking for a Northeastern University research lab. Built database-first: transactional Postgres functions lock and reject atomically, so double-booking cannot happen, even under parallel load.',
    impact: 'Production in 10 days • 8-way race + 160-request load tests • 15 audit findings closed before go-live',
    technologies: ['Next.js', 'TypeScript', 'Supabase Postgres', 'Row-level security', 'Playwright'],
    github: null,
    color: 'from-teal-500 to-green-500',
  },
  {
    title: 'Job Market Pipeline + Role Classifier',
    description:
      'Collects job postings from 51 hiring platforms and classifies each role with an embedding model. Benchmarked about 14 approaches on 2,098 hand-labeled titles and picked the winner by the numbers.',
    impact: '335k+ postings • Macro-F1 0.39 → 0.86 over keyword rules • 850 titles/s on CPU',
    technologies: ['Python', 'bge embeddings', 'scikit-learn', 'SQLite', 'OpenTelemetry'],
    github: null,
    color: 'from-purple-500 to-blue-500',
  },
  {
    title: 'The Brain',
    description:
      'A personal data lake and agent OS. Every AI conversation, meeting and note is captured deterministically into one index any agent can search. Mined memories must cite a real source turn: no source, no memory, enforced in code.',
    impact: '110k conversation turns indexed • 22 health invariants • Citation gate in code',
    technologies: ['Claude Code', 'MCP', 'Node', 'SQLite FTS5', 'Cloudflare R2'],
    github: null,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Day Log',
    description:
      'A keyboard-first macOS time log with an MCP server, so my agents know what I am doing. Append-only event store; the local LLM that reads each line was chosen by an eval on real inputs.',
    impact: 'Local LLM 84% vs 51% for keyword rules • 129 tests • Every green push ships',
    technologies: ['Swift', 'FastAPI', 'MCP', 'Ollama', 'OpenTelemetry'],
    github: 'https://github.com/Rithvik-katakamm/daylog',
    color: 'from-cyan-500 to-teal-500',
  },
]

const earlierWork = [
  { title: 'PubMed RAG', href: 'https://github.com/Rithvik-katakamm/PubMedRAG' },
  { title: 'ClinicalBERT NER', href: 'https://github.com/Rithvik-katakamm/Fine-Tuned-Named-Entity-Recognition' },
  { title: 'Topic Modeling on MIMIC-III', href: 'https://github.com/Rithvik-katakamm/Topic-Modeling-LDA-MIMIC-III-' },
]

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl glass-effect p-6 sm:p-8 hover-glow smooth-transition"
              whileHover={{ y: -5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-dark-text group-hover:text-accent-purple transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="p-2 rounded-lg hover:bg-accent-purple/20 transition-colors duration-300 flex-shrink-0"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <p className="text-sm sm:text-base text-dark-muted mb-4 leading-relaxed">
                  {project.description}
                </p>

                <p className="text-sm sm:text-base text-accent-purple font-medium mb-6">
                  {project.impact}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-accent-purple/10 text-accent-purple-light border border-accent-purple/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm sm:text-base text-dark-muted">
          Earlier ML work:{' '}
          {earlierWork.map((w, i) => (
            <React.Fragment key={w.title}>
              {i > 0 && ' · '}
              <a
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-text hover:text-accent-purple underline underline-offset-4 decoration-dark-border hover:decoration-accent-purple transition-colors duration-300"
              >
                {w.title}
              </a>
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>
  )
}

export default Projects
