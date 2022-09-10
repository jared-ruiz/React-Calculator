import React from "react";
import { useState } from "react";

//so my current idea is to take the current state which would be 0 everytime this component
//is rendered, and have buttons that would change the state depending on what is clicked
//for the operators, I will have to brainstorm some more.

const Calculator = () => {

    //starting state to simply zero to start with
    const [stateChange, setStateChange] = useState('0');
    const [operatorChange, setOperatorChange] = useState('')
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');

    //test for using innerText to grab the number values for calculator
    //adding the values to current state seems to get what I want
    //im not sure if itll play out how I want though going forward but this is just
    //brainstorming atm

    const handleClear = (e) => {
        setStateChange('0');
        setFirstNumber('');
        setSecondNumber('');
        setOperatorChange('');
    }

    const handleButtonClicks = (e) => {
        setStateChange(stateChange + e.target.value);
    }

    //Currently I want to clear the state whenever an operator is clicked so I can assign 
    //the next button presses to number 2
    const handleOperators = (e) => {
        if (e.target.value === '+' || '-' || '*' || '/') {

            //assign operator state
            setOperatorChange(e.target.value);

            //assign current state to first number
            setFirstNumber(stateChange);

            //clear state for second number
            setStateChange('');
        }
    }

    //assign result to current state
    //ill see if I can assign state to number 2, do the math THEN update state again all in
    //one go
    const getResult = () => {
        
        //assign secondNumber with newest state
        setSecondNumber(stateChange);

        //calculate based on which operator was selected
        if (operatorChange === '+') {
            var num1 = parseInt(firstNumber)
            var num2 = parseInt(stateChange);
            var result = (num1 + num2);
            console.log(result);
            setStateChange(result);
        }

        console.log(stateChange, firstNumber);
    }

    return(
        <div className="calculator-styling">
            <h1>Calculator</h1>
            <h2 id="output">{stateChange}</h2>
            <div className="calculator-digits">
                <button onClick={handleButtonClicks} id='test-button' value='1'>1</button>
                <button onClick={handleButtonClicks} id='test-button' value='2'>2</button>
                <button onClick={handleButtonClicks} id='test-button' value='3'>3</button>
                <button onClick={handleButtonClicks} id='test-button' value='4'>4</button>
                <button onClick={handleButtonClicks} id='test-button' value='5'>5</button>
                <button onClick={handleButtonClicks} id='test-button' value='6'>6</button>
                <button onClick={handleButtonClicks} id='test-button' value='7'>7</button>
                <button onClick={handleButtonClicks} id='test-button' value='8'>8</button>
                <button onClick={handleButtonClicks} id='test-button' value='9'>9</button>
                <button onClick={handleOperators} id='test-button' value='+'>+</button>
                <button onClick={handleOperators} id='test-button' value='-'>-</button>
                <button onClick={handleOperators} id='test-button' value='/'>/</button>
                <button onClick={handleOperators} id='test-button' value='*'>*</button>
                <button onClick={getResult} id='test-button' value='='>=</button>
                <button onClick={handleClear} id='test-button'>Cl</button>
            </div>
        </div>
    )
}

export default Calculator;