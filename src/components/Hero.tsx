import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import avatarImg from '../assets/Avatar.png';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orb */}
      <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] bg-[#F97316]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Text */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[#F97316] text-sm tracking-widest uppercase mb-5"
            >
              Disponible · Montréal & Remote
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
            >
              Aloys Russel
              <br />
              <span className="text-[#F97316]">TONFO</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="h-[2px] w-10 bg-[#F97316]" />
              <p className="text-lg text-white/70 font-medium tracking-wide">
                Développeur Full Stack · React & Python
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/50 text-base leading-relaxed max-w-lg mb-10"
            >
              Étudiant en Génie informatique à Polytechnique Montréal. Je conçois
              des applications web performantes de bout en bout — interfaces React
              réactives, APIs Django/Flask robustes, et intégrations IA ciblées.
              Disponible pour des opportunités full stack au Québec ou en remote.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#projects"
                className="px-7 py-3.5 bg-[#F97316] text-[#0a0a0f] font-semibold text-sm tracking-wide rounded hover:bg-[#fb923c] transition-all shadow-lg shadow-[#F97316]/20 hover:shadow-[#F97316]/40"
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 border border-white/20 text-white/80 font-semibold text-sm tracking-wide rounded hover:border-[#F97316] hover:text-[#F97316] transition-all"
              >
                Me contacter
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-5"
            >
              <a
                href="https://github.com/AloysRussel1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/AloysRussel1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <span className="h-px w-8 bg-white/20" />
              <a
                href="mailto:rtonfo@gmail.com"
                className="font-mono text-xs text-white/40 hover:text-[#F97316] transition-colors tracking-wide"
              >
                rtonfo@gmail.com
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border border-[#F97316]/20 scale-110" />
              <div className="absolute inset-0 rounded-full border border-white/5 scale-125" />

              <motion.img
                src={avatarImg}
                alt="Aloys Russel TONFO"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] rounded-full object-cover border-2 border-[#F97316]/40 shadow-2xl shadow-[#F97316]/10"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
              />

              {/* Badge disponible */}
              <div className="absolute bottom-4 right-0 bg-[#0d0d14] border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 shadow-xl">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-white/70 text-xs font-mono">Open to work</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-[10px] tracking-widest uppercase font-mono">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <FaArrowDown size={12} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
