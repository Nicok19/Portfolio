import React from "react";
import VideoComponent from './VideoComponent';
import './PresentationStyles.css';

const Presentation = () =>{


    return(
        <div className="presentationElement">
            <VideoComponent/>
            
      <div className='forCell'>
      <h3>Who i am?</h3>
      <p>In my role as a UX/UI Designer, I've honed my skills in user-centered design principles, prototyping, and creating intuitive interfaces that enhance user experience. Now, as I delve into Front End development, I'm excited to bridge the gap between design and implementation, bringing my creative vision to life through code.</p>
      <p></p>
      </div>
        </div>
    )
}

export default Presentation