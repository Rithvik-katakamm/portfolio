import React from 'react'

// Kept short on purpose: only what the work above proves.
const skillRows = [
  { title: 'Agents & LLMs', skills: ['Claude Code', 'Codex', 'MCP', 'Agent evaluation', 'RAG', 'Fine-tuning'] },
  { title: 'Engineering', skills: ['Python', 'TypeScript', 'React / Next.js', 'FastAPI', 'Postgres', 'SQLite'] },
  { title: 'ML & Ops', skills: ['PyTorch', 'Transformers', 'scikit-learn', 'OpenTelemetry', 'CI/CD'] },
]

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12">
          <span className="gradient-text">Skills</span>
        </h2>

        <dl className="space-y-4 sm:space-y-5">
          {skillRows.map((row) => (
            <div key={row.title} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
              <dt className="sm:w-40 flex-shrink-0 text-sm sm:text-base font-semibold text-accent-purple">
                {row.title}
              </dt>
              <dd className="text-sm sm:text-base text-dark-text">{row.skills.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Skills
