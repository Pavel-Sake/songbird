import React from "react";
import Img from "../../../components/common/Img";
import Name from "../../../components/common/name";
import Audio from "../../../components/common/audio";

import './answerCard.css';

export default function AnswerCard({dataPropertiesAnswer}) {

  // const [wasCorrectAnswerGiven, setWasCorrectAnswerGiven] = React.useState(false);





  return (
    <div className='answerCard'>
      <div className='answerImg'>
        <Img image={dataPropertiesAnswer.image}/>
      </div>
      <div className='answerName'>
        <Name name={dataPropertiesAnswer.name}/>
      </div>
      <div className='answerAudio'>
        <Audio audio={dataPropertiesAnswer.audio} />
      </div>
      <div className='answerDescription'>{dataPropertiesAnswer.description}</div>
    </div>
  )
}