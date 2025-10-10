//import React from 'react'; // Déjà fait
import { motion } from 'framer-motion';
import { FaLaptopCode, FaStar, FaHandshake } from 'react-icons/fa'; // Nouvelles icônes
import { MdOutlineWork } from 'react-icons/md';

const experienceData = [
  {
    role: 'Développeur Full Stack – Freelance',
    company: 'Projets Indépendants',
    period: '2022 – Présent',
    type: 'tech',
    icon: <FaLaptopCode className="text-orange w-6 h-6" />,
    description: [
      // Accent mis sur le Full Stack et les technologies spécifiques
      'Pilotage complet du cycle de développement d’applications web en React et Python (Django/Flask).',
      // Accent mis sur la sécurité et l'IA
      'Conception d’**API REST sécurisées** (tokenisation, validation), et optimisation de l’UX/UI.',
      '**Intégration d’algorithmes d’IA** (TensorFlow, Scikit-learn) pour automatiser et optimiser les fonctionnalités clés.',
      'Gestion du déploiement (notions Docker/AWS) et maintenance technique des solutions produites.',
    ],
  },
  {
    role: 'Équipier Polyvalent', // Plus professionnel que "Équipier" seul
    company: 'McDonald’s, Sainte-Agathe-des-Monts, QC',
    period: '2025 – Présent',
    type: 'soft',
    icon: <FaHandshake className="text-white w-6 h-6" />,
    description: [
      // Accent mis sur les soft skills et l'intégration
      'Fournir un service client rapide et courtois dans un environnement bilingue et sous pression.',
      'Maintenir l’efficacité opérationnelle et la satisfaction client (taux de fidélité élevé).',
      'Collaboration efficace avec une équipe multiculturelle selon les principes de l’**Agile** (adaptabilité, communication).',
    ],
  },
];

const Experience = () => (
  <section id="experience" className="bg-darkbg text-white py-24 px-6 lg:px-16">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-orange mb-4 text-center">Expérience Professionnelle</h2>
      <p className="text-lg text-gray-400 mb-16 text-center max-w-2xl mx-auto">
        J'allie expertise technique en **Full Stack/IA** à une solide expérience du service client et du travail d'équipe.
      </p>

      {/* Grille des expériences : 1 colonne sur mobile, 2 colonnes sur desktop avec des tailles différentes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            // La carte Freelance (tech) prend 2/3 de la largeur sur desktop
            className={`rounded-xl p-8 shadow-2xl transition-all duration-300 border 
                        ${exp.type === 'tech' 
                           ? 'lg:col-span-2 bg-gray-800 border-orange/50 hover:border-orange'
                           : 'lg:col-span-1 bg-gray-900 border-gray-700 hover:border-white/50'}`}
          >
            {/* Header de la carte */}
            <div className="flex items-center mb-4 pb-4 border-b border-gray-700">
                <div className={`p-3 rounded-full mr-4 ${exp.type === 'tech' ? 'bg-orange' : 'bg-gray-700'}`}>
                    {exp.icon}
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-orange text-sm font-medium">{exp.company} | {exp.period}</p>
                </div>
            </div>

            {/* Détails de l'expérience */}
            <ul className="text-gray-300 space-y-3">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start">
                  <MdOutlineWork className="text-orange flex-shrink-0 mt-1 mr-3" />
                  <p className="text-base">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;