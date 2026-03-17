import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#services" className="nav-link">
          Services
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#skills" className="nav-link">
          Skills
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </nav>
    </header>
  );
}