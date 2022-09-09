import React from "react";
import { useState } from "react";

//so my current idea is to take the current state which would be 0 everytime this component
//is rendered, and have buttons that would change the state depending on what is clicked
//for the operators, I will have to brainstorm some more.

const Calculator = () => {

    //starting state is an empty string
    const [stateChange, setStateChange] = useState('');
    const [operatorChange, setOperatorChange] = useState('')
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);

    //test for using innerText to grab the number values for calculator
    //adding the values to current state seems to get what I want
    //im not sure if itll play out how I want though going forward but this is just
    //brainstorming atm

    const testStateChange = (e) => {
        if (e.target.innerText === 'Cl') {
            setStateChange('')
        }
        else {
            setStateChange(stateChange + e.target.innerText);
        }
    }

    const handleOperators = (e) => {
        if (e.target.innerText === '+' || '-' || '*' || '/') {
            setOperatorChange(e.target.innerText);
            setFirstNumber(stateChange);
            setStateChange('');
        }
    }

    //assign result to current state
    const getResult = () => {
        setStateChange(stateChange);
        console.log(stateChange);
        console.log(operatorChange);
        console.log(firstNumber);
    }

    return(
        <div className="calculator-styling">
            <h1>Calculator</h1>
            <h2 id="output">{stateChange}</h2>
            <div className="calculator-digits">
                <button onClick={testStateChange} id='test-button'>1</button>
                <button onClick={testStateChange} id='test-button'>2</button>
                <button onClick={testStateChange} id='test-button'>3</button>
                <button onClick={testStateChange} id='test-button'>4</button>
                <button onClick={testStateChange} id='test-button'>5</button>
                <button onClick={testStateChange} id='test-button'>6</button>
                <button onClick={testStateChange} id='test-button'>7</button>
                <button onClick={testStateChange} id='test-button'>8</button>
                <button onClick={testStateChange} id='test-button'>9</button>
                <button onClick={handleOperators} id='test-button'>+</button>
                <button onClick={handleOperators} id='test-button'>-</button>
                <button onClick={handleOperators} id='test-button'>/</button>
                <button onClick={handleOperators} id='test-button'>*</button>
                <button onClick={getResult} id='test-button'>=</button>
                <button onClick={testStateChange} id='test-button'>Cl</button>
            </div>

        </div>
    )
}

export default Calculator;