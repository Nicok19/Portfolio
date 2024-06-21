import React from 'react';
import SubmenuSkills from './SubMenu/subMenu'
import './SkillsStyles.css';
import './Responsive__SkillsStyles.css';


function Skills() {
    return (
        <div className='skills'>
            <SubmenuSkills />
            <div className="myImage">
        <img className="myImage__image" src="https://imgur.com/2rX58Zc.png" alt=" Nicolás Bertinat" /> 
        </div>
        </div>
    );
}

export default Skills;
