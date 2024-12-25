import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import {   useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";

const Header=()=>{
  const navigate=useNavigate();
  const dispatch=useDispatch();
    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth,(user)=>{
        if(user){
            //user is already logged in or signed up
            const {uid,email}=user;
            dispatch(addUser({
                email:email,
                uid:uid,
            }));
            navigate("/browse")
        }
        else{
            dispatch(removeUser());
            navigate("/");
        }
    });
    //unsubscribe when component unmount
    return ()=>unsubscribe();
    },[])
    const handleAboutUs=()=>{
        navigate("/about")
    }
    const handleHome=()=>{
        navigate("/browse")
    }
    const handleSignOut=()=>{
        
signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
}).catch((error) => {
  // An error happened.
});
    }
    return(
        <div className="shadow-xl bg-gray-800 flex justify-between">
            <h1 className="text-white m-2 text-xl font-bold">News Recommendation</h1>
            <div className="flex text-white justify-between">
            <h1 className="m-2" onClick={handleHome} >Home</h1>
                <h1 className="m-2" onClick={handleAboutUs} >about us</h1>
                <h1 className="m-2">Sports</h1>
                <h1 className="m-2">health</h1>
                <h1 className="m-2">Politics</h1>
                <img
                alt="userProfile" 
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
                className="w-12 p-2"/>
                <button className="mx-4 text-white" onClick={handleSignOut}>SignOut</button>
            </div>
        </div>
    )
}
export default Header;