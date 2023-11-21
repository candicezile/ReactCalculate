import React, { useState } from 'react';
import './App.css'; 

function Calculator() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('');

  const buttons = [
    '7','8','9','/',
    '4','5','6','-',
    '1','2','3','*',
    'DEL','_',',','+',
    '(',')','^','sin',
    'cos','tan','(-)','log',
    'AC','.','=','%'

  ]

  const addToInput = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      if (input.includes('sin')) {
        // Handle trigonometric functions separately
        // Example: setResult(Math.sin(/* parse input value here */));
      } else if (input.includes('cos')) {
        // Handle cos function
      } else if (input.includes('tan')) {
        // Handle tan function
      } else if (input.includes('log')) {
        // Handle log function
      } else {
        setResult(eval(input));
      }
    } catch (error) {
      setResult('Error');
    }
  };

  const handleOperator = (operator) => {
    // Handling specific operations when an operator button is clicked
    if (operator === '=') {
      calculateResult();
    } else if (operator === 'AC') {
      clearInput();
    } else if (operator === 'DEL') {
      setInput(input.slice(0, -1));
    } else {
      addToInput(operator);
    }
  };

  return (
  
    <div className="calculator">Can's calculator<br></br><br></br>
    you can solve it!<br></br><br></br>
      <div className="Screen">
      <input type="text" value={input} readOnly />
      <input type="text" value={result} readOnly />
      </div>
      <div className="buttons">
     {buttons.map((btn, index) => (
      <button key={index} onClick={() => handleOperator(btn)}>
        {btn}
      </button>
     ))}


      </div>
    </div>
  );
}

export default Calculator;

