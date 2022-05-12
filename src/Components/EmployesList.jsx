import React, { useEffect, useState } from 'react'
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
          <div key={e.id}>
              <img src={e.image} alt="" />
              <div>{e.employee_name}</div>
          <div>{e.title}</div>
          
          </div>
          
        ))}
    </div>
  )
}
