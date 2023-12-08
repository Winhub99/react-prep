import ReactDOM  from "react-dom/client"
import Parent from "./Parent"
import MemoDemo from "./MemoDemo"
import MemoHOC from "./MemoHOC"

const app = ReactDOM.createRoot(document.getElementById("container"))
app.render(<MemoHOC/>)
