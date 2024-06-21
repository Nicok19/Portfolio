import React from "react";
import "./Experience.css";
import "./Responsive__Experience.css";

const Experience = () => {
    return (
        <div className="experience">
        
            <div className="experienceAndPhoto">

            <div className="experience__rows">
                <div className="experience__firstRow">


                    <div className="experience__workAndPhoto">
                        <img className="experience__photo" src="/elements/nbIsotipo.png" alt="Logo of freelance Nicolás Bertinat" />
                        <div className="experience__work">
                            <h3>UX/UI Developer</h3>
                            <h4>Freelance Professional</h4>
                            <p>March 2023 - Present</p>
                        </div>
                    </div>



                    <div className="experience__workAndPhoto">
                        <a href="https://www.franklincovey.com/about/"><img className="experience__photo"   src="/elements/fc.png" alt="FranklinCovey link" /></a>
                        <div className="experience__work">
                            <h3>UX/UI Designer</h3>
                            <h4>Franklin Covey</h4>
                            <p>September 2019 - October 2023</p>
                        </div>
                    </div>
                </div>


                <div className="experience__secondRow">


                    <div className="experience__workAndPhoto">
                        <a href="https://www.glendaledesigns.com/"><img className="experience__photo" src="/elements/gs.png" alt="Glendale Studio link" /></a>
                        <div className="experience__work">
                            <h3>UX/UI Designer</h3>
                            <h4>Glendale</h4>
                            <p>November 2015 - September 2019</p>
                        </div>
                    </div>


                    <div className="experience__workAndPhoto">
                        <a href="https://www.bdestudio.com.uy/15-anos"><img className="experience__photo" src="/elements/bd.png" alt="Bd Studio link" /></a>
                        <div className="experience__work">
                            <h3>Photographer</h3>
                            <h4>BD Studio</h4>
                            <p>December 2010 - September 2015</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="me">
                    <img className="me__photo" src="/elements/contactonb.png" alt="Logo of Nicolás Bertinat" />
                </div>




                </div>
        </div>
    );
};

export default Experience;

