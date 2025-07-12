// src/components/Skills.jsx
import React from 'react';
import Section from './Section';
import { IconCode, IconServer, IconSmartphone, IconPenTool } from './Icons'; // Ícones continuam úteis!

const skillsData = [
  { title: "Frontend", icon: <IconCode />, skills: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "Backend", icon: <IconServer />, skills: ["Node.js", "Java", "Spring Boot", "Python"] },
  { title: "Mobile & DevOps", icon: <IconSmartphone />, skills: ["React Native", "Docker", "Git", "GitHub"] },
  { title: "Design & UI", icon: <IconPenTool />, skills: ["Figma", "UI/UX Principles", "Prototyping"] }
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