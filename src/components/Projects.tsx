//import React from 'react'; // Déjà fait
import { motion } from 'framer-motion';
// J'ai besoin de vos images ou de placeholders pour l'exemple
import projectImg1 from '../assets/projet1.png'; 
import projectImg2 from '../assets/projet2.png';
//import projectImg3 from '../assets/projet3.png';
import projectImg4 from '../assets/ai_school.jpg';
import projectImg5 from '../assets/ai_school.jpg';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// --- Données de Projet ENRICHIES ---
const projects = [
  {
    id: 1,
    title: 'Plateforme Gestion Collaborative',
    description: 'Développement Full Stack d’une plateforme de gestion de tâches avec mise à jour en temps réel. Fonctionnalités incluant authentification sécurisée et gestion des rôles utilisateurs.',
    image: projectImg1,
    github: 'https://github.com/AloysRussel1/project1',
    live: '#',
    stack: ['React', 'Django', 'PostgreSQL', 'API REST', 'WebSockets'],
    role: 'Application Full Stack Temps Réel',
  },
  {
    id: 2,
    title: 'Prédiction Prix Agricoles (IA)',
    description: 'Conception et déploiement d’un service web pour prédire l’évolution des prix des denrées. Modèle d’apprentissage supervisé intégré via Flask, assurant une prise de décision éclairée.',
    image: projectImg2,
    github: 'https://github.com/AloysRussel1/project2',
    live: '#',
    stack: ['Flask', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Python'],
    role: 'Intégration d’un Modèle d’IA Déployé',
  },
  {
    id: 4,
    title: 'Gestion d’un Établissement (SaaS)',
    description: 'Système robuste pour la gestion des emplois du temps, des membres, et des événements. Orienté SaaS (Software as a Service) pour une architecture évolutive multi-clients.',
    image: projectImg4,
    github: 'https://github.com/AloysRussel1/project4',
    live: '#',
    stack: ['Django', 'Python', 'MySQL', 'Bootstrap', 'Agile'],
    role: 'Système de Gestion Modulaire',
  },
  {
    id: 5,
    title: 'Plateforme Immobilière - Admin',
    description: 'Tableau de bord d’administration complet pour les agents immobiliers : gestion des biens, analyse des statistiques, et administration des comptes utilisateurs.',
    image: projectImg5,
    github: 'https://github.com/AloysRussel1/project5',
    live: '#',
    stack: ['React', 'API REST', 'Axios', 'Tailwind CSS', 'UX/UI'],
    role: 'Frontend d’Administration (UX/UI)',
  }
];

const Projects = () => (
  <section className="min-h-screen px-6 lg:px-16 py-24 bg-darkbg text-white" id="projects">
    <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-orange mb-4 text-center">Mes Réalisations</h2>
        <p className="text-lg text-gray-400 mb-16 text-center max-w-2xl mx-auto">
            Démonstration concrète de l'alliance entre le développement **Full Stack** et l'**Intelligence Artificielle**.
        </p>

        {/* Grille de 2 colonnes sur desktop pour une meilleure visibilité des cartes détaillées */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> 
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700 hover:border-orange transition-all duration-300 group"
            >
              {/* Image avec effet de zoom subtil */}
              <div className="overflow-hidden h-64">
                  <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
              </div>

              {/* Contenu de la carte */}
              <div className="p-6">
                  <span className="text-sm font-semibold text-orange block mb-2">{project.role}</span>
                  <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                  
                  <p className="text-gray-300 mb-4 text-base leading-relaxed">{project.description}</p>
                  
                  {/* Stack Technique (Badges) */}
                  <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map(tech => (
                          <span key={tech} className="px-3 py-1 text-xs font-medium bg-gray-900 text-orange rounded-full border border-orange/50">
                              {tech}
                          </span>
                      ))}
                  </div>

                  {/* Boutons d'accès */}
                  <div className="flex space-x-4">
                      <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-orange text-darkbg rounded-full font-semibold hover:bg-lightOrange transition-colors"
                      >
                          <FaExternalLinkAlt />
                          <span>Voir le Live</span>
                      </a>
                      <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 border border-orange text-orange rounded-full hover:bg-orange hover:text-darkbg transition-colors"
                      >
                          <FaGithub />
                          <span>Code Source</span>
                      </a>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
    </div>
  </section>
);

export default Projects;