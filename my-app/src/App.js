import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import { Container } from 'reactstrap';
import { TypeAnimation } from 'react-type-animation';
import GlowingBackground from './components/BackgroundAnimation';

const App = () => {
  return (
    <MainAppStyle>
      <GlowingBackground />
      <Header />
      <Container>
        <div className="main-section">
          <h4>Hello, I'm Mono. A Passionate Software Engineer.</h4>
          <TypeAnimation
            sequence={[
              'Java and React/Node.js',
              1000,
              'Java and React/Node.js developer',
              2000,
              'Java and Typescript/Next.js developer',
              2000,
              'PERN Full-Stack Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '50px', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
      </Container>
    </MainAppStyle>
  );
};

const MainAppStyle = styled.div`
  position: relative;
  color: #fff;
  text-align: center;

  h4 {
    font-size: 18px;
    font-weight: 400;
    color: white;
  }
  .main-section {
    position: relative;
    top: 40vh;
  }
`;

export default App;
