import { useState } from "react"
import Header from "./Header"

const Login =()=>{

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm=()=>{
setIsSignInForm(!isSignInForm)
    }

    return<>
     <div>
    <div className="absolute">
        <Header/>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg" alt="background-image" />

    </div>
   <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
    <h2 className="font-bold text-m text-white py-4 " style={{ color:"white "}}>{isSignInForm ? "Sign In" :"Sign Up"}</h2>
    {!isSignInForm && <input type="text" placeholder="Full Name" className="p-2 my-2 w-full  bg-gray-500"/> }
    <input type="text" placeholder="Email Address" className="p-2 my-2 w-full  bg-gray-500"/>
    <input  type="password" placeholder="Password" className="p-2 my-2 w-full bg-gray-500"/>
    <button  className="p-4 my-4 bg-red-700 w-full rounded-2xl">{isSignInForm ? "Sign In" :"Sign Up"}</button>
    <p className=" py-4 cursor-pointer" onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up Now" :"Already registered? Sign In Now...."}</p>
   </form>
   </div>
    </>
}
export default Login