import React, {Component} from "react";
import Levels from "./level";
import Score from "./Score/Score";
import './header.css';

import songBirdImg from '../images/songBird.svg'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.array = [
      {idx: 0, active: true, title: 'Разминка'},
      {idx: 1, active: false, title: 'Воробьиные'},
      {idx: 2, active: false, title: 'Лусные птицы'},
      {idx: 3, active: false, title: 'Певчие птицы'},
      {idx: 4, active: false, title: 'Чищные птицы'},
      {idx: 5, active: false, title: 'Морские птицы'},
    ];
  }

  render() {
    return (
      <header className='header'>
        <div className='header__name'>
          <div>
            <img className='title__img' src={songBirdImg}/>
            <span className='title'>Songbird</span>
          </div>

          <Score currentScore={this.props.currentScore}/>
        </div>

        <ul className='headerLevels'>
          {this.array.map((item, idx) => {
            return (
              <Levels
                title={item.title}
                key={item.idx}
                status={item.active}
                activeLevel={this.props.activeLevel}
                idxActive={item.idx}
              />
            )
          })}
        </ul>
      </header>
    )
  }
}

export default Header
