import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import "./Contact.css";
import "./Responsive__Contact.css";

 const Contact = () => {

    return(
    <div className="generalConctactContainer">

        <div className="containerContact">

        <div className="contactInfo">

        <h2 className="contactInfo__title">Chat with me</h2>
        <p className="contactInfo__description">Within 24 hours of receiving your message, I will get in touch with you. If you have any questions, you can leave a comment in the comment box and I will respond as soon as possible.
        </p>

        <h3 className="ContactInfo__Number">Cell Phone: (+598) 92978411</h3>

        <a href="https://www.linkedin.com/in/nicol%C3%A1s-bertinat-de-los-santos/">
         <img src="/elements/linkedinGreen.png" alt="Linkedin" class="contactInfo-image" />
         </a>


        </div>

        <ContactForm />

        </div>
       

    </div>
)

}

export default Contact;