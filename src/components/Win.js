import React from "react";

export default function Win (props) {
    return (
        <>
            <div id="win" class={`win ${props.win ? "" : "none"}`}>You win!</div>
            {props.win ? <button onClick={props.newGame}>New Game</button> : ""}
        </>
    )
}