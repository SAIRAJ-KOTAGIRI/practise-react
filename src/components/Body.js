import Restaurant from "./Restaurent"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

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

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        return (
            <h1>
                You are offline, Please check your internet Connection
            </h1>
        )
    }

    return listOfRestaurents.length == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter-section flex items-center">
                <div className="search-section m-4 p-4 border-solid">
                    <input className="border border-solid border-gray-300" type="text" value={searchTxt} onChange={(e) => {
                        setSearchTxt(e.target.value)
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 border-solid rounded-lg" onClick={() => {
                        setFilteredRestaurents(listOfRestaurents.filter((res) => res?.info?.name?.toLowerCase().includes(searchTxt.toLowerCase())))
                    }}>Search</button>
                </div>
                <div className="">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                        setFilteredRestaurents(listOfRestaurents.filter((res)=> res.info.avgRating > 4))
                    }}>Top Rated Restaurent</button>
                </div>
                <div className="px-4">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                        setFilteredRestaurents(listOfRestaurents)
                        setSearchTxt("")
                    }}>Reset</button>
                </div>
            </div>
            
            <div className="restaurant-container flex flex-wrap">
                {
                    filteredRestaurents?.map(restaurent => <Link key={restaurent?.info?.id} to={"/restaurent/"+restaurent?.info?.id}><Restaurant key={restaurent?.info?.id} resObj={restaurent}/></Link>)
                }
            </div>
        </div>
    )
}

export default Body