import React from "react";
import { v4 as uuid4} from "uuid";



 
const AboutMe = ({title}) => {
    const {v4: uuid4} = require ('uuid')
    console.log(uuid4())
   return(
        <div>
        <h1>{title}</h1>
        <p>everything about me</p>
        </div>
   )
}



 export default AboutMe;