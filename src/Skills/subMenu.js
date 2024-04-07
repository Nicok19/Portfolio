import React, { useState } from 'react';
import UiComponent from './UiComponent';
import UxComponent from './UxComponent';
import FrontEndComponent from './FeComponent';
import BrandComponent from './BrandComponent';

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

    const handleToggleBrand = () => {
        setActiveComponent('brand'); 
    };

    return (
        <div className="cardCarousel">
            <div className='buttonCarrusel'>
                <button className={`buttonStyle ${activeComponent === 'ux' ? "activeButton" : ""}`} onClick={handleToggleUx}>UX</button>

                <button className={`buttonStyle ${activeComponent === 'ui' ? "activeButton" : ""}`} onClick={handleToggleUi}>UI</button>

                <button className={`buttonStyle ${activeComponent === 'brand' ? "activeButton" : ""}`} onClick={handleToggleBrand}>Brand</button>

                <button className={`buttonStyle ${activeComponent === 'frontend' ? "activeButton" : ""}`} onClick={handleToggleFrontEnd}>Front-End</button>
            </div>
            <div className="card-container">
                {activeComponent === 'ux' && <UxComponent />}
                {activeComponent === 'ui' && <UiComponent />}
                {activeComponent === 'frontend' && <FrontEndComponent />}
                {activeComponent === 'brand' && <BrandComponent />}
            </div>
        </div>
    );
};

export default SubmenuSkills;

