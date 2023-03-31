import React from "react";
import moment from "moment"
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import PhoneInput from 'react-phone-number-input'
import { Form, Input, TextArea, Number, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2';
import Olga from "../images/Olga.jpg"
import 'react-phone-number-input/style.css';
import 'react-dates/lib/css/_datepicker.css';
import 'semantic-ui-css/semantic.min.css';

//import { render } from "@testing-library/react";


  const SERVICE_ID ="service_n6ywlvr";
  const TEMPLATE_ID="template_9ei6fjk";
  const USER_ID="v28MlW8QIbeW8Jfum";
  



   export default class ContactMe extends React.Component{
                  state ={
                    name:"",
                    comment:"",
                    format: "DD/MM/yyy",
                    title:'Contact me'
                    
                  }
            
            handleName = (e) =>{
                const name = e.target.value;
                if(!name || name.match(/^([^0-9]*)$/)){
                    this.setState(()=>({name}))
                }
            };
            handleComment = (e)=>{
                const comment = e.target.value;
                if(!comment || comment.match(/^(?=.{0,100}$)([-'\w]+\s)*[-'\w]+$/)){
                    this.setState(()=>({comment}))
                }
            };
              onSbubmit = (e)=>{     
                e.preventDefault();
    
                  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
              .then((result) => {
                console.log(result.text);
                Swal.fire({
                  icon: 'success',
                  title: 'Message Sent Successfully'
                })
              }, (error) => {
                console.log(error.text);
                Swal.fire({
                  icon: 'error',
                  title: 'Ooops, something went wrong',
                  text: error.text,
                })
              });
            e.target.reset()
          };
      render(){
           return(
            
            <div className="about">
            <img src={Olga} className="mainPicture"/>
            <h1 className="title">{this.state.title}</h1>
            <h2 className="'subtitle">Book an appointment</h2>
            <Form onSubmit={this.onSbubmit}>
            <Form.Field
            className="form"
              id="form-input-control-last-name"
              control={Input}
              label='Name'
              name='user_name'
              placeholder='Name'
              required
              icon='user circle'
              iconPosition='left'
              value={this.state.name}
              onChange={this.handleName}
            >
            </Form.Field> 
            <Form.Field
             id="form-input-control-date"
             control={Input}
             label='Date'
             name='user_date'
             >
            <SingleDatePicker
             
             placeholder="pick a day and time"
             date={this.state.date}
             onDateChange={date=> this.setState({date})}
             focused={this.state.focused}
             onFocusChange={({focused})=> this.setState({focused})}
             numberOfMonths={1}
             displayFormat={this.state.format}
            >
            </SingleDatePicker>
            </Form.Field>
            <Form.Field
             id='form-input-control-email'
             control={Input}
             label='Email'
             name='user_email'
             placeholder='Email…'
             required
             icon='mail'
             iconPosition='left'
            >
            </Form.Field>
            <PhoneInput
             id="form-input-control-phone"
             control={Input}
             label='Phone'
             name='user_number'
             placeholder="phone number"
             required
             value={this.state.phone}
             onChange={phone=> this.setState({phone})}
            >
            </PhoneInput>
            <Form.TextArea
             type="text"
             control={TextArea}
             name='user_message'
             label="Message"
             placeholder="max 100 words"
             required
             value={this.state.comment}
             onChange={this.handleComment}
             >
             </Form.TextArea>
             <Button>
             Submit
            </Button>
        </Form>
    </div>
        );
    }
}

