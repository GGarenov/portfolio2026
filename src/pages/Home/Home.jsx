import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import georgiPhoto from '../../assets/images/georgi-photo.jpg';

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="home">
      <section className="hero section">
        <div className="container hero-inner">
          <div className="hero-content">
            <p className="text-label">Available for freelance</p>
            <h1 className="hero-title">Full-stack Developer</h1>
            <p className="hero-subtitle">
              I build high-performance web applications and bring Figma designs to life
              with pixel-perfect code. Specializing in React, TypeScript, and the MERN
              stack.
            </p>
            <div className="hero-actions">
              <button
                className="btn-primary"
                type="button"
                onClick={() => navigate('/projects')}
              >
                View Projects
              </button>
              <button
                className="btn-secondary"
                type="button"
                onClick={() => navigate('/contact')}
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
