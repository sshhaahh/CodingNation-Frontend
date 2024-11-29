import toast from 'react-hot-toast';
import logo from '../assets/Logo.svg'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = (props) => {
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
  return (
    <div className='flex justify-evenly items-center bg-gray-900 text-white py-3 border-b-2 border-gray-600'>
        <div>
            <Link to="/"><img src={logo} alt="Logo" height={32} width={160} loading="lazy" /></Link>
        </div>
        <nav>
            <ul className='flex gap-3 font-semibold text-md'>
                <li> <NavLink to="/">Home</NavLink> </li>
                <li> <NavLink to="/about">About</NavLink> </li>
                <li> <NavLink to="/contact">Contact</NavLink> </li>

            </ul>
        </nav>
        <div className='flex gap-3'>
            {!isLoggedIn&&<NavLink to="/login"><button  className='nav-btn'>Login</button></NavLink>}
            {!isLoggedIn&&<NavLink to="/signup"><button className='nav-btn'>Signup</button></NavLink>}
            {isLoggedIn&&<NavLink to="/"><button onClick={()=>{setIsLoggedIn(false)
                toast.success("LogOut Successfully !")
            }} className='nav-btn'>Logout</button></NavLink>}
            {isLoggedIn&&<NavLink to="/dashboard"><button className='nav-btn'>Dashoard</button></NavLink>}

        </div>
    </div>
  )
}

export default Navbar