import React, { useEffect, useId, useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <nav className="navbar-inner" aria-label="Primary">
        <button
          type="button"
          className="nav-toggle"
          aria-controls={menuId}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="nav-toggle-icon" aria-hidden="true" />
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
        </button>

        <div
          id={menuId}
          className={`nav-links ${isOpen ? 'is-open' : ''}`}
          onClick={closeMenu}
        >
          <a href="#about" className="nav-link">
            About
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
        </div>
      </nav>
    </header>
  );
}