
import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import { EmployesList } from './Components/EmployesList';
import { Login } from './Components/Login';
import { Logout } from './Components/Logout';
import { EmployeesDetails } from './Components/EmployeesDetails';
import { Admin } from './Components/Admin';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/employees' element={<EmployesList></EmployesList>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/logout' element={<Logout></Logout>}></Route>
      <Route path='/employees/:id' element={<EmployeesDetails></EmployeesDetails>}></Route>
      <Route path='/admin' element={<Admin></Admin>}></Route>
   
   
   </Routes>
    </div>
  );
}

export default App;
