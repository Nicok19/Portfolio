import React from "react";

const Behance = () => {
    return (
        <div>
           <div className="HideForMobile">
            <p className="HideForMobile__paragraph"> Tap on one of the projects to view it in detail.</p>
           </div>
            <div className="portfolio">
                <a href="https://www.behance.net/gallery/137845083/Apk-WorldJob/" target="_blank" rel="noopener noreferrer">
                    <img src="https://imgur.com/GYCcR9v.png" className="portfolio__image" alt="Worldjob on Behance" />
                </a>
                <a href="https://www.behance.net/gallery/185894919/Web-Admin-CRM/" target="_blank" rel="noopener noreferrer">
                    <img src="https://imgur.com/wkY6Kc4.png" className="portfolio__image" alt="Admin CRM on Behance" />
                </a>
                <a href="https://www.behance.net/gallery/157076505/Apk-Claro-Video-Redesign" target="_blank" rel="noopener noreferrer">
                    <img src="https://imgur.com/JaeIUeb.png" className="portfolio__image" alt="Claro Video on Behance" />
                </a>
                <a href="https://www.behance.net/gallery/186168477/Web-Adventure-Travel" target="_blank" rel="noopener noreferrer">
                    <img src="https://imgur.com/awhca1v.png" className="portfolio__image" alt="Adventure Travel on Behance" />
                </a>
                <a href="https://www.behance.net/gallery/144315741/Apk-Pet-Packages" target="_blank" rel="noopener noreferrer">
                    <img src="https://imgur.com/sgT8UPk.png" className="portfolio__image" alt="Pet packages on Behance" />
                </a>
                <a href="https://www.behance.net/gallery/185201475/Web-Coffe-Shop" target="_blank" rel="noopener noreferrer">
                    <img src="https://imgur.com/HFaa26k.png" className="portfolio__image" alt="Coffe Shop on Behance" />
                </a>
            </div>
        </div>
    );
}

export default Behance;
