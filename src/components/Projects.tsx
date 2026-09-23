import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { Reveal, SectionHeader, TechTag } from './ui';
import { featuredProject, projects, type Project } from '../portfolio';

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="mt-4 space-y-1.5 text-sm text-muted">
    {items.map(h => (
      <li key={h} className="flex gap-2.5">
        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
        {h}
      </li>
    ))}
  </ul>
);

const Stack = ({ items }: { items: string[] }) => (
  <div className="mt-5 flex flex-wrap gap-1.5">
    {items.map(t => (
      <TechTag key={t} name={t} />
    ))}
  </div>
);

/* ---------------------------------------------------------------- */
/* Bira : schéma qui distingue mon travail de celui de l'équipe      */
/* ---------------------------------------------------------------- */

const Node = ({ label, sub, mine }: { label: string; sub?: string; mine?: boolean }) => (
  <div
    className={`rounded-lg px-3 py-2 text-center ${
      mine
        ? 'border border-accent bg-accent/10 shadow-[0_0_24px_-6px_rgb(var(--accent)/0.6)]'
        : 'border border-dashed border-line text-muted'
    }`}
  >
    <p className={`text-xs font-semibold sm:text-sm ${mine ? 'text-fg' : ''}`}>{label}</p>
    {sub && <p className={`text-[11px] ${mine ? 'text-gold' : 'text-muted'}`}>{sub}</p>}
  </div>
);

const Arrow = () => <FiArrowRight className="flex-shrink-0 text-gold/70" aria-hidden />;

const BiraDiagram = () => (
  <figure className="rounded-xl border border-line bg-bg/60 p-4 sm:p-5">
    <div className="grid grid-cols-[1fr_auto_1.3fr_auto_1fr] items-center gap-2 sm:gap-3">
      <Node label="Caméra" />
      <Arrow />
      <Node label="Vision" sub="visage, bouche" mine />
      <Arrow />
      <div className="row-span-2 flex h-full items-center">
        <Node label="Bras robotique" />
      </div>

      <Node label="Micro" />
      <Arrow />
      <Node label="NLP" sub="commandes vocales" mine />
      <Arrow />
    </div>
    <figcaption className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[11px] text-muted">
      <span className="inline-flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-sm border border-accent bg-accent/20" /> Mon travail
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-sm border border-dashed border-line" /> Le reste de l'équipe
      </span>
    </figcaption>
  </figure>
);

const FeaturedCard = ({ project }: { project: Project }) => (
  <article className="card relative overflow-hidden rounded-xl p-6 md:p-8">
    {/* dégradé orange vers or, discret, dans les angles */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'radial-gradient(90% 70% at 100% 0%, rgb(var(--accent) / 0.12), transparent 60%), radial-gradient(60% 50% at 0% 100%, rgb(var(--gold) / 0.06), transparent 60%)',
      }}
    />
    <div className="relative grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-10">
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <p className="text-sm text-muted">{project.kicker}</p>
          <span className="text-xs text-muted">{project.period}</span>
        </div>
        <h3 className="mt-1 text-3xl font-extrabold tracking-tight md:text-4xl">{project.title}</h3>
        {project.role && (
          <p className="mt-3 inline-block rounded-md border border-gold/40 bg-gold/10 px-2.5 py-1 text-sm font-semibold text-gold">
            {project.role}
          </p>
        )}
        <p className="mt-4 leading-relaxed">{project.pitch}</p>
        <Bullets items={project.highlights} />
        <Stack items={project.stack} />
      </div>
      <BiraDiagram />
    </div>
  </article>
);

/* ---------------------------------------------------------------- */
/* Projets perso avec capture                                        */
/* ---------------------------------------------------------------- */

const Media = ({ project }: { project: Project }) => {
  const inner = project.image ? (
    <>
      <img
        src={project.image}
        alt={`Capture d'écran de ${project.title}`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* voile discret au survol, avec un rappel orange */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/10 to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      {project.live && (
        <span className="absolute bottom-3 right-3 inline-flex translate-y-2 items-center gap-1 rounded-md bg-accent px-2.5 py-1 text-xs font-semibold text-bg opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          Voir le site <FiArrowUpRight />
        </span>
      )}
    </>
  ) : (
    <div
      className="grid h-full place-items-center"
      style={{
        background:
          'radial-gradient(120% 90% at 0% 0%, rgb(var(--accent) / 0.28), transparent 55%), radial-gradient(90% 80% at 100% 100%, rgb(var(--gold) / 0.18), transparent 60%)',
      }}
    >
      <span className="font-display text-3xl font-bold tracking-tight text-fg/80">{project.title}</span>
    </div>
  );

  const className = 'relative block aspect-[3/2] overflow-hidden border-b border-line bg-elevated';
  // L'image est aussi un lien vers le site ; le lien texte plus bas reste l'accès principal (clavier, lecteurs d'écran)
  return project.live ? (
    <a href={project.live} target="_blank" rel="noopener noreferrer" className={className} tabIndex={-1} aria-hidden>
      {inner}
    </a>
  ) : (
    <div className={className}>{inner}</div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="card card-hover group flex h-full flex-col overflow-hidden rounded-xl">
    <Media project={project} />

    <div className="flex flex-1 flex-col p-6">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
        <span className="flex-shrink-0 text-xs text-muted">{project.period}</span>
      </div>
      <p className="mt-0.5 text-sm text-muted">{project.kicker}</p>

      <p className="mt-4 leading-relaxed">{project.pitch}</p>
      <Bullets items={project.highlights} />
      <Stack items={project.stack} />

      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-flex items-center gap-1 font-semibold text-accent"
          >
            Voir le site <FiArrowUpRight />
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5 text-muted">
            <FaGithub /> Code
          </a>
        )}
        {project.githubExtra && (
          <a
            href={project.githubExtra.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-flex items-center gap-1.5 text-muted"
          >
            <FaGithub /> {project.githubExtra.label}
          </a>
        )}
        {project.deploy && <span className="ml-auto text-xs text-muted">{project.deploy}</span>}
      </div>
    </div>
  </article>
);

const Projects = () => (
  <section id="projects" className="py-16 md:py-24">
    <div className="container-x">
      <SectionHeader label="Projets" title="Ce que j’ai construit" />
      <Reveal className="mb-5">
        <FeaturedCard project={featuredProject} />
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.05} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
