import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const MyAuth = createContext();

export const MyAuthProvider = ({children})=>{
    const [user,setUser] = useState(null )
    const login =(user)=>{
        // console.log("Login action called....")
        setUser(user);
    }
    const logout = () =>{
        setUser(null);
    }
    return <MyAuth.Provider value={{user,login,logout}}>
        {children}
    </MyAuth.Provider>
}

export const useAuths = ()=>{
    return useContext(MyAuth);
}
