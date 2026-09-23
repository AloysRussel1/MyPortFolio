import { useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiMail, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import avatarImg from '../assets/Avatar.png';
import { heroCopy, profile } from '../portfolio';

type Lang = keyof typeof heroCopy;

/** Cadre de détection fin et statique, en clin d'œil au travail en Computer Vision. */
const DetectionBox = ({
  box,
  label,
  labelSide = 'top',
  tone,
}: {
  box: { left: string; top: string; width: string; height: string };
  label: string;
  labelSide?: 'top' | 'right';
  tone: 'accent' | 'gold';
}) => (
  <div className={`absolute border ${tone === 'accent' ? 'border-accent' : 'border-gold'}`} style={box} aria-hidden>
    <span
      className={`absolute whitespace-nowrap px-1 font-mono text-[9px] font-medium leading-4 text-bg ${
        tone === 'accent' ? 'bg-accent' : 'bg-gold'
      } ${labelSide === 'top' ? 'bottom-full left-[-1px]' : 'left-full top-1/2 ml-1.5 -translate-y-1/2'}`}
    >
      {label}
    </span>
  </div>
);

const LangSwitch = ({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) => (
  <div role="group" aria-label="Langue du texte" className="inline-flex rounded-md border border-line p-0.5 text-xs font-semibold">
    {(['fr', 'en'] as const).map(l => (
      <button
        key={l}
        onClick={() => onChange(l)}
        aria-pressed={lang === l}
        className={`rounded px-2 py-1 uppercase transition-colors duration-200 ${
          lang === l ? 'bg-accent text-bg' : 'text-muted hover:text-gold'
        }`}
      >
        {l}
      </button>
    ))}
  </div>
);

const Hero = () => {
  const [lang, setLang] = useState<Lang>('fr');
  const copy = heroCopy[lang];
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  // Parallaxe légère : la photo descend moins vite que la page, le texte s'estompe doucement
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0.2]);

  return (
    <section ref={ref} id="hero" className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      {/* halos très discrets pour donner de la profondeur au charcoal */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(600px circle at 15% 20%, rgb(var(--accent) / 0.09), transparent 60%), radial-gradient(500px circle at 85% 75%, rgb(var(--gold) / 0.06), transparent 60%)',
        }}
      />

      <div className="container-x grid items-center gap-12 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_340px] lg:gap-16">
        {/* conteneur externe : fondu au scroll ; interne : apparition au chargement */}
        <motion.div style={{ opacity: textOpacity }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
              <LangSwitch lang={lang} onChange={setLang} />
              <span className="inline-flex items-center gap-1.5">
                <FiMapPin size={14} className="text-accent" /> {profile.location}
              </span>
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
              {profile.firstName} {profile.lastName}
              <span className="text-accent">.</span>
            </h1>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={lang}
                lang={lang}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <p className="mt-3 text-lg font-medium text-muted">{copy.role}</p>
                <p className="mt-6 font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                  {copy.tagline[0]}
                  <br />
                  <span className="text-flame">{copy.tagline[1]}</span>
                </p>

                {copy.intro.map(p => (
                  <p key={p} className="mt-5 max-w-xl leading-relaxed">
                    {p}
                  </p>
                ))}

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a href="#projects" className="btn-primary group">
                    {copy.ctaProjects}
                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a href="#contact" className="btn-secondary">
                    {copy.ctaContact}
                  </a>
                  <div className="ml-1 flex items-center gap-0.5">
                    {[
                      { href: profile.github, icon: <FaGithub size={18} />, label: 'GitHub' },
                      { href: profile.linkedin, icon: <FaLinkedinIn size={18} />, label: 'LinkedIn' },
                      { href: `mailto:${profile.email}`, icon: <FiMail size={18} />, label: 'Email' },
                    ].map(s => (
                      <a
                        key={s.label}
                        href={s.href}
                        target={s.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="icon-link h-10 w-10"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Le ratio correspond exactement à la photo pour que les cadres restent calés */}
        <motion.div style={{ y: photoY }} className="mx-auto w-full max-w-[300px] md:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="relative"
          >
            {/* liseré dégradé orange vers or */}
            <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-accent via-accent/20 to-gold" aria-hidden />
            <div className="relative aspect-[1122/1402] overflow-hidden rounded-xl bg-elevated">
              <img
                src={avatarImg}
                alt="Portrait d'Aloys Russel Tonfo"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
              <DetectionBox
                box={{ left: '37.5%', top: '10.5%', width: '20.5%', height: '21%' }}
                label="face"
                tone="accent"
              />
              <DetectionBox
                box={{ left: '43.5%', top: '23.5%', width: '9%', height: '3.5%' }}
                label="mouth"
                labelSide="right"
                tone="gold"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
