import React from 'react';
import Header from './components/Header';
import Hero from './components/HeroSection';
import About from './components/AboutSection';
import Projects from './components/ProjectSection';
import Contact from './components/ContactSection';
import Footer from './components/Footer';

export default function Portfolio() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
