



import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum.toString());
  };

  const handleSubtraction = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference.toString());
  };

  const  handleMultiplication = () => {
    const product =  parseFloat(num1) * parseFloat(num2) ;
    setResult(product.toString());
  };

  const handleDivision = () => {
    if (num2 !== '0') {
      const quotient = parseFloat(num1) / parseFloat(num2);
      setResult(quotient.toString());
    } else {
      setResult('Error: Division by zero');
    }
  };

  return (
    <div style={{color:'pink'}}>
      <h1 style={{textAlign:'center',color:"red",fontSize:'50px',background:'blue'}}>Calculator</h1>
      <input
      style={{ color:"red",fontSize:'2vw',marginLeft:'40%'}}
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter the first number"
      />
      <br></br>
      <input
      style={{color:"red",fontSize:'2vw',marginLeft:'40%',marginTop:'5%'}}
        type  ="number"
        value   ={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter the second number"
      />
      <br></br>
      <button onClick={handleAddition}style={{marginLeft:"40%",color:'blue',marginTop:'3%',fontSize:'25px'}}>Add  + </button>
      <button onClick={handleSubtraction} style={{margin:"10px",color:'blue',fontSize:'25px'}}>Subtract  -</button>
      <button onClick={handleMultiplication}style={{margin:"10px",color:'blue',fontSize:'25px'}}>multi  *</button>
      <button   onClick={handleDivision}style={{margin:"10px",color:'blue',fontSize:'25px'}}>Divide   /</button>
      <p style={{textAlign:'center',fontSize:'3vw'}}>Result: {result}</p>
    </div>
  );
}

export default Calculator;


