//import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity } from 'react-icons/fa';

const educationData = [
  {
    school: 'Localhost Academy',
    degree: 'Programme en Intelligence Artificielle et Analyse de Données',
    year: '2025',
  },
  {
    school: 'Université de Dschang',
    degree: 'Baccalauréat en Informatique (Évaluation comparative des études hors Québec)',
    year: '2024',
  },
];

const Education = () => (
  <section id="education" className="bg-darkbg text-white py-32 px-8">
    <h2 className="text-5xl font-bold text-orange mb-16 text-center tracking-wider">Éducation</h2>

    <div className="relative max-w-5xl mx-auto">
      {/* Timeline centrale subtile */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange to-transparent opacity-50"></div>

      {educationData.map((edu, index) => {
        const isLeft = index % 2 === 0;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.3 }}
            className={`relative w-full flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} mb-20 items-center`}
          >
            {/* Cercle de timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-orange rounded-full w-8 h-8 z-10 border-2 border-white flex items-center justify-center shadow-lg">
              <FaUniversity className="text-darkbg w-4 h-4" />
            </div>

            {/* Contenu flottant */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,165,0,0.6)' }}
              className={`lg:w-1/2 px-6 py-6 bg-gray-900 bg-opacity-20 rounded-xl backdrop-blur-md transition-all duration-300 ${
                isLeft ? 'text-right lg:pr-20' : 'text-left lg:pl-20'
              }`}
            >
              <h3 className="text-3xl font-semibold text-orange mb-2">{edu.degree}</h3>
              <p className="text-gray-300 mb-1">{edu.school}</p>
              <span className="text-gray-500 text-sm">{edu.year}</span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default Education;
