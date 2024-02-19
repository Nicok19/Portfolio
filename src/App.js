import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Presentation from './Presentation';
import Resume from './Resume';
import Contact from './Contact';
import Portfolio from './Portfolio';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Presentación</Link>
            </li>
            <li>
              <Link to="/resume">Currículum</Link>
            </li>
            <li>
              <Link to="/portfolio">Portafolio</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Presentation />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


