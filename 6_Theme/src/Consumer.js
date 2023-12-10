import React, { useContext, useState } from 'react'
import { themeContext } from './ThemeContext'

const Consumer = () => {
    const {isDarkMode,setIsDarkMode} = useContext(themeContext)
   // const[style,setStyle] = useState({}) 
   
    const toggleTheme=()=>{
      console.log("The dark mode is set :"+ isDarkMode)
      if(!isDarkMode){
        // setStyle({  background:"black",
        // color:"white"})
        document.body.style.background="black"
        document.body.style.color="white"
        setIsDarkMode(true)
      }else {
        // setStyle({  background:"white",
        // color:"black"})
        document.body.style.background="white"
        document.body.style.color="black"
        setIsDarkMode(false)
      }
      

    }
  return (
    // <div style={style}>
    <div>
      The is the page
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

export default Consumer
