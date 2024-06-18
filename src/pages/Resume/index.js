import React, { useEffect } from "react";
import SubMenu from "./SubMenu"; 
import DownloadResume from "./DownloadResume";
import './ResumeStyles.css';
import ReactGA from 'react-ga';

const Resume = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);
    
    return (
        <div className="resumeElements">
            <SubMenu />
            <DownloadResume/>
        </div>
    );
}

export default Resume;

