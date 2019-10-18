import React from "react";
import "./style.css";

function ClickGame(props) {
    return (
        <div className="card" onClick={props.onClick}>
            <img alt={props.name} src={props.image} />
        </div>
    );

}



export default ClickGame;
