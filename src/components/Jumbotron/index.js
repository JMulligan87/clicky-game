import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="row">
      <div className="jumbotron">
        <h1 className="text-center">Clicky Game</h1>
        <h3 className="text-center">Try not to click the same image twice!</h3>
        <h4 className="text-center">Current Score:"" | Highest Score: ""</h4>
      </div>
    </div>
  );
}

export default Jumbotron;