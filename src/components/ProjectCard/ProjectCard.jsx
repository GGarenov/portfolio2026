import React from 'react';
import './ProjectCard.css';
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';

export default function ProjectCard({ title, description, tech, image, liveDemo, github }) {
  return (
    <article className="project-card card-shadow">
      <div className="project-card-image">
        <img src={image} alt={title} />
      </div>

      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>

        <div className="project-card-tech">
          {tech?.map((item) => (
            <span key={item} className="tech-pill">
              {item}
            </span>
          ))}
        </div>

        <div className="project-card-links">
          {liveDemo && (
            <a href={liveDemo} target="_blank" rel="noreferrer" className="project-link">
              <FaArrowUpRightFromSquare className="project-link-icon" aria-hidden="true" />
              Live Site
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="project-link">
              <FaGithub className="project-link-icon" aria-hidden="true" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
