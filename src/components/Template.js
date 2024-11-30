import frameImage from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const Template = ({title,desc1,desc2,image,formType,setIsLoggedIn}) => {
  return (
    <div className='flex flex-row justify-center place-items-stretch gap-20 mt-4 px-6 '>
        <div className='flex justify-center flex-col w-[30%]'>
            <h1 className=' text-3xl font-bold '>{title}</h1>
            <p className='text-md mt-3 text-white opacity-75'>{desc1}</p>
            <p className='text-[#2fdae0] mb-4 text-md opacity-80 '>{desc2}</p>
            <div className=' w-full'>
            {formType==="login"?(<LoginForm setIsLoggedIn={setIsLoggedIn}/>):(<SignupForm setIsLoggedIn={setIsLoggedIn}/>)}
            </div>
            <div className='flex my-3 flex-row justify-center items-center'>
              
                <div className='h-[1px] bg-black w-[12rem]'></div>
                <p className='font-semibold'>Or</p>
                <div className=' h-[1px] bg-black w-[12rem]'></div>
            </div>
            <div className='w-full flex justify-center'>
            <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2 w-[12rem]">
              <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
              <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
              </svg>
               Sign in with Google
            </button>
            </div>
        </div>
        <div className='relative m-6'>
            <img className='relative' src={frameImage} width={458} height={404} loading='lazy' alt="pattern" />
            <img className='absolute top-[-0.7rem] left-[-0.7rem]' src={image} width={458} height={390} loading='lazy' alt="student" />

            
        </div>
    </div>
  )
}

export default Template