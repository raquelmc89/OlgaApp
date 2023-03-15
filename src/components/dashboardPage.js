import React from "react";
import Olga from "../images/Olga.jpg"
import { SocialIcon } from 'react-social-icons'


const AboutMe = () => {
    return (
        <div>
        
        <h1>Title</h1>
        <img src={Olga} alt="OlgaPicture"/>
        <p>everything about me</p>
        <SocialIcon url="https://www.facebook.com/maksymenko.olga"/>
        </div>

    )
}

export default AboutMe;