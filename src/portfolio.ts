/**
 * Contenu du portfolio : toutes les données affichées sont ici.
 *
 * Pour ajouter une capture d'écran à un projet :
 *   1. dépose l'image dans src/assets/ (ex: gimmopro.png)
 *   2. importe-la ci-dessous : import gimmoproImg from './assets/gimmopro.png';
 *   3. renseigne `image: gimmoproImg` dans le projet correspondant.
 * Sans image, la carte affiche un visuel en dégradé avec le nom du projet.
 */

/** Chiffres vérifiables affichés dans le bandeau sous le hero. */
export const facts = [
  { value: '4+', label: 'ans de freelance' },
  { value: '2', label: 'applications en production' },
  { value: '31', label: 'tests pytest sur GimmoPro' },
];

export const profile = {
  firstName: 'Aloys Russel',
  lastName: 'Tonfo',
  role: 'Développeur Full Stack & Machine Learning',
  tagline: 'Building production apps. Full Stack + Machine Learning.',
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
    context:
      "Bira est un bras robotique qui aide les personnes à mobilité réduite à manger. C'est un projet d'équipe ; je m'occupe de la partie IA.",
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
