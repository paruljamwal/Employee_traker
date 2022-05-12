import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
//useEffect are used for making async call
export const EmployesList = () => {
  const [employee,setEmployee]=useState([]);
  
  useEffect(()=>{
      getData()
  },[]);

  async function getData(){
      const data=await fetch("http://localhost:8080/employee")
      .then(d=>d.json())
      //data don't do anything in vdom so we have to give data to setEmplyee useState
      setEmployee(data)
      console.log(data)
    }
  


    return (
    <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(4,1fr",
        marginTop:"30px"
    }}>
        {employee.map((e)=>(
            <Link to={`/employees/${e.id}`}>
          <div key={e.id}>
              <img src={e.image} alt="" />
              <div>Name: {e.employee_name}</div>
          <div>Title: {e.title}</div>
          <div>Salary: {e.salary}</div>
          <div>UserName: {e.username}</div>
          <div>Task: {e.task}</div>
          <div>Status: {e.status}</div>
          <div>Team: {e.team}</div>
          </div>
          </Link>
        ))}
    </div>
  )
}
