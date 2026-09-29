// src/components/About.jsx
import React from 'react';
import Section from './Section';
import MinhaFoto from '../assets/img/MinhaFoto.jpg';

const education = [
  { course: 'Análise e Desenvolvimento de Sistemas', place: 'CESAR School', status: 'Em andamento' },
  { course: 'Ciência da Computação (Bacharelado)', place: 'UNINASSAU', status: 'Concluído' },
];

const About = () => {
  return (
    <Section id="about" className="content-section">
      <div className="about__container card">
        <div className="about__text">
          <h2>Sobre <span className="highlight-text">Mim</span></h2>
          <p>
            Sou Geraldo Júnior, desenvolvedor de Recife, bacharel em Ciência da Computação
            e estudante de Análise e Desenvolvimento de Sistemas na CESAR School.
          </p>
          <p>
            Hoje atuo com pesquisa e desenvolvimento, criando soluções em Python com
            inteligência artificial. Em paralelo, construo aplicações web com React,
            TypeScript e Supabase, do layout ao banco de dados.
          </p>
          <p>
            Já passei por estágios em engenharia de sistemas e em engenharia de dados na nuvem,
            o que me deu base em documentação técnica, análise de dados e metodologias ágeis.
          </p>

          <h3 className="about__subtitle">Formação</h3>
          <ul className="about__education">
            {education.map((item) => (
              <li key={item.course}>
                <strong>{item.course}</strong>
                <span>{item.place} · {item.status}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="about__image-placeholder">
          <img src={MinhaFoto} alt="Foto de Geraldo Júnior" className="about__photo" />
        </div>
      </div>
    </Section>
  );
};

export default About;
