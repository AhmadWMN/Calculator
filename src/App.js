import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';


function App() {

  const [show , setShow] = useState('');
  const [isFirstOperand,setIsFirstOperand] = useState(true);
  const [operand1,setOperand1] = useState('');
  const [operand2,setOperand2] = useState('');
  const [operation,setOperation] = useState('');
  const [result, setResult] = useState('');



  const setInformation =(info)=>  {

    const operations = ['+','-','x','/'];

    if(operations.includes(info)) {

      setIsFirstOperand(false);
      setOperation(info);    

    } else {

    

    if(isFirstOperand) {

      setOperand1(operand1+""+info);

    } else {

      setOperand2(operand2+""+info);

    }


    if(info ==='='){

      setIsFirstOperand(true);

      switch (operation){

        case '+':

          setResult(addOperation(operand1,operand2));
          break;

        case '-':

          setResult(subtractOperation(operand1,operand2));
          break;
   
        case 'x':

          setResult(multiplyOperation(operand1,operand2));
          break;

        case '/':  

          setResult(divideOperation(operand1,operand2));
          break;
          
      }   
    }

  }

  }

  const divideOperation =(operand1 ,operand2)=> {

    let result;
    result= Number(operand1) / Number(operand2);
    return result ;

  }

  const multiplyOperation =(operand1 ,operand2)=> {

    let result;
    result = Number(operand1) * Number(operand2); 
    return result;

  }

  const subtractOperation =(operand1 ,operand2)=> {

    let result;
    result = Number(operand1) - Number(operand2);
    return result;

  }

  const addOperation =(operand1 ,operand2)=> {

    let result;
    result =Number(operand1) + Number(operand2);
    return result;

  }

  const clearScreen = () => {
    setOperand1('');
    setOperand2('');
    setOperation('');
    setResult('');
  }


  useEffect(()=>{

    setShow(operand1+" "+operation+" "+operand2+" "+result);


    console.log(operand2);
    console.log(result);

  },[operand1,operand2,operation]);




  return (
    <div class="top-container">
    
    <div class="result-container">

      <div class="btn-clear" onClick={()=> {clearScreen()}}>
        C
      </div> 

      <div class="result-field">
        <h2>{show}</h2>
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
      <div class="grid-item" onClick={()=>{setInformation('x')}}>*</div>
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
