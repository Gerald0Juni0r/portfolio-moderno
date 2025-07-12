// src/components/About.jsx
import React from 'react';
import Section from './Section';
import MinhaFoto from '../assets/img/MinhaFoto.jpg';

const About = () => {
  return (
    <Section id="about" className="content-section">
      <div className="about__container card">
        <div className="about__text">
          <h2>Sobre <span className="highlight-text">Mim</span></h2>
          <p>
            Oi, eu sou Geraldo Júnior, desenvolvedor full stack apaixonado por tecnologia e programação. Gosto de transformar ideias em código e estou sempre aprendendo algo novo para melhorar minhas habilidades.
          </p>
          <p>
            Já trabalhei em projetos que vão de sites simples a aplicações mais complexas, explorando diferentes tecnologias e buscando soluções eficientes. Minha motivação vem do desafio de criar algo útil e bem feito.
          </p>
          <p>
            Se quiser saber mais sobre meu trabalho, dá uma olhada nos meus projetos ou entre em contato!
          </p>
        </div>
        <div className="about__image-placeholder">
          <img src={MinhaFoto} alt="Minha foto de terno olhando para a câmera" style={{ width: "80%", borderRadius: "1rem" }}/>
        </div>
      </div>
    </Section>
  );
};

export default About;