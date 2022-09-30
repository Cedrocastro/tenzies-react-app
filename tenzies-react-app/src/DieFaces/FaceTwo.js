import React from "react";

export default function FaceTwo(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return(
        <div 
            class="face two"
            style={styles}
            onClick={props.holdDice} 
        >
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    )
}