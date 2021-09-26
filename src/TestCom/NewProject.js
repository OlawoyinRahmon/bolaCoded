import React from 'react';
import styled from "styled-components";
import MyButton from "./MyButton"
import img from "../TestCom/Rb.jpeg" 
const NewProject = () => {
    return (
        <Container>
            <Wrapper>
                <Box>
                  <Title>Best WP Project Bidding Theme – Freelance Marketplace 2021</Title>
                  <Content> The most complete freelancer marketplace theme in the world. Build your freelancer website with the best template. Finest written code and awesome customer support!  </Content>
                    <Sub>   
                        Starting from {""}<span>$149</span>{""} <MyButton name="See Pricing" bg bg1/></Sub>
                    <Button>
                        <MyButton name="View Demo" />
                        <MyButton name="Purchase Theme" />
                    </Button>
                     </Box>
                     <Image src={img} />
                 </Wrapper>
        </Container>
    )
}

export default NewProject;


const Container = styled.div`
width: 100%;
height: 100vh;
min-height: 100vh;
background-image:  url("Rb.jpeg");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`;
const Wrapper = styled.div`
padding: 100px;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`;

const Box = styled.div`
margin-left: auto;
min-width: 230px;
width: 400px;
height: 500px;
/*background-color: white;*/
color: white;
margin: 5px;
`;

const Content = styled.div``;

const Image = styled.img`
min-width: 230px;
width: 400px;
height: 500px;
object-fit: contain;
/*background-color: white;*/
margin-left: auto;
margin: 5px;
`;

const Button = styled.div`
display: flex;
`;
const Title = styled.h2``;
const Sub = styled.div`
display: flex;
margin: 5PX 0;
align-items: center;

span{
    margin-left: 5px;
    color: lightgreen;
font: bold;
}
`;