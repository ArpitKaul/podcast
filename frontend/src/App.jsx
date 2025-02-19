// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Authlayout from "./layout/Authlayout";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Categories from "./Pages/Categories";
import FollowCursor from './hooks/FollowCursor';
import Profile from './Pages/Profile';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/" element={<Authlayout />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>

      <FollowCursor color="gold"/>
    </div>
  );
};

export default App;