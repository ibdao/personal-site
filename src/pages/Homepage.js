import React from "react";
import "./Homepage.css"
import headshot from "../IMG_2108.jpg"

/** Ian's Homepage */

function Homepage(){
    return (
        <div className="Homepage">
            <h1 className="text mb-4">Hi, I'm Ian</h1>
            <img src={ headshot } alt="Ian's headshot"/>
        </div>
    )
}

export default Homepage