import React from 'react'
import Template from '../components/Template';
import image from '../assets/signup.png'

const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
        title="Welcome"
        desc1="Build skill for today, tomorow, and beyond."
        desc2="Education to future-proof your career."
        formType="signup"
        image={image}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Signup;