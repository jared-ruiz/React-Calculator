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
        //Prevent multiple decimals from appearing by checking if current state already contains a '.'
        if (stateChange.includes('.') && e.target.value === '.') {
            return stateChange;
        }

        //This took a while to brainstorm but if current state SOLELY equals the initial '0', set state to newest digit
        //afterwards, all following digits will be added to previous state. This removes the trailing '0' issue I had
        if (stateChange === '0') {
            setStateChange(e.target.value);
        }
        else {
            setStateChange(stateChange + e.target.value);
        }   
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

        //assign state values as variables for later math, parseFloat to handle decimal numbers as well
        var num1 = parseFloat(firstNumber)
        var num2 = parseFloat(stateChange);

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
                <button onClick={handleButtonClicks} className='button-styling' value='.'>.</button>
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