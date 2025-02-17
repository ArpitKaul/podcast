import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainlayout from './layout/Mainlayout';
import Authlayout from './layout/Authlayout';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Categories from './Pages/Categories';

const App = () => {
  return (
    <div className=''>
    <Router>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path='/categories' element={<Categories/>} />
        </Route>

        {/* Routes for AuthLayout */}
        <Route path='/' element={<Authlayout />}>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
    </div>
  );
};

export default App;
