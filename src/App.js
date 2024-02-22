import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Presentation from './Presentation';
import Resume from './Resume';
import Contact from './Contact';
import Portfolio from './Portfolio';

function App() {
  return (
    <Router>
 
      <div className='container'>
     

      
        <nav className='navBar'>
          <ul>
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

          <div className='socialMedia'>
            <a href="https://www.linkedin.com/in/nicol%C3%A1s-bertinat-de-los-santos/"><img src="/elements/linkedin.png" alt="Link to linkedIn"/></a>
            <a href="https://github.com/Nicok19"><img src="/elements/github.png" alt="Link to Github"/></a>
            <a href="https://www.behance.net/nicolasbertinat"><img src="/elements/behance.png" alt="Link to Behance"/></a>
          </div>
        </nav>

      <div className='elements'>
        <header>
    <img src="/elements/nb.png" alt="Logo of Nicolás Bertinat"/>
    <h4>Product Designer (ux/ui) and Front end Developer</h4>
    </header>

        <div className='routes'>
        <Routes >
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


