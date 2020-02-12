import React, {useState} from 'react';
import Content from "./content/content";

import birdsData from './content/birdsData'


function App() {

  const [activeLevel, setActiveLevel] = React.useState(0);

  const [score, setScore] = React.useState(0);
  const maxScore = 30;
  let currentPointsLevel = 0;


  let isDisabledButton = true;

  function handleClickNextLevel() {
    const newLevel = activeLevel + 1;
    setActiveLevel(newLevel);


    setScore(currentPointsLevel - maxScore)

  }

  const length = birdsData[activeLevel].length;
  const randomNumber = Math.round(Math.random() * (length - 0));
  const dataRandom = birdsData[activeLevel][randomNumber];


  return (
    <div className='wrapper'>
      <Content
        rightData={dataRandom}
        activeLevel={activeLevel}
        score={score}
        currentPointsLevel={currentPointsLevel}
        onClickNextLevel={handleClickNextLevel}
        isDisabledButton={isDisabledButton}
      />
    </div>
  );
}

export default App;

