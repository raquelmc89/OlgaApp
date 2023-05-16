import React from "react";

import { NavLink } from "react-router-dom";
import { useContext} from "react";
import LocaleContext from "../LocaleContext";

import {Nav, NavDropdown} from 'react-bootstrap'
import i18n from "../i18n";

function Header () {
  const {locale} = useContext(LocaleContext);
   const changeLocale= (l)=>{
   if(locale !== l){
     i18n.changeLanguage(l);
    }
   };
  
  return(
  
    <div className="nav" >
      <div className="header">
      <NavLink className='navLink' to="/">About me</NavLink>
      <NavLink className='navLink' to="/contactMe">Contact me</NavLink>
      <NavLink className='navLink' to="/reviews">Reviews</NavLink>
      <Nav className="me-auto">
      <NavDropdown title="Language" id="basic-nav-dropdown">
        <NavDropdown.Item href="#" onClick={()=>changeLocale('en')}>English</NavDropdown.Item>
        <NavDropdown.Item href="#" onClick={()=> changeLocale('ukr')}>العربية</NavDropdown.Item>
      </NavDropdown>
    </Nav>
      </div>
     
    </div>
  ) 
  
}
export default Header;