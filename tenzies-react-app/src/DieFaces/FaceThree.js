import React from "react";

export default function FaceThree(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }  
    return(
        <div 
            class="face three"
            style={styles}
            onClick={props.holdDice}
        >
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    )
}