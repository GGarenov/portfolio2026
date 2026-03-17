import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact section" id="contact">
        <div className="container contact-inner">
          <header className="contact-header">
            <p className="text-label">Contact</p>
            <h2 className="contact-title">Let&apos;s Work Together</h2>
            <p className="contact-subtitle">
              Interested in collaborating or have a project in mind? Reach out and let&apos;s
              talk about how I can help.
            </p>
          </header>

          <div className="contact-content">
            <div className="contact-card card border-shadow">
              <p className="contact-text">
                I&apos;m open to freelance opportunities, full-time roles, and interesting side
                projects. The fastest way to reach me is by email, but you can also find me on
                GitHub and LinkedIn.
              </p>

              <div className="contact-actions">
                <a
                  href="mailto:garenov.georgi@gmail.com"
                  className="btn-primary contact-btn"
                >
                  Email Me
                </a>
                <a
                  href="https://github.com/GGarenov"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary contact-btn"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary contact-btn"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
