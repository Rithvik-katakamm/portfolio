import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {

  const skillCategories = [
    {
      title: 'Core',
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'C++', 'Git', 'Python', 'Pytorch'],
    },
    {
      title: 'LLM Engineering',
      skills: ['RAG', 'Prompt Engineering', 'Fine-tuning', 'Vector Databases', 'ChromaDB', 'Structured Outputs', 'GPT-4', 'Llama', 'Faiss','MCP','Ollama'],
    },
    {
      title: 'Frameworks',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'Transformers (Hugging Face)', 'Keras', 'LangChain','NumPy', 'Pandas', 'Matplotlib'],
    },
    {
      title: 'MLOps & Cloud',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'Model Deployment', 'REST API', 'SageMaker', 'Data Pipeline', 'ETL', 'MongoDB'],
    }
  ]



  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 hover-glow smooth-transition"
              whileHover={{ y: -3 }}
            >
              <h3 className="text-lg sm:text-xl font-bold gradient-text mb-3 sm:mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-lg bg-dark-bg border border-dark-border hover:border-accent-purple/50 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
