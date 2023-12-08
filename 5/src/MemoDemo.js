import React, { useMemo, useState } from 'react'
import {generatePrime} from "./utils/PrimeNums"

const MemoDemo = () => {
    const [num , setNum]= useState(0)
    const  [darkTheme, setDarkTheme] = useState(false)
    const divStyle={
        background: darkTheme?"black":"white"
    }
    const lastPrime= useMemo (()=>generatePrime(num),[num])
    let len=0;
     //   console.log(generatePrime(10))
        const handleSubmit=()=>{
            console.log("generating...")
             len=generatePrime(num)
             console.log("the length of array retirned is: "+ len)
        }

        const changeTheme=()=>{
            console.log("chaging theme")
            if(darkTheme){
                setDarkTheme(false)
            }else{
                setDarkTheme(true)
            }
        }
  return (
    <div style={divStyle}>
      <input type='number' value={num} placeholder='enter how many numbers you want' onChange={e=> setNum (parseInt(e.target.value))}/>
      <button onClick={()=>{handleSubmit(num)}}>Generate</button>
      <button onClick={changeTheme}>change</button>
      <div>
        {console.log("rendering-----")}
        {lastPrime}
      </div>
    </div>
  )
}

export default MemoDemo
