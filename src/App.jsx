// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Resume from './pages/Resume';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Scroll from './components/Scroll';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Scroll />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
