import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const Contact = () => {
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
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Let's Connect
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Mail className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Github className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">GitHub</h3>
                    <a 
                      href={personalInfo.github}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View my repositories
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Linkedin className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">LinkedIn</h3>
                    <a 
                      href={personalInfo.linkedin}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Available for freelance work
                </h3>
                <p className="text-gray-600">
                  I'm currently available for freelance projects and full-time opportunities. 
                  Let's discuss how we can work together!
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send me a message
                </h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact