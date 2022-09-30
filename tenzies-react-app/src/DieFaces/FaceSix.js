import React from "react";

export default function FaceSix(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return(
        <div 
            class="face six"
            style={styles}
            onClick={props.holdDice}
        >
            <div class="container">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            </div>
            <div class="container">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            </div>
        </div>
    )
}