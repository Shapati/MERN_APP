import {BrowserRouter as Router, Routes,Route, Navigate} from 'react-router-dom'
import { useState} from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Login } from './pages/login/Login';
import { Signup } from './pages/signup/Signup';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Home } from './pages/Home/Home';


function App() {
  const [user,setUser] = useState(localStorage.getItem('token'))
  const [data,setData] = useState(localStorage.getItem('data'))
  const [name,setName] = useState(localStorage.getItem('name'))
  console.log(user)
  return (
    
    <div className="App">

    <Router>
      
      <Routes>
        <Route exact path='/' element={<Home setUser={setUser} user={user} />} />
        <Route exact path='/signup' element={<Signup setUser={setUser} />} />
        <Route exact path='/login' element={<Login setUser ={setUser} user={user} data={data} setData={setData} setName={setName}   />} />
        <Route exact path='/dashboard' element={ user? <Dashboard user={user} setUser={setUser} data={data} setData={setData} name={name} /> : <Navigate to='/login' />} />
      </Routes>

    </Router>
    </div>
  );
}

export default App;
