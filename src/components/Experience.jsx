// src/components/Experience.jsx
import React from 'react';
import Section from './Section';

// Descrições propositalmente genéricas: sem nomes de instituições ou detalhes de projetos internos.
const experienceData = [
  {
    role: 'Bolsista de Pesquisa e Desenvolvimento',
    period: 'Atual',
    description:
      'Desenvolvimento de soluções em Python com inteligência artificial para um projeto de pesquisa aplicada.',
    tags: ['Python', 'Visão Computacional', 'Deep Learning'],
  },
  {
    role: 'Estágio em Engenharia de Sistemas',
    period: 'Anterior',
    description:
      'Modelagem de sistemas baseada em modelos (MBSE), análise de riscos e produção de documentação técnica.',
    tags: ['MBSE', 'Análise de riscos', 'Documentação'],
  },
  {
    role: 'Estágio em Engenharia de Dados na Nuvem',
    period: 'Anterior',
    description:
      'Análise de dados com serviços da AWS, trabalhando em equipe com metodologias ágeis.',
    tags: ['AWS', 'Análise de dados', 'Metodologias ágeis'],
  },
];

const Experience = () => {
  return (
    <Section id="experience" className="content-section">
      <h2 className="section-title">Minha <span className="highlight-text">Trajetória</span></h2>
      <ol className="timeline">
        {experienceData.map((item) => (
          <li key={item.role} className="timeline__item">
            <div className="card timeline__card">
              <div className="timeline__header">
                <h3>{item.role}</h3>
                <span className="timeline__period">{item.period}</span>
              </div>
              <p>{item.description}</p>
              <div className="project-card__tags">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
