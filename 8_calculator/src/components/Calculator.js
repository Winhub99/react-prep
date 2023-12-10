import React, { useState } from 'react'

const Calculator = () => {
    const [num1,setNum1] = useState(0)
    const [num2,setNum2] = useState(0)
    const [result,setResult] = useState(0)
    const [text,setText] = useState("")
    const addInputs=()=>{
        setResult(num1+num2)

    }
    const subInputs=()=>{
        setResult(num1-num2)

    }
    const mulInputs=()=>{
        setResult(num1*num2)

    }
    const divInputs=()=>{
        setResult(num1/num2)
    }

    const validateInput=(e)=>{
        
        const myText= e.target.value
        setText(myText)
        if(myText.length<1){
            console.log("text must be altest 1 char long")
        }else if(myText.length>10){
            console.log(" text Cn't be too long")
        }
    }
    return (
    <div className='calculator' >
      <h2 style={{textAlign:"center"}}>Calculator</h2>
      <div className='inputs'>
        <input className='input-box' value={num1} type='number' onChange={e=>setNum1(parseInt(e.target.value))}/>
        <input className='input-box' value={num2} type='number' onChange={e=>setNum2(parseInt (e.target.value))}/>
        <input className='input-box' value={result} type='number' onChange={e=>setNum2(e.target.value)}/>
        <input className='input-box' value={text} type='text' onChange={validateInput}/>

      </div>
      <div className='buttons'>
        <button className='button' onClick={addInputs}>Add</button>
        <button className='button'  onClick={subInputs}>Sub</button>
        <button className='button'  onClick={mulInputs}>Mul</button>
        <button className='button'  onClick={divInputs}>Div</button>

      </div>
    </div>
  )
}

export default Calculator
