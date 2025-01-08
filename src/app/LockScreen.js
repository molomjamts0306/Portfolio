import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import mainProfile from '../assets/user.jpg';
import { Box, LinearProgress } from '@mui/material';
import Home from './Home';

const LockScreen = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <MainAppStyle className={`${progress === 100 && 'fade'}`}>
        <div className="user-section">
          <img src={mainProfile} alt="" />
          <h1>Molomjamts Munkhbayar</h1>
          <div className="progressbar">
            <Box sx={{ width: '100%' }}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
          </div>
        </div>
      </MainAppStyle>
      <Home progress={progress} />
    </>
  );
};

const MainAppStyle = styled.div`
  position: relative;
  color: #fff;
  text-align: center;
  background: url(${require('../assets/wallpaper.jpg')}) no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  transition: all 500ms ease-in-out;
  &.fade {
    visibility: hidden;
    opacity: 0;
    overflow: hidden;
  }
  .user-section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px 0;
    justify-content: center;
    top: 40vh;
    transition: all 400ms ease-in-out;

    img {
      width: 150px;
      border-radius: 50%;
    }

    h1 {
      pointer-events: none;
      margin: 0;
      padding-bottom: 25px;
    }
    .button {
      border: 1px solid #e4e5e6;
      border-radius: 20px;
      color: #fff;
      background-color: unset;
      padding: 8px 10px;
    }
  }
  .progressbar {
    width: 280px;
    .MuiBox-root {
      border-radius: 10px;
      overflow: hidden;
    }
    .MuiLinearProgress-bar {
      background-color: #fff;
    }
  }
`;

export default LockScreen;
