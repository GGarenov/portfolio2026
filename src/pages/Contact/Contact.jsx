import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function Contact() {
  return (
    <section className="contact section" id="contact">
        <div className="container">
          <header className="contact-header">
            <p className="text-label">Contact</p>
            <h2 className="contact-title">Let&apos;s Work Together</h2>
            <p className="contact-subtitle">
              Interested in collaborating or have a project in mind? Reach out and let&apos;s
              talk about how I can help.
            </p>
          </header>

          <div className="contact-content">
            <div className="contact-links">
              <a
                href="https://github.com/GGarenov"
                target="_blank"
                rel="noreferrer"
                className="contact-link-card card border-shadow"
              >
                <FaGithub className="contact-link-icon" aria-hidden="true" />
                <span className="contact-link-title">GitHub</span>
                <span className="contact-link-subtitle">You can check part of my visible projects and activity.</span>
              </a>

              <a
                href="https://bg.linkedin.com/in/ggarenov"
                target="_blank"
                rel="noreferrer"
                className="contact-link-card card border-shadow"
              >
                <FaLinkedin className="contact-link-icon" aria-hidden="true" />
                <span className="contact-link-title">LinkedIn</span>
                <span className="contact-link-subtitle">We can connect and share some toughts on Linkedin as well.</span>
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}
