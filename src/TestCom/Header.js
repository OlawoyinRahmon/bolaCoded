import React from 'react'
import styled from "styled-components"
import {AiOutlineHome, AiFillSetting, AiOutlineFlag} from "react-icons/ai";
import img from "../Daillydev/img/img1.jfif"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <Container>
           <Wrapper>
                <Logo src={img}/>
                    <NavLink>
                     <MyLink to="/"><AiOutlineHome/></MyLink>
                     <MyLink to="/NewProject"><AiFillSetting /></MyLink>
                     <MyLink to="/HomeScreen"><AiOutlineFlag /></MyLink>
                     </NavLink>
             </Wrapper>
        </Container>
    )
}

export default Header

const NavLink = styled.div`
display: flex;
`
const Container = styled.div`
width: 100%;
height: 80px;
background-color: white;
color: black;
`
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`
const Logo = styled.img`
width: 300px;
height: 80px;
object-fit: contain;
`
const MyLink = styled(Link)`
margin: 0 10px;
width: 80px;
height: 40px;
color: black;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
transition: all 350ms;
background-color: rgba(0,0,0,0.1);
cursor: pointer;

:hover{
    background-color: teal;
    .Flag{
    color: white;
}
}
`
