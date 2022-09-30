import React from "react";

export default function GameStart(props) {
    
    return(
        <div className="start">
            <h1 className="title" id="home-title">SCORES</h1>
            <div>
                <p 
                   className="instructions" 
                   id="home-p"
                > 
                    Time : {props.minutes < 10 ? "0" + props.minutes : props.minutes} : {props.seconds < 10 ? "0" + props.seconds : props.seconds} 
                </p>
                <p 
                    className="instructions" 
                    id="home-p"
                >
                    Tracked rolls : {props.count < 10 ? "0" + props.count : props.count}
                </p>
                {/* <button onClick={props.stopTimer}>stop</button> */}
            </div>
            <button className="start-button" onClick={props.start}>Start Game</button>
        </div>
    )
}