import React from "react"

const Greeting = (props) => {
    const { name } = props

    return( 
    <>
        <h1>Greeting {props.name}</h1>
        <p>Greetings Text</p>
    </>
    )
}

export default Greeting