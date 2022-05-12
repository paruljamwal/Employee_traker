import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {  AuthContext } from '../Context/auth'
export const Navbar = () => {
    const {isAuth} = useContext(AuthContext)
  return (
    <div>
       <Link to='/'>HOME</Link> 
       <Link to='/employees'>Employees</Link>
        <Link to={isAuth ? "/logout" : "/login"}>{isAuth ? "Logout ": "Login"}</Link>  
        {/* <Link to='/employees/:id'>Details</Link> */}
        
    </div>
  )
}
