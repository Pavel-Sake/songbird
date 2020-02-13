import React from "react";
import './AnswerNextLevelButton.css'

export default function AnswerNextLevelButton({nameButton, onClick, disabled}) {

  function handleClick() {
    onClick();
  }

  return (
    <button
      className='answerNextLevelButton'
      onClick={handleClick}
      disabled={disabled}
    >
      {nameButton}
    </button>
  );
}
