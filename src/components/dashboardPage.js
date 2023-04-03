import React from "react";
import { v4 as uuid4 } from "uuid";
import Modal from "react-modal";
//photos
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
import { SocialIcon } from "react-social-icons";

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
          <div className="aboutOlga">
            <p className="">
              here goes everything about olga
            </p>
            <p>Diplomas:</p>
            <div className="diploma">
              <img src={diploma1thumbnail} onClick={openModal} />
              <img src={diploma2thumbnail} onClick={openModal} />
              <img src={diploma3thumbnail} onClick={openModal} />
              <img src={diploma4thumbnail} onClick={openModal} />
            </div>
          </div>
        </div>
        <div className="picLogo">
        <img src={Olga} className="mainPicture" />
        <SocialIcon
          className="logo"
          url="https://www.facebook.com/maksymenko.olga"
        />
      </div>
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
      </Modal>
    </div>
  );
};

export default AboutMe;
