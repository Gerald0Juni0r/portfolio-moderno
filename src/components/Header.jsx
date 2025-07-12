// src/components/Header.jsx
import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Sobre mim' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact', label: 'Contato' }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    }, { rootMargin: '-40% 0px -60% 0px' });
    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    document.body.classList.toggle('no-scroll', !isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header__container">
        <a href="#home" className="header__logo" onClick={closeMenu}>
          <img src="https://uploads.onecompiler.io/43hvcrmwf/43q7v2k9u/g__1_-removebg-preview.png" alt="Logo de Geraldo.dev" className="header__logo-img" />
        </a>
        
        <nav className={`header__nav ${isMenuOpen ? 'is-open' : ''}`} id="main-nav">
          <ul>
            {navLinks.map(link => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className={`nav-link ${activeLink === link.href ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          onClick={toggleMenu}
          className={`hamburger-menu ${isMenuOpen ? 'is-active' : ''}`} 
          aria-label="Abrir menu" 
          aria-expanded={isMenuOpen}
          aria-controls="main-nav"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;