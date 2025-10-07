// src/components/Projects.jsx
import React from 'react';
import Section from './Section';
import { IconGitHub, IconExternalLink } from './Icons';
import climoraApp from '../assets/img/climora-app.png'; 
import Folium from '../assets/img/folium.png';  
import LocArenas from '../assets/img/locarenas.png'; 

const projectsData = [
  { 
    title: "Climora",
    image: climoraApp, 
    description: "Um aplicativo de clima com busca em tempo real.", 
    tags: ["React", "CSS3", "Axios", "API"], 
    github: "https://github.com/Gerald0Juni0r/climora-app", 
    live: "https://climora-app.vercel.app/" 
  },
  { 
    title: "Folium",
    image: Folium, 
    description: "Um site para buscar, organizar e gerenciar livros que você já leu, quer ler e são seus favoritos.", 
    tags: ["React", "Tailwind CSS", "TypeScript", "API"], 
    github: "https://github.com/Gerald0Juni0r/folium-library", 
    live: "https://folium-library.vercel.app/" 
  },
  { 
    title: "LocArenas", 
    image: LocArenas,
    description: "plataforma web para o aluguel de campos de futebol society.", 
    tags: ["React", "Tailwind CSS", "TypeScript", "PostgreSQL", "Supabase"], 
    live: "https://preview--locarenas.lovable.app/" 
  },
  // { 
  //   title: "Em construção", 
  //   image: null,
  //   description: "Novos projetos em breve...", 
  //   tags: [], 
  //   github: "#", 
  //   live: "#" 
  // },
];

const Projects = () => {
  return (
    <Section id="projects" className="content-section">
      <h2 className="section-title">Meus <span className="highlight-text">Projetos</span></h2>
      <div className="projects__grid">
        {projectsData.map((project, index) => (
          <div key={index} className="card project-card">
            <div className="project-card__image-container">
              {project.image ? (
                // Se o projeto TEM uma imagem
                <img 
                  src={project.image} 
                  alt={`Screenshot do projeto ${project.title}`} 
                  className="project-card__image"
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
                <a href={project.github} className="icon-btn" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><IconGitHub small/></a>
                )} 
                <a href={project.live} className="icon-btn" aria-label="Live Demo" target="_blank" rel="noopener noreferrer"><IconExternalLink /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
