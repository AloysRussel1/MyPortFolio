//import React from 'react'; // Déjà fait
import { motion } from 'framer-motion';
// Nouvelles icônes pour les coordonnées
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt,FaTwitter } from 'react-icons/fa'; 

const Contact = () => (
  // Padding ajusté pour un meilleur équilibre visuel
  <section id="contact" className="px-6 lg:px-16 py-24 bg-gray-900 text-white"> 
    <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-orange mb-4 text-center">Entrons en Contact</h2>
        <p className="text-lg text-gray-400 mb-16 text-center max-w-2xl mx-auto">
            Vous avez un projet innovant, des opportunités Full Stack ou IA, ou simplement envie de discuter ? Mon inbox est ouvert !
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Partie gauche - Informations Directes */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 flex flex-col justify-start space-y-8 p-6 bg-gray-800 rounded-xl shadow-xl border border-gray-700"
            >
                {/* Email */}
                <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-orange text-3xl flex-shrink-0" />
                    <div>
                        <h3 className="text-lg font-semibold text-white">Email Professionnel</h3>
                        <a href="mailto:rtonfo@gmail.com" className="text-gray-300 hover:text-orange transition">
                            rtonfo@gmail.com
                        </a>
                    </div>
                </div>

                {/* Téléphone */}
                <div className="flex items-center space-x-4">
                    <FaPhone className="text-orange text-3xl flex-shrink-0" />
                    <div>
                        <h3 className="text-lg font-semibold text-white">Téléphone</h3>
                        <a href="tel:+14184737672" className="text-gray-300 hover:text-orange transition">
                            +1 418 473-7672
                        </a>
                    </div>
                </div>

                {/* Localisation */}
                <div className="flex items-center space-x-4">
                    <FaMapMarkerAlt className="text-orange text-3xl flex-shrink-0" />
                    <div>
                        <h3 className="text-lg font-semibold text-white">Localisation</h3>
                        <p className="text-gray-300">Sainte-Agathe-des-Monts, Québec, Canada</p>
                    </div>
                </div>
                
                {/* Réseaux sociaux */}
                <div className="pt-4 border-t border-gray-700">
                    <h3 className="text-xl font-semibold text-white mb-4">Connectez-vous</h3>
                    <div className="flex space-x-6 text-3xl text-gray-400">
                      <a href="https://github.com/AloysRussel1" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-transform transform hover:scale-110">
                        <FaGithub title="GitHub" />
                      </a>
                      <a href="https://linkedin.com/in/AloysRussel1" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-transform transform hover:scale-110">
                        <FaLinkedin title="LinkedIn" />
                      </a>
                      {/* J'ai conservé Twitter/X mais vous pouvez le retirer si vous ne l'utilisez pas activement */}
                      <a href="https://twitter.com/AloysRussel1" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-transform transform hover:scale-110">
                        <FaTwitter title="Twitter/X" />
                      </a>
                    </div>
                </div>

            </motion.div>

            {/* Partie droite - Formulaire de Contact */}
            <motion.form
                // IMPORTANT: Ajoutez l'attribut action ou onSubmit pour que le formulaire soit fonctionnel
                name="contact-form" // Nécessaire pour certains services de formulaires (ex: Netlify, Formspree)
                method="POST" 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 flex flex-col space-y-6 p-8 bg-gray-800 rounded-xl shadow-xl border border-gray-700"
            >
                <input
                    type="text"
                    placeholder="Votre Nom Complet *"
                    required
                    className="p-4 rounded-lg bg-gray-700 border border-gray-600 focus:border-orange focus:ring-2 focus:ring-orange/50 outline-none transition placeholder-gray-400"
                />
                <input
                    type="email"
                    placeholder="Votre Email *"
                    required
                    className="p-4 rounded-lg bg-gray-700 border border-gray-600 focus:border-orange focus:ring-2 focus:ring-orange/50 outline-none transition placeholder-gray-400"
                />
                <textarea
                    placeholder="Comment puis-je vous aider ? (Message) *"
                    required
                    className="p-4 rounded-lg bg-gray-700 border border-gray-600 focus:border-orange focus:ring-2 focus:ring-orange/50 outline-none transition h-40 resize-none placeholder-gray-400"
                />
                
                <button
                    type="submit"
                    className="px-6 py-4 mt-2 bg-orange rounded-lg text-darkbg font-extrabold text-lg tracking-wider shadow-lg hover:bg-lightOrange transition transform hover:scale-[1.01]"
                >
                    Envoyer le Message
                </button>
            </motion.form>

        </div>
    </div>
  </section>
);

export default Contact;