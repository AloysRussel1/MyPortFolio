import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
// Import pour l'option de langue
import { FaGlobe } from 'react-icons/fa'; 

// Structure de données des liens (inchangée)
const navLinks = [
  { name: 'Accueil', href: '#hero' },
  { name: 'Projets', href: '#projects' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Expérience', href: '#experience' },
  { name: 'Éducation', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('FR'); // État pour simuler la langue
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false); 
  
  // Fonction de bascule de langue (pour l'implémentation future)
  const toggleLanguage = () => {
    setLanguage(language === 'FR' ? 'EN' : 'FR');
    // Ici, vous implémenteriez la logique de changement de langue
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm shadow-xl border-b border-orange/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-2 lg:py-4 flex justify-between items-center">
        
        
        {/* Logo/Marque : Lien vers l'accueil */}
        <a 
          href="#hero" 
          className="text-white font-extrabold text-2xl md:text-3xl tracking-wide hover:text-orange transition-colors"
          onClick={handleLinkClick}
        >
          Aloys Russel <span className="text-orange">TONFO</span>
        </a>

        {/* Menu desktop (inchangé) */}
        <ul className="hidden lg:flex space-x-8 text-gray-300 font-medium uppercase text-sm tracking-wider items-center">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="relative group hover:text-orange transition-colors"
            >
              <a href={link.href} className="py-2 block">
                {link.name}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
          
          {/* SÉLECTEUR DE LANGUE (BILINGUE - CREATIF) */}
          <li className="ml-6">
            <button 
              onClick={toggleLanguage} 
              className="flex items-center space-x-2 border border-orange text-orange px-3 py-1 rounded-full font-semibold hover:bg-orange hover:text-gray-900 transition-all text-xs"
              title="Passer en Anglais / Français"
            >
              <FaGlobe className="w-3 h-3"/>
              <span className="font-bold">{language === 'FR' ? 'EN' : 'FR'}</span>
            </button>
          </li>
        </ul>

        {/* Burger mobile (Visible en dessous de lg) */}
        <div className="lg:hidden text-white" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </div>

      {/* Menu mobile dépliant */}
      {/* LIGNE CORRIGÉE : Utilisation de transition-all, ajout de l'opacité et de pointer-events-none à l'état fermé */}
      <ul 
        className={`
            lg:hidden 
            bg-gray-900 
            w-full 
            text-center 
            py-6 
            space-y-4 
            font-medium 
            text-white 
            uppercase 
            transition-all 
            duration-500 
            ease-in-out 
            overflow-hidden 
            ${
                menuOpen 
                ? 'max-h-screen border-t border-gray-700 opacity-100 pointer-events-auto' 
                : 'max-h-0 opacity-0 pointer-events-none'
            }
        `}
      >
        {navLinks.map((link) => (
          <li 
            key={link.name} 
            className="hover:text-orange transition-colors cursor-pointer text-base"
          >
            <a href={link.href} onClick={handleLinkClick} className="py-2 block">
              {link.name}
            </a>
          </li>
        ))}
        
        {/* SÉLECTEUR DE LANGUE MOBILE */}
        <li className="pt-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-3 border border-orange text-orange px-6 py-3 rounded-full font-bold hover:bg-orange hover:text-gray-900 transition-all text-sm max-w-xs mx-auto justify-center"
          >
            <FaGlobe className="w-4 h-4"/>
            <span>BASCULER VERS L'{language === 'FR' ? 'ANGLAIS (EN)' : 'FRANÇAIS (FR)'}</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;