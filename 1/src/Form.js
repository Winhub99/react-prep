import React, { useState}  from "react" 

console.log("Form Added successfully")

const Form=()=>{
    const [formInput , setFormInput] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        console.log("i was called")

        alert("My name is :"+ formInput)

    }
    const handleChange =(e)=>{
        setFormInput(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
           Anything: <input 
           type="text"
            placeholder="Enter anything"
            value={formInput}
            onChange={handleChange} />
                     <button type="submit">Submit</button>
        </form>
    )
}

export default Form;