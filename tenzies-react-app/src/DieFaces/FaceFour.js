import React from "react";

export default function FaceFour(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div 
            class="face four"
            style={styles}
            onClick={props.holdDice}
        >
            <div class="container">
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <div class="container">
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
    )
}