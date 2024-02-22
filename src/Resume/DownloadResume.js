import React from 'react';

const DownloadResume = () => {
    
  const handleDownload = () => {
    window.open('/elements/resume.pdf', '_blank').focus();
  };

  return (
    <div className='download'>
    <h3>Learn more about me</h3>
    <button onClick={handleDownload}>Download Resume</button>
    </div>
  );
};

export default DownloadResume;
