//import React from 'react'; // Déjà fait
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaReact, FaPython } from 'react-icons/fa'; // Ajout d'icônes pour les compétences clés
import { GiArtificialIntelligence } from 'react-icons/gi'; // Icône pour l'IA
import avatarImg from '../assets/Avatar.png';

const Hero = () => (
  // 1. Min-height ajustée pour ne pas être trop grande sur mobile si le contenu dépasse.
  // 2. Padding vertical plus important sur mobile (pt-24 lg:pt-32)
  <section className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen px-6 lg:px-16 pt-24 lg:pt-32 pb-12 bg-darkbg text-white">
    
    {/* Partie gauche - Profil */}
    {/* lg:w-3/5 pour donner plus d'espace au texte sur grand écran */}
    <div className="lg:w-3/5 mb-10 lg:mb-0 text-center lg:text-left"> 
      
      {/* 1. Nouveau Titre Principal et Secondaire */}
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2"
      >
        Aloys Russel TONFO
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-2xl md:text-3xl lg:text-4xl font-semibold text-orange mb-6 drop-shadow-md"
      >
        Développeur Full Stack & IA
      </motion.h2>

      {/* 2. Paragraphe de Profil Amélioré */}
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0"
      >
        Développeur **Full Stack bilingue** (Français – Anglais) spécialisé en **React** et **Python (Django/Flask)**. Je conçois des applications web performantes et évolutives, en intégrant l'**Intelligence Artificielle** (TensorFlow, Scikit-learn) et l'**Analyse de Données** pour créer des solutions réellement innovantes et orientées utilisateur.
      </motion.p>
      
      {/* 3. Visibilité des Compétences Clés (Nouveau Bloc) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="flex justify-center lg:justify-start space-x-6 text-3xl md:text-4xl text-gray-300 mb-10"
      >
        <div title="React" className="hover:text-orange transition-colors duration-300"><FaReact /></div>
        <div title="Python / Django" className="hover:text-orange transition-colors duration-300"><FaPython /></div>
        <div title="Intelligence Artificielle" className="hover:text-orange transition-colors duration-300"><GiArtificialIntelligence /></div>
      </motion.div>

      {/* Boutons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
      >
        <a href="#projects" className="px-8 py-3 bg-orange rounded-full text-darkbg font-semibold hover:bg-lightOrange transition-all shadow-lg hover:shadow-xl w-full sm:w-auto text-center">
          Voir mes Projets
        </a>
        <a href="#contact" className="px-8 py-3 border border-orange rounded-full hover:bg-orange hover:text-darkbg transition-all shadow-lg hover:shadow-xl w-full sm:w-auto text-center">
          Télécharger le CV
        </a>
      </motion.div>
      
      {/* Réseaux sociaux (déplacés en bas à gauche pour une meilleure hiérarchie) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex space-x-6 mt-10 text-2xl justify-center lg:justify-start text-gray-400"
      >
        <a href="https://github.com/AloysRussel1" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-transform transform hover:scale-125">
          <FaGithub title="GitHub" />
        </a>
        <a href="https://linkedin.com/in/AloysRussel1" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-transform transform hover:scale-125">
          <FaLinkedin title="LinkedIn" />
        </a>
      </motion.div>
    </div>

    {/* Partie droite - Avatar animé */}
    {/* lg:w-2/5 pour laisser la priorité au texte */}
    <motion.div
      initial={{ scale: 0, rotate: -15 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 12, delay: 0.5 }}
      className="lg:w-2/5 flex justify-center mt-10 lg:mt-0"
    >
      <motion.img
        src={avatarImg}
        alt="Aloys Russel TONFO Avatar"
        className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-orange shadow-2xl object-cover"
        // Animation subtile pour l'avatar
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />
    </motion.div>

  </section>
);

export default Hero;