import React from "react";
import { useState } from "react";

//so my current idea is to take the current state which would be 0 everytime this component
//is rendered, and have buttons that would change the state depending on what is clicked
//for the operators, I will have to brainstorm some more.

const Calculator = () => {

    //test stateChange
    const [stateChange, setStateChange] = useState('0');

    //test for using innerText to grab the number values for calculator
    const testStateChange = (e) => {
        if (e.target.innerText === 'Clear') {
            setStateChange('0')
        }
        else {
            setStateChange(e.target.innerText);
        }
    }

    return(
        <div className="calculator-styling">
            <h1>Calculator</h1>
            <h2 id="output">{stateChange}</h2>
            <button onClick={testStateChange} id='test-button'>Test</button>
            <button onClick={testStateChange} id='test-button'>Test2</button>
            <button onClick={testStateChange} id='test-button'>Clear</button>
        </div>
    )
}

export default Calculator;