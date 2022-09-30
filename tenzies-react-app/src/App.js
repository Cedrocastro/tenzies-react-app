import React from "react"
import Die from "./Die"
import GameStart from "./GameStart"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import './style.css';
import { Preview } from "react-mde"

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [startNow, setStartNow] = React.useState(false)
    const[isRunning, setIsRunning] = React.useState(false)
    const [minutes, setMinutes] = React.useState(() => (
            Number(window.localStorage.getItem("minutes")) || 0
    ))
    const [seconds,setSeconds] = React.useState(() => (
        Number(window.localStorage.getItem("seconds")) || 0
    ))
    const [count, setCount] = React.useState(() =>
        Number(window.localStorage.getItem("count")) || 0
    )
    
    React.useEffect(() => {
        window.localStorage.setItem("seconds", (seconds))

    }, [seconds])

    React.useEffect(() => {
        window.localStorage.setItem("minutes", (minutes))

    }, [minutes])

    React.useEffect(() => {
        window.localStorage.setItem("count", (count))
    }, [count])

    const Timer =  React.useRef()

    React.useEffect(() => {
        if (isRunning && !tenzies)
        {Timer.current = setInterval(() => {
            setSeconds(seconds + 1);
            if(seconds === 59) {
                setMinutes(minutes + 1)
                setSeconds(0)
            }
        }, 1000)} 
        
        return () => clearInterval(Timer.current)
    },)

    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }

    function clicked() {
        setCount(count + 1)
    }

    function startTimer() {
        setIsRunning(true)
        setSeconds(0)
        setMinutes(0)
    }


   /*  function stopTimer() {
        clearInterval(Timer.current)
        setIsRunning(false)
    } */
    
    function rollDice() {
        if(!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }
            ))
            clicked()

        } else {
            setTenzies(true)
            setDice(allNewDice())
            setStartNow(false)
            /* stopTimer() */
        }    
    }

    
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }

    function start() {
        setSeconds(0)
        setMinutes(0)
        setStartNow(true)
        setCount(0)
        startTimer()
        setTenzies(false)
    }


    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
    
    return (
        <div className="main">
            {startNow ?
            (
                <main>
                    {tenzies && <Confetti />}
                    <div className="top-head">
                        <p className="score-detail1">
                            Time : {minutes < 10 ? "0" + minutes : minutes} : {seconds < 10 ? "0" + seconds : seconds}
                        </p>
                        <h1 className="title">Tenzies</h1>
                        <p className="score-detail2">
                            Rolls : {count < 10 ? "0" + count : count}
                        </p>
                    </div>
                    <p className="instructions">Roll until all dice are the same. 
                    Click each die to freeze it at its current value between rolls.</p>
                    <div className="dice-container">
                        {diceElements}
                    </div>

                    <button 
                        className="roll-dice" 
                        onClick={rollDice}
                    >
                        {tenzies ? "New Game" : "Roll"}
                    </button>
                    
                </main>
            ) : <GameStart start={start} seconds={seconds} minutes={minutes} count={count} />
            }
        </div>
    )
}