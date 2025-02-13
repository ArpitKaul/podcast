import { Link } from 'react-router-dom';
import musical from '../../assets/musical.png';
import {IoReorderThreeOutline} from "react-icons/io5";
import {RxCross2} from "react-icons/rx";
import { useState } from 'react';
const Navbar = () => {
    const [MobileNav, setMobileNav] = useState(false);
  const navLinks = [
    {
      name: 'Home',
      path: "/"
    },
    {
      name: 'Categories',
      path: "/categories"
    },
    {
      name: 'All Podcasts',
      path: "/all-podcasts"
    },
    {
        name: 'Profile',
        path: "/profile"
    }
  ];

  return (
    <nav className="md:px-8 lg:px-12 px-4 py-2 mt-3 relative">
      <div className="flex items-center justify-between">
        <div className="logo brand-name w-2/6 flex gap-2">
        <img className='w-10 h-10' src={musical} alt="" />
          <Link to="/" className="text-2xl font-bold text-yellow-300  mt-1">Podcaster</Link>
        </div>
        <div className="w-2/6 lg:flex items-center justify-center text-xl hidden text-white">
          {navLinks.map((item, i) => (
            <Link key={i} to={item.path} className=" ms-4 hover:font-semibold transition-all duration-300">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="w-2/6 hidden lg:flex items-center justify-end">
        <Link className='px-6 py-2 border border-white rounded-full text-white'>Login</Link>
        <Link className='ms-4 py-2 border border-black rounded-full text-white bg-black w-20 pl-4'>Signup
        </Link>
        </div>
        <div className='w-4/6 lg:hidden flex items-center justify-end z-[1000]'>
        <button className={`text-5xl ${MobileNav ? "rotate-360":"rotate-180"} transition-all duration-300`} onClick={()    =>setMobileNav(!MobileNav)}>
        {MobileNav? <RxCross2/>:<IoReorderThreeOutline/>}
        </button>
        </div>
      </div>
      <div className={`fixed top-0 left-0 w-full h-screen bg-blue-100 ${MobileNav ? "translate-y-[0%]" : "translate-y-[-100%]"} transition-all duration-500 `}>
       
        <div className='h-full flex flex-col items-center justify-center mb-4 '>
        {navLinks.map((item, i) => (
            <Link key={i} to={item.path} className=" mb-12 hover:font-semibold transition-all duration-300 text-3xl">
              {item.name}
            </Link>
          ))}
          <Link 
          to="/login"
          className='mb-12 text-3xl hover:font-semibold trasition-all duration-300'>
          Login
          </Link>
          <Link 
          to="/signup"
          className='mb-12 text-3xl hover:font-semibold trasition-all duration-300'>
          SignUp
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
