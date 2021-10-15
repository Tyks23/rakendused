import React, { useState } from "react"

const MathComponent = ({ number, number2 }) => {
   

  function isEven(n) {
    if(n % 2 == 0)
      return true;
    else
      return false;
    }

    let numAns = number+number2;
  
    return (
      <>
      <h1>{number} + {number2} is {numAns}</h1>
      {numAns  % 2 == 0 &&
        <h2>
          See arv on Paaris.
        </h2>
      }
      {numAns  % 2 == 1 &&
        <h2>
          See arv on Paaritu.
        </h2>
      }
      </>
    )
  }

  export default MathComponent;