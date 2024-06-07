import React from 'react';
import styled from 'styled-components';
import Header from './components/Header'
import {Container} from "reactstrap";

const App = () => {
    return (
        <MainAppStyle>
            <Header/>
            <Container>
                <h4>Hello, I'm Mono. A Passionate Software Engineer.</h4>
            </Container>
        </MainAppStyle>
    );
}

const MainAppStyle = styled.div`
    position: relative;
    background-color: #000;
    color: #fff;
    text-align: center;

    h4 {
        font-size: 16px;
    }

    .anim {
        height: 100vh;
        background-color: black;
    }
`;

export default App;
