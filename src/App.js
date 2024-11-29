import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashoard from './pages/Dashoard'
import About from './pages/About'
import Contact from './pages/Contact'


const App = () => {
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className=' bg-gray-900 text-white w-[100vw] h-[100vh] overflow-hidden'>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login  setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/dashboard" element={<Dashoard/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>



      
    </Routes>
    </div>
  )
}

export default App