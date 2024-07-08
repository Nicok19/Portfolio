import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './contactForm.css';
import './Responsive__contactForm.css';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        company: '',
        mail: '',
        role: '',
        description: ''
    });

    const [formErrors, setFormErrors] = useState({
        name: false,
        surname: false,
        company: false,
        mail: false,
        role: false
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        setFormErrors({
            ...formErrors,
            [name]: false
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.surname || !formData.company || !formData.role || !formData.mail) {
            setFormErrors({
                name: !formData.name,
                surname: !formData.surname,
                company: !formData.company,
                role: !formData.role,
                mail: !formData.mail
            });
            return;
        }

        try {
            const response = await fetch('https://formspree.io/f/meojqwre', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Form submitted successfully!');
                navigate('/success');
            } else {
                console.error('Form submission failed!');
                // Handle submission failure
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            // Handle network error
        }
    };

    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <div className='contact-form__elements'>
                    <div className="contact-form__labelWith">
                        <label className="contact-form__label" htmlFor="name">Name:</label>
                    </div>
                    <input 
                        className="contact-form__input"
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="Enter your name"
                    />
                    {formErrors.name && <span className="error-message">Name is required</span>}
                </div>

                <div className='contact-form__elements'>
                    <div className="contact-form__labelWith">
                        <label className="contact-form__label" htmlFor="surname">Surname:</label>
                    </div>
                    <input 
                        className="contact-form__input"
                        type="text" 
                        id="surname" 
                        name="surname" 
                        value={formData.surname} 
                        onChange={handleChange} 
                        placeholder="Enter your surname"
                    />
                    {formErrors.surname && <span className="error-message">Surname is required</span>}
                </div>

                <div className='contact-form__elements'>
                    <div className="contact-form__labelWith">
                        <label className="contact-form__label" htmlFor="company">Company:</label>
                    </div>
                    <input 
                        className="contact-form__input"
                        type="text" 
                        id="company" 
                        name="company" 
                        value={formData.company} 
                        onChange={handleChange} 
                        placeholder="Enter your company"
                    />
                    {formErrors.company && <span className="error-message">Company is required</span>}
                </div>

                <div className='contact-form__elements'>
                    <div className="contact-form__labelWith">
                        <label className="contact-form__label" htmlFor="mail">Mail:</label>
                    </div>
                    <input 
                        className="contact-form__input"
                        type="email"
                        id="mail" 
                        name="mail" 
                        value={formData.mail} 
                        onChange={handleChange} 
                        placeholder="Enter your email"
                    />
                    {formErrors.mail && <span className="error-message">Mail is required</span>}
                </div>

                <div className='contact-form__elements'>
                    <div className="contact-form__labelWith">
                        <label className="contact-form__label" htmlFor="role">Role:</label>
                    </div>
                    <select 
                        className="contact-form__input"
                        id="role" 
                        name="role" 
                        value={formData.role} 
                        onChange={handleChange}
                    >
                        <option value="">Select Role</option>
                        <option value="uxui">UX/UI</option>
                        <option value="productdesigner">Product Designer</option>
                        <option value="uideveloper">UI Developer</option>
                        <option value="frontend">Front End Developer</option>
                        <option value="other">Other</option>
                    </select>
                    {formErrors.role && <span className="error-message">Role is required</span>}
                </div>

                <div>
                    <div className="contact-form__labelWith">
                        <label className="contact-form__label" htmlFor="description">Message:</label>
                    </div>
                    <textarea 
                        className="contact-form__textarea"
                        id="description" 
                        name="description" 
                        value={formData.description} 
                        onChange={handleChange}
                        placeholder="Enter your message"
                    ></textarea>
                </div>
                <button className="contact-form__button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;



