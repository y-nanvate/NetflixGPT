import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header =()=>{
    const navigate = useNavigate()
    const user= useSelector( store => store.user)
    const handlesingOut=()=>{
        signOut(auth).then(() => {
  navigate("/")
}).catch((error) => {
  // An error happened.
  navigate("/errorpage")
});
    }
    return<>
    <div className=" absolute w-screen px-4 py-1 bg-linear-to-b from-black z-1 flex justify-between">

        <img className="w-35"  src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo-image"/>
       { user && <div className="flex p-2"> 
        <img  className="w-8 h-8" alt="user-logo" src={user?.photoURL}/>
        <button className="font-bold text-white p-1" onClick={handlesingOut}>Sing Out</button>
        </div>} 
    </div>
    </>
}
export default Header