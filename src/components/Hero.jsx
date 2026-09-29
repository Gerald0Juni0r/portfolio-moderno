// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section hero-section-container">

      {/* Animação de fundo (decorativa) */}
      <div className="hero-animation-bg" aria-hidden="true">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>

      <div className="container hero__container">
        <p className="hero__greeting">Olá, eu sou</p>
        <h1 className="highlight-text">Geraldo Júnior</h1>
        <h2>Desenvolvedor Python &amp; Web</h2>
        <p className="subtitle">
          Crio aplicações web com React e TypeScript e soluções em Python
          voltadas a dados e inteligência artificial. Recife, PE.
        </p>
        <div className="hero__buttons">
          <a href="#projects" className="btn btn--outline">Ver projetos</a>
          <a href="#contact" className="btn btn--primary">Entre em contato</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
