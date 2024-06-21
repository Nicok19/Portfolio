import React from "react";
import './contactStyles.css';

const Contact = () => {
    return (
       
           <div className="contactAndPhoto">

                <div className="contact">
                    <div className="contact__element">
                        <img src="/elements/linkedinGreen.png" alt="Logo of Linkedin" />
                        <a href="https://www.linkedin.com/in/nicol%C3%A1s-bertinat-de-los-santos/">Visit my LinkedIn profile</a>
                    </div>
                    <div className="contact__element">
                        <img src="/elements/gmail.png" alt="Logo of Gmail" />
                        <a href="https://mail.google.com">nbertinatwork1@gmail.com</a>
                    </div>
                    <div className="contact__element">
                        <img src="/elements/tel.png" alt="Icon of Telephone" />
                        <h4>(+598) 92 978 411</h4>
                    </div>
                </div>
                  <div className="linkedinPhoto">
                <a href="https://www.linkedin.com/in/nicol%C3%A1s-bertinat-de-los-santos/">
            <img src="/elements/linkedinProfile.png" alt="Admin CRM on Behance" />
          </a>
          </div>

</div>     


                
        
              
           
    );
}

export default Contact;
