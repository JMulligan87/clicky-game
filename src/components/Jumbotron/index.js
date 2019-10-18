import React, { Component } from "react";
import "./style.css";

class Jumbotron extends Component {

  state = {
    currentScore: 0,
    highScore: 0
  };

  

  render() {
    return (
      <div className="row">
        <div className="jumbotron">
          <h1 className="text-center">Clicky Game</h1>
          <h3 className="text-center">Try not to click the same image twice!</h3>
          <h4 className="text-center">Current Score: {this.state.currentScore} <br/> Highest Score: {this.state.highScore}</h4>
        </div>
      </div>
    );

  }
}

export default Jumbotron;