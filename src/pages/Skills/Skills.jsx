import React from 'react';
import './Skills.css';
import { skillsData } from '../../data/skills';

export default function Skills() {
  return (
    <section className="skills section" id="skills">
        <div className="container">
          <header className="skills-header">
            <p className="text-label">Tech stack</p>
            <h2 className="skills-title">Technologies I Work With</h2>
            <p className="skills-subtitle">
              A mix of core web technologies, modern frameworks, backend tools, and
              platforms I use to build full-stack applications.
            </p>
          </header>

          <div className="skills-grid">
            {skillsData.map((group) => (
              <section key={group.category} className="skills-group card border-shadow">
                <h3 className="skills-group-title">{group.category}</h3>
                <div className="skills-items">
                  {group.items.map(({ name, icon: Icon }) => (
                    <div key={name} className="skill-item">
                      <span className="skill-icon-wrapper">
                        <Icon className="skill-icon" />
                      </span>
                      <span className="skill-name">{name}</span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
  );
}
