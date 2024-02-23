import React, { useRef } from 'react';

const VideoComponent = () => {
  const videoRef = useRef(null);

  return (
    <div className='videoElement'>
      <video ref={videoRef} controls poster="/elements/graph.png">
        <source src="/elements/Resume-Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className='forCell'>
      <h3>Who i am?</h3>
      <p>I am a Product Designer with more than 5 years of experience and I am currently entering the world of Front end development.</p>


      </div>
    </div>
  );
};

export default VideoComponent;


