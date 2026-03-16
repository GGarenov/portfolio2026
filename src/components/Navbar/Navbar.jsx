import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/projects" className="nav-link">
          Projects
        </NavLink>
        <NavLink to="/skills" className="nav-link">
          Skills
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}