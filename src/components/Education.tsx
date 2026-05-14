import { motion } from 'framer-motion';
import { FaGraduationCap, FaBrain } from 'react-icons/fa';

const education = [
  {
    icon: <FaGraduationCap className="w-5 h-5" />,
    school: 'Polytechnique Montréal',
    degree: 'Baccalauréat en Génie informatique (B. Ing.)',
    period: '2024 – En cours',
    detail: 'Programme de référence en ingénierie logicielle et systèmes. Cours avancés en algorithmique, architecture logicielle, bases de données et développement web.',
    current: true,
  },
  {
    icon: <FaBrain className="w-5 h-5" />,
    school: 'Localhost Academy',
    degree: 'Programme en Intelligence Artificielle & Analyse de Données',
    period: '2025',
    detail: 'Formation intensive axée sur le machine learning, deep learning (TensorFlow, Keras), la science des données (Pandas, NumPy) et la visualisation.',
    current: false,
  },
  {
    icon: <FaGraduationCap className="w-5 h-5" />,
    school: 'Université de Dschang',
    degree: 'Licence en Informatique',
    period: '2021 – 2024',
    detail: 'Fondements solides en programmation, réseaux, bases de données et développement logiciel. Évaluation comparative des études effectuées hors Québec.',
    current: false,
  },
];

const Education = () => (
  <section id="education" className="bg-[#0d0d14] py-28 px-6 lg:px-12">
    <div className="max-w-7xl mx-auto">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="font-mono text-[#F97316] text-xs tracking-widest uppercase mb-3">
          — Académique
        </p>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          Formation
        </h2>
        <p className="text-white/50 max-w-xl text-base leading-relaxed">
          Parcours académique ancré dans l'ingénierie logicielle, complété par
          une spécialisation ciblée en intelligence artificielle.
        </p>
      </motion.div>

      <div className="flex flex-col gap-6 max-w-3xl">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className={`relative flex gap-6 bg-[#0f0f18] rounded-xl p-7 border transition-all duration-500 hover:border-white/12 ${
              edu.current
                ? 'border-[#F97316]/30'
                : 'border-white/6'
            }`}
          >
            {/* Current badge */}
            {edu.current && (
              <div className="absolute top-4 right-4">
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/25 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  En cours
                </span>
              </div>
            )}

            {/* Icon */}
            <div
              className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center ${
                edu.current
                  ? 'bg-[#F97316]/15 border border-[#F97316]/40 text-[#F97316]'
                  : 'bg-white/5 border border-white/10 text-white/50'
              }`}
            >
              {edu.icon}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start gap-x-4 gap-y-1 mb-2">
                <h3 className="text-base font-bold text-white">{edu.school}</h3>
                <span className="font-mono text-xs text-white/40 mt-0.5">{edu.period}</span>
              </div>
              <p className="text-[#F97316]/80 text-sm font-medium mb-2">{edu.degree}</p>
              <p className="text-white/40 text-sm leading-relaxed">{edu.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
