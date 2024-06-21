import React from "react";
import SubMenu from "./SubMenu";
import './PortfolioStyles.css';
import './Responsive__portfolioStyles.css';
import SocialMedia from "./github__behance/gitAndBehance";



const Portfolio = () =>{


    return(

        <div className ="portfolioElements">
            <SubMenu/>
            <SocialMedia/>

        </div>
    )
}

export default Portfolio