import Restaurant from "./Restaurent"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"

const Body = () => {
    // let listOfRestaurents = []
    let [listOfRestaurents, setListOfRestaurents] = useState([]);
    let [searchTxt, setSearchTxt] = useState("");
    let [filteredRestaurents, setFilteredRestaurents] = useState([])

    useEffect(()=> {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4875418&lng=78.3953462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        setListOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements
?.infoWithStyle?.restaurants
);
        setFilteredRestaurents(json?.data?.cards[4]?.card?.card?.gridElements
            ?.infoWithStyle?.restaurants
            );
    }

    return listOfRestaurents.length == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter-section">
                <div className="search-section">
                    <input type="text" value={searchTxt} onChange={(e) => {
                        setSearchTxt(e.target.value)
                    }}/>
                    <button onClick={() => {
                        setFilteredRestaurents(listOfRestaurents.filter((res) => res?.info?.name?.toLowerCase().includes(searchTxt.toLowerCase())))
                    }}>Search</button>
                </div>
                <div className="filter">
                    <button className="filter-btn" onClick={() => {
                        setFilteredRestaurents(listOfRestaurents.filter((res)=> res.info.avgRating > 4))
                    }}>Top Rated Restaurent</button>
                </div>
                <div className="reset">
                    <button className="reset-btn" onClick={() => {
                        setFilteredRestaurents(listOfRestaurents)
                        setSearchTxt("")
                    }}>Reset</button>
                </div>
            </div>
            
            <div className="restaurant-container">
                {
                    filteredRestaurents?.map(restaurent => <Link key={restaurent?.info?.id} to={"/restaurent/"+restaurent?.info?.id}><Restaurant key={restaurent?.info?.id} resObj={restaurent}/></Link>)
                }
            </div>
        </div>
    )
}

export default Body