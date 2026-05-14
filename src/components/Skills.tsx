import { motion } from 'framer-motion';

const skillCategories = [
  {
    label: '01',
    name: 'Frontend',
    description: 'Interfaces réactives et expériences utilisateur modernes',
    skills: [
      { name: 'React', level: 'Avancé' },
      { name: 'TypeScript', level: 'Intermédiaire' },
      { name: 'JavaScript ES6+', level: 'Avancé' },
      { name: 'HTML5 / CSS3', level: 'Avancé' },
      { name: 'Tailwind CSS', level: 'Avancé' },
      { name: 'Framer Motion', level: 'Intermédiaire' },
    ],
    accent: '#F97316',
  },
  {
    label: '02',
    name: 'Backend & API',
    description: 'Serveurs robustes et APIs RESTful sécurisées',
    skills: [
      { name: 'Python', level: 'Avancé' },
      { name: 'Django', level: 'Avancé' },
      { name: 'Flask', level: 'Intermédiaire' },
      { name: 'REST API', level: 'Avancé' },
      { name: 'JWT / Auth', level: 'Intermédiaire' },
      { name: 'Tests Unitaires', level: 'Intermédiaire' },
    ],
    accent: '#22d3ee',
  },
  {
    label: '03',
    name: 'Data & IA',
    description: 'Modèles prédictifs et analyse de données',
    skills: [
      { name: 'TensorFlow', level: 'Intermédiaire' },
      { name: 'Scikit-learn', level: 'Intermédiaire' },
      { name: 'Pandas', level: 'Avancé' },
      { name: 'NumPy', level: 'Avancé' },
      { name: 'Matplotlib', level: 'Intermédiaire' },
      { name: 'Analyse de données', level: 'Avancé' },
    ],
    accent: '#a78bfa',
  },
  {
    label: '04',
    name: 'DevOps & BDD',
    description: 'Infrastructure, bases de données et collaboration',
    skills: [
      { name: 'PostgreSQL', level: 'Intermédiaire' },
      { name: 'MySQL', level: 'Intermédiaire' },
      { name: 'Git / GitHub', level: 'Avancé' },
      { name: 'Docker', level: 'Notions' },
      { name: 'AWS', level: 'Notions' },
      { name: 'Agile / Scrum', level: 'Intermédiaire' },
    ],
    accent: '#34d399',
  },
];

const levelColor: Record<string, string> = {
  Avancé: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/25',
  Intermédiaire: 'text-amber-400 bg-amber-400/10 border-amber-400/25',
  Notions: 'text-white/40 bg-white/5 border-white/10',
};

const Skills = () => (
  <section id="skills" className="bg-[#0d0d14] py-28 px-6 lg:px-12">
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
          — Stack technique
        </p>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          Compétences
        </h2>
        <p className="text-white/50 max-w-xl text-base leading-relaxed">
          Maîtrise du cycle complet d'une application web, du pixel à la base de données,
          avec une couche IA sur les projets data.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((cat, index) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#0f0f18] border border-white/6 rounded-xl p-7 hover:border-white/12 transition-all duration-500 group"
          >
            {/* Card header */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="font-mono text-white/20 text-xs tracking-widest mb-1">
                  {cat.label}
                </p>
                <h3 className="text-xl font-bold text-white group-hover:text-[#F97316] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-white/40 text-xs mt-1">{cat.description}</p>
              </div>
              <span
                className="w-8 h-8 rounded-full flex-shrink-0 mt-1"
                style={{ backgroundColor: cat.accent + '20', border: `1px solid ${cat.accent}40` }}
              >
                <span
                  className="block w-2 h-2 rounded-full m-auto mt-2.5"
                  style={{ backgroundColor: cat.accent }}
                />
              </span>
            </div>

            {/* Skills list */}
            <div className="flex flex-col gap-2.5">
              {cat.skills.map(skill => (
                <div key={skill.name} className="flex items-center justify-between">
                  <span className="text-sm text-white/70 font-medium">{skill.name}</span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${levelColor[skill.level]}`}
                  >
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom extras */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 p-6 bg-[#0f0f18] border border-white/6 rounded-xl flex flex-wrap gap-3 items-center"
      >
        <span className="text-white/40 text-xs font-mono uppercase tracking-widest mr-2">
          Aussi:
        </span>
        {['Bilingue FR/EN', 'Travail en équipe', 'Agile', 'Communication client', 'Résolution de problèmes'].map(soft => (
          <span
            key={soft}
            className="px-3 py-1 text-xs text-white/60 bg-white/5 border border-white/8 rounded-full"
          >
            {soft}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
