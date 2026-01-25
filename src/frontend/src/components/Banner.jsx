import React, { useState } from "react";

import Navbar from "./Navbar";

import './Banner.css'

const Banner = () => {

    const [searchQuery, setsearchQuery] = useState(null);
    const [lastTimeoutID, setLastTimeoutID] = useState(null);

    const handleSearchChange = (query) => {
        setsearchQuery(query);

        console.log(searchQuery);

        if(lastTimeoutID){
            clearTimeout(lastTimeoutID);
        }

        const timeoutID = setTimeout(handleSearchTimeout, 1000);
        setLastTimeoutID(timeoutID);
        
    }


    const handleSearchTimeout = async () => {
        if(searchQuery !== ""){
           console.log("Calling API :)");
        }
    }

    return (
        <div className="Banner">
            <Navbar />
            <text> Elden Ring Wiki </text>
            <input placeholder="Search Wiki" onChange={e => {handleSearchChange(e.target.value)}}/>
        </div>
        
    )
}

export default Banner;