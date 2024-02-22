import React from "react";

const References = () => {
    return (
        <div className="bothRowsElements">

            <div className="professionalRow">
            <h2>Professional References</h2>

                <div id="professionalReference">

                    <div id="referenceCards">
                        <h3>Guillermo Garrone</h3>
                        <h4>Owner, FranklinCovey <br/> in South Cone</h4>
                        <a href="https://www.linkedin.com/in/guillermo-garrone-838b005/"><img src="/elements/linkedinGreen.png" alt="Linkedin of Guillermo Garrone"/></a>
                    </div>
                    <img src="/elements/guillermo.jpeg" alt="Guillermo Garrone" />
                </div>


                <div id="professionalReference">
                    <div id="referenceCards">
                        <h3>Pablo Etcheverry</h3>
                        <h4>CBC & Mentor C-Level</h4>
                        <a href="https://www.linkedin.com/in/pablo-etcheverry-coaching/"><img src="/elements/linkedinGreen.png" alt="Linkedin of Pablo Etcheverry"/></a>
                    </div>
                    <img src="/elements/pablo.jpeg" alt="Pablo Etcheverry" />
                </div>
            </div>


            <div className="academicRow">
            <h2>Academic References</h2>
                <div id="professionalReference">
                    <div id="referenceCards">
                        <h3>Dinorah Margounato</h3>
                        <h4>Marketing Chair Coordinator <br/> at ORT University</h4>
                        <a href="https://www.linkedin.com/in/dinorahm/"><img src="/elements/linkedinGreen.png" alt="Linkedin of Dinorah Margounato"/></a>
                    </div>
                    <img src="/elements/dinorah.jpeg" alt="Dinorah Margounato" />
                </div>
                <div id="professionalReference">
                    <div id="referenceCards">
                        <h3>Sergio Álvarez</h3>
                        <h4>ORT University Teacher</h4>
                        <a href="https://www.linkedin.com/in/sergio-%C3%A1lvarez-5207361a/"><img src="/elements/linkedinGreen.png" alt="Linkedin of Sergio Álvarez"/></a>
                    </div>
                    <img src="/elements/sergio.jpeg" alt="Sergio Álvarez" />
                </div>
            </div>
        </div>
    );
};

export default References;
