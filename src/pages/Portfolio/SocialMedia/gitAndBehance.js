import React from 'react';
import './gitAndBehance.css';
import './Responsive__gitAndBehance.css';

const SocialMedia = () => {
  return (


    <div className='socialMedia'>
    
      <div className='socialMedia__container'>
        <h3 className='socialMedia__title'>See my social media</h3>
        <div className="socialMedia__images">
          <a href="https://www.behance.net/nicolasbertinat">
          <img src="https://imgur.com/Z3wWt9V.png" alt="Behance Logo" />
        

          </a>
          <a href="https://github.com/Nicok19">
            <img src="https://imgur.com/RMeKCQN.png" alt="GitHub logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;

