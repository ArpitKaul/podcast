import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [userData, setUserData] = useState();
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
      }
    };
    fetchUserDetails();
  }, []);

     const LogoutHandler = async () =>{
        const res = await axios.post("http://localhost:5000/api/v1/logout" , {withCredentials: true});
        // console.log(res.data); 
        dispatch(authActions.logout());
        navigate("/");
     }

  return (
    <>
    <div className='h-screen flex items-center justify-center bg-gradient-to-b from-[#00275b] via-[#0b1b29] to-[#0d0d0d] px-4'>
    {userData && (
        <div className="bg-gray-800 py-8 px-4 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 w-">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-gray-400 text-xl">Profile</p> 
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center md:text-left"> 
              {userData.username}
            </h1>
            <p className="text-gray-400 mt-1">{userData.email}</p>
          </div>
          <div>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded transition duration-300" onClick={LogoutHandler}> 
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
      
    </>
  );
};

export default Header;