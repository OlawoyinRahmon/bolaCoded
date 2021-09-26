import React from 'react'
import styled from "styled-components"

const HeaderBuilt = () => {
  return (
    <Container>
       <Title> GitHub Desktop </Title>
         <Wrapper>Focus on what matters instead of fighting with Git. Whether you're new to Git or a seasoned user, GitHub Desktop simplifies your development workflow.
        </Wrapper>
    </Container>
  )
}

export default HeaderBuilt
const Title = styled.h1``
const Container = styled.div`
padding-top: 50px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

const Wrapper = styled.p`
font-size: 25px;
width: 600px;
text-align: center;
margin: 0;
margin-top: 15px;
margin-bottom: 55px;
`;