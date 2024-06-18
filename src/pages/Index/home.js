import React, { useState, useEffect } from 'react';
import './Home.css';
import './Responsive__Home.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Presentation from '../Presentation';
import Resume from '../Resume';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Skills from '../Skills';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <Router>
      <div className={`container ${isMenuOpen ? 'menu-open' : ''}`}>
        <nav className={`navBar ${isMenuOpen ? 'open' : ''}`}>
          <div className='menuToggle' onClick={toggleMenu}>
            <div className={`bar ${isMenuOpen ? 'hide' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'rotate-top' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'rotate-bottom' : ''}`}></div>
          </div>
          <ul className={isMenuOpen ? 'active' : ''}>
            <li>
              <NavLink exact to="/" activeClassName="active" onClick={() => setIsMenuOpen(false)}>About Me</NavLink>
            </li>
            <li>
              <NavLink to="/skills" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Skills</NavLink>
            </li>
            <li>
              <NavLink to="/resume" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Resume</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            </li>
          </ul>
        </nav>

        <div className={`elements ${isMenuOpen ? 'menu-open' : ''}`}>
          {isMenuOpen ? null : (
            <header>
              <img src="/elements/nb.png" alt="Logo of Nicolás Bertinat"/>
              <h4>UX/UI Designer and Front End Developer</h4>
            </header>
          )}

                    <div className='routes'>
                      <Routes>
                        <Route path="/" element={<Presentation />} />
                        <Route path="/skills" element={<Skills />} /> 
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










