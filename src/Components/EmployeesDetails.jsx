import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../Context/auth';
import axios from 'axios';
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


  //TERMINATED FUN
  //axios
   const handelterminate=()=>{
       axios.patch(`http://localhost:8080/employee/${id}`,{
         ...employee,"status":"terminted"
       })
    .then(function(res){
      setEmployee(res.data) //update after termination
    })
    .catch(function(error){
      console.log(error);
    })


      }

    return (
    <div>
    {/* login first berfor access */}
          <div>{<img src={employee.image} alt="" />}</div>
      <div>{employee.employee_name}</div>
      <div>{employee.task}</div>
      <div>{employee.status}</div>
      <div>{employee.status==="working" ? <button onClick={()=>{handelterminate()}}>TERMINATE</button> : <div>TERMINATED</div>}</div>
    </div>
  )
}
