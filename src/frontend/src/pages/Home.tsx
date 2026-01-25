import React, { useState } from "react";

import Banner from "../components/Banner";
import './Home.css'
import tags from '../WikiTags/Wiki-Sections'

const Home = () =>{

    return (
        <div className="home-layout">
            <div>
                <Banner />
            </div>
            <div className="home-element">
                <div className="wiki-topics">
                    {tags.map((tag)=>(
                    <div className="wiki-topic">
                        <text>
                            {tag.name}
                        </text>
                        <img src={tag?.Icon} alt="No Image"/>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home