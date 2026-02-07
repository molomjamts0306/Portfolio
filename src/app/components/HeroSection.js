import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="animate-fade-in-up">
              <p
                className="text-primary mb-3"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Frontend Developer
              </p>

              <h1 className="hero-title">Hi, I'm Mono</h1>

              <p className="hero-subtitle">
                I create impactful digital products using React and Node.js, combining clean code with a passion for
                user-focused design.
              </p>

              <div className="d-flex gap-3 mb-4" style={{ flexWrap: 'wrap' }}>
                <button className="btn btn-primary btn-lg" onClick={() => scrollToSection('projects')}>
                  View My Work
                  <ExternalLink size={20} style={{ marginLeft: '0.5rem' }} />
                </button>

                <button className="btn btn-outline-primary btn-lg" onClick={() => scrollToSection('contact')}>
                  Get In Touch
                  <Mail size={20} style={{ marginLeft: '0.5rem' }} />
                </button>
              </div>

              <div className="d-flex gap-4">
                <a
                  href="https://github.com/molomjamts0306"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#64748b', transition: 'color 0.3s ease' }}
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/molomjamts-munkhbayar-84b721267/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#64748b', transition: 'color 0.3s ease' }}
                >
                  <Linkedin size={24} />
                </a>
                <a href="mailto:molomjamts21@example.com" style={{ color: '#64748b', transition: 'color 0.3s ease' }}>
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="text-center">
              <img
                src="/undraw_programming_j1zw.svg"
                alt="Developer mark"
                style={{ width: '52%', height: '52%', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: 'none',
          color: '#64748b',
          cursor: 'pointer',
          animation: 'bounce 2s infinite',
        }}
      >
        <ArrowDown size={24} />
      </button>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
}
