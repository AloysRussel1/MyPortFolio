import { motion } from 'framer-motion';
import { FaCode, FaUtensils } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    type: 'tech',
    icon: <FaCode className="w-5 h-5" />,
    role: 'Développeur Full Stack',
    company: 'Projets Freelance',
    location: 'Remote',
    period: '2022 – Présent',
    bullets: [
      "Développement complet d'applications web avec React (frontend) et Python Django/Flask (backend), incluant API REST, authentification JWT et gestion des rôles.",
      "Intégration de modèles d'apprentissage automatique (TensorFlow, Scikit-learn) dans des services web Python pour l'automatisation et la prédiction.",
      'Gestion du cycle de vie complet : conception, développement, tests unitaires, déploiement (Docker/AWS) et maintenance.',
    ],
    tags: ['React', 'Django', 'Flask', 'Python', 'REST API', 'TensorFlow'],
  },
  {
    id: 2,
    type: 'soft',
    icon: <FaUtensils className="w-5 h-5" />,
    role: 'Équipier polyvalent',
    company: 'McDonald\'s',
    location: 'Sainte-Agathe-des-Monts, QC',
    period: '2025 – Présent',
    bullets: [
      'Service client rapide et courtois dans un environnement bilingue (FR/EN) à fort volume, gérant la caisse et la préparation des commandes.',
      "Respect strict des standards d'hygiène alimentaire et maintien de la propreté des espaces de travail.",
      'Collaboration en équipe multiculturelle avec adaptabilité et communication efficace en période de pointe.',
    ],
    tags: ["Service client", "Bilingue FR/EN", "Travail d'équipe", "Gestion pression"],
  },
  
];

const Experience = () => (
  <section id="experience" className="bg-[#0a0a0f] py-28 px-6 lg:px-12">
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
          — Parcours
        </p>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          Expérience professionnelle
        </h2>
        <p className="text-white/50 max-w-xl text-base leading-relaxed">
          Une combinaison d'expertise technique en développement et d'expériences terrain
          qui forgent la rigueur, l'adaptabilité et l'esprit d'équipe.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[19px] lg:left-[23px] top-0 bottom-0 w-px bg-white/8" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-14 lg:pl-16"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center z-10 border ${
                  exp.type === 'tech'
                    ? 'bg-[#F97316]/15 border-[#F97316]/40 text-[#F97316]'
                    : 'bg-white/5 border-white/15 text-white/50'
                }`}
              >
                {exp.icon}
              </div>

              {/* Card */}
              <div
                className={`bg-[#0f0f18] rounded-xl border p-7 hover:border-white/12 transition-all duration-500 ${
                  exp.type === 'tech' ? 'border-[#F97316]/20' : 'border-white/6'
                }`}
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <p className="text-[#F97316] text-sm font-medium mt-0.5">
                      {exp.company}
                    </p>
                    <p className="text-white/40 text-xs mt-0.5 font-mono">{exp.location}</p>
                  </div>
                  <span className="font-mono text-xs text-white/40 bg-white/5 border border-white/8 rounded px-3 py-1.5 flex-shrink-0">
                    {exp.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="flex flex-col gap-2.5 mb-5">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm text-white/60 leading-relaxed">
                      <span className="text-[#F97316]/60 mt-1 flex-shrink-0">›</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 text-white/40 border border-white/8"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
