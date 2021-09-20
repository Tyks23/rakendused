import React from "react";
import {useState} from "react";

function Fun({magicNumber, setMagicNumber, amount = 1}){
    const [counter, setCounter] = React.useState(0)
    
    const addNumber = () => {
        setCounter(counter + 1)
    }
    const increaseMagicNumber = () =>{
        setMagicNumber(magicNumber + 1)
    }
    return(
        <>
            <h1>Fun counter { counter }</h1>
            <button onClick={addNumber}>Add 1</button>
            <button onClick={() => setCounter(setCounter - 1)}>Remove 1</button>
            <button onClick={increaseMagicNumber}>Add 1 to magic number</button>
            
        </>
    )
}

export default Fun;