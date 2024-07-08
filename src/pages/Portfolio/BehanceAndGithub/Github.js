import React from "react";

const Github = () => {
    return (
        <div>
            <div className="portfolio">
                <a href="https://worldjob-git-worldjobmain-nicok19s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img className="portfolio__image" src="/elements/worldJob.jpg" alt="WorldJob website" />
                </a>
                <a href="https://global-shop-9fei.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img src="/elements/globalShop.jpg" className="portfolio__image" alt="Global Shop website" />
                </a>
                <a href="https://dig-mark.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img className="portfolio__image" src="/elements/digmark.jpg" alt="DigMark website" />
                </a>
                <a href="https://piaf.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img className="portfolio__image" src="/elements/piaf.jpg" alt="Piaf website" />
                </a>
            </div>
        </div>
    );
}

export default Github;
