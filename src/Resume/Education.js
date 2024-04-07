import React from "react";
import Bootcams from "./Bootcams";

const Education = () => {
    return (



        <div className="bothRowsEducationElements">
        <div className="titleElement">
         <h2>
         In this dynamic world, knowledge becomes obsolete quickly, so it is important to never stop learning.
          </h2>

          <h3>University Education:</h3>

          </div>
            <div id="educationRow">
            <div id="education">
                <a href="https://www.ort.edu.uy/"><img src="/elements/ort.png" alt="FranklinCovey link"/></a>
                    <div id="educationCards">
                        <h3>Marketing Analyst</h3>
                        <h4>Ort University</h4>
                        <p>2017 - 2019</p>
                    </div>
                </div>
                <div id="education">
                <a href="https://www.ort.edu.uy/"><img src="/elements/ort.png" alt="FranklinCovey link"/></a>
                    <div id="educationCards">
                        <h3>Graphic Design</h3>
                        <h4>Ort University</h4>
                        <p>2013 - 2015</p>
                    </div>
                </div>
            </div>
            <h3 className='titleBootcamp'>Bootcams:</h3>
            <Bootcams/>
        </div>
    );
};

export default Education;
