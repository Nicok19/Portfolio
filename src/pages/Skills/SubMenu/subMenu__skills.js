import React, { useState } from 'react';
import UiComponent from '../User-Interface/UiComponent';
import UxComponent from '../User-Experience/UxComponent';
import FrontEndComponent from '../Front-End/FeComponent';
import './subMenu.css';

const SubmenuSkills = () => {
    const [activeComponent, setActiveComponent] = useState('ux');

    const handleToggleUx = () => {
        setActiveComponent('ux');
    };

    const handleToggleUi = () => {
        setActiveComponent('ui');
    };

    const handleToggleFrontEnd = () => {
        setActiveComponent('frontend');
    };

    return (
        <div className="cardCarousel">
            <div className='buttonCarrusel'>
                <button className={`buttonStyle ${activeComponent === 'ux' ? "activeButton" : ""}`} onClick={handleToggleUx}>User Experience</button>
                <button className={`buttonStyle ${activeComponent === 'ui' ? "activeButton" : ""}`} onClick={handleToggleUi}>User Interface</button>
                <button className={`buttonStyle ${activeComponent === 'frontend' ? "activeButton" : ""}`} onClick={handleToggleFrontEnd}>Front End</button>
            </div>
            <div className="card-container">
                {activeComponent === 'ux' && <UxComponent />}
                {activeComponent === 'ui' && <UiComponent />}
                {activeComponent === 'frontend' && <FrontEndComponent />}
            </div>
        </div>
    );
};

export default SubmenuSkills;

