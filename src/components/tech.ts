import type { IconType } from 'react-icons';
import {
  SiPytorch, SiTensorflow, SiOpencv, SiScikitlearn, SiDjango, SiPostgresql, SiRedis, SiCelery,
  SiDocker, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiGit, SiGithub, SiLinux,
  SiVercel, SiRailway, SiRender, SiPytest, SiPython, SiJsonwebtokens, SiIonic, SiGithubactions,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const techIcons: Record<string, IconType> = {
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  OpenCV: SiOpencv,
  'scikit-learn': SiScikitlearn,
  Django: SiDjango,
  'Django REST': SiDjango,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  Celery: SiCelery,
  Docker: SiDocker,
  React: SiReact,
  'Next.js': SiNextdotjs,
  'Next.js 14': SiNextdotjs,
  TypeScript: SiTypescript,
  'Tailwind CSS': SiTailwindcss,
  Git: SiGit,
  GitHub: SiGithub,
  Linux: SiLinux,
  Vercel: SiVercel,
  Railway: SiRailway,
  Render: SiRender,
  pytest: SiPytest,
  Python: SiPython,
  JWT: SiJsonwebtokens,
  Ionic: SiIonic,
  'CI/CD': SiGithubactions,
  'VS Code': VscVscode,
};

export const accentBg = {
  cyan: 'bg-cyan',
  magenta: 'bg-magenta',
  violet: 'bg-violet',
  lime: 'bg-lime',
} as const;
