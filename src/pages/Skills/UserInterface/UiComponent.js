import React from "react";
import './Ui.css';
import './Responsive__Ui.css';


const UiComponent = () => {
  return (
    <div className="skills">
      <div className="skills__elements">
        <h2 className="skills__title">UI without Paint</h2>
        <p className="skills__paragraph">
        I have worked on various projects creating graphical interfaces for both applications and websites. I have extensive experience with numerous design programs and a deep understanding of <span className="titleDiferential">Design Systems and Methodologies</span>.
        </p>
      </div>

      <div className="designPrograms">
        <div className="imageContainer">
          <img src="https://imgur.com/eKPQcVX.png" alt="Figma" placeholder="Figma" />
          <p>Figma</p>
        </div>
        <div className="imageContainer">
          <img src="https://imgur.com/CjmYA66.png" alt="Firefly" placeholder="Firefly" />
          <p>Firefly</p>
        </div>
        <div className="imageContainer">
          <img src="https://imgur.com/YeHlF6b.png" alt="Illustrator" placeholder="Illustrator" />
          <p>Illustrator</p>
        </div>
        <div className="imageContainer">
          <img src="https://imgur.com/3WcknSk.png" alt="Photoshop" placeholder="Photoshop" />
          <p>Photoshop</p>
        </div>
        <div className="imageContainer">
          <img src="https://i.imgur.com/lc2zW56.png" alt="AfterEffects" placeholder="AfterEfects" />
          <p>After Effects</p>
        </div>
        <div className="imageContainer">
          <img src="https://imgur.com/t7z70DI.png" alt="Premiere Pro" placeholder="Premiere Pro" />
          <p>Premiere Pro</p>
        </div>
      </div>
    </div>
  );
};

export default UiComponent;
