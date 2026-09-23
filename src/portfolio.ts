/**
 * Contenu du portfolio : toutes les données affichées sont ici.
 *
 * Captures des projets : remplace le fichier dans src/assets/, ou importe une
 * nouvelle image ci-dessous et renseigne `image` dans le projet correspondant.
 * Sans image, la carte affiche un visuel en dégradé avec le nom du projet.
 */

import gimmoproImg from './assets/gimmopro.jpg';
import imperialImg from './assets/Imperial.jpeg';

/** Texte du hero, en français et en anglais (bouton FR / EN dans le hero). */
export const heroCopy = {
  fr: {
    role: 'Développeur Full Stack & Machine Learning',
    tagline: ['Des applis qui tournent en production.', 'Full Stack + Machine Learning.'],
    intro: [
      "Je développe des applications web complètes avec Django et React, du backend jusqu'au déploiement. Je fais ça en freelance depuis 2022.",
      'En ce moment, je suis aussi développeur IA chez Heka ST, sur le projet Bira. Je travaille sur la vision par ordinateur et les commandes vocales, en Python avec PyTorch et OpenCV.',
    ],
    ctaProjects: 'Voir mes projets',
    ctaContact: 'Me contacter',
  },
  en: {
    role: 'Full Stack & Machine Learning Developer',
    tagline: ['Building production apps.', 'Full Stack + Machine Learning.'],
    intro: [
      "I build complete web apps with Django and React, from the backend all the way to deployment. I've been doing it as a freelancer since 2022.",
      "Right now I'm also an AI developer at Heka ST, working on Bira. I handle computer vision and voice commands, in Python with PyTorch and OpenCV.",
    ],
    ctaProjects: 'See my projects',
    ctaContact: 'Get in touch',
  },
};

/** Chiffres vérifiables affichés dans le bandeau sous le hero. */
export const facts = [
  { value: '4+', label: 'ans de freelance' },
  { value: '2', label: 'applications en production' },
  { value: '31', label: 'tests pytest sur GimmoPro' },
];

export const profile = {
  firstName: 'Aloys Russel',
  lastName: 'Tonfo',
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
    role: 'Développeur IA, projet Bira',
    company: 'Heka ST, société technique de Polytechnique Montréal',
    period: 'Depuis sept. 2026',
    current: true,
    context: "Je m'occupe de la partie IA de Bira, un bras robotique d'assistance développé en équipe.",
    points: [
      'Modèles de Computer Vision qui détectent et suivent le visage et la bouche',
      "Optimisation de l'inférence pour tenir le temps réel sur du matériel embarqué",
      'NLP pour interpréter les commandes vocales',
    ],
    tags: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'NLP'],
  },
  {
    role: 'Développeur Full Stack',
    company: 'Freelance',
    period: 'Depuis 2022',
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
  /** Pour un projet d'équipe : ce que j'y fais, affiché en évidence */
  role?: string;
  pitch: string;
  highlights: string[];
  stack: string[];
  live?: string;
  github?: string;
  githubExtra?: { label: string; href: string };
  deploy?: string;
  image?: string;
};

/** Bira : projet d'équipe Heka ST, affiché en vedette avec un schéma de mon rôle. */
export const featuredProject: Project = {
  id: 'bira',
  title: 'Bira',
  kicker: "Projet d'équipe chez Heka ST",
  period: 'Depuis sept. 2026',
  role: 'Mon rôle : développeur IA',
  pitch:
    "Un bras robotique qui aide les personnes à mobilité réduite à manger. Je travaille sur ce que le bras voit et sur ce qu'il comprend.",
  highlights: [
    'Détection et suivi du visage et de la bouche en temps réel',
    "Optimisation de l'inférence pour tourner sur du matériel embarqué",
    'NLP pour interpréter les commandes vocales',
  ],
  stack: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'NLP'],
};

export const projects: Project[] = [
  {
    id: 'gimmopro',
    title: 'GimmoPro',
    kicker: 'Plateforme de gestion locative',
    period: 'Depuis 2022',
    pitch:
      'Gestion des biens, des locataires et des documents PDF dans une PWA installable. Backend et frontend séparés, déployés chacun de leur côté.',
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
    image: gimmoproImg,
  },
  {
    id: 'imperial',
    title: 'Imperial Collection',
    kicker: 'E-commerce de luxe entre la France et le Cameroun',
    period: 'Depuis 2023',
    pitch:
      'Une boutique de luxe qui vend entre deux continents. Inventaire et paiements suivis en temps réel.',
    highlights: [
      'Frontend Next.js 14, API Django REST',
      'Inventaire et paiements en temps réel',
      'Tâches asynchrones avec Celery et Redis',
    ],
    stack: ['Next.js', 'Django REST', 'PostgreSQL', 'Celery', 'Redis'],
    live: 'https://imperial-edit.vercel.app',
    github: 'https://github.com/AloysRussel1/imperial-edit',
    deploy: 'Vercel · Render',
    image: imperialImg,
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
