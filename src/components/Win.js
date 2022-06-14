import React from "react";
import '../css/win.css'
import ConfettiGenerator from "confetti-js";

export default function Win (props) {

    React.useEffect(() => {
        const confettiSettings = { target: 'win' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
       
        return () => confetti.clear();
      }, []) 

    return (
        <>
            <div className={`win-container ${props.win ? "" : "none"}`}>
                <div className={`win-background ${props.win ? "" : "none"}`}></div>
                <canvas id="win" className={`win ${props.win ? "" : "none"}`}></canvas>
                <div className={`you-win ${props.win ? "" : "none"}`}>You win!</div>
                <button className={`win-button ${props.win ? "" : "none"}`} onClick={props.newGame}>New Game</button>
            </div>
        </>
        
        
    )
}