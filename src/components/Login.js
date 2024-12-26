import { useRef, useState } from "react";
import Header from "./Header";
import checkValidEmailandPassword from "../utils/validEmailandPassword";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const navigate=useNavigate();
    const user=useSelector(store=>store.user)
    const dispatch= useDispatch();
    const [isSignUpForm,setIsSignUpForm]=useState(false);
    const handleIsSignInForm=()=>{
        setIsSignUpForm(!isSignUpForm);
    }
    const email=useRef(null);
    const name=useRef(null);
    const password=useRef(null);
    const [errorMessage,setErrorMessage]=useState(null);
    const handleClick=()=>{
        console.log(email.current.value)
        setErrorMessage(checkValidEmailandPassword(email.current.value,password.current.value))
        if(errorMessage) return;

    else{
        
             if(isSignUpForm) {
            //user has signed up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            const {uid,email,displayName,photoURL}=auth.currentUser;
            dispatch(addUser({
            email:email,
            uid:uid,
            displayName:displayName,
            photoURL:photoURL
             }))
             navigate("/browse")
  
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
    
            setErrorMessage(errorCode+errorMessage);
            });

        }
    else if(!isSignUpForm){
        
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            // Signed in 
            const {uid,email,}=auth.currentUser;
            dispatch(addUser({
                email:email,
                uid:uid,
                 }))
                 navigate("/browse")
            // ...
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(error.message)
          } );
        }

    }
        
    }
    console.log("Login componenet rendered")
    
    return(
<div className=" h-screen w-screen  bg-gray-900">
    
    <div className= "absolute  mx-96  ">
    <form className="bg-gray-800 p-12 w-10/12 mt-32 border  rounded-md
     " onSubmit={(e)=>e.preventDefault()}>
       <h1 className="mx-40 my-5 text-white text-4xl">{isSignUpForm?"Sign Up":"Sign In"}</h1>
       {isSignUpForm&&<input ref={name} className="mx-32 my-3 p-2 text-xl rounded-lg " type="text" placeholder="name"/>}
        <input 
         ref={email}
         className="mx-32 my-3 p-2 text-xl rounded-lg " type="text" placeholder="email"/>
        <input type="password" ref={password} className="mx-32 my-3 p-2  text-xl rounded-lg"  placeholder="password"/>
        <p className="text-red-700 font-bold ml-40">{errorMessage}</p>   
        <button onClick={handleClick}className=" ml-44 mt-4 p-2 bg-blue-500 w-3/12 rounded-lg">{isSignUpForm?"Sign Up":"Sign In"}</button>
        
        <p className="ml-[120px] mt-3 p-2 text-md text-white" onClick={handleIsSignInForm}>{isSignUpForm?"Already have an Account?Sign In":"Don't have an Account?Sign Up"}</p>
    </form>
    </div>
</div>
    );
}
export default Login;
