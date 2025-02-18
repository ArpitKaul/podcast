import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {ToastContainer , toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const  [Values , setValues] = useState({
    username:"",
    email:"",
    password:""
  });

  const change = (e) =>{
    const {name , value} = e.target;
    setValues({...Values , [name]:value});
  };
  const handleSubmit = async ()=>{
    try{
     const res =  await axios.post("http://localhost:5000/api/v1/signup", Values);
    //  toast.success(res.data.message);
     navigate("/login");
    }catch(error){
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-[#00275b] via-[#0b1b29] to-[#0d0d0d] px-4">
      <ToastContainer
      position="top-center"
      draggable
      />
      
      {/* Signup Box */}
      <div className="w-full max-w-md p-8 bg-white/10 border border-white/20 rounded-xl shadow-lg backdrop-blur-lg text-white sm:w-96 md:w-[400px]">

        {/* Logo & Branding */}
        <div className="text-center">
          <Link to="/" className="text-3xl font-bold tracking-wide">
            PODCASTER
          </Link>
          <p className="text-gray-300 mt-1 text-sm sm:text-base">Join the Community</p>
        </div>

        {/* Signup Form */}
        <div className="mt-6 space-y-4">
          
          {/* Username Input */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-300">Username</label>
            <input
              type="text"
              name="username"
              className="w-full p-3 rounded-lg bg-white/20 border border-gray-400 focus:outline-none focus:ring-0 focus:border-transparent placeholder-gray-300 text-sm sm:text-base"
              placeholder="Username"
              required
              value={Values.username}
              onChange={change}
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email" 
              className="w-full p-3 rounded-lg bg-white/20 border border-gray-400 focus:outline-none focus:ring-0 focus:border-transparent placeholder-gray-300 text-sm sm:text-base"
              placeholder="Enter your Email"
              required
              value={Values.email}
              onChange={change}
            />
          </div>

          
          {/* Password Input */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              name="password" 
              className="w-full p-3 rounded-lg bg-white/20 border border-gray-400 focus:outline-none focus:ring-0 focus:border-transparent placeholder-gray-300 text-sm sm:text-base"
              placeholder="Password"
              required
              value={Values.password}
              onChange={change}
            />
          </div>

          {/* Submit Button */}
          <div>
            <button className="w-full p-3 bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold text-lg rounded-lg shadow-md" onClick={handleSubmit}>
            Start listening
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center text-gray-300 text-sm sm:text-base">
            <p>
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-blue-400 hover:text-blue-600 transition">
                Login
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;
