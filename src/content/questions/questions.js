import React from "react";
import Img from "../../components/common/Img";
import Name from "../../components/common/name";
import Audio from "../../components/common/audio";
import img from '../../content/images/shadow-bird.jpg'
import './questions.css'


export default function Questions({data, isRightAnswerUser}) {

  let ourCorrectAnswerName = '*******';
  let ourCorrectAnswerImg = img;

  if (isRightAnswerUser) {
    ourCorrectAnswerName = data.name
    ourCorrectAnswerImg = data.image

  }
  return (
    <section className='questions'>
      <div className='image-wrapper'>
        <Img image={ourCorrectAnswerImg}/>
      </div>
      <div className='questionsCol'>
        <Name name={ourCorrectAnswerName}/>
        <Audio audio={data.audio}/>
      </div>
    </section>
  )
}