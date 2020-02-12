import React, {useState} from "react";
import Header from "./header/header";
import Questions from "./questions/questions";
import Answer from "./answer/answer";
import birdsData from "./birdsData";

export default function Content({rightData, activeLevel, onClickNextLevel, isDisabledButton}) {
  const [userAnswerName, setUserAnswerName] = useState(null);
  const [currentScore, setCurrentScore] = React.useState(0);
  const [levelScore, setLevelScore] = React.useState(0);

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


  return (
    <div className='content'>
      <Header activeLevel={activeLevel} currentScore={levelScore}/>
      <Questions data={rightData}
                 isRightAnswerUser={isRightAnswerUser}
                 />
      <Answer
        data={birdsData}
        activeLevel={activeLevel}
        rightAnswer={rightData.name}
        userAnswerName={userAnswerName}
        isRightAnswerUser={isRightAnswerUser}
        onChangeUserAnswer={handleClickAnswer}
        onClickNextLevel={onClickNextLevelDuplicated}
        disabled={isDisabledButton}

      />

    </div>
  )
}