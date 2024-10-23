import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayout from './components/layot/MainLayout';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
