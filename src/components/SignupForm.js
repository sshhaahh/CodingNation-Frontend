import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { BiSolidHide ,BiSolidShow  } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {
  let navigate = useNavigate();
  const[showPassword,setShowPassword]=useState(false);
  const[formData,setFormData]=useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""})
  function changeHandler(e){
    e.preventDefault();
    setFormData((prevData)=>({
      ...prevData,
      [e.target.name]:e.target.value
    }))
  }
  function submitHandler(e){
    e.preventDefault();
    if(formData.password!==formData.confirmPassword){
      toast.error("Password do not match");
      return ;
    }
    navigate("/",{state:formData});
    toast.success("SignUp Successfull")
    setIsLoggedIn(true);
  }
  return (
    <div className=''>
      <div className='flex justify-center items-center bg-gray-700 rounded-2xl w-fit h-fit mb-4'>
        <button
          className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-2xl text-sm px-3 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
        >Student</button>
        <button
          className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-2xl text-sm px-3 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
        >Instructor</button>
      </div >
      <form onSubmit={submitHandler}>
        <div className='flex flex-row gap-3' >
          <label >First Name<sup>*</sup>
            <input
              required
              type='text'
              name='firstName'
              onChange={changeHandler}
              value={formData.firstName}
              placeholder='Enter First Name'
            ></input>
            </label>
          

          
          <label>Last Name<sup>*</sup>
          
            <input
              required
              type='text'
              name='lastName'
              onChange={changeHandler}
              value={formData.lastName}
              placeholder='Enter Last Name'

            ></input>
          </label>
          </div>
        <div>
        <label>Email<sup>*</sup>
        <br/>
          <input
            required
            type='text'
            name='email'
            onChange={changeHandler}
            value={formData.email}
            placeholder='Enter Email'

          ></input>
        </label>
        </div>
        <div className='flex flex-row gap-3' >
          <label >Create Password<sup>*</sup>
            <input
              
              required
              type={showPassword?"text":"password"}
              name='password'
              onChange={changeHandler}
              value={formData.password}
              placeholder='Password'

            ></input>
            {/* <span onClick={()=>setShowPassword((prevState)=>!prevState)}  >{showPassword?(<BiSolidShow/>):(<BiSolidHide />)}</span> */}
          </label>

          <label  className=' relative' >Confirm Password<sup>*</sup>
            <input
              required
              type={showPassword?"text":"password"}
              name='confirmPassword'
              onChange={changeHandler}
              value={formData.confirmPassword}
              placeholder='Confirm Password'

            ></input>
            <span onClick={()=>setShowPassword((prevState)=>!prevState)} className='text-black text-xl cursor-pointer absolute top-12 right-1' >{showPassword?(<BiSolidShow/>):(<BiSolidHide />)}</span>

          </label>

        </div>
        
          <button className='bg-yellow-300 text-black w-full my-2 rounded-lg py-2 font-semibold mt-6'>Create Account</button>
      </form>
    </div>
  )
}

export default SignupForm