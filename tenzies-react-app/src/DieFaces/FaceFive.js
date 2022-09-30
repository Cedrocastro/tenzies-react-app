import React from "react";

export default function FaceFive(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return(
        <div 
            class="face five"
            style={styles}
            onClick={props.holdDice}
        >
            <div class="container">
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <div class="container">
                <div class="dot"></div>
            </div>
            <div class="container">
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
    )
}