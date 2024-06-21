import React from 'react';
import styled from 'styled-components';

const knowledgeData = [
  { title: 'React.js', logo: '' },
  { title: 'Next.js', logo: '' },
  { title: 'Tailwind', logo: '' },
  { title: 'Java', logo: '' },
];

const KnowledgeSection = () => {
  return (
    <KnowledgeWrapper>
      {knowledgeData.map((d, index) => (
        <div key={index}>
          <h5>{d?.title}</h5>
        </div>
      ))}
    </KnowledgeWrapper>
  );
};

const KnowledgeWrapper = styled.div`
  position: relative;
  h5 {
    color: white;
  }
`;
export default KnowledgeSection;
