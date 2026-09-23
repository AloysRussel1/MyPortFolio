import { useEffect, useRef } from 'react';

type Node = { x: number; y: number; vx: number; vy: number; r: number };

const readRgb = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim().split(' ').join(',');

/**
 * Champ de neurones en canvas : des nœuds dérivent lentement et se relient
 * quand ils sont proches. Près de la souris, les liaisons s'illuminent
 * comme une couche qui s'active. S'arrête quand le hero sort de l'écran.
 */
const NeuralField = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    let nodes: Node[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = false;
    let colors = { fg: readRgb('--fg'), cyan: readRgb('--cyan'), magenta: readRgb('--magenta') };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(90, (w * h) / 16000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.6,
      }));
    };

    const LINK = 130;
    const HALO = 180;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        const da = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > LINK) continue;
          const near = da < HALO;
          const alpha = (1 - d / LINK) * (near ? 0.55 : 0.12);
          ctx.strokeStyle = `rgba(${near ? colors.cyan : colors.fg},${alpha})`;
          ctx.lineWidth = near ? 0.9 : 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
        const lit = da < HALO;
        ctx.fillStyle = `rgba(${lit ? colors.magenta : colors.fg},${lit ? 0.9 : 0.35})`;
        ctx.beginPath();
        ctx.arc(a.x, a.y, lit ? a.r + 0.8 : a.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (running) raf = requestAnimationFrame(draw);
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(draw);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    // Relit les couleurs quand le thème change
    const themeObserver = new MutationObserver(() => {
      colors = { fg: readRgb('--fg'), cyan: readRgb('--cyan'), magenta: readRgb('--magenta') };
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const visibility = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
    visibility.observe(canvas);

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove, { passive: true });

    return () => {
      stop();
      themeObserver.disconnect();
      visibility.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="absolute inset-0 h-full w-full" />;
};

export default NeuralField;
