import React, {useState} from "react";


import cn from 'classnames'
import Header from "./header/header";
import Questions from "./questions/questions";
import Answer from "./answer/answer";
import birdsData from "./birdsData";
import AnswerNextLevelButton from "./answer/AnswerCard/AnswerNextLevelButton/answerNextLevel";

export default function Content({rightData, activeLevel, onClickNextLevel, onClickStartOver,  isDisabledButton}) {
  const [userAnswerName, setUserAnswerName] = useState(null);
  const [currentScore, setCurrentScore] = React.useState(0);
  const [levelScore, setLevelScore] = React.useState(0);

  const nameButton = 'Начать заново';
  let congratulationName = 'Вы прошли викторину и набрали';
  const maxScore = 5;

  let isRightAnswerUser = false;

  if (rightData.name === userAnswerName) {
    isRightAnswerUser = true;
    isDisabledButton = false;
  }

  function handleClickAnswer(name) {
    if (rightData.name === name) {
      setCurrentScore(currentScore + 5);
      setLevelScore(currentScore + 5);
    } else {
      setCurrentScore(currentScore - 1)
    }

    setUserAnswerName(name);
  }


  function onClickNextLevelDuplicated() {
    onClickNextLevel();
    setUserAnswerName(null);
  }

  if (currentScore === maxScore) {
    congratulationName = 'С апсолютной победой вот это ты Ку-Кареку ';
  }

  let congratulationScore = currentScore

  if (currentScore < 0) {
    congratulationScore = 0
  }

  return (
    <div className='content'>
      <Header activeLevel={activeLevel} currentScore={levelScore}/>
      {activeLevel < 5 ?
        <Questions
        data={rightData}
        isRightAnswerUser={isRightAnswerUser}
        /> : <h1 className='content__congratulation'>
          Поздравляем
      </h1>}

      {activeLevel < 5 ?
        <Answer
        data={birdsData}
        activeLevel={activeLevel}
        rightAnswer={rightData.name}
        userAnswerName={userAnswerName}
        isRightAnswerUser={isRightAnswerUser}
        onChangeUserAnswer={handleClickAnswer}
        onClickNextLevel={onClickNextLevelDuplicated}
        disabled={isDisabledButton}
      /> :
        <div className={cn('content__theEnd')}>
          {congratulationName} {congratulationScore} очков  из 30
          <AnswerNextLevelButton
            nameButton={nameButton}
            onClick={onClickStartOver}/>
        </div>}


    </div>
  )
}