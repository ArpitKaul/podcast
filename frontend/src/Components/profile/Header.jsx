import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/user-details", {
          withCredentials: true,
        });
        setUserData(res.data.user);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setUserData(null);
      }
    };
    fetchUserDetails();
  }, []);

  const LogoutHandler = async () => {
    await axios.post("http://localhost:5000/api/v1/logout", { withCredentials: true });
    dispatch(authActions.logout());
    navigate("/");
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-[#00275b] via-[#0b1b29] to-[#0d0d0d] flex items-center justify-center px-4 py-8'>
      {userData ? (
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg rounded-2xl p-8 w-full max-w-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
              <p className="text-gray-300 text-lg mb-1">Profile</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                {userData.username}
              </h1>
              <p className="text-gray-400 mt-2 text-sm md:text-base">
                {userData.email}
              </p>
            </div>
            <div>
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md"
                onClick={LogoutHandler}
              >
                Log Out
              </button>
            </div>
          </div>
          <div className="mt-6 border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm">
              User profile information.
            </p>
          </div>
          <div className='mt-6'>
            <div className='flex items-center justify-between gap-4'>
              <h1 className='text-xl font-semibold md:font-bold text-white'>Your Podcasts</h1>
              <Link to="/add-podcasts" className='bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md'>
                Add Podcast
              </Link>
            </div>
          </div>
        </div>
        
      ) : (
        <div className="text-center text-gray-400">
          Loading user data...
        </div>
      )}
    </div>
  );
};

export default Header;