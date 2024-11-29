import React from 'react'
import Template from '../components/Template';
import image from '../assets/login.png'

const Login = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template title="Welcome Back"
      desc1="Build skill for today, tomorow, and beyond."
      desc2="Education to future-proof your career."
      formType="login"
      image={image}
      setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Login;