import React from "react";
import './AnswerNextLevelButton.css'

export default function AnswerNextLevelButton({onClick, disabled}) {

  function handleClick() {
    onClick();
  }


  return (
    <button
      className='answerNextLevelButton'
      onClick={handleClick}
      disabled={disabled}
    >
      Next Level
    </button>
  );
}
