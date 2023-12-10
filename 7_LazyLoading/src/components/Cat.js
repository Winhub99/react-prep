import React from 'react'

const Cat = (props) => {
  return (
    <div className='cat'>
        <img alt='cat' src={props.data.image}></img>
        <h5 style={{textAlign:"center"}}>{props.data.name}</h5>
    </div>
  )
}

export default Cat
