import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Download } from 'lucide-react'
import { personalInfo, techStack, projects } from '../data/portfolio'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'

const Home = () => {
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
  <div className="container-custom">
    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl"
      >
        <img
          src="/profile.jpg" // 👈 Place your image in the public folder and use this path
          alt="Frankline Arweya"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Intro Text */}
      <div className="text-center md:text-left max-w-xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm{' '}
          <span className="text-primary-600">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/projects" className="btn-primary inline-flex items-center">
            View My Work <ArrowRight size={20} className="ml-2" />
          </Link>
          <a href="#" className="btn-secondary inline-flex items-center">
            Download CV <Download size={20} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </div>
  </div>
</section>


      {/* Tech Stack Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tech Stack
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Technologies I use to bring ideas to life
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-primary-50 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-lg font-medium text-gray-800">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/projects" className="btn-primary inline-flex items-center">
              View All Projects <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
