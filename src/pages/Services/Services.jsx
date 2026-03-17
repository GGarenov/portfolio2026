import React from 'react';
import './Services.css';
import { FaCode, FaShoppingCart, FaRocket } from 'react-icons/fa';

const services = [
  {
    icon: FaCode,
    title: 'Figma to React',
    description:
      'Pixel-perfect conversion of UI designs into responsive, production-ready React components.',
  },
  {
    icon: FaShoppingCart,
    title: 'eCommerce Interfaces',
    description:
      'High-converting product pages, carts, and checkout flows optimized for performance and clarity.',
  },
  {
    icon: FaRocket,
    title: 'Frontend Development',
    description:
      'Modern, scalable frontend applications with React, TypeScript, and strong state management.',
  },
];

export default function Services() {
  return (
    <section className="services section" id="services">
        <div className="container">
          <header className="services-header">
            <p className="text-label">Services</p>
            <h2 className="services-title">What I Can Help You With</h2>
          </header>

          <div className="services-grid">
            {services.map(({ icon: Icon, title, description }) => (
              <article key={title} className="service-card card border-shadow">
                <div className="service-icon-wrapper">
                  <Icon className="service-icon" />
                </div>
                <h3 className="service-title">{title}</h3>
                <p className="service-description">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
  );
}
