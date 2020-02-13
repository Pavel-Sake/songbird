import React from "react";

import AnswerList from "./answerList";
import AnswerCard from "./AnswerCard";
import AnswerNextLevelButton from "./AnswerCard/AnswerNextLevelButton/answerNextLevel";

import './answer.css'

export default function Answer({data, activeLevel, rightAnswer, userAnswerName, isRightAnswerUser, onChangeUserAnswer, onClickNextLevel, disabled}) {

  const nameButton = 'Next Level'

  function getDataPropertiesAnswer() {
    let dataPropertiesAnswer = null;

    data[activeLevel].forEach((item) => {

      if (item.name === userAnswerName) {
        dataPropertiesAnswer = item;
      }
    });

    return dataPropertiesAnswer;
  }


  return (
    <section className='answer'>
      <AnswerList
        data={data[activeLevel]}
        rightAnswer={rightAnswer}
        isRightAnswerUser={isRightAnswerUser}
        onChangeUserAnswer={onChangeUserAnswer}
        userAnswerName={userAnswerName}
      />
      {!!userAnswerName
        ? (
          <AnswerCard
            dataPropertiesAnswer={getDataPropertiesAnswer()}
            userAnswerName={userAnswerName}
          />
        )
        : (
          <p>Послушайте плеер и выбирете птицу из списка</p>
        )
      }
      <AnswerNextLevelButton
        onClick={onClickNextLevel}
        disabled={disabled}
        nameButton={nameButton}
      />
    </section>
  )
}