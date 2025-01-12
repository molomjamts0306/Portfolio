import React from 'react';
import styled from 'styled-components';

const ProjectSection = () => {
  return (
    <ProjectWrapper>
      <h5>Coming soon</h5>
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  top: 300px;
  h5 {
    font-size: 25px;
    color: #fff;
  }
`;
export default ProjectSection;
