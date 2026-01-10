/*
TASK:
Create a simple counter component.

Requirements:
- Display a number
- Button to increase count
- Button to decrease count
- Use useState hook
*/

import { useState } from "react";

function Counter(){

    const [counter, setCounter] = useState(0);
    const handleIncrease = () => {
        setCounter(counter + 1);
    };
    
    const handleDecrease = () => {
        setCounter(counter - 1);
    };


    return (
      <>
      <center>
                <h2>Count: {counter}</h2>
                <button onClick={handleIncrease}>Increase</button>
                <button onClick={handleDecrease}>Decrease</button>
      </center>
      
      </>
    );
}

export default Counter;
