// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section hero-section-container">
      
      {/* Container da Animação de Fundo */}
      <div className="hero-animation-bg">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>

      {/* Conteúdo do Hero (fica na frente da animação) */}
      <div className="container hero__container">
        <h1 className="highlight-text">Desenvolvedor</h1>
        <h2>Full Stack</h2>
        <p className="subtitle">
          Transformando ideias em soluções digitais com código limpo e design moderno.
        </p>
        <div className="hero__buttons">
          <a href="#projects" className="btn btn--outline">Projetos</a>
          <a href="#contact" className="btn btn--primary">Entre em Contato</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;