import React from "react";

const Github = () => {
    return (
        <div>
             <div className="HideForMobile">
            <p className="HideForMobile__paragraph"> Touch one of the pages and enter it.</p>
           </div>
            <div className="portfolio">
                <a href="https://worldjob-git-worldjobmain-nicok19s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img className="portfolio__image" src="https://imgur.com/T6OpBs7.jpg" alt="WorldJob website" />
                </a>
                <a href="https://global-shop-9fei.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img src="https://imgur.com/GNYL5i5.jpg" className="portfolio__image" alt="Global Shop website" />
                </a>
                <a href="https://dig-mark.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img className="portfolio__image" src="https://imgur.com/zrnB9NU.jpg" alt="DigMark website" />
                </a>
                <a href="https://piaf.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img className="portfolio__image" src="https://imgur.com/tkS69du.jpg" alt="Piaf website" />
                </a>
            </div>
        </div>
    );
}

export default Github;
