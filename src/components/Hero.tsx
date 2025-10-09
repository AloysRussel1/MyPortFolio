import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import avatarImg from '../assets/Avatar.png';

const Hero = () => (
  <section className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen px-6 lg:px-16 pt-24 bg-darkbg text-white">
    
    {/* Partie gauche - Profil */}
    <div className="lg:w-1/2 mb-10 lg:mb-0">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange mb-4 drop-shadow-lg"
      >
        Bonjour, je suis Aloys Russel
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed"
      >
        Développeur Full Stack passionné par la création d’applications web modernes et performantes. Je combine créativité et rigueur technique pour concevoir des solutions innovantes et adaptées aux besoins des utilisateurs.
      </motion.p>

      {/* Réseaux sociaux */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="flex space-x-6 mb-6 text-2xl text-gray-300"
      >
        <a href="https://github.com/AloysRussel1" target="_blank" className="hover:text-orange transition-transform transform hover:scale-125">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/AloysRussel1" target="_blank" className="hover:text-orange transition-transform transform hover:scale-125">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/AloysRussel1" target="_blank" className="hover:text-orange transition-transform transform hover:scale-125">
          <FaTwitter />
        </a>
      </motion.div>

      {/* Boutons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <a href="#contact" className="px-6 py-3 bg-orange rounded-full hover:bg-lightOrange transition-all shadow-lg hover:shadow-xl">
          Me contacter
        </a>
        <a href="#projects" className="px-6 py-3 border border-orange rounded-full hover:bg-orange hover:text-darkbg transition-all shadow-lg hover:shadow-xl">
          Mes projets
        </a>
      </motion.div>
    </div>

    {/* Partie droite - Avatar animé */}
    <motion.div
      initial={{ scale: 0, rotate: -15 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 12, delay: 1 }}
      className="lg:w-1/2 flex justify-center mb-10 lg:mb-0"
    >
      <motion.img
        src={avatarImg}
        alt="Avatar"
        className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-orange shadow-2xl"
        animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      />
    </motion.div>

  </section>
);

export default Hero;
