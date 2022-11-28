import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.config';
import{createUserWithEmailAndPassword, getAuth, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut}from 'firebase/auth'

export const AuthContext=createContext()
const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading, setLoading] = useState(true);

    //login 
    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //singup
    const createUser=(email,password)=>{
       setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //logout
    const logOut = () =>{
        
        return signOut(auth);
    }
    const googleSignIn = (GoogleProvider) => {
        return signInWithPopup(auth, GoogleProvider)
    }
    
    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }
    







    // create user
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])


    const Info={login,user,loading,createUser,logOut,googleSignIn,  updateUser,}
    return (
        <AuthContext.Provider value={Info}>
            {children}

        </AuthContext.Provider>
    );
   
};

export default AuthProvider;