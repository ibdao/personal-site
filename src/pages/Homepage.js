import React from "react";
import "./Homepage.css"
import headshot from "../IMG_2108.jpg"
import {CSSTransition}  from 'react-transition-group';

/** Ian's Homepage */

function Homepage(){
    return (
        <div className="Homepage">
            <h1 className="text mb-4">Hi, I am Ian</h1>
            <img src={ headshot } alt="Ian's headshot"/>
            <h4 className="text mb-4"> A full stack software engineer.</h4>
        </div>
    )
}

export default Homepage