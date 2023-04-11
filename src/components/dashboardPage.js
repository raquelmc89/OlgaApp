import React from "react";
import { v4 as uuid4 } from "uuid";
import Modal from 'react-modal'
import ModalImage from "react-modal-image";
import {Lightbox} from "react-modal-image"
import { SocialIcon } from "react-social-icons";
//photos
import whatsapp from "../images/whatsapp.png";
import Olga from "../images/Olga.jpg";
import diploma1 from "../images/diploma1.jpeg";
import diploma1thumbnail from "../images/diploma1thumbnail.jpeg";
import diploma2 from "../images/diploma2.jpeg";
import diploma2thumbnail from "../images/diploma2thumbnail.jpeg";
import diploma3 from "../images/diploma3.jpeg";
import diploma3thumbnail from "../images/diploma3thumbnail.jpeg";
import diploma4 from "../images/diploma4.jpeg";
import diploma4thumbnail from "../images/diploma4thumbnail.jpeg";
//icons
import { GrClose } from "react-icons/gr";

Modal.setAppElement("#root");

const AboutMe = ({title}) => {
  //const {v4: uuid4} = require ('uuid')
  // console.log(uuid4()
  let subtitle;  
  return (
    <div className="about">
  
      <div className="description">
        <div className="title">
          <h1>{title}</h1>
          <br />
          <div className="aboutOlga">
            <p className="Olga">
              Master of practical psychology, member of the{" "}
              <a href="https://www.npa-ua.org/" target="_blank">
                National Psychocogical Association of Ukraine.{" "}
              </a>
              I work with adults and children from 12 years old according to the
              following requests:
              <br />
              <ul>
                <li>Sock trauma and PTSD.</li>
                <li>Anxiety and depression.</li>
                <li>Couples counselling.</li>
                <li>
                  Emotional support and assistance for the individual in crisis.
                </li>
                <li>Group counselling on request.</li>
              </ul>
              <br />
              Voluntieer og British projects Open Doors Project HealthProm and
              Psychologists of the Word for Ukraine.
            </p>
          </div>
        </div>
        <div className="picLogo">
          <img src={Olga} className="mainPicture" />
          <SocialIcon
            className="logo"
            target="_blank"
            url="https://www.facebook.com/maksymenko.olga"
          />
          <a
            href="https://wa.me/447401492075"
            target="_blank"
            className="whatsapp"
            rel="whatsapp"
          >
            <img src={whatsapp} />
          </a>
        </div>
      </div>
      <p className="diplomas">Diplomas</p>
      <div className="diploma">
      <ModalImage
      className="diplomaImage"
      small={diploma1thumbnail}
      large={diploma1}
      alt="diploma1"
      hideDownload= {true}
      imageBackgroundColor="green"
      />
      <ModalImage
      small={diploma2thumbnail}
      large={diploma2}
      alt="diploma2"
      hideDownload= {true}
      /><ModalImage
      small={diploma3thumbnail}
      large={diploma3}
      alt="diploma3"
      hideDownload= {true}
      /><ModalImage
      small={diploma4thumbnail}
      large={diploma4}
      alt="diploma4"
      hideDownload= {true}
      />
      </div>
      
      
    </div>
  );
};

export default AboutMe;
