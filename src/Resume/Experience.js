import React from "react";

const Experience = () => {
    return (
        <div>
            <h2 className="titleworkElement">
                I am always open to new opportunities and professional challenges.
            </h2>
            <div className="bothRowsElements">
                <div className="firstRow">
                    <div className="workAndPhoto">
                        <img src="/elements/nb.png" alt="Logo of freelance Nicolás Bertinat" />
                        <div className="resumeCards">
                            <h3>UX/UI Designer and<br></br> Front End Developer</h3>
                            <h4>Freelance Professional</h4>
                            <p>March 2023 - Present</p>
                        </div>
                    </div>
                    <div className="workAndPhoto">
                        <a href="https://www.franklincovey.com/about/"><img src="/elements/fc.png" alt="FranklinCovey link" /></a>
                        <div className="resumeCards">
                            <h3>Product Designer</h3>
                            <h4>Franklin Covey</h4>
                            <p>September 2019 - October 2023</p>
                        </div>
                    </div>
                </div>
                <div className="secondRow">
                    <div className="workAndPhoto">
                        <a href="https://www.glendaledesigns.com/"><img src="/elements/gs.png" alt="Glendale Studio link" /></a>
                        <div className="resumeCards">
                            <h3>UX/UI Designer</h3>
                            <h4>Glendale</h4>
                            <p>November 2015 - September 2019</p>
                        </div>
                    </div>
                    <div className="workAndPhoto">
                        <a href="https://www.bdestudio.com.uy/15-anos"><img src="/elements/bd.png" alt="Bd Studio link" /></a>
                        <div className="resumeCards">
                            <h3>Photographer and Audiovisual Editor</h3>
                            <h4>BD Studio</h4>
                            <p>December 2010 - September 2015</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;

