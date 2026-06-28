import { createBrowserRouter, RouterProvider } from "react-router"
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import Login from "./Login"
import Header from "./Header"
import Browse from "./Browse"
import { useEffect } from "react"
import {useDispatch} from 'react-redux'
import { auth } from "../utils/firebase";

const Body =()=>{
    const dispatch= useDispatch()



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

    useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid, email, displayName, photoURL} = user;
    dispatch(addUser({ uid: uid, email: email, displayName: displayName , photoURL: photoURL , }))
    // ...
  } else {
    // User is signed out
    dispatch(removeUser())
  }
});
    },[])
    return<>
    
        <RouterProvider router={appRouter}/>
    
    </>
}
export default Body