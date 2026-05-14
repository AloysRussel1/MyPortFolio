import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectImg1 from '../assets/projet1.png';
import projectImg2 from '../assets/projet2.png';
import projectImg4 from '../assets/ai_school.jpg';
import projectImg5 from '../assets/ai_school.jpg';

const projects = [
  {
    id: 1,
    category: 'Full Stack · Temps Réel',
    title: 'Plateforme de gestion collaborative',
    description:
      'Application web complète de gestion de tâches avec mises à jour en temps réel via WebSockets, authentification sécurisée JWT et gestion des rôles utilisateurs. Architecture découplée React / Django REST.',
    image: projectImg1,
    github: 'https://github.com/AloysRussel1/project1',
    live: '#',
    stack: ['React', 'Django', 'PostgreSQL', 'REST API', 'WebSockets', 'JWT'],
    featured: true,
  },
  {
    id: 2,
    category: 'Intelligence Artificielle · Python',
    title: 'Prédiction des prix agricoles',
    description:
      "Service web de prédiction de l'évolution des prix des denrées alimentaires. Modèle supervisé (Scikit-learn / TensorFlow) exposé via une API Flask, avec tableau de bord de visualisation Pandas.",
    image: projectImg2,
    github: 'https://github.com/AloysRussel1/project2',
    live: '#',
    stack: ['Flask', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Python'],
    featured: true,
  },
  {
    id: 3,
    category: 'SaaS · Backend',
    title: "Système de gestion d'établissement",
    description:
      'Plateforme SaaS pour la gestion des emplois du temps, membres et événements. Architecture modulaire multi-clients avec Django, MySQL et Bootstrap.',
    image: projectImg4,
    github: 'https://github.com/AloysRussel1/project4',
    live: '#',
    stack: ['Django', 'MySQL', 'Bootstrap', 'Python'],
    featured: false,
  },
  {
    id: 4,
    category: 'Frontend · UX/UI',
    title: 'Dashboard admin immobilier',
    description:
      "Tableau de bord d'administration pour agents immobiliers : gestion des biens, statistiques analytiques et administration des comptes. Interface React entièrement responsive.",
    image: projectImg5,
    github: 'https://github.com/AloysRussel1/project5',
    live: '#',
    stack: ['React', 'Axios', 'Tailwind CSS', 'REST API'],
    featured: false,
  },
];

const Projects = () => (
  <section id="projects" className="bg-[#0a0a0f] py-28 px-6 lg:px-12">
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
          — Réalisations
        </p>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          Mes projets
        </h2>
        <p className="text-white/50 max-w-xl text-base leading-relaxed">
          Des applications concrètes alliant développement Full Stack et intégration IA,
          conçues pour résoudre de vrais problèmes.
        </p>
      </motion.div>

      {/* Featured projects — large */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {projects.filter(p => p.featured).map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group relative bg-[#0f0f18] border border-white/6 rounded-xl overflow-hidden hover:border-[#F97316]/40 transition-all duration-500"
          >
            {/* Image */}
            <div className="overflow-hidden h-56">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.03] transition-all duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-7">
              <p className="font-mono text-[#F97316] text-[11px] tracking-widest uppercase mb-2">
                {project.category}
              </p>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F97316] transition-colors">
                {project.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map(tech => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[11px] font-mono text-[#F97316]/80 bg-[#F97316]/8 border border-[#F97316]/20 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
                >
                  <FaGithub size={15} /> Code source
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 text-sm hover:text-[#F97316] transition-colors"
                >
                  <FaExternalLinkAlt size={13} /> Démo live
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Other projects — compact */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.filter(p => !p.featured).map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-[#0f0f18] border border-white/6 rounded-xl p-6 hover:border-[#F97316]/30 transition-all duration-500"
          >
            <p className="font-mono text-[#F97316]/70 text-[11px] tracking-widest uppercase mb-2">
              {project.category}
            </p>
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#F97316] transition-colors">
              {project.title}
            </h3>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map(tech => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] font-mono text-[#F97316]/70 bg-[#F97316]/6 border border-[#F97316]/15 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/50 text-xs hover:text-white transition-colors"
              >
                <FaGithub size={13} /> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/50 text-xs hover:text-[#F97316] transition-colors"
              >
                <FaExternalLinkAlt size={11} /> Live
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
