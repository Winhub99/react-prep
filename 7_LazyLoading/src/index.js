import ReactDOM   from "react-dom/client"
import Home from "./components/Home"

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import About from "./components/About"
import React, { Suspense } from "react"
const MainComponent = React.lazy(()=>(import("./components/MainComponent")))

const AppRouter = ()=>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>

                    <Route path="about" element={<About/>} ></Route>
                    <Route path="mainContent" element={
                         <Suspense fallback={<div>...Loading</div>}><MainComponent/></Suspense>
                         }></Route>
            </Routes>
        </Router>
    )
}
const app = ReactDOM.createRoot(document.getElementById("container"))
app.render(<AppRouter/>)