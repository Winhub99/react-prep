//alert("js Added")
import  ReactDOM from "react-dom/client"
import React, { useState } from 'react'
import {themeContext} from "./ThemeContext"
import Consumer from "./Consumer"

const Component = () => {
    const [isDarkMode,setIsDarkMode] = useState(false)
  return (
    
    <themeContext.Provider value={{isDarkMode,setIsDarkMode}}>
    <div>
        <Consumer/>
    </div>
    </themeContext.Provider>
  )
}


const app = ReactDOM.createRoot(document.getElementById("container"))


app.render(<Component/>)