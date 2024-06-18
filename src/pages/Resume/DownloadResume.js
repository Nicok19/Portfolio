import React from 'react';

const DownloadResume = () => {
    
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1uBkQ1VO70QQfRl7OCJzgDfJsaxrnfue-/view?usp=sharing', '_blank').focus();
  };

  return (
    <div className='download'>
    <h3>Learn more about me</h3>
    <button onClick={handleDownload}>Download Resume</button>
    </div>
  );
};

export default DownloadResume;
