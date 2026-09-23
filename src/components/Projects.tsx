import type { MouseEvent } from 'react';
import { FiArrowUpRight, FiCheck } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { Em, Reveal, SectionHeader, TechTag } from './ui';
import { projects, type Project } from '../portfolio';

const accentRgb = { cyan: '--cyan', magenta: '--magenta', violet: '--violet' } as const;

/** Met à jour la position du halo lumineux qui suit la souris sur la carte. */
const trackSpotlight = (e: MouseEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
};

/** Visuel génératif affiché tant qu'aucune capture n'est fournie. */
const Placeholder = ({ project }: { project: Project }) => {
  const c = `var(${accentRgb[project.accent]})`;
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background: `radial-gradient(120% 90% at 20% 10%, rgb(${c} / 0.35), transparent 55%), radial-gradient(90% 80% at 90% 100%, rgb(var(--violet) / 0.3), transparent 60%), rgb(var(--elevated))`,
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(rgb(var(--fg)) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />
      {project.status === 'wip' ? (
        // cible de tracking pour Bira
        <div className="absolute inset-0 grid place-items-center">
          {[160, 110, 60].map(s => (
            <span
              key={s}
              className="absolute rounded-full border border-magenta/40"
              style={{ width: s, height: s }}
            />
          ))}
          <span className="absolute h-px w-56 bg-magenta/40" />
          <span className="absolute h-56 w-px bg-magenta/40" />
          <span className="absolute h-3 w-3 animate-ping rounded-full bg-magenta" />
        </div>
      ) : (
        <span className="absolute bottom-4 left-5 font-serif text-5xl italic text-fg/20 md:text-6xl">
          {project.title}
        </span>
      )}
    </div>
  );
};

const Media = ({ project }: { project: Project }) => {
  const isVision = project.status === 'wip';
  const host = project.live?.replace('https://', '');
  return (
    <div className="overflow-hidden rounded-2xl border border-line/10 bg-bg">
      {/* barre de fenêtre : navigateur pour les sites, caméra pour Bira */}
      <div className="flex items-center gap-3 border-b border-line/10 px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-line/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-line/15" />
        </div>
        <span className="flex-1 truncate rounded-md bg-elevated px-3 py-1 text-center font-mono text-[10px] text-muted">
          {isVision ? '● rec — bira/arm_cam_0' : host}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={`Capture d'écran de ${project.title}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <Placeholder project={project} />
        )}
      </div>
    </div>
  );
};

const Status = ({ status }: { status: Project['status'] }) =>
  status === 'live' ? (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-lime/30 bg-lime/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-lime">
      <span className="h-1.5 w-1.5 rounded-full bg-lime" /> Live
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-magenta/30 bg-magenta/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-magenta">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-magenta" /> En cours
    </span>
  );

const ProjectCard = ({ project, featured }: { project: Project; featured?: boolean }) => (
  <article
    onMouseMove={trackSpotlight}
    className="ring-gradient group relative h-full overflow-hidden rounded-3xl border border-line/10 bg-surface p-3 md:p-4"
  >
    {/* spotlight */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{
        background: `radial-gradient(420px circle at var(--mx) var(--my), rgb(var(${accentRgb[project.accent]}) / 0.12), transparent 70%)`,
      }}
    />

    <div className={`relative grid gap-6 ${featured ? 'lg:grid-cols-2 lg:items-center lg:gap-10' : ''}`}>
      <div className={featured ? 'lg:order-2' : ''}>
        <Media project={project} />
      </div>

      <div className="flex flex-col px-2 pb-3 md:px-3">
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs text-muted">{project.index}</span>
          <span className="h-px w-6 bg-line/20" />
          <Status status={project.status} />
          <span className="ml-auto font-mono text-[11px] text-muted">{project.period}</span>
        </div>

        <p className="font-mono text-xs text-muted">{project.kicker}</p>
        <h3 className={`mt-1 font-semibold tracking-tight ${featured ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>
          {project.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.pitch}</p>

        <ul className="mt-5 space-y-2">
          {project.highlights.map(h => (
            <li key={h} className="flex items-start gap-2.5 text-sm">
              <FiCheck className="mt-0.5 flex-shrink-0 text-cyan" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map(t => (
            <TechTag key={t} name={t} />
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line/10 pt-5 text-sm">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="ouvrir"
              className="group/link inline-flex items-center gap-1.5 rounded-full bg-fg px-4 py-2 font-medium text-bg transition-transform hover:scale-[1.03]"
            >
              Voir le site
              <FiArrowUpRight className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-1.5 text-muted hover:text-fg"
            >
              <FaGithub /> Code
            </a>
          )}
          {project.githubExtra && (
            <a
              href={project.githubExtra.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-1.5 text-muted hover:text-fg"
            >
              <FaGithub /> {project.githubExtra.label}
            </a>
          )}
          {project.deploy && <span className="font-mono text-[11px] text-muted">▲ {project.deploy}</span>}
          {!project.live && !project.github && (
            <span className="font-mono text-[11px] text-muted">Code privé · démo sur demande</span>
          )}
        </div>
      </div>
    </div>
  </article>
);

const Projects = () => {
  const [featured, ...rest] = projects;
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          index="02"
          label="projets"
          title={
            <>
              Du robot à la boutique, <Em>en production</Em>.
            </>
          }
          aside="Trois projets qui couvrent tout le spectre : vision par ordinateur embarquée, SaaS métier et e-commerce transcontinental."
        />

        <Reveal className="mb-4">
          <ProjectCard project={featured} featured />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
