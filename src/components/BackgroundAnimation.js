import React from 'react';
import styled from 'styled-components';

const BackgroundAnimation = () => {
  return (
    <GlowingBackground>
      <div className="glowing">
        <span style={{ '--i': 1 }}></span>
        <span style={{ '--i': 2 }}></span>
        <span style={{ '--i': 3 }}></span>
      </div>

      <div className="glowing">
        <span style={{ '--i': 1 }}></span>
        <span style={{ '--i': 2 }}></span>
        <span style={{ '--i': 3 }}></span>
      </div>

      <div className="glowing">
        <span style={{ '--i': 1 }}></span>
        <span style={{ '--i': 2 }}></span>
        <span style={{ '--i': 3 }}></span>
      </div>

      <div className="glowing">
        <span style={{ '--i': 1 }}></span>
        <span style={{ '--i': 2 }}></span>
        <span style={{ '--i': 3 }}></span>
      </div>
    </GlowingBackground>
  );
};

const GlowingBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  z-index: -1;
  overflow: hidden;
  .glowing {
    position: relative;
    min-width: 700px;
    height: 550px;
    margin: -150px;
    top: -25px;
    transform-origin: right;
    animation: colorChange 5s linear infinite;
  }

  .glowing:nth-child(even) {
    transform-origin: left;
  }

  @keyframes colorChange {
    0% {
      filter: hue-rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .glowing span {
    position: absolute;
    top: calc(80px * var(--i));
    left: calc(80px * var(--i));
    bottom: calc(80px * var(--i));
    right: calc(80px * var(--i));
  }

  .glowing span::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -8px;
    width: 15px;
    height: 15px;
    background: #f00;
    border-radius: 50%;
  }

  .glowing span:nth-child(3n + 1)::before {
    background: rgba(134, 255, 0, 1);
    box-shadow:
      0 0 20px rgba(134, 255, 0, 1),
      0 0 40px rgba(134, 255, 0, 1),
      0 0 60px rgba(134, 255, 0, 1),
      0 0 80px rgba(134, 255, 0, 1),
      0 0 0 8px rgba(134, 255, 0, 0.1);
  }

  .glowing span:nth-child(3n + 2)::before {
    background: rgba(255, 214, 0, 1);
    box-shadow:
      0 0 20px rgba(255, 214, 0, 1),
      0 0 40px rgba(255, 214, 0, 1),
      0 0 60px rgba(255, 214, 0, 1),
      0 0 80px rgba(255, 214, 0, 1),
      0 0 0 8px rgba(255, 214, 0, 0.1);
  }

  .glowing span:nth-child(3n + 3)::before {
    background: rgba(0, 226, 255, 1);
    box-shadow:
      0 0 20px rgba(0, 226, 255, 1),
      0 0 40px rgba(0, 226, 255, 1),
      0 0 60px rgba(0, 226, 255, 1),
      0 0 80px rgba(0, 226, 255, 1),
      0 0 0 8px rgba(0, 226, 255, 0.1);
  }

  .glowing span:nth-child(3n + 1) {
    animation: animate 10s alternate infinite;
  }

  .glowing span:nth-child(3n + 2) {
    animation: animate-reverse 3s alternate infinite;
  }

  .glowing span:nth-child(3n + 3) {
    animation: animate 8s alternate infinite;
  }

  @keyframes animate {
    0% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate-reverse {
    0% {
      transform: rotate(360deg);
    }

    50% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
`;

export default BackgroundAnimation;
