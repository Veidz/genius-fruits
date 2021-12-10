import React, { Component } from 'react';
import { GiShinyApple, GiKiwiFruit, GiBananaBunch, GiPeach } from "react-icons/gi";
import './style.css';

class Game extends Component {
  constructor() {
    super();

    this.state = {
      fruitSelected: "",

      gameArray: ["apple", "kiwi", "banana", "peach"],
      
      answerArray: [],
      userArray: [],

      buttonDisabled: false,
    }

    this.handleGameLogic = this.handleGameLogic.bind(this);
  }

  // 1 - Click start button
  // 2 - One fruit is selected
  // 3 - User click
  // 4 - User continue/fail
  // 5 - Continue ? Two fruit selected : Game Over
  handleGameLogic() {
    const { gameArray, answerArray } = this.state;
    const randomNumber = Math.floor(Math.random() * 4);

    const randomFruit = gameArray[randomNumber];

    this.setState({
      userArray: [],
      answerArray: [...answerArray, randomFruit],
    });


    this.setState({
      fruitSelected: randomFruit,
    }, () => {
      setTimeout(() => {
        this.setState({
          fruitSelected: "",
        });
      }, 1000)
    });
  }

  handleUserInput(fruit) {
    const { userArray } = this.state;

    this.setState({
      userArray: [...userArray, fruit],
    }, () => {
      const { 
        userArray: newUserArray,
        answerArray: newAnswerArray,
      } = this.state;

      if (newUserArray.length === newAnswerArray.length) {
        if (newUserArray.every((fruit, index) => newAnswerArray[index] === fruit)) {
          this.handleGameLogic();
        } else {
          this.setState({
            userArray: [],
            answerArray: [],
          });
        }
      }
    });
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
          <button disabled={buttonDisabled} className="card game-start" onClick={() => this.handleGameLogic()}> 
            Start Game
          </button>
        </div>
      </div>
    );
  }
}

export default Game;
