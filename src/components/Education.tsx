//import React from 'react'; // Déjà fait
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBrain } from 'react-icons/fa'; // Nouvelles icônes

const educationData = [
  {
    school: 'Localhost Academy',
    degree: 'Programme en Intelligence Artificielle et Analyse de Données',
    year: '2025',
    icon: <FaBrain className="text-darkbg w-4 h-4" />, // Icône IA pour se démarquer
    isIA: true,
  },
  {
    school: 'Université de Dschang',
    degree: 'Baccalauréat en Informatique',
    year: '2024',
    details: '(Évaluation comparative des études effectuées hors Québec)', // Pour le tooltip/détail
    icon: <FaGraduationCap className="text-darkbg w-4 h-4" />,
    isIA: false,
  },
];

const Education = () => (
  <section id="education" className="bg-darkbg text-white py-24 px-6 lg:px-16">
    <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-orange mb-4 text-center">Parcours Académique</h2>
        <p className="text-lg text-gray-400 mb-16 text-center max-w-2xl mx-auto">
            Une fondation solide en Informatique, complétée par une expertise ciblée en Intelligence Artificielle et Analyse de Données.
        </p>

        <div className="relative">
            {/* Ligne de la Timeline (Cachée sur mobile, visible sur desktop) */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>

            {/* Ligne de la Timeline (Alignée à gauche sur mobile) */}
            <div className="lg:hidden absolute left-3 h-full w-0.5 bg-gray-700"></div>

            {educationData.map((edu, index) => {
                const isLeft = index % 2 === 0;

                return (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    // Structure pour l'alternance desktop et l'alignement à gauche mobile
                    className={`relative flex mb-12 items-start lg:items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                    {/* Le Cercle de Marqueur (Positionnement Absolu pour l'alignement) */}
                    <div className={`absolute lg:relative flex-shrink-0 z-10 
                        ${isLeft ? 'left-0 lg:left-auto lg:order-2' : 'left-0 lg:left-auto lg:order-2'} 
                        lg:transform lg:translate-x-0 ml-0 lg:ml-0 
                        w-6 h-6 rounded-full border-4 border-darkbg flex items-center justify-center 
                        ${edu.isIA ? 'bg-orange shadow-orange-glow' : 'bg-gray-500'}`} // Style pour l'IA
                        style={isLeft ? { left: '2px' } : { left: '2px' }} // Aligné à 2px à gauche sur mobile
                    >
                        {edu.icon}
                    </div>

                    {/* Contenu de la Formation */}
                    <div className={`lg:w-1/2 p-6 rounded-xl bg-gray-800 transition-all duration-300 shadow-xl ml-10 lg:ml-0 
                        ${isLeft ? 'lg:order-1 lg:text-right lg:pr-12' : 'lg:order-3 lg:text-left lg:pl-12'}`}
                        // Le hover est plus subtil ici
                        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 15px rgba(255,165,0,0.5)'}
                        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 0 transparent'}
                    >
                        <p className={`text-sm font-semibold mb-1 ${edu.isIA ? 'text-orange' : 'text-gray-400'}`}>
                            {edu.school} - {edu.year}
                        </p>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                        {edu.details && (
                             <p className="text-gray-500 text-sm italic mt-1">{edu.details}</p>
                        )}
                    </div>
                    
                    {/* Espace vide pour l'alternance desktop */}
                    <div className="hidden lg:block lg:w-1/2"></div>
                </motion.div>
                );
            })}
        </div>
    </div>
  </section>
);

export default Education;