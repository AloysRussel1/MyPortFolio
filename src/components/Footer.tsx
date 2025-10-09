import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-darkbg text-gray-300 px-8 py-12 mt-24 border-t border-gray-700">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
      
      {/* Nom / Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl font-bold text-orange"
      >
        Aloys Russel
      </motion.div>

      {/* Navigation rapide */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="flex flex-wrap justify-center gap-6 text-gray-400"
      >
        <a href="#hero" className="hover:text-orange transition">Accueil</a>
        <a href="#skills" className="hover:text-orange transition">Compétences</a>
        <a href="#education" className="hover:text-orange transition">Éducation</a>
        <a href="#projects" className="hover:text-orange transition">Projets</a>
        <a href="#blog" className="hover:text-orange transition">Blog</a>
        <a href="#contact" className="hover:text-orange transition">Contact</a>
      </motion.div>

      {/* Réseaux sociaux */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="flex space-x-6 text-2xl"
      >
        <a href="https://github.com/AloysRussel1" target="_blank" className="hover:text-orange transition"><FaGithub /></a>
        <a href="https://linkedin.com/in/AloysRussel1" target="_blank" className="hover:text-orange transition"><FaLinkedin /></a>
        <a href="https://twitter.com/AloysRussel1" target="_blank" className="hover:text-orange transition"><FaTwitter /></a>
      </motion.div>

    </div>

    {/* Copyright */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 1 }}
      className="text-center text-gray-500 mt-8 text-sm"
    >
      &copy; {new Date().getFullYear()} Aloys Russel. Tous droits réservés.
    </motion.div>
  </footer>
);

export default Footer;
