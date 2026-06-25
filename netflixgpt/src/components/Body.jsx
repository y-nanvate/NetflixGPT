import { createBrowserRouter, RouterProvider } from "react-router"
import Login from "./Login"
import Header from "./Header"
import Browse from "./Browse"

const Body =()=>{

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <Login/>
        },
        {
            path:"/header",
            element:<Header/>
        },{
            path:"/browse",
            element:<Browse/>
        }

    ])
    return<>
    <div>
        <RouterProvider router={appRouter}/>
    </div>
    </>
}
export default Body