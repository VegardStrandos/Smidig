import React from "react";
import { Constants } from "../../data";
import { Button } from "../../components";
import "./HomePage.scss";
import Image from '../../assets/homePageImage.png' 
import Logo from '../../assets/headerPicture.png' 

export const HomePage = () => {
    const classPrefix = "home-page";

    return(
        <div className={classPrefix}>
            <section className={`${classPrefix}__header-text`}>
            <h2 className={`${classPrefix}__header-title`}>EasyStream</h2> 
           
            <Button 
                link={Constants.paths.planner}
                className={"button__orangotangu"}
            >
                Kom i gang
            </Button>

            <img
            className={`${classPrefix}__big-image`}
            src={Image}
            alt={'Stort bilde'} 
            />

            <img
            className={`${classPrefix}__header-image`}
            src={Logo}
            alt={'Bilde i header med tekst'} 
            />
             </section> 
        </div>
    );
}