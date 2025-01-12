import React from 'react';
import { ReactComponent as Maintypes } from '../assets/icons/mainIconsdark.svg';

const AboutSection = () => {
  const sendEmail = () => {
    window.location.href = 'mailto:molomjamts21@gmail.com?subject=Hello&body=This%20is%20a%20test%20email.';
  };
  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className="content-wrapper-header">
          <div className="content-wrapper-context">
            <h3 className="img-content">Frontend Developer</h3>
            <div className="content-text">
              I like to craft solid and scalable frontend products with great user experiences.
            </div>
            <button className="content-button" onClick={sendEmail}>
              Send me message!
            </button>
          </div>
          <Maintypes className="left-img" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
