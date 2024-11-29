import React, { useState } from 'react'
import toast from 'react-hot-toast';

import { BiSolidHide ,BiSolidShow  } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {
    let navigate=useNavigate();
    const[showPassword,setShowPassword]=useState(false);
    const[formData,setFormData]=useState({email:"",password:""})
    function changeHandler(e){
        const{name,value}=e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]:value,
        }));
    }
    function loginHandler(e){
        e.preventDefault();
        setIsLoggedIn(true);
        navigate('/dashboard');
        toast.success("Login Successfull")
   
    }
  return (
    <div>
        <form onSubmit={loginHandler} className='flex flex-col justify-center items-center'>
           <div className='flex flex-col w-full'>
            <label htmlFor="email" className='m-2'>Email <sup>*</sup></label>
                <input required type='text' id='email' name='email' placeholder='Enter your email'  value={formData.email} onChange={changeHandler}
                className=' border-2 rounded-lg w-full px-3 py-2 text-black font-semibold'/>

                <label htmlFor="email" className='m-2'>Password <sup>*</sup></label>
                <div className='flex flex-row  relative rounded-lg'>
                    <input required   type={showPassword ? "text" : "password"} id='password' name='password' placeholder='Enter your password'  value={formData.password} onChange={changeHandler} 
                    className=' border-2 rounded-lg w-full px-3 py-2 text-black font-semibold'
                    />
                    <span onClick={()=>setShowPassword((prevState)=>!prevState)} className='absolute right-3 cursor-pointer top-4 text-black text-xl' >{showPassword?(<BiSolidShow/>):(<BiSolidHide />)}</span>
                    
                    
                </div>
                <Link className='flex justify-end mt-2'><p className='text-sm text-[#2fdae0] opacity-80'>Forgot Password?</p></Link>
           </div>
            <button className='bg-yellow-300 text-black w-full my-2 rounded-lg py-2 font-semibold '>Login</button>
        </form>
    </div>
  )
}

export default LoginForm