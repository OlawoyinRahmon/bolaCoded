import styled from "styled-components";
import HeaderBuilt from "./HeaderBuilt";
import TopHeader from "./TopHeader";
import React from 'react'

const GitHubApp = () => {
    return (
        <Container>
            <Wrapper>
                <TopHeader/>
                <HeaderBuilt/>
            </Wrapper>
        </Container>
    )
}

export default GitHubApp

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background: image("images");
background-color: #24292e;
padding-top: 50px;
background-size: cover;
color: white;
`;
const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;