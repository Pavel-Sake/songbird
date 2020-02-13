import React from "react";
import './img.css'


export default function Img({image}) {

    return (
        <img className='content__img' src={image}/>
    )
}