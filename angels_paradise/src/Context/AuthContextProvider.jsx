import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'



export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState("Please Login");


    // here we access it after we get it from post req. in login page
    const login = () => {
        setIsAuth(true)
        setToken("Hello User")
    }

    const logout = () => {
        setIsAuth(false)
        setToken("")
    }

    
    return (
        <AuthContext.Provider value={{ isAuth, login, logout, token }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
