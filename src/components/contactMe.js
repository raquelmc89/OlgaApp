import React from "react";
import moment from "moment"
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import 'react-dates/lib/css/_datepicker.css';

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
            format: "dd/mm/yyy"
        }
    };
    onSubmit = (e)=>{
        e.preventDefault();

    };
    handleName = (e) =>{
        const name = e.target.value;
        if(!name || name.match(/^([^0-9]*)$/)){
            this.setState(()=>({name}))
        }
    };
    handleMail = (e) =>{
        const email = e.target.value;
        if (!email || email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)){
            this.setState(()=>({email}))
        }
    };
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

    render(){
           return(
            <div>
            <h2>Book an appointment</h2>
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
            </div>
        );
    }
}
