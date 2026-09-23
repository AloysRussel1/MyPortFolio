import { Reveal } from './ui';
import { facts } from '../portfolio';

/** Bandeau pleine largeur sous le hero : dégradé orange vers or, une phrase et des chiffres vérifiables. */
const Highlights = () => (
  <section aria-label="En bref" className="relative">
    <div
      aria-hidden
      className="absolute inset-0 -z-10"
      style={{ background: 'linear-gradient(100deg, rgb(var(--accent) / 0.14), rgb(var(--gold) / 0.07) 60%, transparent)' }}
    />
    <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent via-gold/60 to-transparent" />
    <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-accent via-gold/60 to-transparent" />

    <Reveal className="container-x grid gap-10 py-12 md:grid-cols-[1.3fr_repeat(3,1fr)] md:items-center md:gap-8 md:py-14">
      <p className="max-w-[14ch] text-2xl font-bold leading-tight tracking-tight md:text-3xl">
        Du code qui tourne en production.
      </p>
      {facts.map(f => (
        <div key={f.label}>
          <p className="text-flame text-5xl font-bold tracking-tight md:text-6xl">{f.value}</p>
          <p className="mt-1 text-sm text-muted">{f.label}</p>
        </div>
      ))}
    </Reveal>
  </section>
);

export default Highlights;
