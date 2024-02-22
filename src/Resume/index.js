import React from "react";
import SubMenu from "./SubMenu"; 
import DownloadResume from "./DownloadResume";
import './ResumeStyles.css';

const Resume = () => {
    return (
        <div className="resumeElements">
            <h1>Resume</h1>
            <SubMenu />
            <DownloadResume/>
        </div>
    );
}

export default Resume;
