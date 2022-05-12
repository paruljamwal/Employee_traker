import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/auth'

export const Login = () => {
    const {handelAuth} = useContext(AuthContext)
    const navigate=useNavigate();
  return (
    <div>
        <form onSubmit={()=>{
            handelAuth(true)
            // setting handelAuth true as we r login
             navigate("/",{replace:true})
        }}>
            <input type="text" name='username' placeholder='username' />
            <input type='password' name='password' placeholder='Enter Password'></input>
        <input type="submit" value="SignIn" />
        </form>
    </div>
  )
}
