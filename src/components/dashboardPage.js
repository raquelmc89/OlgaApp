import React from "react";
import { v4 as uuid4 } from "uuid";
import Modal from "react-modal";
import diploma1 from "../images/diploma1.jpg";
import { GrClose } from "react-icons/gr";
import Olga from "../images/Olga.jpg";
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
            <p>
              here goes everything about olga, si manaidhi, ladkd,
              jbfifj,khhbdkjsbdkjbc dfjeojf, idoa.{" "}
            </p>
            <p>Diplomas:</p>
            <div className="diploma">
              <img src={diploma1} onClick={openModal} />
              <img src={diploma1} onClick={openModal} />
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
        <img src={diploma1} />
      </Modal>
    </div>
  );
};

export default AboutMe;
