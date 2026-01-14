import React, { useState } from "react";

import Banner from "../components/Banner";
import './Home.css'

const Home = () =>{
    const [searchQuery, setSearchQueary] = useState("");


    return (
        <div className="home-layout">
            <Banner SearchQuery={searchQuery}/>
        </div>
    )
}

export default Home