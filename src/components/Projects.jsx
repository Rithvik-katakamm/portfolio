import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {

  const projects = [
    {
      title: 'Retrieval Augmented Generation - PubMed',
      description: 'Real-time medical research assistant using GPT-4 and PubMed integration. Achieves sub-100ms retrieval on 10000+ abstracts with ChromaDB vector search.',
      impact: '2-second response time • BioBERT embeddings • Production-ready',
      technologies: ['LLM', 'RAG', 'ChromaDB', 'BioBERT', 'FastAPI', 'GPT-4'],
      github: 'https://github.com/Rithvik-katakamm/PubMedRAG',
      color: 'from-purple-500 to-blue-500',
    },
    {
      title: 'Topic Modeling - MIMIC-III',
      description: 'Discovered 8 distinct clinical themes from 2M+ clinical notes using LDA. Achieved 0.5625 coherence score, exceeding clinical text benchmarks.',
      impact: 'Healthcare NLP • MLflow tracking • pyLDAvis visualization',
      technologies: ['Topic Modeling', 'MIMIC-III', 'LDA', 'spaCy', 'MLflow'],
      github: 'https://github.com/Rithvik-katakamm/Topic-Modeling-LDA-MIMIC-III-',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Named Entity Recognition',
      description: 'Automated medical entity extraction from clinical notes. Reduced manual review by 70% using fine-tuned ClinicalBERT.',
      impact: '2M+ notes processed • Optuna optimization • MLflow tracking',
      technologies: ['ClinicalBERT', 'NER', 'MIMIC-III', 'Optuna', 'spaCy'],
      github: 'https://github.com/Rithvik-katakamm/Fine-Tuned-Named-Entity-Recognition',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'AI for Emails',
      description: 'Privacy-first email automation with local Llama 3.2 and structured outputs. Instant iMessage alerts for high-priority items.',
      impact: '100% local processing • Pydantic models • macOS integration',
      technologies: ['Llama', 'Ollama', 'Structured Outputs'],
      github: 'https://github.com/Rithvik-katakamm/Email-Summerizer-using-Llama',
      color: 'from-teal-500 to-green-500',
    },
  ]



  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid gap-6 sm:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl glass-effect p-6 sm:p-8 hover-glow smooth-transition"
              whileHover={{ y: -5 }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-dark-text group-hover:text-accent-purple transition-colors duration-300">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-accent-purple/20 transition-colors duration-300 flex-shrink-0"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-sm sm:text-base text-dark-muted mb-4 leading-relaxed">
                  {project.description}
                </p>

                <p className="text-sm sm:text-base text-accent-purple font-medium mb-6">
                  {project.impact}
                </p>

                <div className="flex flex-wrap gap-2">
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
      </div>
    </section>
  )
}

export default Projects
