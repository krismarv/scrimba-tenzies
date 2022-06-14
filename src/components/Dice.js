import React from "react";
import '../css/dice.css';

export default function Dice(props) {

    return (
        <div id="dice-canvas">
            {props.dice.map((dice)=> <div id={dice.id} className={`dice ${dice.stopped ? "stopped" : ""}`} key={dice.id} onClick={props.hold}>{dice.number}</div>)}
        </div>
    )
}