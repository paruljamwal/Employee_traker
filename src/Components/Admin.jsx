import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/auth'

export const Admin = () => {
  const {isAuth}=useContext(AuthContext)
  const [Data,setData]=useState({
      employee_name:"",
      emplyee_id:"",
      title:"",
      salary:"",
      image:"",
      username:"",
      password:"",
      tasks:"",
      status:"",
      team:""
  })


  if(!isAuth){
      return <Navigate to={"/login"}></Navigate>
  }


  function handelchange(e){
      const {name,value}=e.target
     setData({...Data,[name]:value})

    }

    function handelSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:8080/employee`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(Data)
        })
    }

  return (
    <div>
        <form className="createEmployee" onSubmit={handelSubmit}>
            <input type="text" name='employeename' onChange={handelchange} placeholder="Employeee name"/>
             <input type="text" name='employeeid' placeholder='employee id' onChange={handelchange} /> 
             <select name="title" onChange={handelchange}>
                 <option value="intern">Intern</option>
                 <option value="Jr software Developer">Jr software Developer</option>
                 <option value="Sr software developer">Sr. software Developer</option>
                 <option value="Team Lead">Team Lead</option>
                 
                 </select>       
             <input type="number" name='salary' placeholder='salary' onChange={handelchange} /> 
             <input type="text" name='image' placeholder='Image' onChange={handelchange} /> 
             <input type="text" name='username' placeholder='User name' onChange={handelchange} /> 
             <input type="password" name='password' placeholder='Password' onChange={handelchange} /> 
             <input type="text" onChange={handelchange} placeholder="Enter task seperated by commas" name='task' />
             <select name="status" onChange={handelchange} id='status'>
             <option value="">Select status</option>
             <option value="terminated">Terminated</option>
             <option value="working">Working</option>
             </select>

             <select name="team" id="team">
                 <option value="">Select team</option>
                 <option value="frontend">Frontend</option>
                 <option value="backend">Backend</option>
                 <option value="qa">QA</option>
             </select>
        
        <input type="submit" value={'submit'} className="createUser" />
        </form>
    </div>
  )
}
