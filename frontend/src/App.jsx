import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainlayout from './layout/Mainlayout';
import Authlayout from './layout/Authlayout';
import Home from './Pages/Home';
import Signup from './Pages/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for MainLayout */}
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Routes for AuthLayout */}
        <Route element={<Authlayout />}>
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
