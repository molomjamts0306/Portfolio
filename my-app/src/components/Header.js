import React from 'react';
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderStyle>
                <div>Navigation</div>
                <div>Social</div>
        </HeaderStyle>
    );
}

const HeaderStyle = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 10%;
    color: #fff;
    gap: 0 20px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60vw; 
    border: 1px solid #ffffff;
    padding: 20px;
    border-radius: 999px;
    text-align: center;
`;

export default Header;