import React from "react";
import img from "../images/shadow-bird.jpg";
import './answer.css'


export default function AnswerImg({data}) {
    return (
    <img className='answerImg' src={img}/>
)
}