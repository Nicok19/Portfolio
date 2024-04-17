import React from 'react';

const DownloadResume = () => {
    
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1C6_YYDWbWAmc1VOQDimY5SPFn7WQ9KCo/view?usp=sharing', '_blank').focus();
  };

  return (
    <div className='download'>
    <h3>Learn more about me</h3>
    <button onClick={handleDownload}>Download Resume</button>
    </div>
  );
};

export default DownloadResume;
