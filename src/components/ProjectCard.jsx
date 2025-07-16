import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a 
            href={project.github}
            className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <Github size={20} />
            <span>Code</span>
          </a>
          <a 
            href={project.live}
            className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
