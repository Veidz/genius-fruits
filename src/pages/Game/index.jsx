import React, { Component } from 'react';
import { GiShinyApple, GiStrawberry, GiBananaBunch, GiPeach } from "react-icons/gi";
import './style.css';

class Game extends Component {
  render() {
    return (
      <div>
        <div className="cardContainer">
          <button className="card">
            <GiShinyApple className="icons" />
          </button>
          <button className="card">
            <GiStrawberry className="icons" />
          </button>
        </div>

        <div className="cardContainer">
          <button className="card">
            <GiBananaBunch className="icons" />
          </button>
          <button className="card"> 
            <GiPeach className="icons" />
          </button>
          </div>
      </div>
    );
  }
}

export default Game;
