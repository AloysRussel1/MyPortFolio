//import React from 'react'; // 
import { motion } from 'framer-motion';
import { FaLaptopCode, FaPython, FaBrain, FaCloud,  } from 'react-icons/fa'; // Nouvelles icônes plus spécifiques

const skillCategories = [
  {
    name: 'Front-End & UI/UX',
    icon: <FaLaptopCode className="text-orange text-3xl" />, // Icône plus moderne
    // Mettre en avant les frameworks phares
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    name: 'Back-End & API',
    icon: <FaPython className="text-orange text-3xl" />, // Mettre Python en évidence
    // Mettre l'accent sur Python et ses frameworks
    skills: ['Python', 'Django', 'Flask', 'API REST (Création & Sécurisation)', 'Tests Unitaires'],
  },
  {
    name: 'Data Science & IA',
    icon: <FaBrain className="text-orange text-3xl" />,
    // Cœur de votre expertise Data
    skills: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Analyse de Données'],
  },
  {
    name: 'Bases de Données & DevOps',
    icon: <FaCloud className="text-orange text-3xl" />, // Utilisation d'une icône Cloud
    // Combiner les éléments d'infrastructure
    skills: ['PostgreSQL', 'MySQL', 'Git/GitHub', 'Docker (Notions)', 'AWS (Notions)', 'Agile/Scrum'],
  },
];

const Skills = () => (
  <section className="bg-darkbg text-white px-6 lg:px-16 py-24" id="skills">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-orange mb-4 text-center">Compétences Techniques</h2>
      <p className="text-lg text-gray-400 mb-16 text-center max-w-2xl mx-auto">
        Maîtrise du cycle de vie complet d'une application, de la conception Full Stack à l'intégration de modèles d'Intelligence Artificielle.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-orange transition-all duration-300 shadow-xl"
          >
            <div className="flex items-center mb-6 space-x-4">
              {category.icon}
              <h3 className="text-xl md:text-2xl font-bold text-white">{category.name}</h3>
            </div>
            
            {/* Affichage des compétences sous forme de badges pour une meilleure lisibilité */}
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 bg-gray-900 text-sm font-medium text-orange rounded-full border border-orange/50 shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;