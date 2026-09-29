// src/components/Contact.jsx
import React from 'react';
import Section from './Section';
import { IconLinkedIn, IconGitHub } from './Icons';

const Contact = () => {
  return (
    <Section id="contact" className="content-section">
      <div className="card contact__card">
        <h2>Vamos <span className="highlight-text">Conversar?</span></h2>
        <p>Estou aberto a oportunidades de estágio, vagas júnior e projetos em desenvolvimento web ou Python. Me chama no LinkedIn!</p>
        <div className="contact__buttons">
          <a href="https://www.linkedin.com/in/gerald0juni0r/" className="btn btn--secondary" target="_blank" rel="noopener noreferrer">
            <IconLinkedIn /> LinkedIn
          </a>
          <a href="https://github.com/Gerald0Juni0r" className="btn btn--secondary" target="_blank" rel="noopener noreferrer">
            <IconGitHub /> GitHub
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;