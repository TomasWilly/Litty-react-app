import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayout from './components/layot/MainLayout';
import Home from './components/pages/Home';
import Homeposts from './components/pages/Homeposts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route element={<Home/>} >
            <Route index element={<Homeposts/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
