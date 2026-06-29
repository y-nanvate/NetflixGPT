import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"

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


            <img className="w-35" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo-image" />
            {user && <div className="flex p-2">
                <img className="w-8 h-8" alt="user-logo" src={user?.photoURL} />
                <button className="font-bold text-white p-1" onClick={handlesingOut}>Sing Out</button>
            </div>}
        </div>
    </>
}
export default Header