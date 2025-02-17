import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-[#00275b] via-[#0b1b29] to-[#0d0d0d] px-4">
      
      {/* Login Box */}
      <div className="w-full max-w-md p-8 bg-white/10 border border-white/20 rounded-xl shadow-lg backdrop-blur-lg text-white sm:w-96 md:w-[400px]">

        {/* Logo & Branding */}
        <div className="text-center">
          <Link to="/" className="text-3xl font-bold tracking-wide">
            Listen Podcast
          </Link>
          <p className="text-gray-300 mt-1 text-sm sm:text-base">Anywhere, Anytime</p>
        </div>

        {/* Login Form */}
        <div className="mt-6">

          {/* Email Input */}
          <div className="mt-6">
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-white/20 border border-gray-400 focus:outline-none focus:ring-0 focus:border-transparent placeholder-gray-300 text-sm sm:text-base"
              placeholder="E-mail"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-white/20 border border-gray-400 focus:outline-none focus:ring-0 focus:border-transparent placeholder-gray-300 text-sm sm:text-base"
              placeholder="Password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button className="w-full p-3 bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold text-lg rounded-lg shadow-md">
            Start listening
            </button>
          </div>

          {/* Signup Link */}
          <div className="mt-4 text-center text-gray-300 text-sm sm:text-base">
            <p>
              Don't have an account?{' '}
              <Link to="/signup" className="font-semibold text-blue-400 hover:text-blue-600 transition">
                Sign Up
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
