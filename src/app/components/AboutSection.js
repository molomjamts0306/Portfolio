import React from 'react';
import { Code, Smartphone, Globe } from 'lucide-react';
import styled from 'styled-components';

export default function About() {
  const skills = [
    {
      category: 'Frontend',
      icon: Globe,
      technologies: [
        'React',
        'TypeScript',
        'Express.js',
        'Redux',
        'Next.js',
        'Bootstrap',
        'Javascript',
        'MUI',
      ],
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      technologies: ['React Native', 'iOS', 'Android', 'Expo'],
    },
    {
      category: 'Tools',
      icon: Code,
      technologies: ['Git', 'GitHub', 'Docker', 'Vercel', 'AWS', 'Figma', 'CI/CD', 'Slack'],
    },
  ];

  return (
    <SectionWrapper>
      <section id="about" className="section" style={{ backgroundColor: '#1e293b' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              I'm a passionate frontend developer with 7+ years of experience building scalable web applications and
              mobile solutions. I love turning complex problems into simple, beautiful designs.
            </p>
          </div>
          <div className="mypath">
            <div className="col-md-6">
              <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#f8fafc' }}>My Journey</h3>
              <div style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#cbd5e1' }}>
                <p className="mb-4">
                  Started my coding journey 8 years ago with a simple "Hello World" program. Since then, I've been
                  obsessed with creating digital experiences that solve real-world problems.
                </p>
                <p className="mb-4">
                  I've worked with startups and established companies, helping them build everything from MVPs to
                  enterprise-scale applications. My approach combines technical expertise with user-centered design
                  thinking.
                </p>
              </div>
            </div>

            <div className="right">
              <div className="card">
                <div className="items">
                  <div className="item">
                    <div style={{ fontSize: '2rem', fontWeight: '700', color: '#3b82f6' }}>50+</div>
                    <div className="text-secondary">Projects Completed</div>
                  </div>
                  <div className="item">
                    <div style={{ fontSize: '2rem', fontWeight: '700', color: '#8b5cf6' }}>7+</div>
                    <div className="text-secondary">Years Experience</div>
                  </div>
                  <div className="item">
                    <div style={{ fontSize: '2rem', fontWeight: '700', color: '#10b981' }}>50+</div>
                    <div className="text-secondary">Happy Clients</div>
                  </div>
                  <div className="item">
                    <div style={{ fontSize: '2rem', fontWeight: '700', color: '#f59e0b' }}>100%</div>
                    <div className="text-secondary">Commitment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-center " style={{ fontSize: '2rem', fontWeight: '700', color: '#f8fafc' }}>
              Skills & Technologies
            </h3>
            <div className="row">
              {skills.map((skill) => (
                <div key={skill.category} className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-4">
                        <div
                          style={{
                            width: '48px',
                            height: '48px',
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            borderRadius: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '1rem',
                          }}
                        >
                          <skill.icon size={24} color="#3b82f6" />
                        </div>
                        <h4 className="card-title" style={{ margin: 0 }}>
                          {skill.category}
                        </h4>
                      </div>
                      <div>
                        {skill.technologies.map((tech) => (
                          <span key={tech} className="badge badge-secondary">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  .mypath {
    display: flex;
    align-items: center;
    margin-bottom: 70px;

    .right {
      width: 100%;
      .card {
        background-color: #0f172a;
        &:hover {
          border-color: rgb(139, 92, 246) !important;
        }
      }
    }
    .items {
      height: 300px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-items: center;

      .item {
        width: 50%;
        height: 100px;
        text-align: center;
      }
    }
    @media (max-width: 992px) {
      flex-direction: column;
    }
  }
  .card-body {
    background-color: #0f172a;
    .card-title {
      color: #f9fafb;
    }
  }
`;
