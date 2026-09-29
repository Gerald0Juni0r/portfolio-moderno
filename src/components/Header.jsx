import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.png';

const links = [
  { href: '#home', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#projetos', label: 'Projetos' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => {
    setOpen(false);
    document.body.classList.remove('no-scroll');
  };
  const toggle = () => {
    setOpen((v) => {
      document.body.classList.toggle('no-scroll', !v);
      return !v;
    });
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#home" className="header__logo" onClick={close} aria-label="Início">
          <img src={logo} alt="" />
          <b>geraldo<span>.dev</span></b>
        </a>

        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Principal">
          <ul>
            {links.map((l) => (
              <li key={l.href}><a href={l.href} onClick={close}>{l.label}</a></li>
            ))}
            <li><a href="#contato" className="nav__cta" onClick={close}>Contato</a></li>
          </ul>
        </nav>

        <button
          type="button"
          className={`burger ${open ? 'open' : ''}`}
          onClick={toggle}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
