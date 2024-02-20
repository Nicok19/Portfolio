import React, { useRef } from 'react';

const VideoComponent = () => {
  const videoRef = useRef(null);

  return (
    <div className='videoElement'>
      <video ref={videoRef} controls>
        <source src="/elements/Resume-Video.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de vídeo.
      </video>
    </div>
  );
};

export default VideoComponent;

