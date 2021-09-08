import React, {  useState, useEffect,  useContext}  from 'react';
import {auth} from  '../firebase-config'


export function useAuth(){
    return useContext(AuthContext)
}


export const AuthContext=React.createContext();

export default function AuthProvider({children}){
const[currentUser, setCurrentUser]=useState()
const [loading, setLoading]=useState(true)

const [admin, setAdmin]=useState(false)



function signup(email, password){
    return auth.createUserWithEmailAndPassword(email, password)
}

function login(email, password){
    if(email==='admin@gadgetos.com'&& password==='Admin0310'){
         setAdmin(true)
    }
    return auth.signInWithEmailAndPassword(email, password)
}

function logout(){

    setAdmin(false)

    return auth.signOut();
}

useEffect(()=>{
   const unsubscribe= auth.onAuthStateChanged(user=>{
       console.log(currentUser);
       setLoading(false)
        setCurrentUser(user)
   })

    return unsubscribe;
}, [])

    const value={
        currentUser,
        login,
        signup,
        logout,
        admin
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}


