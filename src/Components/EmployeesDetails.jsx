import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../Context/auth'
export const EmployeesDetails = () => {
 

     const [employee,setEmployee]=useState({})
 const {isAuth}=useContext(AuthContext)
    const navigate=useNavigate()
  const {id}=useParams()
  
  useEffect(()=>{
      getData()
  },[])
  async function getData(){
      const data=await fetch(`http://localhost:8080/employee/${id}`)
      .then((d)=>d.json())
     setEmployee(data)
     console.log(data)
    }

  if(!isAuth){
      return <Navigate to={'/login'}></Navigate>
  }
    return (
    <div>
    {/* login first berfor access */}
          <div>{<img src={employee.image} alt="" />}</div>
      <div>{employee.employee_name}</div>
      <div>{employee.task}</div>
      <div>{employee.status}</div>
    </div>
  )
}
