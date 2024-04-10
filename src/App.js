import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';


function App() {

  const ALL_OPERATIONS = ['+','-','x','/','='];

  const [showEquation , setShowEquation] = useState('');
  const [number, setNumber] = useState('');
  const [numbers , setNumbers] = useState([]);
  const [operations ,setOperations] = useState([]);
  const [showResult , setShowResult] = useState();
  const [error, setError] = useState(false);


  const setInformation =(info)=>  {

    setShowEquation(showEquation+info+"");


    if(ALL_OPERATIONS.includes(info)) {

      operations.push(info);
  
      if(number !== '') { 
        numbers.push(number);
        setNumber('');   
      } else {
        setError(true);
      }
    } else {

      setNumber(number+info);
  
    }

    if( info === '='){
      calculateResult();
    }
  
}

  const calculateResult =()=> {


    let next_operand = '' ;
    let result= numbers[0];
    
    for(let i = 0; i< numbers.length; i++) {

      next_operand= numbers[i+1];
      
      switch(operations[i]) {
        case "+" :
          result =  addOperation(result,next_operand);
          break;
        case "-" :
          result =  subtractOperation(result,next_operand);
          break;
        case "x" :
          result =  multiplyOperation(result,next_operand);
          break;
        case "/" :
          result =  divideOperation(result,next_operand);
          break;
      }

    }

    setShowResult(result);
    

  }
  
  const divideOperation =(operand1 ,operand2)=> {

    let result;
    result= Number(operand1) / Number(operand2);
    return result ;

  }

  const multiplyOperation =(operand1 ,operand2)=> {

    let result;
    result = Number(operand1) * Number(operand2); 
    console.log(result);
    return result;

  }

  const subtractOperation =(operand1 ,operand2)=> {

    let result;
    result = Number(operand1) - Number(operand2);
    return result;

  }

  const addOperation =(operand1 ,operand2)=> {

    let result;
    result = Number(operand1) + Number(operand2);
    return result;

  }

  const clearScreen = () => {

    setShowEquation('');
    setShowResult();
    setError(false);
    setNumbers([]);
    setOperations([]);
 
  }


  return (
    <div class="top-container">
    
    <div class="result-container">

      <div class="result-field">
        
        <h2>{error?"Please set correct form":showEquation}</h2>
        <h2>{error?"form":showResult}</h2>
      </div>

      <div class="btn-clear" onClick={()=> {clearScreen()}}>
        C
      </div> 

    </div>

    <div class="grid-container">
      <div class="grid-item upper-left-corner" onClick={()=>{setInformation('1')}}>1</div>
      <div class="grid-item" onClick={()=>{setInformation('2')}}>2</div>
      <div class="grid-item" onClick={()=>{setInformation('3')}}>3</div>  
      <div class="grid-item upper-right-corner" onClick={()=>{setInformation('/')}}>/</div> 
      <div class="grid-item" onClick={()=>{setInformation('4')}}>4</div>
      <div class="grid-item" onClick={()=>{setInformation('5')}}>5</div>
      <div class="grid-item" onClick={()=>{setInformation('6')}}>6</div>  
      <div class="grid-item" onClick={()=>{setInformation('x')}}>x</div>
      <div class="grid-item" onClick={()=>{setInformation('7')}}>7</div>
      <div class="grid-item" onClick={()=>{setInformation('8')}}>8</div> 
      <div class="grid-item" onClick={()=>{setInformation('9')}}>9</div>
      <div class="grid-item" onClick={()=>{setInformation('-')}}>-</div>
      <div class="grid-item lower-left-corner" onClick={()=>{setInformation('0')}}>0</div> 
      <div class="grid-item" onClick={()=>{setInformation('.')}}>.</div>
      <div class="grid-item" onClick={()=>{setInformation('=')}}>=</div>
      <div class="grid-item lower-right-corner" onClick={()=>{setInformation('+')}}>+</div> 
    </div>

    </div>

  );
}

export default App;
