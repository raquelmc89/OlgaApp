import React from "react";
import "react-dates/initialize";
import PhoneInput from "react-phone-number-input";
import { Form, Input, TextArea, Number, Button } from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Olga from "../images/Olga.jpg";
import "react-phone-number-input/style.css";
import "react-dates/lib/css/_datepicker.css";
import "semantic-ui-css/semantic.min.css";
import whatsapp from "../images/whatsapp.png";
import { SocialIcon } from "react-social-icons";

//import { render } from "@testing-library/react";

const SERVICE_ID = "service_n6ywlvr";
const TEMPLATE_ID = "template_9ei6fjk";
const USER_ID = "v28MlW8QIbeW8Jfum";

export default class ContactMe extends React.Component {
  state = {
    name: "",
    comment: "",
    title: "Contact me",
  };

  handleName = (e) => {
    const name = e.target.value;
    if (!name || name.match(/^([^0-9]*)$/)) {
      this.setState(() => ({ name }));
    }
  };
  handleComment = (e) => {
    const comment = e.target.value;
    if (!comment || comment.match(/^(?=[\S\s]{1,300}$)[\S\s]*/)) {
      this.setState(() => ({ comment }));
    }
  };
  onSbubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

    render() {
    return (
      
      <div className="about">
    
        <div className="description">
         <div className="title">
            <h1>{this.state.title}</h1>
            <br />
            <div className="form">
              <Form onSubmit={this.onSbubmit}>
                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  label="Name"
                  name="user_name"
                  required
                  icon="user circle"
                  iconPosition="left"
                  value={this.state.name}
                  onChange={this.handleName}
                ></Form.Field>
                <Form.Field
                  id="form-input-control-email"
                  control={Input}
                  label="Email"
                  name="user_email"
                  required
                  icon="mail"
                  iconPosition="left"
                ></Form.Field>
                <Form.Field
               
                  id="form-input-control-phone"
                  control={Input}
                  label="Phone"
                  required>
                <PhoneInput
                  name='user_number'
                  required
                  defaultCountry="GB"
                  countries={['GB', 'UA']}
                  value={this.state.phone}
                  onChange={(phone) => this.setState({ phone })}
                ></PhoneInput>
                </Form.Field>
                <Form.TextArea
                  type="text"
                  control={TextArea}
                  name="user_message"
                  label="Message"
                  placeholder="max 300 words"
                  required
                  value={this.state.comment}
                  onChange={this.handleComment}
                ></Form.TextArea>
                <Button><p className='button'>SUBMIT</p></Button>
              </Form>
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
      </div>
    );
  }
}
