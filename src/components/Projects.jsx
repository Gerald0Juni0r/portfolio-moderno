// src/components/Projects.jsx
import React from 'react';
import Section from './Section';
import { IconGitHub, IconExternalLink } from './Icons';
import climoraApp from '../assets/img/climora-app.png'; 
import Folium from '../assets/img/folium.png';  
import LocArenas from '../assets/img/locarenas.webp';

const projectsData = [
  { 
    title: "Climora",
    image: climoraApp, 
    description: "App de clima com busca de cidades em tempo real, consumindo uma API pública de previsão do tempo.", 
    tags: ["React", "CSS3", "Axios", "API"], 
    github: "https://github.com/Gerald0Juni0r/climora-app", 
    live: "https://climora-app.vercel.app/" 
  },
  { 
    title: "Folium",
    image: Folium, 
    description: "Biblioteca pessoal para buscar livros e organizá-los em listas de lidos, quero ler e favoritos.", 
    tags: ["React", "Tailwind CSS", "TypeScript", "API"], 
    github: "https://github.com/Gerald0Juni0r/folium-library", 
    live: "https://folium-library.vercel.app/" 
  },
  { 
    title: "LocArenas", 
    image: LocArenas,
    description: "Plataforma web para reserva e aluguel de campos de futebol society, com banco de dados no Supabase.", 
    tags: ["React", "Tailwind CSS", "TypeScript", "PostgreSQL", "Supabase"], 
    live: "https://preview--locarenas.lovable.app/" 
  },
];

const Projects = () => {
  return (
    <Section id="projects" className="content-section">
      <h2 className="section-title">Meus <span className="highlight-text">Projetos</span></h2>
      <div className="projects__grid">
        {projectsData.map((project) => (
          <div key={project.title} className="card project-card">
            <div className="project-card__image-container">
              {project.image ? (
                // Se o projeto TEM uma imagem
                <img 
                  src={project.image} 
                  alt={`Screenshot do projeto ${project.title}`} 
                  className="project-card__image"
                  loading="lazy"
                />
              ) : (
                // Senão, exibe o placeholder padrão
                <div className="project-card__image-placeholder">
                  <span>{"< />"}</span>
                </div>
              )}
            </div>

            <div className="project-card__content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-card__tags">
                {/* Filtra tags vazias para não renderizar spans em branco */}
                {project.tags.filter(tag => tag).map(tag => <span key={tag}>{tag}</span>)}
              </div>
              <div className="project-card__links">
                {/* Coloca link do GitHub SOMENTE se 'project.github' existir */}
                {project.github && (
                <a href={project.github} className="icon-btn" aria-label={`Código do ${project.title} no GitHub`} target="_blank" rel="noopener noreferrer"><IconGitHub small/></a>
                )} 
                {project.live && (
                <a href={project.live} className="icon-btn" aria-label={`Abrir o ${project.title} online`} target="_blank" rel="noopener noreferrer"><IconExternalLink /></a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
