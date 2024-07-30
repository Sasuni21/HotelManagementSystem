// src/App.js
import './App.css';
import Homecontent from './components/Homecontent';
import Navbar from './components/NavBar';
import Slideshow from './components/Slideshow';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Slideshow />
        <Homecontent/>
        
      </div>
    </Router>
  );
}

export default App;
