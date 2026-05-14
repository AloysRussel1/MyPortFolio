import { useEffect } from 'react';

/**
 * Composant Google Analytics
 * Initialise le suivi Google Analytics 4 avec ta propriété GA
 * À utiliser avec ton ID Google Analytics 4
 */
const GoogleAnalytics = () => {
  useEffect(() => {
    // Remplace par ton ID Google Analytics 4 (format: G-XXXXXXXXXX)
    const GA_ID = process.env.REACT_APP_GA_ID || 'G-XXXXXXXXXX';

    // Script Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script1);

    // Configuration Google Analytics
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}', {
        page_path: window.location.pathname,
      });
    `;
    document.head.appendChild(script2);

    // Log pour confirmer le chargement en développement
    if (process.env.NODE_ENV === 'development') {
      console.log('Google Analytics initialized with ID:', GA_ID);
    }
  }, []);

  // Ce composant ne rend rien visuellement
  return null;
};

export default GoogleAnalytics;
