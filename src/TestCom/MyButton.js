import React from 'react'
import styled from "styled-components"

const MyButton = ({name, bg, bg1, clr }) => {
    return (
        <Container bg={bg} bg1={bg1} clr={clr} >
            <Wrapper>{name}</Wrapper>
        </Container>
    )
}

export default MyButton

const Container = styled.div`
background-color: ${({ bg }) => bg ? "yellow" : "darkgreen"};
padding: 10px;
border-radius: 3px;
transition: all 350ms;
transform: scale(1);
margin: 10px;
color: ${({ clr }) => clr ? "white" : "black"};
:hover{
    cursor: pointer;
    transform: scale(1.05);
    background-color: white;
    background-color: ${({ bg1 }) => bg1 ? "orange" : "teal"};
    color: white;
}
`;
const Wrapper = styled.div`

`;