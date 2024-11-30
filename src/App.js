import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dasboard from './pages/Dasboard'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivateRoute from './components/PrivateRoute'
import NotFound from './components/NotFound'


const App = () => {
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  const[accountType,setAccountType]=useState("");
  return (
    <div className=' bg-gray-900 text-white w-[100vw] h-[100vh] overflow-hidden'>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login  setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/signup" element={<Signup accountType={accountType} setAccountType={setAccountType} setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn} >
        <Dasboard/>
      </PrivateRoute>}/>

      <Route path="*" element={<NotFound/>} />



      
    </Routes>
    </div>
  )
}

export default App