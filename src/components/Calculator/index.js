import React from "react";
import { useState } from "react";

const Calculator = () => {

    //starting state
    const [stateChange, setStateChange] = useState('0');
    const [operatorChange, setOperatorChange] = useState('')
    const [firstNumber, setFirstNumber] = useState('');

    //reset state values
    const handleClear = (e) => {
        setStateChange('0');
        setFirstNumber('');
        setOperatorChange('');
    }

    const handleButtonClicks = (e) => {

        //allows for initial state to remove '0' upon multiple button presses
        //more convienient than having the button grid bounce around from empty state value
        setStateChange(parseFloat(stateChange) + e.target.value);
    }

    const handleOperators = (e) => {
        if (e.target.value === '+' || '-' || '*' || '/') {

            //assign operator state
            setOperatorChange(e.target.value);

            //assign current state to first number
            setFirstNumber(stateChange);

            //clear state for second number
            setStateChange('0');
        }
    }

    const getResult = () => {

        //assign state values as variables for later math, parseInt for clean output
        var num1 = parseInt(firstNumber)
        var num2 = parseInt(stateChange);

        //check if the user used digits, else return error
        if (!firstNumber || !stateChange) {
            return setStateChange('No Digits Were Detected!');
        }

        //calculate addition operator
        if (operatorChange === '+') {
            
            var result = (num1 + num2);
            
            //set state to result
            setStateChange(result);
        }
        //calculate subtraction operator
        else if (operatorChange === '-') {
            
            var result = (num1 - num2);

            //set state to result
            setStateChange(result);
        }
        //calculate division operator
        else if (operatorChange === '/') {

            var result = (num1 / num2);

            //set state to result
            setStateChange(result);
        }
        //calculate multiplication operator
        else {
            var result = (num1 * num2);

            //set state to result
            setStateChange(result);
        }
    }

    //output of state value via h2 element
    return(
        <div className="calculator-styling">
            <h1>Calculator</h1>
            <h2 id="output">{stateChange}</h2>
            <div className="calculator-digits">
                <button onClick={handleButtonClicks} className='button-styling' value='1'>1</button>
                <button onClick={handleButtonClicks} className='button-styling' value='2'>2</button>
                <button onClick={handleButtonClicks} className='button-styling' value='3'>3</button>
                <button onClick={handleButtonClicks} className='button-styling' value='4'>4</button>
                <button onClick={handleButtonClicks} className='button-styling' value='5'>5</button>
                <button onClick={handleButtonClicks} className='button-styling' value='6'>6</button>
                <button onClick={handleButtonClicks} className='button-styling' value='7'>7</button>
                <button onClick={handleButtonClicks} className='button-styling' value='8'>8</button>
                <button onClick={handleButtonClicks} className='button-styling' value='9'>9</button>
                <button onClick={handleOperators} className='button-styling' value='+'>+</button>
                <button onClick={handleOperators} className='button-styling' value='-'>-</button>
                <button onClick={handleOperators} className='button-styling' value='/'>/</button>
                <button onClick={handleOperators} className='button-styling' value='*'>*</button>
                <button onClick={getResult} className='button-styling' value='=' id="equal-button">=</button>
                <button onClick={handleClear} className='button-styling' id="clear-button">Clr</button>
                
            </div>
        </div>
    )
}

export default Calculator;