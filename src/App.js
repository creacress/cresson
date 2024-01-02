import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Importez vos composants
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Projects from './components/Project/Project.jsx';
import Footer from './components/Footer/Footer.jsx';
import CYBIA from './Pages/Cybia.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Cybia" element={<CYBIA />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
