import React from "react";
import { v4 as uuid4} from "uuid";
import Modal from 'react-modal';
import diploma1 from '../images/diploma1.jpg';




Modal.setAppElement('#root')
 
const AboutMe = ({title}) => {
    //const {v4: uuid4} = require ('uuid')
   // console.log(uuid4()

     let subtitle;
     const [modalIsOpen, setIsOpen] = React.useState(false);
   
     function openModal() {
       setIsOpen(true);
     };
   
     function afterOpenModal() {
       // references are now sync'd and can be accessed.
       subtitle.style.color = '#f00';
     };
   
     function closeModal() {
       setIsOpen(false);
     };
   return(
        <div>
        <h1>{title}</h1>
        <div>
        <img
          src={diploma1} 
          onClick={openModal}
          />Open Modal
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <form>
           <img src={diploma1}/>
          </form>
        </Modal>
        </div>
        </div>
   )
}



 export default AboutMe;