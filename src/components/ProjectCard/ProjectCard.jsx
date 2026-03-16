import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ title, description, tech, image, liveDemo, github, reversed }) {
  return (
    <article
  className={`project-card card-shadow ${
    reversed ? 'project-card--reversed' : ''
  }`}
>
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
              Live Site
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="project-link">
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
