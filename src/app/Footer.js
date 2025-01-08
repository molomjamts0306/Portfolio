import React from 'react';
import styled from 'styled-components';
import finder from '../assets/icons/finder.png';
import safari from '../assets/icons/safari.png';
import terminal from '../assets/icons/terminal.png';
import facetime from '../assets/icons/facetime.png';
import notes from '../assets/icons/notes.png';
import calculator from '../assets/icons/calculator.png';
import appstore from '../assets/icons/appstore.png';

const Footer = ({ progress }) => {
  const [availableApps] = React.useState(apps);
  return (
    <FooterWrapper className={`${progress === 100 && 'active'}`}>
      <ul>
        {availableApps.map((d, i) => (
          <li className="dock-item" key={i}>
            <span className="title">{d.title}</span>
            <img className="image" src={d.icon} alt="" />
          </li>
        ))}
      </ul>
    </FooterWrapper>
  );
};

export const apps = [
  {
    title: 'Finder',
    icon: finder,
  },
  {
    title: 'Safari',
    icon: safari,
  },
  {
    title: 'Terminal',
    icon: terminal,
  },
  {
    title: 'FaceTime',
    icon: facetime,
  },
  {
    title: 'TextEdit',
    icon: notes,
  },
  {
    title: 'Calculator',
    icon: calculator,
  },
  {
    title: 'AppStore',
    icon: appstore,
  },
];

const FooterWrapper = styled.div`
  transition: all 300ms ease-in-out;
  opacity: 0;
  visibility: hidden;
  display: flex;
  width: 100%;
  justify-content: center;
  position: fixed;
  bottom: -74px;
  &.active {
    opacity: 1;
    visibility: visible;
    bottom: 10px;
  }
  ul {
    margin: 0;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 10px;
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(48px);
    border-radius: 1rem;

    .dock-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      list-style-type: none;
      transition: opacity 200ms ease-in-out;
      &:hover {
        .title {
          opacity: 1;
          transition: opacity 200ms ease-in-out;
        }
      }
      .title {
        position: absolute;
        top: -20px;
        color: #fff;
        opacity: 0;
        pointer-events: none;
      }
      .image {
        width: 56px;
        height: 56px;
      }
    }
  }
`;
export default Footer;
