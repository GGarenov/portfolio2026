import React from 'react';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
