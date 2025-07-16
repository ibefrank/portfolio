import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-900 text-white py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{personalInfo.name}</h3>
            <p className="text-gray-400">{personalInfo.tagline}</p>
            <p className="text-gray-400 mt-2">{personalInfo.location}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">Home</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">Projects</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href={personalInfo.github} className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href={personalInfo.linkedin} className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center">
            Made with <Heart size={16} className="mx-2 text-red-500" /> by {personalInfo.name}
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
