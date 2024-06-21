import React, { useState } from 'react';
import Education from '../Education/Education';
import References from '../References/References';
import Experience from '../Experience/Experience';
import '../../../Styles/subMenu.css';



const SubMenu = () => {
    const [activeComponent, setActiveComponent] = useState('Experience'); 

    const handleToggleComponent = (component) => {
        setActiveComponent(component); 
    };

    return (
        <div className="cardCarousel">
            <div className='buttonCarrusel'>
            <button className={`buttonStyle ${activeComponent === 'Experience' ? "activeButton" : ""}`} onClick={() => handleToggleComponent    ('Experience')}>Experience</button>
             <button className={`buttonStyle ${activeComponent === 'Education' ? "activeButton" : ""}`} onClick={() => handleToggleComponent('Education')}>Education</button>
            <button className={`buttonStyle ${activeComponent === 'References' ? "activeButton" : ""}`} onClick={() => handleToggleComponent('References')}>References</button>
             
            </div>
            <div className="card-container">
            {activeComponent === 'Experience' && <Experience />}
                {activeComponent === 'Education' && <Education />}
                {activeComponent === 'References' && <References />}
                
            </div>
        </div>
    );
};

export default SubMenu;
