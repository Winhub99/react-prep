import React, { useMemo, useState } from 'react'

const MyComponent =({prop1,prop2})=>{
console.log("rendering Mycomponent....")
return(
    <div>
        <h5>prop 1: {prop1}</h5>
        <h5>prop 2: {prop2}</h5>
    </div>
)
    
}

const MemoizedMyComponent = React.memo(MyComponent)

const MemoHOC = () => {
    console.log("Rendering MemoHoc the parent")
    const [data,setData] = useState({
        name:"shabs",
        age:25
    })
   
    const [isVisible,setIsVisible] = useState(false)
    const toggle=()=>{
        console.log("Toggle invoked")
        setData({
            name:"shabs",
            age:58
        })

        if(isVisible)
        setIsVisible(false)
    else
    setIsVisible(true)
    }
  return (

    <div>
      <h1> This is the parent component</h1>
      <button onClick={toggle}>Toggle</button>
      <MyComponent prop1={data.name} prop2={data.age}/>
      <MemoizedMyComponent prop1={data.name} prop2={data.age}/>
      <h4>This should be visble:{isVisible}</h4>

    </div>
  )
}

export default MemoHOC
