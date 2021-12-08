import React, { Component } from 'react';
import { GiShinyApple, GiKiwiFruit, GiBananaBunch, GiPeach } from "react-icons/gi";
import './style.css';

class Game extends Component {
  constructor() {
    super();

    this.state = {
      fruitSelected: "",
      gameArray: ["apple", "kiwi", "banana", "peach"],
      indexFruits: [],
      buttonDisabled: false,
    }

    this.handleGameLogic = this.handleGameLogic.bind(this);
  }

  // 1 - Click start button
  // 2 - One fruit is selected
  // 3 - User click
  // 4 - User continue/fail
  // 5 - Continue ? Two fruit selected : Game Over
  handleGameStart() {
    const { gameArray } = this.state;

    this.setState({
      buttonDisabled: true,
    });

    const randomIndex = Math.floor(Math.random() * 4);



    this.setState({
      fruitSelected: gameArray[randomIndex]
    }, () => {
      setTimeout(() => {
        this.setState({
          fruitSelected: "",
          buttonDisabled: false,
        });
      }, 1000)
    })
    
  }

  handleGameLogic() {
    const { gameArray } = this.state;

    const randomIndex = Math.floor(Math.random() * 4);

    console.log(gameArray[randomIndex]);

    let gameOver = false;

    // while(!gameOver) {
      console.log('antes do timeout')
      setTimeout(() => {
        console.log('dentro do timeout')
      }, 1000);
      console.log('depos do timeout')
    // }

  }

  handleUserInput(fruit) {
    
  }

  render() {
    const { buttonDisabled, fruitSelected } = this.state;

    return (
      <div>
        <div className="cardContainer">
          <button
            className={ fruitSelected === "apple" ? "card-selected card-selected-apple" : "card" }
            onClick={() => this.handleUserInput("apple")}
          >
            <GiShinyApple className="icons" />
          </button>

          <button
            className={ fruitSelected === "kiwi" ? "card-selected card-selected-kiwi" : "card" }
            onClick={() => this.handleUserInput("kiwi")}
          >
            <GiKiwiFruit className="icons" />
          </button>
        </div>

        <div className="cardContainer">
          <button
            className={ fruitSelected === "banana" ? "card-selected card-selected-banana" : "card" }
            onClick={() => this.handleUserInput("banana")}
          >
            <GiBananaBunch className="icons" />
          </button>
          <button
            className={ fruitSelected === "peach" ? "card-selected card-selected-peach" : "card" }
            onClick={() => this.handleUserInput("peach")}
          > 
            <GiPeach className="icons" />
          </button>
        </div>

        <div className="cardContainer">
          <button disabled={buttonDisabled} className="card game-start" onClick={() => this.handleGameStart()}> 
            Start Game
          </button>
        </div>
      </div>
    );
  }
}

export default Game;
