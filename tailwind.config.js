/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6700',      // orange foncé pour titres, boutons, accents
        secondary: '#ff9f3c',    // orange plus clair pour hover ou détails
        background: '#1a1a1a',   // noir sombre pour le fond général
        surface: '#2a2a2a',      // gris foncé pour cartes ou sections
        textPrimary: '#ffffff',   // texte principal
        textSecondary: '#cccccc', // texte secondaire
      },
      fontFamily: {
      logo: ['"League Spartan"', 'sans-serif'],
      sans: ['Inter', 'sans-serif'], // pour le reste du texte
    },
    keyframes: {
      glow: {
        '0%, 100%': { textShadow: '0 0 5px #ff6f00, 0 0 10px #ff6f00' },
        '50%': { textShadow: '0 0 15px #ffa000, 0 0 25px #ff6f00' },
      },
    },
    animation: {
      glow: 'glow 2s ease-in-out infinite',
    },
    },
  },
  plugins: [],
}
