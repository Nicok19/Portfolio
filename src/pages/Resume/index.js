import React, { useEffect } from "react";
import SubMenu from "./Submenu/SubMenu__resume"; 
import DownloadResume from "./Download__Resume/DownloadResume";
import ReactGA from 'react-ga';
import './resumeElements.css';


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

