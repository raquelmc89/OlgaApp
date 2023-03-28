import React from "react";

const Reviews = ({title,picture}) =>{
    return(
        <div>
        <img src={picture}/>
        <h1 className="title">{title}</h1>
        <p>this is reviews page</p>
        </div>
    )
}

export default Reviews;