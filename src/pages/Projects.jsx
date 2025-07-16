import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  
  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))]
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter))

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My Projects
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A collection of projects I've worked on, showcasing my skills and experience 
              in mobile apps, web development, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                filter === 'all' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            {allTechnologies.slice(0, 8).map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                  filter === tech 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tech}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600 text-lg">
                No projects found for the selected technology.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Projects