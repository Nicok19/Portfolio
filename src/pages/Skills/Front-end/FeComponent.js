import React from "react";
import './frontEnd.css';
import './Responsive__Front-end.css';

const FrontEndComponent = () => {
    return (
        <div className="skills">
            <div className="skills__elements">
                <h2 className="skills__title">Now, all this into code</h2>
                <p className="skills__paragraph">
                    I have knowledge of various languages and technologies in front-end development. In each of my projects, I place great importance on <span className="titleDiferential">Seo, Accessibility, Component Testing, and Documentation.</span> This way, I can create scalable products.
                </p>
            </div>

            <div className="languages">
                <div className="languages__container">
                    <img className="languages__image" src="https://imgur.com/QtoC3yY.png" alt="GitHub" placeholder="GitHub" />
                    <p className="languages__paragraph" >GitHub</p>
                </div>

                <div className="languages__container">
                    <img className="languages__image"  src="https://imgur.com/dkKNtVA.png" alt="Html" placeholder="Html" />
                    <p className="languages__paragraph" >Html</p>
                </div>
                <div className="languages__container">
                    <img className="languages__image"  src="https://imgur.com/9k2MosW.png" alt="Css" placeholder="Css" />
                    <p className="languages__paragraph" >Css</p>
                </div>
                <div className="languages__container">
                    <img className="languages__image"  src="https://imgur.com/MaItNYx.png" alt="Sass" placeholder="Sass" />
                    <p className="languages__paragraph" >Sass</p>
                </div>
                <div className="languages__container">
                    <img className="languages__image"  src="https://imgur.com/2jOoNxl.png" alt="JavaScript" placeholder="JavaScript" />
                    <p  className="languages__paragraph" >JavaScript</p>
                </div>
                <div className="languages__container">
                    <img className="languages__image"  src="https://imgur.com/MscEXww.png" alt="React.js" placeholder="React.js" />
                    <p className="languages__paragraph" >React.js</p>
                </div>
                <div className="languages__container">
                    <img className="languages__image"  src="https://imgur.com/i3cpt4r.png" alt="Next.js" placeholder="Next.js" />
                    <p className="languages__paragraph" >Next.js</p>
                </div>
                <div className="languages__container">
                    <img className="languages__image"  src="https://imgur.com/GOOMmcY.png" alt="TypeScript" placeholder="TypeScript" />
                    <p className="languages__paragraph" >TypeScript</p>
                </div>
            </div>
        </div>
    );
}

export default FrontEndComponent;
