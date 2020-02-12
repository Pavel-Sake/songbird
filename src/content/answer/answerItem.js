import React from "react";
import cn from 'classnames';
import PropTypes from 'prop-types';
import './answer.css'

import soundError from '../audio/soundOfError.mp3'
import soundCorrectAnswer from '../audio/soundOfCorrectAnswer.mp3'

function AnswerItem(props) {

  const clickRef = React.createRef();
  let currentSound = soundError;

  if (props.name === props.rightAnswer) {
    currentSound = soundCorrectAnswer;
  }

  function playSoundAnswer() {

    clickRef.current.load();
    clickRef.current.play();
  }


  return (
    <li>

      <button className={cn("listItem", {
          ['listItem--wrong']: props.status === 'wrong',
          ['listItem--right']: props.status === 'right',
        }
      )}
              disabled={props.disabled}
              onClick={() => {
                props.onClick(props.name)
                playSoundAnswer()
              }}

      >
        {props.name}
        <audio className='listItem__audioClick' controls ref={clickRef}>
          <source src={currentSound}/>
        </audio>
      </button>

    </li>
  )
}

export default AnswerItem