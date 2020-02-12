import React from "react";
import './Score.css'

class Score extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const { currentScore } = this.props;

    let newCurrentScore = currentScore;

    if (currentScore < 0) {
      newCurrentScore = 0;
    }

    return (
      <div className='headerScore'>score: {newCurrentScore}</div>
    );
  }
}

export default Score