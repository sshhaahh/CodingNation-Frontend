import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const formData = location.state; 
  return (
    
    <div className='w-[100vw] h-[80vh] flex justify-center text-3xl items-center'>
      

    
  
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 [text-shadow:0_0_10px_rgba(255,0,255,0.8),0_0_20px_rgba(128,0,255,0.8)]">
        WELCOME <span className='text-4xl'>{formData?.firstName} {formData?.lastName} </span>
      </h1>
    

    </div>
  );
};

export default Home;
