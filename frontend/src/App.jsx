import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Authlayout from "./layout/Authlayout";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Categories from "./Pages/Categories";
import Profile from './Pages/Profile';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from './store/auth';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/v1/check-cookie", {
          withCredentials: true,
        });
        if (res.data.message) {
          dispatch(authActions.login());
        }
      } catch (error) {}
    };
    fetch();
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route element={<Authlayout />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
