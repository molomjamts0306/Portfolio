import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const ProjectSection = () => {
  const mobileDetect = window.innerWidth < 992;
  return (
    <ProjectWrapper>
      <h3>Projects</h3>
      <Swiper modules={[Autoplay]} spaceBetween={50} autoplay slidesPerView={mobileDetect ? 1 : 2} loop>
        {projects.map((d, idx) => (
          <SwiperSlide>
            <a className="project-item" key={idx} href={d.link} target="_blank" rel="noreferrer">
              <img src={d.img} alt="" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </ProjectWrapper>
  );
};

const projects = [
  {
    title: 'Hyperworld',
    img: 'https://i.ibb.co/8j4bTX9/Screenshot-2025-01-19-213633.png',
    link: 'https://hyperworld.gg/',
  },
  {
    title: 'Chinggiskhan',
    img: 'https://i.ibb.co/pWffCgc/Screenshot-2025-01-19-213708.png',
    link: 'https://www.chinggiskhan.com/',
  },
  { title: 'Baigal', img: 'https://i.ibb.co/BGfdzks/Screenshot-2025-01-19-214002.png', link: 'https://baigal.com/' },
  {
    title: 'Tavannuden',
    img: 'https://i.ibb.co/cyKQF2C/Screenshot-2025-01-19-213901.png',
    link: 'https://tavannuden.com/',
  },
  {
    title: 'PlaytimeFestival',
    img: 'https://i.ibb.co/GnjkPK3/Screenshot-2025-01-19-213803.png',
    link: 'https://playtimefestival.com/',
  },
];

const ProjectWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 20px;
  h3 {
    font-size: 26px;
    color: #fff;
    @media (max-width: 992px) {
      color: #000;
    }
  }
  .project-item {
    position: relative;
    width: 100%;
    img {
      width: 100%;
      object-fit: contain;
      transition: transform 200ms ease-in-out;
      @media (max-width: 992px) {
        width: 90%;
      }
    }
    &:hover {
      img {
        transform: scale(1.1);
        transition: transform 200ms ease-in-out;
      }
    }
  }
`;
export default ProjectSection;
