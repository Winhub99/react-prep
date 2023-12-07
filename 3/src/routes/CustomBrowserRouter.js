import { Outlet, createBrowserRouter } from "react-router-dom"
import AppLayout from "./AppLayout"
import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar"
import WatchPage from "../components/WatchPage";
import LiveChat from "../components/LiveChat";
// const CustomRouter = createBrowserRouter([
//     {
//         path:"/",
//         element:<AppLayout/>,
//         children:[
//             {
//                 path:"/",
//                 element:
//                     <>
//                     <Outlet/>
//                     <MainContent/>
//                     </>,
//                 children:[
//                     {
//                         path:"/",
//                         element:<Sidebar/>
//                     },
//                     {
//                         path:"live",
//                         element:<LiveChat/>
//                     }
                    
//                 ]

//             },
//             {
//                path:"watch",
//                element:<WatchPage/> 
//             }
            
//         ]
//     }
// ])

//export default CustomRouter;