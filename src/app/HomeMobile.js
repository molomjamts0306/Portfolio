import React from 'react';
import styled from 'styled-components';
import { Box, Modal } from '@mui/material';
import SkillsSection from './components/SkillsSection';
import ProjectSection from './components/ProjectsSection';

const style = {
  marginTop: '100px',
  width: '100%',
  display: 'flex',
  bgcolor: 'background.paper',
  borderRadius: 10,
};

const HomeMobile = ({ progress }) => {
  const [isOpen, setOpen] = React.useState(0);
  const sendEmail = () => {
    window.location.href = 'mailto:molomjamts21@gmail.com?subject=Hello&body=This%20is%20a%20test%20email.';
  };
  return (
    <HomeWrapperMobile className={`${progress === 100 && 'visible'} `}>
      <div className="main-action">
        <div className="content-wrapper-context">
          <h3 className="img-content">Frontend Developer</h3>
          <div className="content-text">
            I like to craft solid and scalable frontend products with great user experiences.
          </div>
          <button className="content-button" onClick={sendEmail}>
            Send me message!
          </button>
        </div>
        <div className="selection">
          <div className="section">
            <button onClick={() => setOpen(1)} className="title">
              Skills
            </button>
            <button onClick={() => setOpen(2)} className="right">
              Projects
            </button>
          </div>
          <div className="side-menu">
            <a href="https://github.com/molomjamts0306/Portfolio" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="" />
              Github
            </a>
            <a href="https://www.linkedin.com/in/molomjamts-munkhbayar-84b721267/" target="_blank" rel="noreferrer">
              <img src="https://i.ibb.co/x6PJsVR/linkedin-removebg-preview-1.png" alt="" />
              Linkedin
            </a>
            <a href="https://www.facebook.com/mmolomjamts" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.freepik.com/256/2111/2111396.png?semt=ais_hybrid" alt="" />
              Facebook
            </a>
          </div>
        </div>
      </div>
      <Modal open={isOpen === 1} onClose={() => setOpen(0)} closeAfterTransition>
        <Box sx={style}>
          <button
            onClick={() => setOpen(0)}
            className="close-button"
            style={{
              position: 'absolute',
              right: '10px',
              background: 'none',
              border: 'none',
              paddingTop: '14px',
              paddingRight: '10px',
              fontSize: '24px',
            }}
          >
            X
          </button>
          <SkillsSection />
        </Box>
      </Modal>
      <Modal open={isOpen === 2} onClose={() => setOpen(0)} closeAfterTransition>
        <Box sx={style}>
          <button
            onClick={() => setOpen(0)}
            className="close-button"
            style={{
              position: 'absolute',
              right: '10px',
              background: 'none',
              border: 'none',
              paddingTop: '14px',
              paddingRight: '10px',
              fontSize: '24px',
            }}
          >
            X
          </button>
          <ProjectSection />
        </Box>
      </Modal>
    </HomeWrapperMobile>
  );
};

const HomeWrapperMobile = styled.div`
  position: fixed;
  top: 0;
  background: url(${require('../assets/wallpaper.jpg')}) no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  opacity: 0;
  visibility: hidden;

  .main-action {
    background-color: var(--theme-bg-color);
    height: 100vh;
    width: 100%;
  }
  .content-wrapper-context {
    padding: 20px;
    margin-bottom: 100px;
    .content-button {
      font-size: 16px;
      background-color: #3a6df0;
      border: none;
      padding: 8px 26px;
      color: #fff;
      border-radius: 20px;
      margin-top: 16px;
      cursor: pointer;
      transition: 0.3s;
      white-space: nowrap;
    }
    .img-content {
      font-size: 25px;
      color: var(--theme-color);
    }
    .content-text {
      color: var(--theme-color);
      font-size: 20px;
    }
  }

  .selection {
    padding: 20px;
    gap: 20px;

    .section {
      display: flex;
      justify-content: center;
      padding: 20px 0;
      gap: 20px;
      button {
        min-width: 100px;
        color: #f9fafb;
        padding: 30px 10px;
        font-size: 18px;
        font-weight: bold;
        background-color: var(--theme-bg-color);
        border: 1px solid #2a2e3c;
        border-radius: 10px;
      }
    }
    .side-menu {
      position: absolute;
      bottom: 20vh;
      left: 50%;
      right: 50%;
      display: flex;
      justify-content: center;
      gap: 20px;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: #f9fafb;
        img {
          width: 60px;
        }
      }
    }
  }

  &.visible {
    opacity: 1;
    visibility: visible;
    transition: all 400ms ease-in-out;
  }
`;

export default HomeMobile;
