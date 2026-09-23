/**
 * Contenu du portfolio — toutes les données affichées sont ici.
 *
 * Pour ajouter une capture d'écran à un projet :
 *   1. dépose l'image dans src/assets/ (ex: gimmopro.png)
 *   2. importe-la ci-dessous : import gimmoproImg from './assets/gimmopro.png';
 *   3. renseigne `image: gimmoproImg` dans le projet correspondant.
 * Sans image, la carte affiche un fond neutre avec le nom du projet.
 */

export const profile = {
  firstName: 'Aloys Russel',
  lastName: 'Tonfo',
  role: 'Développeur Full Stack & AI/ML Engineer',
  location: 'Montréal, QC',
  email: 'rtonfo@gmail.com',
  phone: '+1 418-473-7672',
  phoneHref: 'tel:+14184737672',
  github: 'https://github.com/AloysRussel1',
  linkedin: 'https://www.linkedin.com/in/aloys-russel-tonfo',
  formspree: 'https://formspree.io/f/mrejvywy',
};

export const languages = [
  { name: 'Français', level: 'Courant' },
  { name: 'Anglais', level: 'Courant' },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  current: boolean;
  context?: string;
  points: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Développeur IA — Projet Bira',
    company: 'Heka ST, société technique de Polytechnique Montréal',
    period: 'Sept. 2026 — présent',
    current: true,
    context:
      "Bira est un bras robotique d'assistance à l'alimentation pour les personnes à mobilité réduite, développé par l'équipe Heka ST. J'interviens sur la partie IA.",
    points: [
      'Développement de modèles de Computer Vision pour la détection et le suivi du visage et de la bouche',
      "Optimisation de l'inférence pour un fonctionnement temps réel sur système embarqué",
      'Traitement du langage naturel pour l’interprétation des commandes vocales',
    ],
    tags: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'NLP'],
  },
  {
    role: 'Développeur Full Stack',
    company: 'Freelance',
    period: '2022 — présent',
    current: true,
    points: [
      "Conception, développement et mise en production d'applications web complètes",
      'Backend Django REST, PostgreSQL, Redis, Celery, conteneurisé avec Docker',
      'Frontend React, Next.js, TypeScript et Tailwind CSS',
      'Tests automatisés avec pytest et déploiement continu (CI/CD)',
    ],
    tags: ['Django', 'PostgreSQL', 'React', 'Next.js', 'TypeScript', 'Docker'],
  },
];

export type Project = {
  id: string;
  title: string;
  kicker: string;
  period: string;
  pitch: string;
  highlights: string[];
  stack: string[];
  live?: string;
  github?: string;
  githubExtra?: { label: string; href: string };
  deploy?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: 'gimmopro',
    title: 'GimmoPro',
    kicker: 'Plateforme de gestion locative',
    period: '2022 — présent',
    pitch:
      'Application de gestion locative : biens, locataires et génération de documents PDF. Architecture modulaire, API sécurisée et PWA installable.',
    highlights: [
      'API Django REST avec authentification JWT et génération PDF',
      'PWA Ionic React / TypeScript',
      '31 tests pytest, environnement Docker',
    ],
    stack: ['Django', 'PostgreSQL', 'Docker', 'React', 'TypeScript', 'Ionic'],
    live: 'https://gimmopro.vercel.app',
    github: 'https://github.com/AloysRussel1/gimmopro',
    githubExtra: { label: 'Backend', href: 'https://github.com/AloysRussel1/gimmopro_backend' },
    deploy: 'Railway · Vercel',
  },
  {
    id: 'imperial',
    title: 'Imperial Collection',
    kicker: 'E-commerce de luxe France — Cameroun',
    period: '2023 — présent',
    pitch:
      "Boutique en ligne transcontinentale avec gestion d'inventaire et paiements en temps réel.",
    highlights: [
      'Frontend Next.js 14, API Django REST',
      'Inventaire et paiements en temps réel',
      'Tâches asynchrones avec Celery et Redis',
    ],
    stack: ['Next.js', 'Django REST', 'PostgreSQL', 'Celery', 'Redis'],
    live: 'https://imperial-edit.vercel.app',
    github: 'https://github.com/AloysRussel1/imperial-edit',
    deploy: 'Vercel · Render',
  },
];

export const skillGroups = [
  {
    name: 'Machine Learning & IA',
    items: ['TensorFlow', 'PyTorch', 'scikit-learn', 'OpenCV', 'Computer Vision', 'NLP', 'Optimisation de modèles'],
  },
  {
    name: 'Backend',
    items: ['Python', 'Django REST', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'JWT'],
  },
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Outils, tests & déploiement',
    items: ['Git', 'Linux', 'pytest', 'CI/CD', 'Vercel', 'Railway', 'Render'],
  },
];

export const education = [
  { title: 'Génie informatique', school: 'Polytechnique Montréal', note: 'En cours' },
  { title: 'Licence en Informatique', school: 'Université de Dschang, Cameroun', note: '2024' },
];

export const involvements = [{ title: 'CodeML Hackathon', org: 'Polytechnique Montréal', note: '2026' }];
