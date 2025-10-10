//import React from 'react'; // Déjà fait
import { motion } from 'framer-motion';
// Ajout des icônes pour le contact direct
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone,FaTwitter } from 'react-icons/fa';

const Footer = () => (
  // Changement de couleur de fond et padding pour un look plus élégant
  <footer className="bg-gray-900 text-gray-300 px-6 lg:px-16 py-16 border-t border-gray-700">
    <div className="max-w-6xl mx-auto">
      
      {/* Grille principale du Footer : 1 colonne sur mobile, 4 colonnes sur desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 border-b border-gray-700 pb-10 mb-8">
        
        {/* Colonne 1 : Logo et Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-1 text-center lg:text-left"
        >
          <a href="#hero" className="text-3xl font-extrabold text-orange hover:text-white transition-colors">
            Aloys Russel
          </a>
          <p className="mt-3 text-sm text-gray-400 max-w-xs mx-auto lg:mx-0">
            Développeur Full Stack & Intégrateur IA. Construire l'avenir, une ligne de code à la fois.
          </p>
        </motion.div>

        {/* Colonne 2 : Navigation Rapide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
          <ul className="space-y-3">
            <li><a href="#hero" className="hover:text-orange transition-colors">Accueil</a></li>
            <li><a href="#projects" className="hover:text-orange transition-colors">Projets</a></li>
            <li><a href="#skills" className="hover:text-orange transition-colors">Compétences</a></li>
            <li><a href="#experience" className="hover:text-orange transition-colors">Expérience</a></li>
          </ul>
        </motion.div>

        {/* Colonne 3 : Contact Direct */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="text-orange mr-3 flex-shrink-0" />
              <a href="mailto:rtonfo@gmail.com" className="hover:text-orange transition-colors text-sm">
                rtonfo@gmail.com
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <FaPhone className="text-orange mr-3 flex-shrink-0" />
              <a href="tel:+14184737672" className="hover:text-orange transition-colors text-sm">
                +1 418 473-7672
              </a>
            </li>
            <li><a href="#contact" className="text-orange font-medium mt-2 block hover:underline">Page Contact complète</a></li>
          </ul>
        </motion.div>

        {/* Colonne 4 : Réseaux Sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center md:text-left"
        >
            <h3 className="text-lg font-semibold text-white mb-4">Réseaux Sociaux</h3>
            <div className="flex justify-center md:justify-start space-x-6 text-2xl text-gray-400">
                <a href="https://github.com/AloysRussel1" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-transform transform hover:scale-110">
                    <FaGithub title="GitHub" />
                </a>
                <a href="https://linkedin.com/in/AloysRussel1" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-transform transform hover:scale-110">
                    <FaLinkedin title="LinkedIn" />
                </a>
                <a href="https://twitter.com/AloysRussel1" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-transform transform hover:scale-110">
                    {/* J'ai conservé Twitter/X */}
                    <FaTwitter title="Twitter/X" /> 
                </a>
            </div>
        </motion.div>

      </div>

      {/* Copyright et Mentions */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-center text-gray-500 text-sm"
      >
        <p>Conçu et développé par Aloys Russel | © {new Date().getFullYear()} Tous droits réservés.</p>
      </motion.div>

    </div>
  </footer>
);

export default Footer;