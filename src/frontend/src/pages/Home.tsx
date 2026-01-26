import React, { useState } from "react";

import Banner from "../components/Banner";
import SearchBar from "../components/SearchBar";
import './Home.css'

const Home = () =>{

    return (
        <div className="home-layout">
            <Banner />
            <div className="SearchBar">
                <SearchBar />
            </div>
        </div>
    )
}

export default Home