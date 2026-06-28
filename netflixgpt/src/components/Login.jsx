import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidaData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";


const Login = () => {
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null)
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const handleButtonClick = () => {
        const message = checkValidaData(
            name.current?.value,
            email.current?.value,
            password.current?.value
        );
        setErrorMsg(message);

        // If there IS an error, stop execution
        if (message) return;

        // Otherwise, proceed with Firebase auth
        if (!isSignInForm) {
            // Sign up logic
            createUserWithEmailAndPassword(
                auth,
                 email.current.value, 
                 password.current.value
                )
                .then((userCredential) => {

                   updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: "https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png"
                    }).then(() => {
                         const {uid, email, displayName, photoURL} = auth.currentUser;
                            dispatch(addUser({ uid: uid, email: email, displayName: displayName , photoURL: photoURL , }))
                        navigate("/browse")
                    }).catch((error) => {
                        // An error occurred
                        setErrorMsg(error.message)
                    });
                })
                .catch((error) => {
                    setErrorMsg(error.code + " - " + error.message);
                });
        } else {
            // Sign in logic (you’ll need signInWithEmailAndPassword here)
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate("/browse")

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + " " + errorMessage)
                });
        }


    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return <>

        <div className="absolute">
            <Header />
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg" alt="background-image" />

        </div>
        <form
            onSubmit={(e) => e.preventDefault()}
            className=" w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70"
        >
            <h2 className="font-bold text-m text-white py-4 " style={{ color: "white " }}>{isSignInForm ? "Sign In" : "Sign Up"}</h2>
            {!isSignInForm &&
                <input
                    ref={name}
                    type="text"
                    placeholder="Full Name"
                    className="p-2 my-2 w-full  bg-gray-500"
                />}
            <input
                ref={email}
                type="text"
                placeholder="Email Address"
                className="p-2 my-2 w-full  bg-gray-500"
            />
            <input
                ref={password}
                type="password"
                placeholder="Password"
                className="p-2 my-2 w-full bg-gray-500"
            />
            <p className="text-red-500 text-lg py-2 ">{errorMsg}</p>
            <button
                className="p-4 my-4 bg-red-700 w-full rounded-2xl"
                onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className=" py-4 cursor-pointer" onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now...."}</p>
        </form>

    </>
}
export default Login