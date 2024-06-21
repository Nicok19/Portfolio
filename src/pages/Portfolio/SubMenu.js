import React, { useState } from 'react';
import Behance from './Behance';
import Github from './Github';

const SubMenu = () => {
    const [activeComponent, setActiveComponent] = useState('Behance'); 

    const handleToggleComponent = (component) => {
        setActiveComponent(component); 
    };

    return (
        <div className="cardCarousel">
            <div className='buttonCarrusel'>
                <button className={`buttonStyle ${activeComponent === 'Behance' ? "activeButton" : ""}`} onClick={() => handleToggleComponent('Behance')}>UX/UI</button>
                <button className={`buttonStyle ${activeComponent === 'Github' ? "activeButton" : ""}`} onClick={() => handleToggleComponent('Github')}>Front End</button>
            </div>
            <div className="card-container">
                {activeComponent === 'Behance' && <Behance />}
                {activeComponent === 'Github' && <Github />}
            </div>
        </div>
    );
};

export default SubMenu;