import React from "react";

const References = () => {
    return (
        <div>
            <h2 className="titleworkElement">
                If you want to get references from me, I invite you to contact them through LinkedIn:
            </h2>
            <div className="bothRowsElements">

                <div className="professionalRow">
                    <h2>Professional References</h2>

                    <div className="professionalReference">
                        <div className="referenceCards">
                            <h3>Guillermo Garrone</h3>
                            <h4>Owner, FranklinCovey <br/> in South Cone</h4>
                            <a href="https://www.linkedin.com/in/guillermo-garrone-838b005/" target="_blank" rel="noopener noreferrer">
                            <button className="referenceContactButton" >Contact</button>
                            </a>
                        </div>
                        <img className="referenceImage" src="/elements/guillermo.jpeg" alt="Guillermo Garrone" />
                    </div>

                    <div className="professionalReference personalReferenceMargin">
                        <div className="referenceCards">
                            <h3>Pablo Etcheverry</h3>
                            <h4>CBC & Mentor C-Level</h4>
                            <a href="https://www.linkedin.com/in/pablo-etcheverry-coaching/"target="_blank" rel="noopener noreferrer">
                            <button className="referenceContactButton">Contact</button>
                            </a>
                        </div>
                        <img className="referenceImage" src="/elements/pablo.jpeg" alt="Pablo Etcheverry" />
                    </div>
                </div>

                <div className="academicRow">
                    <h2>Academic References</h2>
                    <div className="professionalReference">
                        <div className="referenceCards">
                            <h3>Dinorah Margounato</h3>
                            <h4>Marketing Chair Coordinator <br/> at ORT University</h4>
                            <a href="https://www.linkedin.com/in/dinorahm/" target="_blank" rel="noopener noreferrer">
                            <button className="referenceContactButton">Contact</button>
                            </a>
                        </div>
                        <img className="referenceImage" src="/elements/dinorah.jpeg" alt="Dinorah Margounato" />
                    </div>


                    <div className="professionalReference  personalReferenceMargin">
                        <div className="referenceCards">
                            <h3>Sergio Álvarez</h3>
                            <h4>ORT University Teacher</h4>
                            <a href="https://www.linkedin.com/in/sergio-%C3%A1lvarez-5207361a/" target="_blank" rel="noopener noreferrer">
                            <button className="referenceContactButton">Contact</button>
                            </a>
                        </div>
                        <img className="referenceImage" src="/elements/sergio.jpeg" alt="Sergio Álvarez" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default References;
