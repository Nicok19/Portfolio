import React from "react";
import './contactStyles.css';


const contact = () =>{


    return(

        <div className="bothElementsContact">
        <h1>Contact</h1>

        <div className="contactAndPhoto">
        <div className="contactElementDiv">

            <div id="contactElement">
            <img src="/elements/linkedinGreen.png" alt="Logo of Linkedin" /> 
            <a href="https://www.linkedin.com/in/nicol%C3%A1s-bertinat-de-los-santos/">Visit my LinkedIn profile</a>
            </div>

            <div id="contactElement">
            <img src="/elements/gmail.png" alt="Logo of Gmail" /> 
            <a href="https://mail.google.com">nbertinatwork1@gmail.com</a>
            </div>

            <div id="contactElement">
            <img src="/elements/tel.png" alt="Icon of Telephone" /> 
            <h4>(+598) 92 978 411</h4>
            </div>
        </div>

        <div className="contactnb">
            <img src="/elements/contactonb.png" alt="Logo of Nicolás Bertinat" />
        </div>

        </div>
        </div>
    )
}

export default contact