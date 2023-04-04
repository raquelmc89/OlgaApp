import React from "react";
import { v4 as uuid4 } from "uuid";
import Modal from "react-modal";
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

const AboutMe = ({ title }) => {
  //const {v4: uuid4} = require ('uuid')
  // console.log(uuid4()
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    
    //<GrClose/>;
  }
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
        <img src={diploma1thumbnail} onClick={openModal} />
        <img src={diploma2thumbnail} onClick={openModal} />
        <img src={diploma3thumbnail} onClick={openModal} />
        <img src={diploma4thumbnail} onClick={openModal} />
      </div>
      <Modal
        isOpen={modalIsOpen}
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modal"
      >
        <button onClick={closeModal} className="button">
          <GrClose className="close" />
        </button>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Diploma</h2>
        <img className="diplomaModal" src={diploma1} />
        <img className="diplomaModal" src={diploma2} />
        <img className="diplomaModal" src={diploma3} />
        <img className="diplomaModal" src={diploma4} />
       
      </Modal>
    </div>
  );
};

export default AboutMe;
