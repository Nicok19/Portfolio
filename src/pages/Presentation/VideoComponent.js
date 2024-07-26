import React, { useRef } from 'react';

const VideoComponent = () => {
  const videoRef = useRef(null);

  return (
    <div className='videoElement'>
      <video ref={videoRef} controls poster="https://imgur.com/COvVifu.png">
        <source src="https://imgur.com/AaJP17s.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;


