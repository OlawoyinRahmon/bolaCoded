import { Input, Button } from 'antd'
import React from 'react'
import {BiLeftArrow, BiRightArrow} from "react-icons/bi"
import "./HomeScreen.css"

const HomeScreen = () => {
    return (
        <div ClassName="container">
          <div ClassName="container_1">
            <div ClassName="button">
                <BiLeftArrow />
            </div>
                 <div>Rahmon</div>
            <div ClassName="Button">
            <BiRightArrow /> 
            </div>
          </div>
        </div>
    )
}

export default HomeScreen
