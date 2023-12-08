import React from 'react'

const Child = (props) => {
const user={
    name:"Peter Parker",
    email:"pete@spidey"
}

const handleClick=()=>{
    props.sendData(user)
}
  return (
    <div>
      This is the child component
      <button onClick={handleClick}>Send</button>
    </div>
  )
}

export default Child
