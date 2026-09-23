/**
 * Contenu du portfolio — toutes les données affichées sont ici.
 *
 * Pour ajouter une capture d'écran à un projet :
 *   1. dépose l'image dans src/assets/ (ex: gimmopro.png)
 *   2. importe-la ci-dessous : import gimmoproImg from './assets/gimmopro.png';
 *   3. renseigne `image: gimmoproImg` dans le projet correspondant.
 * Sans image, la carte affiche un visuel génératif à la place.
 */

export const profile = {
  firstName: 'Aloys Russel',
  lastName: 'Tonfo',
  role: 'Full Stack & AI/ML Engineer',
  location: 'Montréal, QC',
  email: 'rtonfo@gmail.com',
  phone: '+1 418-473-7672',
  phoneHref: 'tel:+14184737672',
  github: 'https://github.com/AloysRussel1',
  linkedin: 'https://www.linkedin.com/in/aloys-russel-tonfo',
  formspree: 'https://formspree.io/f/mrejvywy',
};

export const stats = [
  { value: 4, suffix: '+', label: 'ans en freelance' },
  { value: 3, suffix: '', label: 'apps en production' },
  { value: 31, suffix: '', label: 'tests pytest au vert' },
  { value: 1, suffix: '', label: 'bras robotique en cours' },
];

export const languages = [
  { name: 'Français', level: 'Courant' },
  { name: 'English', level: 'Fluent' },
  { name: 'Pidgin', level: 'Natif' },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  kicker: string;
  period: string;
  status: 'live' | 'wip';
  pitch: string;
  highlights: string[];
  stack: string[];
  /** Compétences (noms exacts de skillGroups) surlignées quand on filtre la section Stack par projet */
  uses: string[];
  live?: string;
  github?: string;
  githubExtra?: { label: string; href: string };
  deploy?: string;
  image?: string;
  accent: 'cyan' | 'magenta' | 'violet';
};

export const projects: Project[] = [
  {
    id: 'bira',
    index: '01',
    title: 'Bira',
    kicker: 'Robotic Arm AI System · Heka ST',
    period: '2026 — en cours',
    status: 'wip',
    pitch:
      "Un bras robotique qui aide les personnes à mobilité réduite à se nourrir. Il voit le visage, suit la bouche en temps réel et comprend les commandes vocales.",
    highlights: [
      'Détection & tracking visage/bouche temps réel',
      'NLP pour les commandes vocales',
      'Modèles optimisés pour systèmes embarqués',
    ],
    stack: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'NLP'],
    uses: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'Computer Vision', 'NLP', 'Model Optimization'],
    accent: 'magenta',
  },
  {
    id: 'gimmopro',
    index: '02',
    title: 'GimmoPro',
    kicker: 'Plateforme de gestion locative',
    period: '2022 — présent',
    status: 'live',
    pitch:
      'Gestion locative de bout en bout : biens, locataires, quittances PDF. Architecture modulaire, API sécurisée, PWA installable.',
    highlights: [
      'API Django REST + auth JWT + génération PDF',
      'PWA Ionic React / TypeScript',
      '31 tests pytest · Docker',
    ],
    stack: ['Django', 'PostgreSQL', 'Docker', 'React', 'TypeScript', 'Ionic'],
    uses: ['Python', 'Django REST', 'PostgreSQL', 'Docker', 'JWT', 'React', 'TypeScript', 'pytest', 'Railway', 'Vercel', 'CI/CD'],
    live: 'https://gimmopro.vercel.app',
    github: 'https://github.com/AloysRussel1/gimmopro',
    githubExtra: { label: 'backend', href: 'https://github.com/AloysRussel1/gimmopro_backend' },
    deploy: 'Railway + Vercel',
    accent: 'cyan',
  },
  {
    id: 'imperial',
    index: '03',
    title: 'Imperial Collection',
    kicker: 'E-commerce luxe France ↔ Cameroun',
    period: '2023 — présent',
    status: 'live',
    pitch:
      "Boutique de luxe transcontinentale avec gestion d'inventaire et paiements en temps réel, tâches asynchrones et cache.",
    highlights: [
      'Next.js 14 + Django REST',
      'Inventaire & paiements temps réel',
      'Celery + Redis pour les tâches async',
    ],
    stack: ['Next.js 14', 'Django REST', 'PostgreSQL', 'Celery', 'Redis'],
    uses: ['Python', 'Django REST', 'PostgreSQL', 'Celery', 'Redis', 'Next.js', 'Vercel', 'Render'],
    live: 'https://imperial-edit.vercel.app',
    github: 'https://github.com/AloysRussel1/imperial-edit',
    deploy: 'Vercel + Render',
    accent: 'violet',
  },
];

export const experiences = [
  {
    hash: 'b1ra0ai',
    ref: 'HEAD → heka-st',
    role: 'Développeur IA',
    company: 'Heka ST · Polytechnique Montréal',
    period: 'sept. 2026 — présent',
    current: true,
    points: [
      'Modèles de Computer Vision pour la détection visage/bouche du bras Bira',
      "Optimisation de l'inférence temps réel",
      'Traitement des commandes vocales (NLP)',
    ],
    tags: ['PyTorch', 'OpenCV', 'NLP', 'Edge inference'],
  },
  {
    hash: 'f7ee1a2',
    ref: 'freelance',
    role: 'Développeur Full Stack',
    company: 'Freelance · Remote',
    period: '2022 — présent',
    current: true,
    points: [
      'Conception et mise en production d’applications complètes (GimmoPro, Imperial Collection)',
      'Backend Django REST, PostgreSQL, Redis, Celery, Docker',
      'Frontend React, Next.js, TypeScript, Tailwind',
      'Tests pytest et déploiement CI/CD automatisé',
    ],
    tags: ['Django', 'React', 'Next.js', 'Docker', 'CI/CD'],
  },
];

export const skillGroups = [
  {
    id: 'ml',
    name: 'Machine Learning & IA',
    accent: 'magenta',
    items: ['TensorFlow', 'PyTorch', 'scikit-learn', 'OpenCV', 'Computer Vision', 'NLP', 'Model Optimization'],
  },
  {
    id: 'back',
    name: 'Backend',
    accent: 'cyan',
    items: ['Python', 'Django REST', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'JWT'],
  },
  {
    id: 'front',
    name: 'Frontend',
    accent: 'violet',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    id: 'ops',
    name: 'Tools, Deploy & Tests',
    accent: 'lime',
    items: ['Git', 'GitHub', 'Linux', 'VS Code', 'Vercel', 'Railway', 'Render', 'pytest', 'CI/CD'],
  },
] as const;

export const education = [
  {
    school: 'Polytechnique Montréal',
    degree: 'Baccalauréat en Génie informatique',
    period: '2026 — 2030',
    note: '1ʳᵉ année en cours',
    current: true,
  },
  {
    school: 'Université de Dschang, Cameroun',
    degree: 'Licence en Informatique',
    period: '2021 — 2024',
    note: 'Diplômé',
    current: false,
  },
];

export const involvements = [
  { title: 'Développeur IA', org: 'Société technique Heka ST — Polytechnique', year: '2026' },
  { title: 'Participant', org: 'CodeML Hackathon — Polytechnique Montréal', year: '2026' },
];
