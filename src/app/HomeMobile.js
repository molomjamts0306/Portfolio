import React from 'react';
import styled from 'styled-components';

const HomeMobile = ({ progress }) => {
  return (
    <HomeWrapperMobile className={`${progress === 100 && 'visible'} `}>
      <h1>Mobile version coming soon</h1>
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
  &.visible {
    opacity: 1;
    visibility: visible;
    transition: all 400ms ease-in-out;
  }
  h1 {
    position: relative;
    top: 40vh;
    text-align: center;
  }
`;

export default HomeMobile;
