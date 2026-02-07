import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from './projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
export default function Projects() {
  const mobile = window.innerWidth < 992;
  return (
    <SectionWrapper>
      <section id="projects" className="section" style={{ backgroundColor: '#0f172a' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              A collection of projects that showcase my skills and passion for creating innovative digital solutions.
            </p>
          </div>
          <div className="row">
            <Swiper slidesPerView={mobile ? 1 : 2} navigation spaceBetween={50} autoplay={{ delay: 3000 }} loop={true}>
              {projects.map((project, id) => (
                <SwiperSlide key={id} className="">
                  <div className="project h-100 w-100">
                    {project.img && (
                      <div style={{ overflow: 'hidden' }}>
                        <img
                          src={project.img}
                          alt={project.title}
                          style={{
                            width: '100%',
                            height: '400px',
                            transition: 'transform 0.3s ease',
                            // scale: '1.03',
                          }}
                          // onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
                          // onMouseOut={(e) => (e.target.style.transform = 'scale(1.03)')}
                        />
                      </div>
                    )}
                    <div className="card-body">
                      <h3 className="card-title">{project.title}</h3>
                      <p className="card-text">{project.description}</p>
                      <div className="mb-4">
                        {project.technologies?.map((d) => (
                          <span key={`${project.title}-${d}`} className="badge badge-primary">
                            {d}
                          </span>
                        ))}
                      </div>
                      <div className="d-flex gap-3">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ flex: 1, textDecoration: 'none' }}
                          >
                            <ExternalLink size={16} style={{ marginRight: '0.5rem' }} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  .project {
    color: #f9fafb;
    background: #0f172a;
    border: 1px solid #f9fafb;
    border-radius: 16px;
    overflow: hidden;
    padding: 0 0 10px 0;
    .card-body {
      padding: 10px;
      a {
        transition: all 0.3s ease; !important;
      }
    }
  }
`;
