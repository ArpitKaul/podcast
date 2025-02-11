import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainlayout from './layout/Mainlayout';
import Home from './Pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
