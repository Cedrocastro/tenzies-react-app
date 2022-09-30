import React from "react"
import FaceOne from "./DieFaces/FaceOne"
import FaceTwo from "./DieFaces/FaceTwo"
import FaceThree from "./DieFaces/FaceThree"
import FaceFour from "./DieFaces/FaceFour"
import FaceFive from "./DieFaces/FaceFive"
import FaceSix from "./DieFaces/FaceSix"

export default function Die(props) {

   
    
    return (
        <div>
         {props.value === 1 && <FaceOne isHeld={props.isHeld} holdDice={props.holdDice} />}
         {props.value === 2 && <FaceTwo isHeld={props.isHeld} holdDice={props.holdDice} />}
         {props.value === 3 && <FaceThree isHeld={props.isHeld} holdDice={props.holdDice} />}
         {props.value === 4 && <FaceFour isHeld={props.isHeld} holdDice={props.holdDice} />}
         {props.value === 5 && <FaceFive isHeld={props.isHeld} holdDice={props.holdDice} />}
         {props.value === 6 && <FaceSix isHeld={props.isHeld} holdDice={props.holdDice} />}
        </div>
    )    
    
}