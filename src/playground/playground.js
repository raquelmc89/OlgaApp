import { Form } from "react-router-dom";

// <SingleDatePicker
//    date={this.state.date}
//    onDateChange={this.onDateChage}
//    focused={this.state.focused}
//    onFocusChange={this.state.onFocusChange}
//    numberOfMonths={1}
//    isOutsideRange={()=>false}>
//     </SingleDatePicker>

    // <Form.Field
    // id="form-input-control-last-name"
    // control={Input}
    // label='Name'
    // name='user_name'
    // placeholdet='Name'
    // icon='user circle'
    // iconPosition='left'
    // ></Form.Field>


     

    import React from "react";
    import moment from "moment"
    import 'react-dates/initialize';
    import {SingleDatePicker} from 'react-dates';
    import PhoneInput from 'react-phone-number-input'
    import { Form, Input, TextArea, Button } from 'semantic-ui-react';
    import emailjs from 'emailjs-com'
    import Swal from 'sweetalert2';
    import 'react-phone-number-input/style.css';
    import 'react-dates/lib/css/_datepicker.css';
    import 'semantic-ui-css/semantic.min.css';
    
    
      const SERVICE_ID ="service_n6ywlvr";
      const TEMPLATE_ID="template_9ei6fjk";
      const USER_ID="v28MlW8QIbeW8Jfum";
      
    
    export default class ContactMe extends React.Component{
        constructor(props){
            super(props);
    
            this.state ={
                name:"",
                comment:"",
                phone: "",
                mail:"",
                date:"",
                calendarFocused:false,
                format: "DD/MM/yyy"
            }
        };
        
        handleName = (e) =>{
            const name = e.target.value;
            if(!name || name.match(/^([^0-9]*)$/)){
                this.setState(()=>({name}))
            }
        };
        // handleMail = (e) =>{
        //     const email = e.target.value;
        //     if (!email || email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)){
        //         this.setState(()=>({email}))
        //     }
        // };
        handleComment = (e)=>{
            const comment = e.target.value;
            if(!comment || comment.match(/^(?=.{0,100}$)([-'\w]+\s)*[-'\w]+$/)){
                this.setState(()=>({comment}))
            }
        };
        onDateChange = (date) => {
            if (date) {
                this.setState(()=>({date}))
            }
        };
        onFocusChange = ({ focused }) => {
            this.setState(() => ({ calendarFocused: focused }));
          };
        handleOnSubmit = (e) => {
            e.preventDefault();
            if(!this.state.name || !this.state.comment){
                this.setState(()=>({error:'Please provide name and message'}));
            }else {
                this.setState(()=>({error:""}));
                this.props.onSubmit({
                    name:this.state.name,
                    comment: this.state.comment,
                    date:this.state.date
    
                })
            }
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
             <div>
             <h2>Book an appointment</h2>
             <Form onSubmit={this.handleOnSubmit}>
             <Form.Field
              id="form-input-control-last-name"
              control={Input}
              label='Name'
              name='user_name'
              placeholder='Name'
              icon='user circle'
              iconPosition='left'
              //onChange = {this.handleName}
             ></Form.Field> 
             <SingleDatePicker
              date={this.state.date}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              displayFormat= {this.state.format}
              isOutsideRange={()=>false}>
            </SingleDatePicker>
             <label>Phone number</label>
             <PhoneInput
              type="tel"
              placeholder="+44"
              value={this.state.phone}
              onChange={phone => this.setState({phone})}>
             </PhoneInput>
             <Form.Field
             id='form-input-control-email'
             control={Input}
             label='Email'
             name='user_email'
             placeholder='Email…'
             required
             icon='mail'
             iconPosition='left'
              />
             <Form.TextArea
              type="text"
              label="Message"
              placeholder="max 100 words"
              value={this.state.comment}
              onChange={this.handleComment}>
              </Form.TextArea>
              <Button 
                type="submit">
                Submit
              </Button>
         </Form>
     </div>
         );
     }
 }
 




    <form onSubmit={this.onSubmit}>
            
    <label> Name</label>
    <input 
     type="text"
     placeholder="Enter your full name"
     autoFocus
     value={this.state.name}
     onChange={this.handleName}>
    </input>
    <label>Phone number</label>
    <PhoneInput
     type="tel"
     placeholder="+44"
     value={this.state.phone}
     onChange={phone => this.setState({phone})}>
    </PhoneInput>
    <label>Email adress</label>
    <input
     type="email"
     placeholder=""
     value={this.state.mail}
     onChange={this.handleMail}></input>
    <label>Commemts</label>
    <textarea
     type="text"
     placeholder="max 100 words"
     value={this.state.comment}
     onChange={this.handleComment}>
    </textarea>
    <SingleDatePicker
     date={this.state.date}
     onDateChange={this.onDateChange}
     focused={this.state.calendarFocused}
     onFocusChange={this.onFocusChange}
     numberOfMonths={1}
     displayFormat= {this.state.format}
     isOutsideRange={()=>false}>
    </SingleDatePicker>

    <button onClick={this.onSubmit}>Submit</button>
    </form>
   
