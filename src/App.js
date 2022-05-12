
import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import { EmployesList } from './Components/EmployesList';
import { Login } from './Components/Login';
import { Logout } from './Components/Logout';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/employees' element={<EmployesList></EmployesList>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/logout' element={<Logout></Logout>}></Route>
   </Routes>
    </div>
  );
}

export default App;
