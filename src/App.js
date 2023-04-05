import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode , setMode]= useState("light");
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor='black';
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Router>

    
    <Navbar title="Texter" aboutUs="About" mode={mode} toggleM={toggleMode}/>
    <div className='container my-3' mode={mode}>
      <Routes>
        <Route path='/about' element={<About />}></Route>
        <Route path='/' element={<TextForm heading="Enter text to edit...." mode={mode}/>}></Route>
      </Routes>
    
    </div>
    
    </Router>
    </>
  );
}

export default App;
