import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { FiArrowDownRight, FiCheck, FiCopy } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import avatarImg from '../assets/Avatar.png';
import NeuralField from './NeuralField';
import { profile, stats } from '../portfolio';

const words = ['voient', 'écoutent', 'apprennent', 'tiennent la charge'];

const RotatingWord = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI(n => (n + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-grid align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          initial={{ y: '60%', opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-60%', opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient whitespace-nowrap pr-2 font-serif font-normal italic"
        >
          {words[i]}.
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

/** Boîte de détection façon sortie de modèle (tremble légèrement comme un vrai tracker). */
const BBox = ({
  box,
  label,
  score,
  color,
  labelSide = 'top',
  delay,
}: {
  box: { left: string; top: string; width: string; height: string };
  label: string;
  score: string;
  color: 'cyan' | 'magenta';
  labelSide?: 'top' | 'right';
  delay: number;
}) => {
  const border = color === 'cyan' ? 'border-cyan' : 'border-magenta';
  const bg = color === 'cyan' ? 'bg-cyan' : 'bg-magenta';
  return (
    <motion.div
      className={`absolute border-[1.5px] ${border}`}
      style={{ ...box, boxShadow: `0 0 20px rgb(var(--${color}) / 0.35)` }}
      initial={{ opacity: 0, scale: 1.3 }}
      animate={{ opacity: 1, scale: 1, x: [0, 1.5, -1, 0.5, 0], y: [0, -1, 1, 0, 0] }}
      transition={{
        opacity: { delay, duration: 0.3 },
        scale: { delay, duration: 0.5, ease: 'easeOut' },
        x: { delay: delay + 0.5, duration: 1.6, repeat: Infinity },
        y: { delay: delay + 0.5, duration: 1.9, repeat: Infinity },
      }}
    >
      <span
        className={`absolute whitespace-nowrap px-1.5 py-0.5 font-mono text-[9px] font-medium text-[#07070c] sm:text-[10px] ${bg} ${
          labelSide === 'top' ? 'bottom-full left-[-1.5px] mb-0' : 'left-full top-1/2 ml-2 -translate-y-1/2'
        }`}
      >
        {label} {score}
      </span>
    </motion.div>
  );
};

const VisionFrame = () => {
  const [fps, setFps] = useState(30);
  const [ms, setMs] = useState(12);
  useEffect(() => {
    const id = setInterval(() => {
      setFps(29 + Math.round(Math.random() * 2));
      setMs(11 + Math.round(Math.random() * 3));
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[340px] lg:max-w-[380px]"
    >
      {/* halo */}
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-cyan/25 via-violet/10 to-magenta/25 blur-3xl" />

      <div className="glass rounded-3xl p-2.5 shadow-2xl">
        {/* barre de fenêtre */}
        <div className="flex items-center justify-between px-2 pb-2.5 pt-1 font-mono text-[10px] text-muted">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
            REC · cam_0
          </span>
          <span>bira/vision.py</span>
        </div>

        {/* flux caméra — le ratio correspond exactement à la photo pour caler les boîtes */}
        <div className="relative aspect-[1122/1402] overflow-hidden rounded-2xl bg-elevated">
          <img
            src={avatarImg}
            alt="Portrait d'Aloys Russel Tonfo"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          {/* grille HUD */}
          <div
            className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
            style={{
              backgroundImage:
                'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          {/* ligne de scan */}
          <div className="absolute inset-x-0 h-16 -translate-y-1/2 animate-scan bg-gradient-to-b from-transparent via-cyan/20 to-transparent" />

          <BBox
            box={{ left: '37.5%', top: '10.5%', width: '20.5%', height: '21%' }}
            label="face"
            score="0.98"
            color="cyan"
            delay={1.1}
          />
          <BBox
            box={{ left: '43.5%', top: '23.5%', width: '9%', height: '3.5%' }}
            label="mouth"
            score="0.94"
            color="magenta"
            labelSide="right"
            delay={1.5}
          />

          {/* coins du viseur */}
          {['left-3 top-3 border-l border-t', 'right-3 top-3 border-r border-t', 'bottom-3 left-3 border-b border-l', 'bottom-3 right-3 border-b border-r'].map(
            c => (
              <span key={c} className={`absolute h-5 w-5 border-white/70 ${c}`} />
            )
          )}

          {/* télémétrie */}
          <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-lg bg-black/55 px-3 py-2 font-mono text-[10px] text-white/80 backdrop-blur-md">
            <span>
              <span className="text-lime">●</span> tracking
            </span>
            <span className="tabular-nums">{fps} fps</span>
            <span className="tabular-nums">{ms} ms</span>
          </div>
        </div>
      </div>

      {/* étiquette flottante */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.9, duration: 0.6 }}
        className="glass absolute -left-4 top-1/2 hidden rounded-xl px-3 py-2 font-mono text-[11px] shadow-xl sm:block lg:-left-12"
      >
        <span className="text-muted">$ </span>
        <span className="text-fg">python bira.py</span>
        <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 animate-blink bg-cyan" />
      </motion.div>
    </motion.div>
  );
};

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / 1600, 1);
      setN(Math.round(value * (1 - Math.pow(1 - t, 3)))); // ease-out cubique
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
};

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
  return (
    <button
      onClick={copy}
      className="group inline-flex items-center gap-2.5 rounded-full border border-line/15 bg-surface/60 px-5 py-3 font-mono text-[13px] backdrop-blur-xl transition-colors hover:border-cyan/50"
    >
      {copied ? <FiCheck className="text-lime" /> : <FiCopy className="text-muted transition-colors group-hover:text-cyan" />}
      {copied ? 'Copié !' : profile.email}
    </button>
  );
};

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const Hero = () => (
  <section id="hero" className="relative overflow-hidden pb-10 pt-28 md:pt-32">
    <NeuralField />
    {/* fondu vers le fond de page */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />

    <div className="container-x relative">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <motion.a
            {...fade(0)}
            href="#projects"
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line/10 bg-surface/60 py-1 pl-1 pr-3.5 text-xs text-muted backdrop-blur-xl transition-colors hover:text-fg"
          >
            <span className="rounded-full bg-magenta/15 px-2 py-0.5 font-mono text-[10px] text-magenta">NOW</span>
            Développeur IA chez Heka ST — projet Bira
            <FiArrowDownRight />
          </motion.a>

          <motion.h1 {...fade(0.05)} className="mb-4 font-mono text-sm text-muted">
            {profile.firstName} {profile.lastName} <span className="text-fg/30">/</span>{' '}
            <span className="text-fg">{profile.role}</span>
          </motion.h1>

          <motion.p
            {...fade(0.12)}
            className="text-[2.6rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Je construis des logiciels qui <RotatingWord />
          </motion.p>

          <motion.p {...fade(0.2)} className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Full stack <span className="text-fg">Django · React/TypeScript</span> et{' '}
            <span className="text-fg">Computer Vision temps réel</span>. 4+ ans à livrer des apps en production —
            aujourd'hui, un bras robotique qui aide les personnes à mobilité réduite à se nourrir.
          </motion.p>

          <motion.div {...fade(0.28)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg shadow-[0_10px_40px_-10px_rgb(var(--violet)/0.7)] transition-transform hover:scale-[1.03]"
            >
              Voir les projets
              <FiArrowDownRight className="transition-transform group-hover:rotate-45" />
            </a>
            <CopyEmail />
            <div className="ml-1 flex items-center gap-1">
              {[
                { href: profile.github, icon: <FaGithub />, label: 'GitHub' },
                { href: profile.linkedin, icon: <FaLinkedinIn />, label: 'LinkedIn' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full text-muted transition-colors hover:bg-elevated hover:text-fg"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <VisionFrame />
        </div>
      </div>

      {/* Chiffres clés */}
      <motion.dl
        {...fade(0.4)}
        className="mt-16 grid grid-cols-2 overflow-hidden rounded-2xl border border-line/10 bg-line/10 md:mt-20 md:grid-cols-4"
        style={{ gap: 1 }}
      >
        {stats.map(s => (
          <div key={s.label} className="flex flex-col-reverse bg-bg/90 px-5 py-6 backdrop-blur-xl">
            <dt className="mt-1font-mono text-[11px] uppercase tracking-wider text-muted">{s.label}</dt>
            <dd className="text-4xl font-semibold tracking-tight md:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </dd>
          </div>
        ))}
      </motion.dl>
    </div>
  </section>
);

export default Hero;
