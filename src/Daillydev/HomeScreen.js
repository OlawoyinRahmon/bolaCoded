import React, { useState } from 'react'
import {MdCancel} from "react-icons/md"
import "./HomeScreen.css"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"
import img from "../Daillydev/img/img1.jfif"
import img2 from "../Daillydev/img/img2.jfif"
import img3 from "../Daillydev/img/img3.jpg"
import img4 from "../Daillydev/img/img4.jfif"
import moment from "moment";

const HomeScreen = () => {
    const [data, setData] = useState([
        {
            id: 1,
            name: "Rahmon",
            quote: "Learn good techniques.",
            time: Date.now(),
                avatar:img
        },
        {
            id: 2,
            name: "Rahmon",
            quote: "Learn good techniques.",
            time: Date.now(),
                avatar:img2
        },
        {
            id: 3,
            name: "Rahmon",
            quote: "Learn good techniques.",
            time: Date.now(),
                avatar:img3
        },
        {
            id: 4,
            name: "Rahmon",
            quote: "Learn good techniques.",
            time: Date.now(),
                avatar:img4
        },
    ]);
    return (
        <div className="container">
           <div className="container_wrapper">
                 {data.map((props) => {
                     return(
                        <div className="container_card">
                        <div className="container_cardRow">

                            <div className="container_cardRowCancel">
                                <MdCancel />
                            </div>
                            <img className="container_cardRowAvatar"  src={props.avatar} alt=""/>

                         </div>

                         <div className="container_cardQuote">
                             <div>
                                 <ImQuotesLeft />
                                 <div>{props.quote}</div>
                                 <ImQuotesRight />
                             </div>
                          </div>

                         <div className='container_cardName'>
                             Name
                         </div>

                         <div className='container_cardTime'> {""} 
                            {moment(props.time).fromNow()}
                         </div>
                   </div>
                     )
                 })}
           </div>  
        </div>
    )
}

export default HomeScreen

