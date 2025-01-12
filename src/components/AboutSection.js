import React from 'react';
import { ReactComponent as Maintypes } from '../assets/icons/mainIconsdark.svg';

const AboutSection = () => {
  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className="content-wrapper-header">
          <div className="content-wrapper-context">
            <h3 className="img-content">Frontend Developer</h3>
            <div className="content-text">
              I like to craft solid and scalable frontend products with great user experiences.
            </div>
            <button className="content-button">Send me message!</button>
          </div>
          <Maintypes className="left-img" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
