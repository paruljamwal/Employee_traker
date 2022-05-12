import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/auth'

export const Logout = () => {
    const navigate=useNavigate()
    const {handelAuth}=useContext(AuthContext)
  return (
    <div>
        <button onClick={()=>{
            handelAuth(false) 
            navigate("/",{replace:true})}}>Logout</button>
    </div>
  )
}
