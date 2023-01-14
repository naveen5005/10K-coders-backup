import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import {  } from "../CSS/calculator.css";
const CalculatorApp = () => {
    const[result,setResult] = useState("");
    const inputRef = useRef(null);

    useEffect(()=> inputRef.current.focus())
    const handleClick=(e)=>{
        setResult(result.concat(e.target.name));
    }
    const addClick =()=>{
        console.log("result", result)
    }
    const clearData=()=>{
        setResult("")
    };
    const backspace=()=>{
        setResult(result.slice(0 ,  -1));
    };

    const Calculating=()=>{
        try{
            setResult(eval(result).toString());
        } catch(err){
            setResult("Invalid")
        }
    };
    return (
        <div className='container'>
        <div className="first-conatiner">
            <h2>Calculator</h2>
            <form action="">
                <input type="text" value={result} ref={inputRef} id="display" />
            </form>
        </div>
        <div className="button numbers">
            <button name='7' onClick={(e)=>{handleClick(e)}} type="button">7</button>
            <button name="8" onClick={(e)=>{handleClick(e)}} type="button">8</button>
            <button name="9" onClick={(e)=>{handleClick(e)}} type="button">9</button>
            <button name="*" onClick={(e)=>{handleClick(e)}} type="button">*</button>
            <button name="4" onClick={(e)=>{handleClick(e)}} type="button">4</button>
            <button name="5" onClick={(e)=>{handleClick(e)}} type="button">5</button>
            <button name="6" onClick={(e)=>{handleClick(e)}} type="button">6</button>
            <button name="-" onClick={(e)=>{handleClick(e)}} type="button">-</button>
            <button name="1" onClick={(e)=>{handleClick(e)}} type="button">1</button>
            <button name="2" onClick={(e)=>{handleClick(e)}} type="button">2</button>
            <button name="3" onClick={(e)=>{handleClick(e)}} type="button">3</button>
            <button name="+" onDoubleClick={addClick} onClick={(e)=>{handleClick(e)}} type="button">+</button>
            <button name="0" onClick={(e)=>{handleClick(e)}} type="button">0</button>
            <button name="." onClick={(e)=>{handleClick(e)}} type="button">.</button>
            <button onClick={backspace}  type="button">C</button>
            <button  type="button">Del</button>
            <button  type='button' name='/' onClick={(e)=>{handleClick(e)}}>%</button>
            <button type='button' onClick={clearData}>clear</button>
            <button  onClick={Calculating} type="button" id='equal'>=</button>
        </div>
    </div>
    )
}

export default CalculatorApp
