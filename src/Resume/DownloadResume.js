import React from 'react';

const DownloadResume = () => {
    
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1tw_L2CEAJErObZmNqX1mPT26lPcerJp4/view?usp=sharing', '_blank').focus();
  };

  return (
    <div className='download'>
    <h3>Learn more about me</h3>
    <button onClick={handleDownload}>Download Resume</button>
    </div>
  );
};

export default DownloadResume;
