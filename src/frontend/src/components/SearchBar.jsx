import { useState, useEffect, useRef } from "react";
import './Styles/SearchBar.css';


const SearchBar = () => {

    const searchBarRef = useRef(null);

    const [searchQuery, setsearchQuery] = useState(null);
    const [lastTimeoutID, setLastTimeoutID] = useState(null);

    const [searchResult, setSearchResult] = useState([]);
    const API_SECTIONS = ["armors", "incantations", "ashes", "bosses", "classes", "creatures", "items", "locations", "npcs", "shields", "sorceries", "spirits", "talismans", "weapons"]

    const [hoverOn, setHoverOn] = useState("");

    const handleSearchChange = (query) => {
        setsearchQuery(query);

        if (lastTimeoutID) {
            clearTimeout(lastTimeoutID);
        }

        const timeoutID = setTimeout(() => handleSearchTimeout(query), 1000);
        setLastTimeoutID(timeoutID);

    }

    const handleSubmit = async (query) =>{
        if (query == searchQuery && searchResult.length > 0){
            return
        }

        if (lastTimeoutID){
            clearTimeout(lastTimeoutID);
            setLastTimeoutID(null);
        }

        console.log(query);
        try {    
                const promises = API_SECTIONS.map(async (section) => {
                    const API_URL = `https://eldenring.fanapis.com/api/${section}?name=${query}`
                    const response = await fetch(API_URL);
                    const data = await response.json();
                    return { section, data };
                });

                const results = await Promise.allSettled(promises);

                const finalResults = results.filter((result)=>{
                    return result.value.data.count > 0
                })

                setSearchResult(finalResults);

                console.log(searchResult)
            } catch (error){
                console.error(error);
                setSearchResult([]);
            }
    }


    const handleSearchTimeout = async (query) => {
        console.log(query)

        if (query && query.length > 3) {
            try {    
                const promises = API_SECTIONS.map(async (section) => {
                    const API_URL = `https://eldenring.fanapis.com/api/${section}?name=${query}`
                    const response = await fetch(API_URL);
                    const data = await response.json();
                    return { section, data };
                });

                const results = await Promise.allSettled(promises);

                const finalResults = results.filter((result)=>{
                    return result.value.data.count > 0
                })

                setSearchResult(finalResults);
                setHoverOn(Array.from(finalResults, () => false))

                console.log(finalResults);
            } catch (error){
                console.error(error);
                setSearchResult([]);
                setHoverOn([]);
            }
        }
        else{
            setSearchResult([]);
            setHoverOn([]);
        }
    }

    const expandResult = (result) => {
        console.log(result);
        return(
                <div>
                    {
                    result.map((element, index) => {
                        return <div key={index} className="result-item-child">
                            <text>{element.name}</text>
                        </div>
                    })
                }
                </div>
        )
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
                setHoverOn("");
                setSearchResult([]);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return(
        <div className="search-div" ref={searchBarRef}>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(searchQuery); }}>
                <input className="search-input" placeholder="Search Wiki" onChange={e => { handleSearchChange(e.target.value) }} />
            </form>

            <div className="search-results">
                {searchResult.length > 0 ? searchResult.map((result, index) => {
                return <div key={index} className={`result-item ${hoverOn === index ? 'expanded' : ''}`} onClick={() => {hoverOn =="" || hoverOn !== index ? setHoverOn(index): setHoverOn("")}}>
                    <text >{result.value.section}</text>
                    <div className="result-item-children">{
                        hoverOn === index ? expandResult(result.value.data.data) : null
                    }</div>
                </div>
                }):null}
            </div>
        </div>
    )
}

export default SearchBar