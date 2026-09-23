import { Reveal, SectionHeader, TechTag } from './ui';
import { skillGroups } from '../portfolio';

const Skills = () => (
  <section id="skills" className="py-16 md:py-24">
    <div className="container-x">
      <SectionHeader label="Compétences" title="Mes outils au quotidien" />

      <Reveal>
        <dl className="divide-y divide-line border-y border-line">
          {skillGroups.map(g => (
            <div key={g.name} className="grid gap-3 py-6 md:grid-cols-[220px_1fr] md:gap-10">
              <dt className="font-medium">{g.name}</dt>
              <dd className="flex flex-wrap gap-2">
                {g.items.map(item => (
                  <TechTag key={item} name={item} />
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  </section>
);

export default Skills;
