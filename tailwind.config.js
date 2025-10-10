/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // CONVENTIONS ABSTRAITES DU THÈME
        
        // Couleur d'accentuation principale (Orange)
        primary: '#FF6700',      
        // Couleur d'accentuation secondaire (Orange plus clair pour le hover)
        secondary: '#FFA000',    

        // Couleurs de fond
        // Renommé 'background' en 'darkbg' (plus descriptif de notre thème)
        'darkbg': '#0A0A0A', 
        // Couleur des cartes et des blocs de contenu
        'surface': '#1F2937',    

        // Couleurs de Texte
        'main-text': colors.white,   // Utiliser le blanc de la palette Tailwind pour la propreté
        'sub-text': colors.gray[400], // Utiliser un gris spécifique de la palette pour le texte secondaire

        // COULEURS DE COMPATIBILITÉ ET HÉRITAGE

        // Intégrer la palette grise de Tailwind
        'gray': colors.gray, 
        
        // Rendre 'orange' compatible et l'alias de 'primary' (Solution de l'erreur)
        orange: {
            DEFAULT: '#FF6700', 
            ...colors.orange // Assure que orange-500, etc. sont disponibles
        },
      },
      
      fontFamily: {
        // Renommage de 'logo' en 'header' pour une utilisation plus large
        header: ['"League Spartan"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'], 
      },
      
      // Animations de l'effet 'glow'
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 5px #FF6700, 0 0 10px #FF6700' },
          '50%': { textShadow: '0 0 15px #FFA000, 0 0 25px #FF6700' },
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}