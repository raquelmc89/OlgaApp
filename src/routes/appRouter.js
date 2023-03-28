import React from "react";
import { NavLink } from "react-router-dom";


const Header =() => (
    
    <div className="nav" >
      <div className="header">
      <NavLink className='navLink' to="/">About me</NavLink>
      <NavLink className='navLink' to="/contactMe">Contact me</NavLink>
      <NavLink className='navLink' to="/reviews">Reviews</NavLink>
      </div>
     
    </div>

)
    


export default Header;