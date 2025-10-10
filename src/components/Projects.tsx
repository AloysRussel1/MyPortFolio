//import React from 'react';
import { motion } from 'framer-motion';
import projectImg1 from '../assets/projet1.png';
import projectImg2 from '../assets/projet2.png';
import projectImg3 from '../assets/projet3.png';
import projectImg4 from '../assets/ai_school.jpg';
import projectImg5 from '../assets/ai_school.jpg';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Plateforme Gestion Tâches',
    description: 'React + Django, mise à jour en temps réel pour la gestion collaborative.',
    image: projectImg1,
    github: 'https://github.com/AloysRussel1/project1',
    live: '#'
  },
  {
    id: 2,
    title: 'Prédiction Prix Agricoles',
    description: 'Flask + TensorFlow, modèle prédictif basé sur des données historiques.',
    image: projectImg2,
    github: 'https://github.com/AloysRussel1/project2',
    live: '#'
  },
  {
    id: 3,
    title: 'Portfolio Personnel',
    description: 'React + Tailwind, site interactif avec animations Framer Motion.',
    image: projectImg3,
    github: 'https://github.com/AloysRussel1/project3',
    live: '#'
  },
  {
    id: 4,
    title: 'Gestion d’un établissement',
    description:
      'Application pour gérer un établissement : emplois du temps, membres, événements.',
    image: projectImg4,
    github: 'https://github.com/AloysRussel1/project4',
    live: '#'
  },
  {
    id: 5,
    title: 'Plateforme Immobilière - Admin',
    description:
      'Tableau d’administration pour les agents, gestion des utilisateurs et statistiques des biens.',
    image: projectImg5,
    github: 'https://github.com/AloysRussel1/project5',
    live: '#'
  }
];

const Projects = () => (
  <section className="min-h-screen px-8 py-24 bg-darkbg text-white" id="projects">
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl font-bold text-orange mb-12 text-center"
    >
      Mes Projets
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
          className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a href={project.github} target="_blank" className="text-orange text-2xl hover:text-lightOrange transition">
                <FaGithub />
              </a>
              <a href={project.live} target="_blank" className="text-orange text-2xl hover:text-lightOrange transition">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
