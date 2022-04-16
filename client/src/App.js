import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Reg from "./components/Reg.js"
import Login from './components/Login.js'
import FgPass from './components/FgPass.js';
import Home from './components/Home.js';
import Reset from './components/ResetPass.js';

// import {FaBars} from'react-icons/fa'
// import Navbar from 'react-bootstrap/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path="/register" element={<Reg />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/forgotPassword' element={<FgPass />}/>
        <Route path='/resetpassword' element={<Reset/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
