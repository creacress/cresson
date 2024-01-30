import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Importez vos composants
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Projects from './components/Projects/Projects.jsx';
import Footer from './components/Footer/Footer.jsx';
import CYBIA from './Pages/Cybia/Cybia.jsx';
import Selenium from './Pages/Selenium/Selenium.jsx';
import Welcome from './components/Welcome/Welcome.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Cybia" element={<CYBIA />} />
          <Route path="/Selenium" element={<Selenium />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
