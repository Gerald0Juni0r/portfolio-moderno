// src/components/Projects.jsx
import React from 'react';
import Section from './Section';
import { IconGitHub, IconExternalLink } from './Icons';

const projectsData = [
  { title: "Em construção", description: "", tags: ["", "", ""], github: "#", live: "#" },
  { title: "Em construção", description: "", tags: ["", "", ""], github: "#", live: "#" },
  { title: "Em construção", description: "", tags: ["", "", ""], github: "#", live: "#" }
];

const Projects = () => {
  return (
    <Section id="projects" className="content-section">
      <h2 className="section-title">Meus <span className="highlight-text">Projetos</span></h2>
      <div className="projects__grid">
        {projectsData.map((project, index) => (
          <div key={index} className="card project-card">
            <div className="project-card__image-placeholder"><span>{"< />"}</span></div>
            <div className="project-card__content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
              <div className="project-card__links">
                <a href={project.github} className="icon-btn" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><IconGitHub small/></a>
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