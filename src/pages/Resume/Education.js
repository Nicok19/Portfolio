import React from "react";
import Bootcamps from "./Bootcamps";

const Education = () => {
    return (
        <div className="bothRowsEducationElements">
            <div className="titleElement">
                <h2>
                    In this dynamic world, knowledge becomes obsolete quickly, so it is important to never stop learning.
                </h2>
                <h3>University Education:</h3>
            </div>
            <div className="educationRow">
                <div className="education">
                    <a href="https://www.ort.edu.uy/"><img src="/elements/ort.png" alt="Ort University link"/></a>
                    <div className="educationCards">
                        <h3>Marketing Analyst</h3>
                        <h4>Ort University</h4>
                        <p>2017 - 2019</p>
                    </div>
                </div>
                <div className="education">
                    <a href="https://www.ort.edu.uy/"><img src="/elements/ort.png" alt="Ort University link"/></a>
                    <div className="educationCards">
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
