import React, { useState } from "react";

import Banner from "../components/Banner";
import './Home.css'
import tags from '../WikiTags/Wiki-Sections'

const Home = () =>{

    interface Tag {
        name: String,
        children: Tag[] | null,
        Icon: String | null,
    }

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
                        <img src={tag?.Icon}/>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home