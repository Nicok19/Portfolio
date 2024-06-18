import React from "react";
import './Ux.css';
import './Responsive__ux.css';

const UxComponent = () => {
    return (
        <div className="skills">

            <div className="skills__elements">
                <h2 className="skills__title">What i know about UX?</h2>
                <p className="skills__paragraph">Providing the best experience for users is essential for the success of a digital project. I have knowledge of all areas of UX, but I have focused my efforts on two areas. The first is <span className="titleDiferential">Accessibility</span> , creating inclusive products following<span className="titleDiferential"> WCAG</span> guidelines, and the second is <span className="titleDiferential">Research</span>, studying users to understand their insights and create products that meet their needs. With these skills, I can create products that are useful for users and achieve the commercial goals defined by clients.</p>
            </div>

            <div className="rows">
                <div className="rows__elements">
                    <div className="rows__ul">
                        <h3>Methodology's</h3>
                        <ul>
                            <li>Design Thinking</li>
                            <li>Lean UX</li>
                            <li>Design Spring</li>
                            <li>Double Diamond</li>
                        </ul>
                    </div>

                    <div className="rows__ul">
                        <h3>Research</h3>
                        <ul>
                            <li>Interviews</li>
                            <li>Surveys</li>
                            <li>Usability Testing</li>
                            <li>A/B Testing</li>
                            <li>Focus Group</li>
                            <li>Card Sorting</li>
                            <li>Treemaps</li>
                        </ul>
                    </div>

                    <div className="rows__ul">
                        <h3>UX Platforms</h3>
                        <ul>
                            <li>Google Analytics</li>
                            <li>Optimal Workshop</li>
                            <li>Hotjar</li>
                            <li>Miro</li>
                            <li>Google Forms</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UxComponent;
