import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';


function App() {

  // let operand1 = 0;
  // let operand2 = 0;
  // let result= 0;


  // const [result , setResult] = useState(0);
  const [operand1, setOperand1] = useState(0);
  // const [operand2, setOperand2] = useState(0);
  const [result , setResult] = useState(0);
  const [chooseOperation , setChooseOperation] = useState(false);


  // const setOperand1 =(number)=>  {

  //   operand1 = operand1+""+number;
  //   console.log(operand1)

  // }

  // const setOperand2 =(number)=> {

  //   operand2 = number;
  //   console.log(operand2);
    

  // }

  // const setResult =()=> {

  // }


  const divideOperation =()=> {

  }

  const multiplyOperation =()=> {

  }

  const subtractOperation =()=> {

  }

  const addOperation =()=> {

  }


  useEffect(()=>{

    setResult(operand1);

  },[operand1])

  return (
    <div class="top-container">
    
    <div class="result-container">

      <div class="btn-clear">
        <button>C</button>
      </div> 


      <div class="result-field">
        <h2>{result}</h2>
      </div>

    </div>

    <div class="grid-container">
      <div class="grid-item" onClick={()=>{setOperand1(1)}}>1</div>
      <div class="grid-item" onClick={()=>{setOperand1(2)}}>2</div>
      <div class="grid-item" onClick={()=>{setOperand1(3)}}>3</div>  
      <div class="grid-item" onClick={()=>{setOperand1(1)}}>/</div> 
      <div class="grid-item" onClick={()=>{setOperand1(4)}}>4</div>
      <div class="grid-item" onClick={()=>{setOperand1(5)}}>5</div>
      <div class="grid-item" onClick={()=>{setOperand1(6)}}>6</div>  
      <div class="grid-item" onClick={()=>{setOperand1(1)}}>*</div>
      <div class="grid-item" onClick={()=>{setOperand1(7)}}>7</div>
      <div class="grid-item" onClick={()=>{setOperand1(8)}}>8</div> 
      <div class="grid-item" onClick={()=>{setOperand1(9)}}>9</div>
      <div class="grid-item" onClick={()=>{setOperand1(1)}}>-</div>
      <div class="grid-item" onClick={()=>{setOperand1(0)}}>0</div> 
      <div class="grid-item" onClick={()=>{setOperand1(1)}}>.</div>
      <div class="grid-item" onClick={()=>{setOperand1(1)}}>=</div>
      <div class="grid-item" onClick={()=>{setOperand1(1)}}>+</div>  
    </div>

    </div>

  );
}

export default App;
