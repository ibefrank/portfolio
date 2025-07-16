import React from 'react'
import { motion } from 'framer-motion'
import { personalInfo, skills, softSkills } from '../data/portfolio'
import SkillCard from '../components/SkillCard'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Me
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {personalInfo.bio}
              </p>
              <p className="text-gray-600">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or playing badminton
                while planning my next adventure.
              </p>
            </motion.div>
            
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-80 h-80 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My expertise across different technologies and domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Soft Skills
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond technical expertise, I bring these human skills to every project
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg font-semibold text-gray-800">{skill}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
