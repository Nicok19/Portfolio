import React from "react";
import SubMenu from "./SubMenu/SubMenu";
import './PortfolioStyles.css';
import './Responsive__portfolioStyles.css';
import SocialMedia from "./SocialMedia/gitAndBehance";




const Portfolio = () =>{


    return(

        <div className ="portfolioElements">
        
            <SubMenu/>
            <SocialMedia/>
            </div>
    )

}

export default Portfolio