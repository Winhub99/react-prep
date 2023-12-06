import React, { useState } from 'react'

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    contact:""
  })

  let data =[{}];
  const handleInput=(e)=>{
    console.log(e.target)
    const {name , value} = e.target;
    setFormData((prevFormData)=>({...prevFormData,[name]:value}))
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("submit called")
    data.push(formData)
    console.log(formData)
  }
  return (
    <div className='w-5/12 h-48  bg-red-500 mx-auto my-1 pt-2 rounded-lg'>
      <form className='flex flex-col p-1' onSubmit={handleSubmit}>
        <input className='p-1 m-1' type='text' value={formData.field} onChange={handleInput} placeholder='Enter your name' name="name"/>
        <input className='p-1 m-1' value={formData.email} onChange={handleInput} placeholder='Enter your email' name="email"/>
        <input  className='p-1 m-1' value={formData.contact} onChange={handleInput} placeholder='Entyer your Contact number' name="contact"/>
        <div className='flex justify-center'> <button className='m-1 p-1 bg-green-400 border border-yellow-500 w-16 rounded-md'>Submit</button></div>
      </form>
    </div>
  )
}

export default FormComponent
