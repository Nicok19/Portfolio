import React from 'react';
import './success.css';
import './Responsive__success.css';


const Success = () => {
    return (
        <div className='success'>
            <h2 className='success__title'>Message sent successfully!</h2>
            <p className='success__description'>Thank you for contacting me. I will get in touch with you soon.</p>
            <a href="/">
         <button className='success__button'>Come Back</button>
         </a>
        </div>
    );
}

export default Success;
