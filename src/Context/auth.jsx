import React, { useState } from 'react'
import { createContext } from 'react'

export const AuthContext=createContext()
export const Auth = ({children}) => {
const [isAuth,setAuth]=useState(false)

const handelAuth=(state)=>{
    setAuth(state)
}
  return (
    <AuthContext.Provider value={{isAuth,handelAuth}}>
        {children}
    </AuthContext.Provider>
  )
}


//isAuth will be a true /false state, it will tell your app that wether
//you have logged in or not

//handel auth toogle the value b/t true or false