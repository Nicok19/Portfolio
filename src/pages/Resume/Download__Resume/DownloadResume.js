import React from 'react';
import './DownloadResume.css';
import './Responsive__DownloadResume.css';


const DownloadResume = () => {
    
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1uBkQ1VO70QQfRl7OCJzgDfJsaxrnfue-/view?usp=sharing', '_blank').focus();
  };

  return (
    <div className='download'>
    <div className='download__container'>
    <h3 className='download__title'>Learn more about me</h3>
    <button className='download__button' onClick={handleDownload}>Download Resume</button>
    </div>
    </div>
  );
};

export default DownloadResume;
