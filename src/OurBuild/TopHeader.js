import React from 'react'
import styled from "styled-components"
import img from "./GitHubImage/images.png";
const TopHeader = () => {
    return (
        <Container>
           <Image src={img}/>
            <Wrapper>
                <NavLink>Overview</NavLink>
                <NavLink>Release Notes</NavLink>
                <NavLink>Help</NavLink>
            </Wrapper>
        </Container>
    )
}

export default TopHeader
const Image = styled.img`
width: 150PX;
height: 150PX;
border-radius: 50%;
object-fit: cover;
margin-bottom: 30PX;
cursor: pointer;
`;
const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
`; 
const Wrapper = styled.div`
display: flex;
width: 300px;
justify-content: space-between;
`;
const NavLink = styled.div`
font-weight: bold;

`;
