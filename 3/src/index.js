import ReactDOM  from "react-dom/client"
import CustomRouter from "./routes/CustomBrowserRouter"
import {RouterProvider} from "react-router-dom"
import AppRouter from "./routes/AppRouter"

const app=ReactDOM.createRoot(document.getElementById("root"))
// app.render( <RouterProvider router={CustomRouter}/>)
app.render(<AppRouter/>)


