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
            <img src="/elements/behance.png" alt="Admin CRM on Behance" />
          </a>
          <a href="https://github.com/Nicok19">
            <img src="/elements/github.png" alt="Admin CRM on Behance" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;

