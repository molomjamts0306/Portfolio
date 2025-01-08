import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AppleLogo } from '../assets/icons/appleLogo.svg';
import { ReactComponent as NavigationLogo } from '../assets/icons/navigationLogo.svg';
import RealtimeClock from '../components/RealtimeClock';

const Header = ({ progress }) => {
  return (
    <HeaderWrapper className={`${progress === 100 && 'active'}`}>
      <div className="left-section">
        <span className="logo">
          <AppleLogo style={{ width: 20, height: 20 }} />
        </span>
        <span>Finder</span>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Window</span>
        <span>Help</span>
      </div>
      <div className="right-section">
        <NavigationLogo style={{ width: 16, height: 16 }} />
        <RealtimeClock />
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  opacity: 0;
  visibility: hidden;
  position: fixed;
  z-index: 1;
  top: -29px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--theme-bg-color);
  backdrop-filter: blur(20px);
  height: 29px;
  color: #fff;
  transition: all 200ms ease-out;

  &.active {
    top: 0;
    opacity: 1;
    visibility: visible;
  }
  .left-section {
    display: flex;
    align-items: center;
    pointer-events: none;
    img {
      width: 20px;
      height: 20px;
    }
    .logo {
      padding-top: 2px;
    }
    span {
      padding: 0 6px;
      margin: 0 6px;
      object-fit: contain;
    }
  }
  .right-section {
    display: flex;
    align-items: center;
    gap: 0 14px;
    padding-right: 10px;
  }
`;

export default Header;
