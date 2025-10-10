//import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => (
  <section id="contact" className="min-h-screen px-8 py-24 bg-darkbg text-white">
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl font-bold text-orange mb-12 text-center"
    >
      Me contacter
    </motion.h2>

    <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
      
      {/* Texte / Intro */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 flex flex-col justify-center"
      >
        <p className="text-gray-300 mb-6">
          Vous avez un projet ou une idée à partager? N'hésitez pas à me contacter via le formulaire ci-contre ou directement sur mes réseaux sociaux.
        </p>
        <div className="flex space-x-6 text-2xl text-gray-300">
          <a href="https://github.com/AloysRussel1" target="_blank" className="hover:text-orange transition"><FaGithub /></a>
          <a href="https://linkedin.com/in/AloysRussel1" target="_blank" className="hover:text-orange transition"><FaLinkedin /></a>
          <a href="https://twitter.com/AloysRussel1" target="_blank" className="hover:text-orange transition"><FaTwitter /></a>
        </div>
      </motion.div>

      {/* Formulaire */}
      <motion.form
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 flex flex-col space-y-4"
      >
        <input
          type="text"
          placeholder="Nom"
          className="p-4 rounded-md bg-gray-800 border border-gray-700 focus:border-orange focus:ring-2 focus:ring-orange outline-none transition"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-4 rounded-md bg-gray-800 border border-gray-700 focus:border-orange focus:ring-2 focus:ring-orange outline-none transition"
        />
        <input
          type="text"
          placeholder="Sujet"
          className="p-4 rounded-md bg-gray-800 border border-gray-700 focus:border-orange focus:ring-2 focus:ring-orange outline-none transition"
        />
        <textarea
          placeholder="Message"
          className="p-4 rounded-md bg-gray-800 border border-gray-700 focus:border-orange focus:ring-2 focus:ring-orange outline-none transition h-32 resize-none"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-orange rounded-full text-darkbg font-bold hover:bg-lightOrange transition transform hover:scale-105"
        >
          Envoyer
        </button>
      </motion.form>

    </div>
  </section>
);

export default Contact;
