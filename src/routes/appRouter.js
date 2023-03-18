import React from "react";
import { NavLink } from "react-router-dom";
import Olga from "../images/Olga.jpg"
import { SocialIcon } from 'react-social-icons'



// class Header extends React.Component{
//     render(){
//         console.log(this.props)
//     return(
//         <div>
//    <div className="nav" >
//    <img src={Olga} alt="OlgaPicture" className='mainPicture'/>
//    <SocialIcon url="https://www.facebook.com/maksymenko.olga"/> 
//    <NavLink className='header'to="/">About me</NavLink>    
//    <NavLink className="header"to="/contactMe">Contact me</NavLink>
//    <NavLink className="header"to="/reviews">Reviews</NavLink>
//    </div>
//    </div>
//     )
//     }
// }

const Header =() => (
    
    <div>
    <div className="nav" >
    <img src={Olga} alt="OlgaPicture" className='mainPicture'/>
    <SocialIcon url="https://www.facebook.com/maksymenko.olga"/>
    <NavLink className='header'to="/">About me</NavLink>
    <NavLink className="header"to="/contactMe">Contact me</NavLink>
    <NavLink className="header"to="/reviews">Reviews</NavLink>
    </div>
    </div>
)
    


export default Header;