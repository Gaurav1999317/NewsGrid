import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
import Header from "./Header"
import AboutUs from "./AboutUs"



const Body=()=>{
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>,    
        },
        {
            path:"/about",
            element:<AboutUs/>
        }
    ])
    return(
        <>
        
        <RouterProvider router={appRouter}/>
        </>
    )
}
export default Body;