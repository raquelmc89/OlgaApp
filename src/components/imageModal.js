import diploma1 from "../images/diploma1.jpeg";
import diploma1thumbnail from "../images/diploma1thumbnail.jpeg";
import diploma2 from "../images/diploma2.jpeg";
import diploma2thumbnail from "../images/diploma2thumbnail.jpeg";
import diploma3 from "../images/diploma3.jpeg";
import diploma3thumbnail from "../images/diploma3thumbnail.jpeg";
import diploma4 from "../images/diploma4.jpeg";
import diploma4thumbnail from "../images/diploma4thumbnail.jpeg";
import { useState } from "react";

const Modal = () =>{
    const imagesArray =[]
    imagesArray.push({diploma1})
    return(
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
        {image1}
        </Modal>
    )
}