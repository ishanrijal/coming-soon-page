import React, { Component } from "react";
import "../App.css";
import Snake from "./Snake";
import Food from "./Food";

const randomCoordinate = () => {
  let a = 1;
  let b = 98;
  let c = Math.floor(Math.random() * ((b - a + 1 + a) / 2)) * 2;
  let d = Math.floor(Math.random() * ((b - a + 1 + a) / 2)) * 2;

  return [c, d];
};
class SnakeArena extends Component {
  constructor() {
    super();
    this.state = {
      food: randomCoordinate(),
      SnakePosition: [
        [0, 0],
        [2, 0],
      ],
    };
  }

  handleKeyPress() {
    let snakePos = [...this.state.SnakePosition];
    let head = snakePos[snakePos.length - 1];
    switch (this.props.handleKeyPress) {
      case "LEFT":
        head = [head[0] - 2, head[1]];
        break;
      case "UP":
        head = [head[0] + 2, head[1] + 2];
        break;
      case "RIGHT":
        head = [head[0] + 2, head[1]];
        break;
      case "DOWN":
        head = [head[0] - 2, head[1] - 2];
        break;
    }
    snakePos.push(head);
    snakePos.shift();
    this.setState({
      SnakePosition: snakePos,
    });
  }

  render() {
    return (
      <div className="container snake-Arena">
        <Snake Snakedot={this.state.SnakePosition} />
        <Food food={this.state.food} />
      </div>
    );
  }
}
export default SnakeArena;
