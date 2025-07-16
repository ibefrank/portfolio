import React from 'react'
import { motion } from 'framer-motion'

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className="bg-primary-600 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
        />
      </div>
      <span className="text-sm text-gray-600 mt-2 block">{skill.level}%</span>
    </motion.div>
  )
}

export default SkillCard