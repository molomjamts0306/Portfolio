import React, { useState, useEffect } from 'react';
import { Code, Menu, X } from 'lucide-react';
import styled from 'styled-components';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileview = window.innerWidth < 998;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const scrollToTop = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <SectionWrapper>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
            <button
              className="navbar-brand"
              onClick={scrollToTop}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <Code size={24} color="#3b82f6" />
              <h4 className="name">Molomjamts Munkhbayar</h4>
            </button>
            {mobileview ? (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  display: 'block',
                }}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            ) : (
              <ul className="navbar-nav">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      className="nav-link"
                      onClick={() => scrollToSection(item.id)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(10px)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
          }}
          onClick={() => setIsMenuOpen(false)}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: '#cbd5e1',
                fontSize: '2rem',
                fontWeight: '700',
                cursor: 'pointer',
                padding: '1rem',
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  .name {
    color: #f9fafb;
  }
`;
