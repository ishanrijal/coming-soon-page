import React, { Component } from "react";
import Snake from "./components/Snake";
import Food from "./components/Food";

const randomCoordinate = () => {
  let a = 1;
  let b = 98;
  let c = Math.floor(Math.random() * ((b - a + 1 + a) / 2)) * 2;
  let d = Math.floor(Math.random() * ((b - a + 1 + a) / 2)) * 2;
  return [c, d];
};
class SnakeGame extends Component {
  constructor() {
    super();
    this.state = {
      start: false,
      speed: 200,
      direction: "RIGHT",
      food: randomCoordinate(this.start),
      count: 0,
      SnakePosition: [
        [0, 0],
        [2, 0],
      ],
    };
    this.startGame = this.startGame.bind(this) //start game button
    this.stopGame = this.stopGame.bind(this) //stop game button
  }

  startGame() {
    this.setState({
      start: true
    })
  }
  stopGame() {
    this.setState({
      start: false
    })

  }
  componentDidMount() {
    setInterval(this.handleKeyPress, this.state.speed);
    document.onkeydown = this.onkeyDown;
  }

  componentDidUpdate() {
    this.checkIfHitWall();
    this.checkIt();
    this.ifFoodEat();
  }
  ifFoodEat() {
    let head = this.state.SnakePosition[this.state.SnakePosition.length - 1];
    if (this.state.food[0] === head[0] && this.state.food[1] === head[1]) {
      this.setState(prevState => {
        return {
          food: randomCoordinate(),
          count: prevState.count + 1
        }
      });
      this.enlarge();
      this.increaseSpeed();
    }
  }
  enlarge() {
    let snakePos = [...this.state.SnakePosition];
    snakePos.unshift([snakePos]);
    this.setState({
      SnakePosition: snakePos,
    });
  }
  increaseSpeed() {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 10,
      });
    }
  }

  checkIt() {
    let pos = [...this.state.SnakePosition];
    let head = pos[pos.length - 1];
    pos.pop();
    pos.forEach((dot) => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        this.gameOver();
      }
    });
  }
  checkIfHitWall() {
    let snakePos = [...this.state.SnakePosition];
    let head = this.state.SnakePosition[this.state.SnakePosition.length - 1];
    if (head[0] > 99 || head[1] > 99 || head[0] < 0 || head[1] < 0) {
      this.gameOver();
    }
  }
  gameOver() {
    alert("Game Over");
    this.setState({
      start: false,
      count: 0,
      speed: 200,
      direction: "RIGHT",
      food: randomCoordinate(),
      SnakePosition: [
        [0, 0],
        [2, 0],
      ],
    });
  }
  onkeyDown = (e) => {
    e = e || window.event;
    if (this.state.start === true) {
      switch (e.keyCode) {
        case 37:
          this.setState({ direction: "LEFT" });
          break;
        case 38:
          this.setState({ direction: "UP" });
          break;
        case 39:
          this.setState({ direction: "RIGHT" });
          break;
        case 40:
          this.setState({ direction: "DOWN" });
          break;
        case 65:
          this.setState({ direction: "LEFT" });
          break;
        case 87:
          this.setState({ direction: "UP" });
          break;
        case 68:
          this.setState({ direction: "RIGHT" });
          break;
        case 83:
          this.setState({ direction: "DOWN" });
          break;
        case 32:
          alert("Paused");
          break;
      }
    }
  };
  handleKeyPress = () => {
    if (this.state.start === true) {
      let snakePos = [...this.state.SnakePosition];
      let head = snakePos[snakePos.length - 1];
      switch (this.state.direction) {
        case "LEFT":
          head = [head[0] - 2, head[1]];
          break;
        case "UP":
          head = [head[0], head[1] - 2];
          break;
        case "RIGHT":
          head = [head[0] + 2, head[1]];
          break;
        case "DOWN":
          head = [head[0], head[1] + 2];
          break;
      }
      snakePos.push(head);
      snakePos.shift();
      this.setState({
        SnakePosition: snakePos,
      });
    }
  };

  render() {
    return (
      <div>
        <input className="score" type="number" value={this.state.count} disabled />
        <div className="container snake-Arena">
          <Snake Snakedot={this.state.SnakePosition} />
          <Food food={this.state.food} />
        </div>

        <div className="button-container" style={{ marginTop: '40px' }}>
          <button className="btn" onClick={this.startGame}>Play</button>
          <button className="btn" onClick={this.stopGame}>Pause</button>
        </div>
      </div>
    );
  }
}

export default SnakeGame;
