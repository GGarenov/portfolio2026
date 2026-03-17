import React from 'react';
import './Projects.css';
import { projectData } from '../../data/projectData';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

export default function Projects() {
  return (
    <section className="projects section" id="projects">
        <div className="container">
          <header className="projects-header">
            <p className="text-label">Projects</p>
            <h2 className="projects-title">Selected Work</h2>
            <p className="projects-subtitle">
              A collection of full-stack and front-end projects showcasing my experience
              with React, TypeScript, and the MERN stack.
            </p>
          </header>

          <div className="projects-list">
            {projectData.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tech={project.tech}
                image={project.image}
                liveDemo={project.liveDemo}
                github={project.github}
              />
            ))}
          </div>
        </div>
      </section>
  );
}
