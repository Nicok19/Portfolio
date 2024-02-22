import React from "react";

const Experience = () => {
    return (
        <div className="bothRowsElements">
            <div className="firstRow">

                <div id="workAndPhoto">
               <img src="/elements/nb.png" alt="Logo of freelance Nicolás Bertinat"/>

                    <div id="resumeCards">
                        <h3>Product Designer</h3>
                        <h4>Freelance professional</h4>
                        <p>September 2022 - present</p>
                    </div>

                </div>


                <div id="workAndPhoto">
                <a href="https://www.franklincovey.com/about/"><img src="/elements/fc.png" alt="FranklinCovey link"/></a>
                    <div id="resumeCards">
                        <h3>UI Designer</h3>
                        <h4>Franklin Covey</h4>
                        <p>September 2019 - October 2023</p>
                    </div>
                </div>
            </div>

            
            <div className="secondRow">
                <div id="workAndPhoto">
                <a href="https://www.glendaledesigns.com/"><img src="/elements/gs.png" alt="Glendale Studio link"/></a>
                    <div id="resumeCards">
                        <h3>UX/UI Designer</h3>
                        <h4>Glendale</h4>
                        <p>November 2015 - September 2019</p>
                    </div>
                </div>
                <div id="workAndPhoto">
                <a href="https://www.bdestudio.com.uy/15-anos"><img src="/elements/bd.png" alt="Bd Studio link"/></a>
                    <div id="resumeCards">
                        <h3>Photographer and Audiovisual Editor</h3>
                        <h4>BD Studio</h4>
                        <p>December 2010 - September 2015</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
