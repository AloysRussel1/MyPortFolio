// src/components/NavBar.tsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed w-full z-50 bg-background bg-opacity-95 backdrop-blur-md shadow-lg border-b border-primary">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-primary font-logo text-3xl md:text-4xl tracking-wide animate-glow cursor-pointer">
          AloysRussel
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-10 text-textPrimary font-medium uppercase tracking-wide">
          {['Accueil', 'Projets', 'Blog', 'Résumé', 'Contact'].map((item) => (
            <li
              key={item}
              className="relative group hover:text-primary transition-colors cursor-pointer"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </li>
          ))}
          {/* Bouton traduction */}
          <li className="ml-6">
            <button className="bg-primary text-background px-4 py-2 rounded-lg font-semibold hover:bg-secondary transition-all">
              EN
            </button>
          </li>
        </ul>

        {/* Burger mobile */}
        <div className="md:hidden text-textPrimary" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden bg-background w-full text-center py-6 space-y-4 font-medium text-textPrimary uppercase">
          {['Accueil', 'Projets', 'Blog', 'Résumé', 'Contact'].map((item) => (
            <li key={item} className="hover:text-primary transition-colors cursor-pointer">
              {item}
            </li>
          ))}
          <li>
            <button className="bg-primary text-background px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-all">
              EN
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
