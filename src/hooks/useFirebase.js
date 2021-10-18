import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Home/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = ()=>{
    const [user, setUsers] = useState({});

    const auth = getAuth();

    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUsers(result.user)
        })
    }

   useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth, user =>{
           if(user){
               setUsers(user)
           }
           else{
               setUsers({})
           }
       })
       return () => unsubscribed;
   }, [])

    const logOut = ()=>{
        signOut(auth)
        .then(()=>{})
    }

    return {
        user,
        signInUsingGoogle,
        logOut

    }
};

export default useFirebase;