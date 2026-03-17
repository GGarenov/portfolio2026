import React from 'react';
import './About.css';
import georgiPhoto from '../../assets/images/georgi-photo.jpg';

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function About() {

  return (
    <main className="about" id="about">
      <section className="hero section">
        <div className="container hero-inner">
          <div className="hero-content">
            <p className="text-label">Available for freelance</p>
            <h1 className="hero-title">Full-stack Developer</h1>
            <p className="hero-subtitle">
            I build fast, scalable web applications and turn Figma designs into pixel-perfect, responsive interfaces. Specializing in React and the MERN stack, I focus on delivering clean, maintainable code that helps businesses launch and grow their products.
            </p>
            <div className="hero-actions">
              <button
                className="btn-primary"
                type="button"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </button>
              <button
                className="btn-secondary"
                type="button"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="hero-photo-wrapper">
            <div className="hero-photo card-shadow">
              <img src={georgiPhoto} alt="Georgi portrait" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
