import { useEffect, useState, useContext, createContext } from "react";
import { json } from "react-router-dom";

const AuthContext = createContext()



const AuthProvider = ({children}) =>{
    const [auth, setAuth]= useState({
        user:null,
        token:""
    })
    useEffect(()=>{
        const data = localStorage.getItem('auth')
        if(data){
            const parseData = JSON.parse(data)
            setAuth({
                ...auth,
                user:parseData.user,
                token:parseData.token
            })
        }
    } ,[auth])

    return(
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth=() =>useContext(AuthContext)

export{useAuth,AuthProvider}