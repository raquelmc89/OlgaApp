import React from "react";
import Olga from "../images/Olga.jpg";
import { SocialIcon } from "react-social-icons";

const Reviews = ({ title}) => {
  return (
    <div className="reviews">
      <div className="description">
        <div className="title">
          <h1>{title}</h1>
          <div className="aboutOlga">
            <p>this is reviews page</p>
            <p>have a look!</p>
            <div className="diploma">
              <img src="" />
              <img src="" />
              <img src="" />
            </div>
          </div>
        </div>
      <div classNmae="picLogo">
      <img src={Olga} className="mainPicture" />
      <SocialIcon
        className="logo"
        url="https://www.facebook.com/maksymenko.olga"
      />
      </div>
    </div>
    </div>
  );
};

export default Reviews;
