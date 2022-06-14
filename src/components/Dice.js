import React from "react";

export default function Dice(props) {

    return (
        <>
            {props.dice.map((dice)=> <div id={dice.id} className={`dice ${dice.stopped ? "stopped" : ""}`} key={dice.id} onClick={props.hold}>{dice.number}</div>)}
        </>
    )
}