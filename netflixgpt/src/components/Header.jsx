import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate()
    const dispatch= useDispatch()
    const user = useSelector(store => store.user)
    const handlesingOut = () => {
        signOut(auth).then(() => {
       
        }).catch((error) => {
           
            navigate("/errorpage")
        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
               
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL, }))
                navigate("/browse")
            } else {
               
                dispatch(removeUser())
                navigate("/")
            }
        });
    }, [])
    return <>
        <div className="absolute inset-x-0 px-4 py-1 bg-gradient-to-b from-black z-10 flex justify-between">


            <img className="w-35" src={LOGO_URL} alt="logo-image" />
            {user && <div className="flex p-2">
                <img className="w-8 h-8" alt="user-logo" src={user?.photoURL} />
                <button className="font-bold text-white p-1" onClick={handlesingOut}>Sing Out</button>
            </div>}
        </div>
    </>
}
export default Header