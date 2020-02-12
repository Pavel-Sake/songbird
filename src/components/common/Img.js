import React from "react";


const styles = {
    width: '200px',
    height: '200px',
    borderRadius: '50%'
};


export default function Img({image}) {

    return (
        <img style={styles} src={image}/>
    )
}