// src/components/Skills.jsx
import React from 'react';
import Section from './Section';
import { IconCode, IconServer, IconCpu, IconTool } from './Icons';

const skillsData = [
  { title: "Frontend", icon: <IconCode />, skills: ["HTML e CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"] },
  { title: "Backend & Dados", icon: <IconServer />, skills: ["Python", "Node.js", "Java", "PostgreSQL", "Supabase"] },
  { title: "IA & Dados", icon: <IconCpu />, skills: ["Visão Computacional", "Deep Learning", "OpenCV", "Jupyter"] },
  { title: "Ferramentas", icon: <IconTool />, skills: ["Git e GitHub", "Docker", "Linux", "AWS", "Figma"] }
];

const Skills = () => {
  return (
    <Section id="skills" className="content-section">
      <h2 className="section-title">Minhas <span className="highlight-text">Skills</span></h2>
      <div className="skills__grid">
        {skillsData.map((category) => (
          <div key={category.title} className="card skill-card">
            <div className="skill-card__header">
              {category.icon}
              <h3>{category.title}</h3>
            </div>
            <ul>
              {category.skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;