import React from "react";

import Navbar from "./Navbar";

import './Banner.css'

const Banner = ({SearchQuery}) => {


    return (
        <div className="Banner">
            <Navbar />
            <text> Elden Ring Wiki </text>
            <input placeholder="Search Wiki"/>
        </div>
    )
}

export default Banner;