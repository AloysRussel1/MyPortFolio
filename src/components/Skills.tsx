import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const skillCategories = [
  {
    name: 'Front-End',
    icon: <FaCode className="text-orange text-2xl" />,
    skills: ['React', 'TypeScript', 'Tailwind', 'HTML/CSS'],
    level: 90,
  },
  {
    name: 'Back-End',
    icon: <FaServer className="text-orange text-2xl" />,
    skills: ['Node.js', 'Django', 'Python', 'API REST'],
    level: 85,
  },
  {
    name: 'Data & IA',
    icon: <FaDatabase className="text-orange text-2xl" />,
    skills: ['Pandas', 'NumPy', 'TensorFlow', 'Scikit-learn'],
    level: 80,
  },
  {
    name: 'Outils & Méthodes',
    icon: <FaTools className="text-orange text-2xl" />,
    skills: ['Git/GitHub', 'Agile/Scrum', 'Tests Unitaires'],
    level: 75,
  },
];

const Skills = () => (
  <section className="bg-darkbg text-white px-6 lg:px-16 py-24" id="skills">
    <h2 className="text-4xl font-bold text-orange mb-12 text-center">Compétences</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
          className="bg-gray-900 rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center mb-4 space-x-4">
            {category.icon}
            <h3 className="text-2xl font-semibold">{category.name}</h3>
          </div>
          <p className="text-gray-300 mb-4">{category.skills.join(', ')}</p>
          <div className="w-full bg-gray-800 h-4 rounded-full overflow-hidden">
            <motion.div
              className="h-4 bg-orange rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${category.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
