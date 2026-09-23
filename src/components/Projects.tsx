import { FiArrowUpRight } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { Reveal, SectionHeader, TechTag } from './ui';
import { projects, type Project } from '../portfolio';

const Media = ({ project }: { project: Project }) => (
  <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-elevated">
    {project.image ? (
      <img
        src={project.image}
        alt={`Capture d'écran de ${project.title}`}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
      />
    ) : (
      <div className="grid h-full place-items-center">
        <span className="text-2xl font-semibold tracking-tight text-muted/40">{project.title}</span>
      </div>
    )}
  </div>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="card card-hover group flex h-full flex-col overflow-hidden rounded-xl">
    <Media project={project} />

    <div className="flex flex-1 flex-col p-6">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
        <span className="flex-shrink-0 text-xs text-muted">{project.period}</span>
      </div>
      <p className="mt-0.5 text-sm text-muted">{project.kicker}</p>

      <p className="mt-4 leading-relaxed">{project.pitch}</p>

      <ul className="mt-4 space-y-1.5 text-sm text-muted">
        {project.highlights.map(h => (
          <li key={h} className="flex gap-2.5">
            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map(t => (
          <TechTag key={t} name={t} />
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-flex items-center gap-1 font-medium text-accent"
          >
            Voir le site <FiArrowUpRight />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-flex items-center gap-1.5 text-muted"
          >
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
      <SectionHeader label="Projets" title="Applications en production" />
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
