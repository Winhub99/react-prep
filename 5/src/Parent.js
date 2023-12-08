import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [data,setData] = useState({
        name:"?",
        email:"?"

    })
    const sendData =(data)=>{
        setData(data)
    }
  return (
    <div>
      This is the parent component
      <Child sendData={sendData}/>
      <div>
        <h2>The Child has sent the data as:</h2>
        <strong>{data.name},{data.email}</strong>
      </div>
    </div>
  )
}

export default Parent
