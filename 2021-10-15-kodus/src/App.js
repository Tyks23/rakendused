import React from 'react';
import Greetings from "./Components/Greetings";
import MathComponent from "./Components/MathComponent";
import './App.css';

function App() {
  
 

  return (
    <div className="App">
      <Greetings name={"Jeffery Bezos"}/>
      <MathComponent number={5} number2={4} />
    

    </div>
    
  );
}

export default App;
