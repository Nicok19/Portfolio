import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Presentation from './Presentation';
import Resume from './Resume';
import Contact from './Contact';
import Portfolio from './Portfolio';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className='container'>

        <nav className={`navBar ${isMenuOpen ? 'open' : ''}`}>
          <div className='menuToggle' onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
          <ul className={isMenuOpen ? 'active' : ''}>
            <li>
              <NavLink exact to="/" activeClassName="active">Presentation</NavLink>
            </li>
            <li>
              <NavLink to="/resume" activeClassName="active">Resume</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <div className='elements'>
          <header>
            <img src="/elements/nb.png" alt="Logo of Nicolás Bertinat"/>
            <h4>Product Designer (ux/ui) and Front end Developer</h4>
          </header>

          <div className='routes'>
            <Routes>
              <Route path="/" element={<Presentation />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            
            </Routes>
          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;



