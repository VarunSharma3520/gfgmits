import './App.css';
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import Teampage from './pages/Teampage';
import Eventpage from './pages/Eventpage';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Teampage />} />
        <Route path="/event" element={<Eventpage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
