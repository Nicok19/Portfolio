import React from "react";
import Bootcamps from "./Bootcamps";
import "./Education.css";
import "./Responsive__Education.css";


const Education = () => {
    return (
        <div className="education">

            <h3 className="education__title">University Education:</h3>
            <div className="education__row">
                <div className="education__degree">
                    <a href="https://www.ort.edu.uy/"><img src="https://imgur.com/MXleNKN.png"  className="education__image" alt="Ort University link"/></a>
                    <div className="education__cards">
                        <h3>Marketing Analyst</h3>
                        <h4>Ort University</h4>
                        <p>2017 - 2019</p>
                    </div>
                </div>
                <div className="education__degree">
                    <a href="https://www.ort.edu.uy/"><img src="https://imgur.com/MXleNKN.png" className="education__image" alt="Ort University link"/></a>
                    <div className="education__cards">
                        <h3>Graphic Design</h3>
                        <h4>Ort University</h4>
                        <p>2013 - 2015</p>
                    </div>
                </div>
            </div>
            <h3 className='titleBootcamp'>Bootcamps:</h3>
            <Bootcamps/>
        </div>
    );
};

export default Education;
