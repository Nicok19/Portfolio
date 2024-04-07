import React from "react";

const UiComponent = () => {
  return (
    <div id="elements">
      <div id="titleSkills">
        <h2>UI without Paint</h2>
        <p>
        I have been designing for over 10 years, with a focus on generating designs for websites and mobile applications in the last 7 years. I possess extensive knowledge in design and animation, which allows me to create beautiful mockups.
        </p>
      </div>

      <div className="designPrograms">
        <div id="imageContainer">
          <img src="https://imgur.com/eKPQcVX.png" alt="Figma" placeholder="Figma" />
          <p>Figma</p>
        </div>
        <div id="imageContainer">
          <img src="https://imgur.com/CjmYA66.png" alt="Firefly" placeholder="Firefly" />
          <p>Firefly</p>
        </div>
        <div id="imageContainer">
          <img src="https://imgur.com/YeHlF6b.png" alt="Illustrator" placeholder="Illustrator" />
          <p>Illustrator</p>
        </div>
        <div id="imageContainer">
          <img src="https://imgur.com/3WcknSk.png" alt="Photoshop" placeholder="Photoshop" />
          <p>Photoshop</p>
        </div>
        <div id="imageContainer">
          <img src="https://i.imgur.com/lc2zW56.png" alt="AfterEffects" placeholder="AfterEfects" />
          <p>After Effects</p>
        </div>
        <div id="imageContainer">
          <img src="https://imgur.com/t7z70DI.png" alt="Premiere Pro" placeholder="Premiere Pro" />
          <p>Premiere Pro</p>
        </div>
      </div>
    </div>
  );
};

export default UiComponent;
