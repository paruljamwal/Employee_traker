import { react } from "react";
import { useEffect , useState} from 'react'

export const Home = () => {
  const [DET,setDET]= useState({})
  const [ter,setTer] = useState(0)
  const [newe,setNewe]=useState(0)
useEffect(() => {
  getData()
}, [])


  async function getData(){
    const data=await fetch(`http://localhost:8080/employee`).then(d=>d.json())
   setDET(data)
   let count=0;
   for(let i in data) {
     if(data[i].status==="terminated"){
       count++;
       setTer(count)
     }
   }
  }
 
  return (
    <div>
    <div>Welcome to HomePage</div>
    <div>Total Employees:{DET.length}</div>
    <div>Total Terminated:{ter}</div>
    <div>Total Promoted:</div>
    <div>Total New:{DET.length-10}</div>
    </div>
    )
}
