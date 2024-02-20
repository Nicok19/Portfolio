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
                <button className={`buttonStyle ${showVideo ? "activeButton" : ""}`} onClick={handleToggleVideo}>Video</button>
                <button className={`buttonStyle ${!showVideo ? "activeButton" : ""}`} onClick={handleToggleSkills}>Skills</button>
            </div>
            <div className="card-container">
                {showVideo ? <VideoComponent /> : <SkillsComponent />} 
            </div>
        </div>
    );
};

export default Submenu;


