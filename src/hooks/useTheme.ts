import { useCallback, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const current = (): Theme =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light';

/** Le thème initial est appliqué par le script inline d'index.html (pas de flash). */
export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(current);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#111318' : '#fafafa');
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme(t => {
      const next = t === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('theme', next);
      } catch {
        /* stockage indisponible : le thème reste valable pour la session */
      }
      return next;
    });
  }, []);

  return { theme, toggle };
};
