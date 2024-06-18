import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyle>
      <div>Navigation</div>
      <div>Social</div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  z-index: 100;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 7%;
  color: #fff;
  gap: 0 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40vw;
  border: 1px solid #ffffff33;
  padding: 20px;
  border-radius: 999px;
  text-align: center;
`;

export default Header;
