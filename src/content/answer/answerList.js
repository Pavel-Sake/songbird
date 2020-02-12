import React, { useState} from "react";
import AnswerItem from "./answerItem";
import './answer.css'


function AnswerList({data, rightAnswer, isRightAnswerUser,  onChangeUserAnswer, userAnswerName}) {


  function getStatus(currentItemName) {
    let status = 'neutral';

    if (currentItemName === userAnswerName) {
      if (userAnswerName === rightAnswer) {
        status = 'right';
      } else {
        status = 'wrong';
      }
    }

    return status;
  }

  if (isRightAnswerUser) {

  }

  return (
    <ul className='answerList'>
      {
        data.map((item) => {
          const status = getStatus(item.name);

          return (
            <AnswerItem
              name={item.name}
              status={status}
              rightAnswer={rightAnswer}
              key={item.id}
              onClick={onChangeUserAnswer}

              disabled={isRightAnswerUser}
            />
          )
        })
      }
    </ul>
  )
}

export default AnswerList