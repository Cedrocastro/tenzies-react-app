import React from "react";

export default function FaceOne(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div 
            class="face one"
            style={styles}
            onClick={props.holdDice}
        >
            <div class="dot"></div>
        </div>
    )
}