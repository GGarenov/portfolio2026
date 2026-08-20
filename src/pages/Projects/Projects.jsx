import React from "react";
import "./Projects.css";
import { projectData } from "../../data/projectData";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <header className="projects-header">
          <p className="text-label">Projects</p>
          <h2 className="projects-title">Part of my work</h2>
          <p className="projects-subtitle">
            Part of my projects collection of full-stack and front-end projects
            showcasing my experience with MERN stack. There are a lot of more
            side projects that I'm building, so you can check my github profile
            or ask me on private.
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
