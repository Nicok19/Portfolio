import React, { useState } from 'react';
import VideoComponent from './VideoComponent'; 
import SkillsComponent from './SkillsComponent'; 

const Submenu = () => {
    const [showVideo, setShowVideo] = useState(true); 

    const handleToggleVideo = () => {
        setShowVideo(true); 
    };

    const handleToggleSkills = () => {
        setShowVideo(false); 
    };

    return (
        <div className="cardCarousel">
            <div className='buttonCarrusel'>
                <button id="videoButton" onClick={handleToggleVideo}>Video</button>
                <button id="skillsButton" onClick={handleToggleSkills}>Skills</button>
            </div>
            <div className="card-container">
                {showVideo ? <VideoComponent /> : <SkillsComponent />} 
            </div>
        </div>
    );
};

export default Submenu;
